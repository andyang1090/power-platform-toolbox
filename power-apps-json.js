'use strict';
const fxName = name => "'" + name.replace(/'/g, "''") + "'";
function generatePowerFx(data, options = {}) {
    const sep = options.separator === ';' ? ';' : ',';
    function infer(samples, depth, path) {
        if (depth > 30) throw new Error('嵌套超过 30 层，请简化 JSON。');
        const values = samples.filter(v => v !== null && v !== undefined);
        const types = new Set(values.map(v => Array.isArray(v) ? 'array' : typeof v));
        if (types.size !== 1) throw new Error(path + (types.size ? ' 存在不同类型，请统一样本类型。' : ' 只有 null 或空数组，无法推断类型，请补充非空样本。'));
        const type = [...types][0];
        if (type === 'string') return 'Text';
        if (type === 'number') return 'Number';
        if (type === 'boolean') return 'Boolean';
        if (type === 'array') return '[\n' + '    '.repeat(depth + 1) + infer(values.flat(), depth + 1, path + '[]') + '\n' + '    '.repeat(depth) + ']';
        const keys = [...new Set(values.flatMap(v => Object.keys(v)))];
        if (!keys.length) throw new Error(path + ' 是空对象，请补充字段样本。');
        return '{\n' + keys.map(key => '    '.repeat(depth + 1) + fxName(key) + ': ' + infer(values.map(v => Object.hasOwn(v, key) ? v[key] : undefined), depth + 1, path + '.' + key)).join(sep + '\n') + '\n' + '    '.repeat(depth) + '}';
    }
    const source = options.inline ? '"' + JSON.stringify(data).replace(/"/g, '""') + '"' : (options.source || '').trim();
    if (!source) throw new Error('请输入 JSON 来源公式。');
    const root = options.root || [];
    let selected = data;
    for (const key of root) {
        if (!selected || Array.isArray(selected) || !Object.hasOwn(selected, key)) throw new Error('根路径不存在。');
        selected = selected[key];
    }
    const schema = infer([data], 2, '$');
    let formula = `ParseJSON(\n    ${source}${sep}\n    Type(\n        ${schema}\n    )\n)` + root.map(key => '.' + fxName(key)).join('');
    const mode = options.mode || 'auto';
    if (mode !== 'expression') {
        const target = (options.target || '').trim();
        if (!target) throw new Error('请输入结果变量 / 集合名。');
        const collection = mode === 'collection' || (mode === 'auto' && Array.isArray(selected));
        if (collection && (selected === null || typeof selected !== 'object')) throw new Error('基础值请使用 Set 保存。');
        formula = `${collection ? 'ClearCollect' : 'Set'}(\n    ${fxName(target)}${sep}\n    ${formula.replace(/\n/g, '\n    ')}\n)`;
    }
    return { formula, warnings: [], isTable: Array.isArray(selected) };
}
if (typeof module !== 'undefined') module.exports = { generatePowerFx };
if (typeof document !== 'undefined') {
    const el = id => document.getElementById(id);
    function updateRoots(data) {
        const old = el('root').value;
        el('root').replaceChildren(new Option('整段 JSON', '[]'));
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
            el('kind').textContent = output.isTable ? '结果是表' : '结果是记录 / 值';
            el('status').className = 'status';
            el('status').textContent = '已识别结构，使用 Type 一次成型。' + (data && !Array.isArray(data) && Array.isArray(data.value) && el('root').value === '[]' ? ' 如需提取列表，请将根路径改为 value。' : '');
        } catch (error) {
            el('result').value = '';
            el('kind').textContent = '';
            el('status').className = 'status error';
            el('status').textContent = '无法生成：' + error.message;
        }
    }
    el('generate').onclick = () => generate(true);
    el('json').addEventListener('input', () => generate(true));
    ['source','inline','mode','target','separator','root'].forEach(id => el(id).addEventListener('input', () => generate()));
    el('format').onclick = () => { try { el('json').value = JSON.stringify(JSON.parse(el('json').value), null, 2); } catch (_) {} generate(true); };
    el('example').onclick = () => { if (!el('source').value.trim()) el('source').value = 'varJson'; if (!el('target').value.trim()) el('target').value = 'colResult'; el('json').value = JSON.stringify(toolboxExamples.record, null, 2); generate(true); };
    el('copy').onclick = async () => {
        if (!el('result').value) { el('status').textContent = '请先生成有效公式。'; return; }
        try { await navigator.clipboard.writeText(el('result').value); el('status').textContent = '已复制公式。'; }
        catch (_) { el('result').focus(); el('result').select(); el('status').textContent = '已选中公式，请按 Ctrl+C 复制。'; }
    };

}
