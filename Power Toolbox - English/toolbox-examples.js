'use strict';
window.toolboxExamples = {
    record: {
        ID: 1,
        Title: 'Marketing demo equipment loan',
        LoanNumber: 'BR2026001',
        BorrowerEmail: 'zhangsan@example.com',
        Department: 'Marketing',
        EquipmentName: 'Portable projector',
        EquipmentCategory: 'Projector',
        Quantity: 1
    },
    csv() {
        const fields = Object.keys(this.record).map(key => ({
            display: key === 'Title' ? 'Title' : key,
            internal: /^[A-Za-z][A-Za-z0-9_]*$/.test(key) ? key :
                Array.from(key, char => '_x' + char.charCodeAt(0).toString(16).padStart(4, '0') + '_').join('')
        }));
        return 'ListSchema=' + fields.map(field =>
            `<Field Name="${field.internal}" DisplayName="${field.display}" />`
        ).join('') + '\n' + fields.map(field => field.display).join(',');
    }
};
