'use strict';
(() => {
    const byId = id => document.getElementById(id);
    const apps = !!byId('json');
    const filter = !!byId('jsonInput');
    const select = !!byId('jsonSourceInput');
    const panel = document.querySelector('.card, .panel');
    if (!panel) return;
    const actions = document.createElement('div');
    actions.className = 'toolbox-actions';
    const clear = document.createElement('button');
    clear.type = 'button';
    clear.className = 'toolbox-action';
    clear.dataset.i18n = 'common.clear';
    clear.textContent = t('common.clear');
    clear.onclick = () => {
        document.querySelectorAll('textarea, input[type="text"], input[type="file"]').forEach(input => { input.value = ''; });
        document.querySelectorAll('.error-msg').forEach(node => { clearMsg(node); });
        ['rulesContainer', 'mapContainer'].forEach(id => { if (byId(id)) byId(id).replaceChildren(); });
        if (typeof parsedKeys !== 'undefined') parsedKeys = [];
        if (typeof rawFieldList !== 'undefined') rawFieldList = [];
        if (typeof fieldMapping !== 'undefined') fieldMapping = {};
        const logic = document.querySelector('input[name="logicGroup"][value="and"]');
        if (logic) logic.checked = true;
        if (byId('fileNameDisplay')) resetLabeled(byId('fileNameDisplay'));
        if (byId('jsonSourceStatus')) clearMsg(byId('jsonSourceStatus'));
        if (byId('autocompleteList')) byId('autocompleteList').style.display = 'none';
        if (apps) {
            byId('source').value = '';
            byId('target').value = '';
            const entire = new Option(t('json.entire'), '[]');
            entire.setAttribute('data-i18n', 'json.entire');
            byId('root').replaceChildren(entire);
            byId('inline').checked = false;
            byId('mode').value = 'auto';
            byId('separator').value = ',';
            clearMsg(byId('status'));
            byId('status').className = 'status';
            clearMsg(byId('kind'));
        }
    };
    actions.append(clear);
    if (filter || (!apps && !select)) {
        const sample = document.createElement('button');
        sample.type = 'button';
        sample.className = 'toolbox-action';
        sample.dataset.i18n = 'common.loadExample';
        sample.textContent = t('common.loadExample');
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
