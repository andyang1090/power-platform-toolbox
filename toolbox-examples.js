'use strict';
window.toolboxExamples = {
    record: {
        ID: 1,
        Title: '市场部客户演示借用',
        借用编号: 'BR2026001',
        借用人邮箱: 'zhangsan@example.com',
        部门: '市场部',
        设备名称: '便携投影仪',
        设备类别: '投影仪',
        借用数量: 1
    },
    csv() {
        const fields = Object.keys(this.record).map(key => ({
            display: key === 'Title' ? '标题' : key,
            internal: /^[A-Za-z][A-Za-z0-9_]*$/.test(key) ? key :
                Array.from(key, char => '_x' + char.charCodeAt(0).toString(16).padStart(4, '0') + '_').join('')
        }));
        return 'ListSchema=' + fields.map(field =>
            `<Field Name="${field.internal}" DisplayName="${field.display}" />`
        ).join('') + '\n' + fields.map(field => field.display).join(',');
    }
};
