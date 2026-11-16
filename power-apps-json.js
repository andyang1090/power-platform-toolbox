'use strict';
const fxName = name => "'" + name.replace(/'/g, "''") + "'";
function i18nError(key, vars) {
    const error = new Error(t(key, vars));
    error.i18nKey = key;
    error.i18nVars = vars;
    return error;
}
function generatePowerFx(data, options = {}) {
    const sep = options.separator === ';' ? ';' : ',';
    function infer(samples, depth, path) {
        if (depth > 30) throw i18nError('json.errDepth');
        const values = samples.filter(v => v !== null && v !== undefined);
        const types = new Set(values.map(v => Array.isArray(v) ? 'array' : typeof v));
        if (types.size !== 1) throw i18nError(types.size ? 'json.errTypes' : 'json.errNull', { path });
        const type = [...types][0];
        if (type === 'string') return 'Text';
        if (type === 'number') return 'Number';
        if (type === 'boolean') return 'Boolean';
        if (type === 'array') return '[\n' + '    '.repeat(depth + 1) + infer(values.flat(), depth + 1, path + '[]') + '\n' + '    '.repeat(depth) + ']';
        const keys = [...new Set(values.flatMap(v => Object.keys(v)))];
        if (!keys.length) throw i18nError('json.errEmptyObj', { path });
        return '{\n' + keys.map(key => '    '.repeat(depth + 1) + fxName(key) + ': ' + infer(values.map(v => Object.hasOwn(v, key) ? v[key] : undefined), depth + 1, path + '.' + key)).join(sep + '\n') + '\n' + '    '.repeat(depth) + '}';
    }
    const source = options.inline ? '"' + JSON.stringify(data).replace(/"/g, '""') + '"' : (options.source || '').trim();
    if (!source) throw i18nError('json.errSource');
    const root = options.root || [];
    let selected = data;
    for (const key of root) {
        if (!selected || Array.isArray(selected) || !Object.hasOwn(selected, key)) throw i18nError('json.errRoot');
        selected = selected[key];
    }
    const schema = infer([data], 2, '$');
    let formula = `ParseJSON(\n    ${source}${sep}\n    Type(\n        ${schema}\n    )\n)` + root.map(key => '.' + fxName(key)).join('');
    const mode = options.mode || 'auto';
    if (mode !== 'expression') {
        const target = (options.target || '').trim();
        if (!target) throw i18nError('json.errTarget');
        const collection = mode === 'collection' || (mode === 'auto' && Array.isArray(selected));
        if (collection && (selected === null || typeof selected !== 'object')) throw i18nError('json.errScalar');
        formula = `${collection ? 'ClearCollect' : 'Set'}(\n    ${fxName(target)}${sep}\n    ${formula.replace(/\n/g, '\n    ')}\n)`;
    }
    return { formula, warnings: [], isTable: Array.isArray(selected) };
}
if (typeof module !== 'undefined') module.exports = { generatePowerFx };
if (typeof document !== 'undefined') {
    const el = id => document.getElementById(id);
    function entireOption() {
        const option = new Option(t('json.entire'), '[]');
        option.setAttribute('data-i18n', 'json.entire');
        return option;
    }
    function updateRoots(data) {
        const old = el('root').value;
        el('root').replaceChildren(entireOption());
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
            setMsg(el('kind'), output.isTable ? 'json.kindTable' : 'json.kindValue');
            el('status').className = 'status';
            const hint = data && !Array.isArray(data) && Array.isArray(data.value) && el('root').value === '[]';
            setMsg(el('status'), hint ? 'json.statusOkHint' : 'json.statusOk');
        } catch (error) {
            el('result').value = '';
            clearMsg(el('kind'));
            el('status').className = 'status error';
            const message = error.i18nKey ? { i18n: error.i18nKey, vars: error.i18nVars } : (error.message || '');
            setMsg(el('status'), 'json.statusFail', { message });
        }
    }
    el('generate').onclick = () => generate(true);
    el('json').addEventListener('input', () => generate(true));
    ['source','inline','mode','target','separator','root'].forEach(id => el(id).addEventListener('input', () => generate()));
    el('format').onclick = () => { try { el('json').value = JSON.stringify(JSON.parse(el('json').value), null, 2); } catch (_) {} generate(true); };
    el('example').onclick = () => { if (!el('source').value.trim()) el('source').value = 'varJson'; if (!el('target').value.trim()) el('target').value = 'colResult'; el('json').value = JSON.stringify(toolboxExamples.record, null, 2); generate(true); };
    el('copy').onclick = async () => {
        if (!el('result').value) { setMsg(el('status'), 'json.copyEmpty'); return; }
        try { await navigator.clipboard.writeText(el('result').value); setMsg(el('status'), 'json.copied'); }
        catch (_) { el('result').focus(); el('result').select(); setMsg(el('status'), 'json.copyFallback'); }
    };
    document.addEventListener('toolbox-lang', () => {
        if (el('json').value.trim()) generate(false);
    });
}
