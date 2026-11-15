'use strict';
(() => {
    const byId = id => document.getElementById(id);
    const apps = !!byId('json');
    const filter = !!byId('jsonInput');
    const select = !!byId('jsonSourceInput');
    const panel = document.querySelector('.card, .panel');
    const actions = document.createElement('div');
    actions.className = 'toolbox-actions';
    const clear = document.createElement('button');
    clear.type = 'button';
    clear.className = 'toolbox-action';
    clear.textContent = '清空输入';
    clear.onclick = () => {
        document.querySelectorAll('textarea, input[type="text"], input[type="file"]').forEach(input => { input.value = ''; });
        document.querySelectorAll('.error-msg').forEach(node => { node.textContent = ''; });
        ['rulesContainer', 'mapContainer'].forEach(id => { if (byId(id)) byId(id).replaceChildren(); });
        if (typeof parsedKeys !== 'undefined') parsedKeys = [];
        if (typeof rawFieldList !== 'undefined') rawFieldList = [];
        if (typeof fieldMapping !== 'undefined') fieldMapping = {};
        const logic = document.querySelector('input[name="logicGroup"][value="and"]');
        if (logic) logic.checked = true;
        if (byId('fileNameDisplay')) byId('fileNameDisplay').textContent = '点击或拖拽上传 CSV 文件 (如 action list.csv)';
        if (byId('jsonSourceStatus')) { byId('jsonSourceStatus').textContent = ''; }
        if (byId('autocompleteList')) byId('autocompleteList').style.display = 'none';
        if (apps) {
            byId('source').value = '';
            byId('target').value = '';
            byId('root').replaceChildren(new Option('整段 JSON', '[]'));
            byId('inline').checked = false;
            byId('mode').value = 'auto';
            byId('separator').value = ',';
            byId('status').textContent = '';
            byId('status').className = 'status';
            byId('kind').textContent = '';
        }
    };
    actions.append(clear);
    if (filter || (!apps && !select)) {
        const sample = document.createElement('button');
        sample.type = 'button';
        sample.className = 'toolbox-action';
        sample.textContent = '填入示例';
        sample.onclick = () => {
            if (filter) loadFilterExample();
            else { parseCSVHeader(toolboxExamples.csv()); if (!document.querySelector('#rulesContainer .rule-row')) addRuleRow(); }
        };
        actions.append(sample);
    }
    if (byId('sourceClearSlot')) {
        byId('sourceClearSlot').append(actions);
    } else {
        const toolbar = document.createElement('div');
        toolbar.className = 'input-top-toolbar';
        if (apps) {
            const existing = panel.querySelector('.actions');
            const status = byId('status');
            // Status remains below the JSON input; only controls move to the toolbar.
            existing.after(status);
            toolbar.append(existing);
        }
        toolbar.append(actions);
        const heading = panel.querySelector('.card-title, h2');
        if (heading) heading.after(toolbar);
        else panel.prepend(toolbar);
    }
})();
