'use strict';
const toolboxExamplePacks = {
    zh: {
        titleDisplay: '标题',
        record: {
            ID: 1,
            Title: '市场部客户演示借用',
            借用编号: 'BR2026001',
            借用人邮箱: 'zhangsan@example.com',
            部门: '市场部',
            设备名称: '便携投影仪',
            设备类别: '投影仪',
            借用数量: 1
        }
    },
    en: {
        titleDisplay: 'Title',
        record: {
            ID: 1,
            Title: 'Marketing demo equipment loan',
            LoanNumber: 'BR2026001',
            BorrowerEmail: 'zhangsan@example.com',
            Department: 'Marketing',
            EquipmentName: 'Portable projector',
            EquipmentCategory: 'Projector',
            Quantity: 1
        }
    }
};

function currentToolboxExamples() {
    return toolboxExamplePacks[window.ToolboxLang === 'en' ? 'en' : 'zh'];
}

window.toolboxExamples = {
    get record() {
        return currentToolboxExamples().record;
    },
    csv() {
        const pack = currentToolboxExamples();
        const fields = Object.keys(pack.record).map(key => ({
            display: key === 'Title' ? pack.titleDisplay : key,
            internal: /^[A-Za-z][A-Za-z0-9_]*$/.test(key) ? key :
                Array.from(key, char => '_x' + char.charCodeAt(0).toString(16).padStart(4, '0') + '_').join('')
        }));
        return 'ListSchema=' + fields.map(field =>
            `<Field Name="${field.internal}" DisplayName="${field.display}" />`
        ).join('') + '\n' + fields.map(field => field.display).join(',');
    }
};
