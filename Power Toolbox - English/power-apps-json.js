'use strict';
const fxName = name => "'" + name.replace(/'/g, "''") + "'";
function generatePowerFx(data, options = {}) {
    const sep = options.separator === ';' ? ';' : ',';
    function infer(samples, depth, path) {
        if (depth > 30) throw new Error('JSON exceeds 30 nesting levels. Simplify the sample.');
        const values = samples.filter(v => v !== null && v !== undefined);
        const types = new Set(values.map(v => Array.isArray(v) ? 'array' : typeof v));
        if (types.size !== 1) throw new Error(path + (types.size ? ' contains conflicting types. Use consistent sample types.' : ' contains only nulls or empty arrays. Provide a non-empty sample.'));
        const type = [...types][0];
        if (type === 'string') return 'Text';
        if (type === 'number') return 'Number';
        if (type === 'boolean') return 'Boolean';
        if (type === 'array') return '[\n' + '    '.repeat(depth + 1) + infer(values.flat(), depth + 1, path + '[]') + '\n' + '    '.repeat(depth) + ']';
        const keys = [...new Set(values.flatMap(v => Object.keys(v)))];
        if (!keys.length) throw new Error(path + ' is an empty object. Provide a sample with fields.');
        return '{\n' + keys.map(key => '    '.repeat(depth + 1) + fxName(key) + ': ' + infer(values.map(v => Object.hasOwn(v, key) ? v[key] : undefined), depth + 1, path + '.' + key)).join(sep + '\n') + '\n' + '    '.repeat(depth) + '}';
    }
    const source = options.inline ? '"' + JSON.stringify(data).replace(/"/g, '""') + '"' : (options.source || '').trim();
    if (!source) throw new Error('Enter a JSON source formula.');
    const root = options.root || [];
    let selected = data;
    for (const key of root) {
        if (!selected || Array.isArray(selected) || !Object.hasOwn(selected, key)) throw new Error('The root path does not exist.');
        selected = selected[key];
    }
    const schema = infer([data], 2, '$');
    let formula = `ParseJSON(\n    ${source}${sep}\n    Type(\n        ${schema}\n    )\n)` + root.map(key => '.' + fxName(key)).join('');
    const mode = options.mode || 'auto';
    if (mode !== 'expression') {
        const target = (options.target || '').trim();
        if (!target) throw new Error('Enter a result variable or collection name.');
        const collection = mode === 'collection' || (mode === 'auto' && Array.isArray(selected));
        if (collection && (selected === null || typeof selected !== 'object')) throw new Error('Use Set to store a scalar value.');
        formula = `${collection ? 'ClearCollect' : 'Set'}(\n    ${fxName(target)}${sep}\n    ${formula.replace(/\n/g, '\n    ')}\n)`;
    }
    return { formula, warnings: [], isTable: Array.isArray(selected) };
}
if (typeof module !== 'undefined') module.exports = { generatePowerFx };
if (typeof document !== 'undefined') {
    const el = id => document.getElementById(id);
    function updateRoots(data) {
        const old = el('root').value;
        el('root').replaceChildren(new Option('Entire JSON', '[]'));
        function visit(value, path, depth) {
            if (!value || typeof value !== 'object' || Array.isArray(value) || depth > 15) return;
            for (const key of Object.keys(value)) {
                const next = [...path, key];
                el('root').add(new Option(next.join(' → '), JSON.stringify(next)));
                visit(value[key], next, depth + 1);
            }
        }
        visit(data, [], 0);
        if ([...el('root').options].some(o => o.value === old)) el('root').value = old;
    }
    function generate(refresh = false) {
        try {
            const data = JSON.parse(el('json').value);
            if (refresh) updateRoots(data);
            const output = generatePowerFx(data, {source:el('source').value, inline:el('inline').checked, mode:el('mode').value, target:el('target').value, separator:el('separator').value, root:JSON.parse(el('root').value)});
            el('result').value = output.formula;
            el('kind').textContent = output.isTable ? 'Result: Table' : 'Result: Record / Value';
            el('status').className = 'status';
            el('status').textContent = 'Inferred the structure and generated a typed formula.' + (data && !Array.isArray(data) && Array.isArray(data.value) && el('root').value === '[]' ? ' To extract the array, set the root path to value.' : '');
        } catch (error) {
            el('result').value = '';
            el('kind').textContent = '';
            el('status').className = 'status error';
            el('status').textContent = 'Could not generate the formula: ' + error.message;
        }
    }
    el('generate').onclick = () => generate(true);
    el('json').addEventListener('input', () => generate(true));
    ['source','inline','mode','target','separator','root'].forEach(id => el(id).addEventListener('input', () => generate()));
    el('format').onclick = () => { try { el('json').value = JSON.stringify(JSON.parse(el('json').value), null, 2); } catch (_) {} generate(true); };
    el('example').onclick = () => { if (!el('source').value.trim()) el('source').value = 'varJson'; if (!el('target').value.trim()) el('target').value = 'colResult'; el('json').value = JSON.stringify(toolboxExamples.record, null, 2); generate(true); };
    el('copy').onclick = async () => {
        if (!el('result').value) { el('status').textContent = 'Generate a valid formula first.'; return; }
        try { await navigator.clipboard.writeText(el('result').value); el('status').textContent = 'Formula copied.'; }
        catch (_) { el('result').focus(); el('result').select(); el('status').textContent = 'Formula selected. Press Ctrl+C to copy.'; }
    };

}
