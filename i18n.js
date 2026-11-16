'use strict';
(function () {
    const STORAGE_KEY = 'power-toolbox-lang';

    const dict = {
        zh: {
            'common.clear': '清空输入',
            'common.loadExample': '填入示例',
            'common.dropCsv': '点击或拖拽上传 CSV 文件 (如 action list.csv)',
            'common.selectedFile': '已选择文件: {name}',
            'common.readFail': '读取文件失败',
            'common.csvEmpty': 'CSV 文件内容为空',
            'common.copied': '已成功复制到剪贴板！',
            'common.andAll': 'AND (全部满足)',
            'common.orAny': 'OR (满足任意)',
            'common.langLabel': '语言',
            'home.subtitle': '公式生成、自动化表达式与列表架构工具',
            'home.download': '下载完整项目',
            'home.open': '打开工具',
            'home.openArrow': '打开工具 →',
            'home.card1.title': '筛选数组表达式生成器',
            'home.card1.desc': '面向 [筛选数组 Filter Array] 动作的高级模式，提供 JSON 结构字段提取、嵌套表达式构建、智能代码自动补全及格式化调整。',
            'home.card2.title': 'OData 筛选公式生成器',
            'home.card2.desc': '支持解析 CSV 第一行 Schema XML 架构，自动映射字段名称并一键生成 SharePoint / Dataverse [获取项] 操作中的 OData $filter 查询参数。',
            'home.card3.title': '选择操作 (Select Map) 生成器',
            'home.card3.desc': '自动根据 CSV 的 Schema 将字段名映射为包含 OData_ 前缀的表达项，快速生成可直接粘贴至 [选择 Select] 操作的 JSON 表达结构。',
            'home.card4.title': 'JSON 转 Power Fx 公式生成器',
            'home.card4.desc': '粘贴 JSON，自动识别字段与类型，生成 ParseJSON 转换公式。支持嵌套对象、数组和集合输出。',
            'home.card5.title': 'List CSV 架构生成器',
            'home.card5.desc': '配置列名、内部名和字段类型，导出带列架构的 CSV，用于新建 Microsoft Lists 或 SharePoint 列表。',
            'filter.title': '筛选数组表达式生成器',
            'filter.subtitle': '用于便捷构建“筛选数组 (Filter Array)”高级模式下的比较逻辑表达式',
            'filter.step1': '1. 数据样例 (JSON)',
            'filter.jsonPh': '粘贴示例 JSON 数据，例如：{"ID":1,"Title":"市场部客户演示借用","借用数量":1}',
            'filter.jsonError': 'JSON 解析出错，请检查格式',
            'filter.step2': '2. 构建筛选条件',
            'filter.add': '添加条件',
            'filter.step3': '3. 生成与手动编辑表达式',
            'filter.step3hint': '提示：输入 @ 或字母可唤出常用表达式补全',
            'filter.formulaPh': '可以在此处手动微调公式...输入 @ 或字母体验智能补全',
            'filter.toggleLines': '切换单行/多行',
            'filter.copy': '复制结果',
            'filter.valPh': '对比值 (如 null, utcNow())...',
            'filter.swap': '对调左右位置（将字段移至右侧/左侧）',
            'filter.del': '删除条件',
            'filter.tf.none': '无格式化',
            'filter.tf.string': '转文本 (string)',
            'filter.tf.toLower': '转小写 (toLower)',
            'filter.tf.toUpper': '转大写 (toUpper)',
            'filter.tf.trim': '清空格 (trim)',
            'filter.tf.dateOnly': '格式化日期 (yyyy-MM-dd)',
            'filter.tf.int': '转整数 (int)',
            'filter.tf.float': '转浮点数 (float)',
            'filter.tf.null': '转为空值 (null)',
            'filter.op.equals': '等于 (equals)',
            'filter.op.notEquals': '不等于 (not equals)',
            'filter.op.contains': '包含 (contains)',
            'filter.op.notContains': '不包含 (not contains)',
            'filter.op.greater': '大于 (greater)',
            'filter.op.greaterOrEquals': '大于等于 (greaterOrEquals)',
            'filter.op.less': '小于 (less)',
            'filter.op.lessOrEquals': '小于等于 (lessOrEquals)',
            'filter.op.startsWith': '以...开头 (startsWith)',
            'filter.op.endsWith': '以...结尾 (endsWith)',
            'filter.type.string': '文本',
            'filter.type.number': '数字',
            'filter.type.boolean': '布尔',
            'filter.snip.null': '空值函数',
            'filter.snip.variables': '获取流程变量',
            'filter.snip.variablesValue': "variables('变量名')",
            'filter.snip.outputs': '获取上游步骤输出',
            'filter.snip.outputsValue': "outputs('步骤名')",
            'filter.snip.body': '获取步骤返回 Body',
            'filter.snip.bodyValue': "body('步骤名')",
            'filter.snip.items': '当前循环项',
            'filter.snip.string': '转换为文本',
            'filter.snip.int': '转换为整数',
            'filter.snip.float': '转换为浮点数',
            'filter.snip.toLower': '转为小写',
            'filter.snip.toUpper': '转为大写',
            'filter.snip.trim': '去除两端空格',
            'filter.snip.utcNow': '获取当前 UTC 时间',
            'filter.snip.formatDateTime': '日期时间格式化',
            'filter.snip.addDays': '日期加减运算',
            'filter.snip.if': '条件三目运算',
            'filter.snip.coalesce': '获取第一个非空值',
            'filter.snip.empty': '判断是否为空',
            'filter.snip.length': '获取文本/数组长度',
            'odata.title': 'Power Automate OData 筛选公式生成器',
            'odata.subtitle': '支持解析 CSV 第一行 Schema XML，自动提取字段名称映射并生成 SharePoint / Dataverse [获取项] 的 OData $filter 查询。中文内部名及 _xHHHH_ 编码名会自动加上 OData_ 前缀。',
            'odata.step1': '1. 上传 CSV 文件解析列映射',
            'odata.mapLabel': '字段与 OData 内部名称映射结果 (JSON):',
            'odata.mapPh': '上传 CSV 后将在此自动生成映射关系的 JSON 结构...',
            'odata.step2': '2. 构建 OData 筛选条件',
            'odata.add': '添加筛选条件',
            'odata.step3': '3. 生成 OData Filter 表达式',
            'odata.step3hint': '用于粘贴至 Power Automate 的 [Filter Query / 筛选查询] 字段',
            'odata.formulaPh': '此处将自动生成构建好的 OData $filter 查询表达式...',
            'odata.copy': '复制结果',
            'odata.titleOption': '标题 (Title)',
            'odata.valPh': '对比值...',
            'odata.type.string': '文本 (带单引号)',
            'odata.type.number': '数字/布尔 (无引号)',
            'odata.del': '删除条件',
            'odata.op.eq': '等于 (eq)',
            'odata.op.ne': '不等于 (ne)',
            'odata.op.gt': '大于 (gt)',
            'odata.op.ge': '大于等于 (ge)',
            'odata.op.lt': '小于 (lt)',
            'odata.op.le': '小于等于 (le)',
            'odata.op.substringof': '包含 (substringof - SP)',
            'odata.op.contains': '包含 (contains - OData v4)',
            'odata.op.startswith': '以...开头 (startswith)',
            'select.title': 'Power Automate 选择操作 (Select Map) 生成器',
            'select.subtitle': '上传 CSV 或粘贴 JSON，自动构建 [选择/Select] 操作所需的映射配置。JSON 使用原始字段名，CSV 按原有规则补充 OData_ 前缀。',
            'select.step1': '1. 上传 CSV 或输入 JSON 解析字段',
            'select.sourceAria': '选择输入方式',
            'select.tabCsv': '上传 CSV',
            'select.tabJson': '输入 JSON',
            'select.parse': '解析 JSON 并生成映射',
            'select.example': '填入示例',
            'select.jsonLabel': '粘贴 JSON（单条对象、对象数组、value / body.value 数组）',
            'select.jsonPh': '{"ID":1,"Title":"市场部客户演示借用","借用数量":1}',
            'select.jsonHint': '读取顶层字段，嵌套对象 / 数组整体保留；解析成功后替换下方映射。',
            'select.mapLabel': '字段与实际引用名称映射结果 (JSON):',
            'select.mapPh': '上传 CSV 后，在此显示字段映射结果...',
            'select.step2': '2. 配置选择操作 (Select Map) 键值对',
            'select.clearAll': '清空全部',
            'select.restore': '恢复自动配置',
            'select.add': '添加映射规则',
            'select.step3': '3. 生成的 Map 配置 JSON',
            'select.step3hint': '切换到 PA「选择」操作的高级文本视图模式后粘贴',
            'select.outPh': '上传 CSV、解析 JSON 或配置规则后，将在此自动生成 Map JSON...',
            'select.copy': '复制 JSON',
            'select.keyPh': '目标键名 (如: 文具名)',
            'select.valAria': '字段表达式，可手动修改',
            'select.valPh': '选择 JSON 字段或输入表达式',
            'select.pickerAria': '选择现有字段',
            'select.pickerTitle': '选择 JSON / CSV 中的字段',
            'select.pickerEmpty': '选择字段',
            'select.del': '删除映射',
            'select.source.single': '单条对象',
            'select.source.value': 'value 数组',
            'select.source.bodyValue': 'body.value 数组',
            'select.source.array': '对象数组',
            'select.errEmpty': '数组为空，请提供至少一条对象样本。',
            'select.errShape': '请输入对象或对象数组，数组元素不能是基础值、null 或数组。',
            'select.errNoFields': '没有可解析的字段，请提供包含字段的对象。',
            'select.parsed': '已解析 {source}：{count} 条样本，{fields} 个字段。Select 的 From 请使用对应对象数组；字段名按 JSON 原样引用。',
            'select.parseFailed': '解析失败：{message} 当前映射未更改。',
            'json.title': 'Power Apps JSON 转对象',
            'json.subtitle': '把 Power Automate 返回的 JSON 转成带 Type 的 ParseJSON 公式，直接生成类型化记录或表。',
            'json.step1': '1. 粘贴 Automate 返回的 JSON',
            'json.jsonAria': 'JSON 示例',
            'json.jsonPh': '{"ID":1,"Title":"市场部客户演示借用","借用数量":1}',
            'json.source': 'JSON 来源公式',
            'json.sourcePh': 'varJson 或 Flow.Run().result',
            'json.target': '结果变量 / 集合名',
            'json.root': '根路径',
            'json.entire': '整段 JSON',
            'json.generate': '生成公式',
            'json.example': '填入示例',
            'json.format': '格式化 JSON',
            'json.explainStrong': 'Type 一次成型：',
            'json.explain': '自动识别 JSON 的字段与嵌套结构，使用 ParseJSON(JSON 来源, Type(...)) 转换。数组默认保存为集合，记录默认用 Set 保存；根路径可选择 value 等返回字段。',
            'json.more': '更多选项',
            'json.mode': '输出方式',
            'json.modeAuto': '自动：表用 ClearCollect，记录用 Set',
            'json.modeExpr': '仅 ParseJSON 表达式',
            'json.modeSet': 'Set 保存变量',
            'json.modeCol': 'ClearCollect 保存集合',
            'json.sep': '区域分隔符',
            'json.comma': '逗号 ,',
            'json.semi': '分号 ;',
            'json.inline': '将示例 JSON 直接嵌入公式',
            'json.step2': '2. Power Fx 公式',
            'json.badge': '推荐 · Type 一次成型',
            'json.copy': '复制公式',
            'json.resultAria': '生成的 Power Fx 公式',
            'json.note1': '根据全部数组元素推断类型；日期字符串保留为 Text。只有 null、空数组或类型冲突时，请补充明确的样本再生成。选择根路径时，先按完整结构转换，再取出对应字段。',
            'json.note2': 'Set / ClearCollect 用于 OnSelect 等行为属性；表表达式可用于 Items。数据仅在本地处理。公式依赖当前 Power Apps 环境支持 Type 与 ParseJSON 类型参数。',
            'json.ms': 'Microsoft 语法参考',
            'json.kindTable': '结果是表',
            'json.kindValue': '结果是记录 / 值',
            'json.statusOk': '已识别结构，使用 Type 一次成型。',
            'json.statusOkHint': '已识别结构，使用 Type 一次成型。 如需提取列表，请将根路径改为 value。',
            'json.statusFail': '无法生成：{message}',
            'json.copyEmpty': '请先生成有效公式。',
            'json.copied': '已复制公式。',
            'json.copyFallback': '已选中公式，请按 Ctrl+C 复制。',
            'json.errDepth': '嵌套超过 30 层，请简化 JSON。',
            'json.errTypes': '{path} 存在不同类型，请统一样本类型。',
            'json.errNull': '{path} 只有 null 或空数组，无法推断类型，请补充非空样本。',
            'json.errEmptyObj': '{path} 是空对象，请补充字段样本。',
            'json.errSource': '请输入 JSON 来源公式。',
            'json.errRoot': '根路径不存在。',
            'json.errTarget': '请输入结果变量 / 集合名。',
            'json.errScalar': '基础值请使用 Set 保存。',
            'csv.title': 'Microsoft Lists CSV 架构生成器 · Power Toolbox',
            'csv.h1': 'CSV 架构生成器',
            'csv.subtitle': '定义列名、内部名与字段类型，生成可用于新建列表的带架构 CSV。',
            'csv.localBadge': '本地运行 · 无示例数据',
            'csv.settingsTitle': '列表与列配置',
            'csv.load': '载入配置',
            'csv.save': '保存配置',
            'csv.reset': '重新开始',
            'csv.fileLabel': '导出文件名',
            'csv.exportLabel': '导出内容',
            'csv.exportValue': 'ListSchema + 列标题（0 条数据）',
            'csv.exportAria': '导出内容',
            'csv.note': '内部名默认跟随列名，手动修改后不再跟随。建议用英文内部名，方便 Power Apps / Flow 引用。系统自带的 Title 列会保留，可修改显示名称。',
            'csv.add': '＋ 添加列',
            'csv.resultTitle': '生成结果',
            'csv.fieldSummary': '{n} 个字段',
            'csv.rowSummary': '{n} 条数据',
            'csv.summaryMeta': '含内部名与字段类型',
            'csv.tabCsv': 'CSV 文件',
            'csv.tabSchema': '字段架构',
            'csv.outputAria': '生成代码',
            'csv.valid': '字段检查通过',
            'csv.copy': '复制 CSV',
            'csv.download': '下载带架构 CSV',
            'csv.importSummary': '如何导入？',
            'csv.import1': '在 Microsoft Lists / SharePoint 中选择“新建列表 → 从 CSV”，上传下载的文件。首行是 ListSchema，请不要使用 Excel 重新另存。',
            'csv.import2': '此文件只包含列架构和标题，不含数据行。最终导入结果以你的租户为准；完成后可在列设置中核对内部名。不用于修改已有列表的内部名。',
            'csv.import3': '中文、空格等字符会编码为 SharePoint 内部名，实际结果显示在输入框下方；超过 32 个字符时请改用较短英文名。查阅、人员等依赖站点的字段请在建表后添加。',
            'csv.systemBadge': '系统列',
            'csv.columnBadge': '列 {n}',
            'csv.moveUp': '↑ 上移',
            'csv.moveUpAria': '上移第{n}列',
            'csv.moveDown': '↓ 下移',
            'csv.moveDownAria': '下移第{n}列',
            'csv.delete': '删除',
            'csv.fixedInternal': '内部名固定为 Title',
            'csv.nameLabel': '列名（显示名称）',
            'csv.namePh': '例如：客户名称',
            'csv.internalLabel': '内部名',
            'csv.syncTitle': '恢复跟随列名',
            'csv.following': '跟随列名',
            'csv.restoreSync': '恢复同步',
            'csv.internalPh': '例如：CustomerName',
            'csv.typeLabel': '字段类型',
            'csv.required': '必填',
            'csv.choicesLabel': '选项（每行一个，不允许重复）',
            'csv.choicesPh': '待处理\n处理中\n已完成',
            'csv.decimals': '小数位数',
            'csv.automatic': '自动',
            'csv.currency': '货币',
            'csv.cny': '人民币 CNY',
            'csv.usd': '美元 USD',
            'csv.eur': '欧元 EUR',
            'csv.gbp': '英镑 GBP',
            'csv.defaultYes': '默认值为“是”',
            'csv.dateOnly': '仅日期（取消勾选则包含时间）',
            'csv.count': '{custom} 个自定义列 + 1 个系统列',
            'csv.encodedPrefix': '实际内部名：',
            'csv.labelSystem': '系统列',
            'csv.labelColumn': '第 {n} 列',
            'csv.errName': '{label}：请填写列名。',
            'csv.errDupName': '{label}：列名重复。',
            'csv.errInternal': '{label}：请填写内部名。',
            'csv.errLen': '{label}：实际内部名超过 32 个字符，请缩短或改用英文。',
            'csv.errStart': '{label}：内部名请以字母或下划线开头。',
            'csv.errDupInternal': '{label}：内部名重复。',
            'csv.errReserved': '{label}：内部名被 SharePoint 系统占用。',
            'csv.errControl': '{label}：名称不能包含换行或控制字符。',
            'csv.errChoice': '{label}：至少填写一个选项。',
            'csv.errDupChoice': '{label}：选项不能重复。',
            'csv.errBadChoice': '{label}：选项过长或含无效控制字符。',
            'csv.errFile': '请填写导出文件名。',
            'csv.toastDownload': '已下载带架构 CSV，不含数据行',
            'csv.toastCopy': '已复制完整 CSV',
            'csv.toastCopyFallback': '请按 Ctrl+C 复制所选 CSV',
            'csv.toastSave': '配置已保存，下次可以载入继续编辑',
            'csv.errTooBig': '配置文件过大',
            'csv.errBadConfig': '不是本工具保存的有效配置',
            'csv.errIncomplete': '字段配置不完整',
            'csv.toastLoaded': '配置已载入',
            'csv.toastLoadFail': '载入失败：{message}',
            'csv.confirmReset': '清空当前配置？需要保留时请先保存配置。',
            'csv.defaultFile': '我的列表',
            'csv.systemName': '标题',
            'csv.configSuffix': '.配置.json',
            'csv.type.Text': '单行文本',
            'csv.type.Note': '多行文本',
            'csv.type.Choice': '单项选择',
            'csv.type.MultiChoice': '多项选择',
            'csv.type.Number': '数字',
            'csv.type.Currency': '货币',
            'csv.type.Boolean': '是 / 否',
            'csv.type.DateTime': '日期与时间',
            'csv.type.URL': '超链接'
        },
        en: {
            'common.clear': 'Clear Input',
            'common.loadExample': 'Load Example',
            'common.dropCsv': 'Click or drop a CSV file here (e.g., action list.csv)',
            'common.selectedFile': 'Selected file: {name}',
            'common.readFail': 'Could not read the file',
            'common.csvEmpty': 'The CSV file is empty',
            'common.copied': 'Copied to clipboard',
            'common.andAll': 'AND (Match all)',
            'common.orAny': 'OR (Match any)',
            'common.langLabel': 'Language',
            'home.subtitle': 'Formula generators, automation expressions, and list schema tools',
            'home.download': 'Download full project',
            'home.open': 'Open Tool',
            'home.openArrow': 'Open Tool →',
            'home.card1.title': 'Filter Array Expression Generator',
            'home.card1.desc': 'Extract JSON fields and build, autocomplete, and format expressions for the Filter Array action in advanced mode.',
            'home.card2.title': 'OData Filter Generator',
            'home.card2.desc': 'Read field mappings from the CSV schema and build OData filter queries for SharePoint or Dataverse.',
            'home.card3.title': 'Select Map Generator',
            'home.card3.desc': 'Build a JSON map for the Select action from CSV or JSON, with OData_ prefixes for encoded CSV fields.',
            'home.card4.title': 'JSON to Power Fx Formula Generator',
            'home.card4.desc': 'Infer field types from JSON and generate a ParseJSON formula for records, arrays, and collections.',
            'home.card5.title': 'List CSV Schema Generator',
            'home.card5.desc': 'Set column names, internal names, and types, then export a schema CSV for a new Microsoft Lists or SharePoint list.',
            'filter.title': 'Filter Array Expression Generator',
            'filter.subtitle': 'Build comparison expressions for the Filter Array action in advanced mode.',
            'filter.step1': '1. Sample Data (JSON)',
            'filter.jsonPh': 'Paste sample JSON, for example: {"ID":1,"Title":"Marketing demo equipment loan","Quantity":1}',
            'filter.jsonError': 'Could not parse JSON. Check the format.',
            'filter.step2': '2. Build Filter Conditions',
            'filter.add': 'Add Condition',
            'filter.step3': '3. Generate and Edit Expression',
            'filter.step3hint': 'Type @ or a letter to see expression suggestions',
            'filter.formulaPh': 'Edit the expression here. Type @ or a letter for suggestions.',
            'filter.toggleLines': 'Toggle Single / Multiline',
            'filter.copy': 'Copy Result',
            'filter.valPh': 'Comparison value (e.g., null, utcNow())...',
            'filter.swap': 'Swap the field and comparison value',
            'filter.del': 'Delete condition',
            'filter.tf.none': 'No formatting',
            'filter.tf.string': 'Convert to text (string)',
            'filter.tf.toLower': 'Lowercase (toLower)',
            'filter.tf.toUpper': 'Uppercase (toUpper)',
            'filter.tf.trim': 'Trim whitespace (trim)',
            'filter.tf.dateOnly': 'Format date (yyyy-MM-dd)',
            'filter.tf.int': 'Convert to integer (int)',
            'filter.tf.float': 'Convert to decimal (float)',
            'filter.tf.null': 'Set to null (null)',
            'filter.op.equals': 'Equals (equals)',
            'filter.op.notEquals': 'Does not equal (not equals)',
            'filter.op.contains': 'Contains (contains)',
            'filter.op.notContains': 'Does not contain (not contains)',
            'filter.op.greater': 'Greater than (greater)',
            'filter.op.greaterOrEquals': 'Greater than or equal to (greaterOrEquals)',
            'filter.op.less': 'Less than (less)',
            'filter.op.lessOrEquals': 'Less than or equal to (lessOrEquals)',
            'filter.op.startsWith': 'Starts with (startsWith)',
            'filter.op.endsWith': 'Ends with (endsWith)',
            'filter.type.string': 'Text',
            'filter.type.number': 'Number',
            'filter.type.boolean': 'Boolean',
            'filter.snip.null': 'Null value',
            'filter.snip.variables': 'Read a flow variable',
            'filter.snip.variablesValue': "variables('VariableName')",
            'filter.snip.outputs': 'Read a previous step output',
            'filter.snip.outputsValue': "outputs('StepName')",
            'filter.snip.body': 'Read a step response body',
            'filter.snip.bodyValue': "body('StepName')",
            'filter.snip.items': 'Current loop item',
            'filter.snip.string': 'Convert to text',
            'filter.snip.int': 'Convert to integer',
            'filter.snip.float': 'Convert to decimal',
            'filter.snip.toLower': 'Convert to lowercase',
            'filter.snip.toUpper': 'Convert to uppercase',
            'filter.snip.trim': 'Trim surrounding whitespace',
            'filter.snip.utcNow': 'Get the current UTC time',
            'filter.snip.formatDateTime': 'Format date and time',
            'filter.snip.addDays': 'Add or subtract days',
            'filter.snip.if': 'Choose a value based on a condition',
            'filter.snip.coalesce': 'Get the first non-null value',
            'filter.snip.empty': 'Check whether the value is empty',
            'filter.snip.length': 'Get text or array length',
            'odata.title': 'Power Automate OData Filter Generator',
            'odata.subtitle': 'Read field mappings from the CSV schema and build an OData filter query for SharePoint or Dataverse. Encoded field names receive the OData_ prefix.',
            'odata.step1': '1. Upload CSV to Map Columns',
            'odata.mapLabel': 'Field-to-OData Name Mapping (JSON):',
            'odata.mapPh': 'Upload a CSV to see its field mapping here...',
            'odata.step2': '2. Build OData Filter Conditions',
            'odata.add': 'Add Filter Condition',
            'odata.step3': '3. Generated OData Filter Expression',
            'odata.step3hint': 'Paste into the Filter Query field in Power Automate',
            'odata.formulaPh': 'The OData filter query will appear here...',
            'odata.copy': 'Copy Result',
            'odata.titleOption': 'Title (Title)',
            'odata.valPh': 'Comparison value...',
            'odata.type.string': 'Text (single quotes)',
            'odata.type.number': 'Number / Boolean (unquoted)',
            'odata.del': 'Delete condition',
            'odata.op.eq': 'Equals (eq)',
            'odata.op.ne': 'Does not equal (ne)',
            'odata.op.gt': 'Greater than (gt)',
            'odata.op.ge': 'Greater than or equal to (ge)',
            'odata.op.lt': 'Less than (lt)',
            'odata.op.le': 'Less than or equal to (le)',
            'odata.op.substringof': 'Contains (substringof - SP)',
            'odata.op.contains': 'Contains (contains - OData v4)',
            'odata.op.startswith': 'Starts with (startswith)',
            'select.title': 'Power Automate Select Map Generator',
            'select.subtitle': 'Upload CSV or paste JSON to build a Select action map. JSON field names are preserved and encoded CSV names receive the OData_ prefix.',
            'select.step1': '1. Load Fields from CSV or JSON',
            'select.sourceAria': 'Choose input source',
            'select.tabCsv': 'Upload CSV',
            'select.tabJson': 'Enter JSON',
            'select.parse': 'Parse JSON and Build Map',
            'select.example': 'Load Example',
            'select.jsonLabel': 'Paste JSON (an object, an array of objects, or a value / body.value array)',
            'select.jsonPh': '{"ID":1,"Title":"Marketing demo equipment loan","Quantity":1}',
            'select.jsonHint': 'Parse top-level fields and keep nested objects and arrays intact. Successful parsing replaces the map below.',
            'select.mapLabel': 'Field-to-Reference Name Mapping (JSON):',
            'select.mapPh': 'Upload a CSV to see its field mapping here...',
            'select.step2': '2. Configure Select Map Entries',
            'select.clearAll': 'Clear All',
            'select.restore': 'Restore Auto Map',
            'select.add': 'Add Map Entry',
            'select.step3': '3. Generated Map JSON',
            'select.step3hint': 'Paste into the Select action in text mode',
            'select.outPh': 'Upload CSV, parse JSON, or add entries to generate the map here...',
            'select.copy': 'Copy JSON',
            'select.keyPh': 'Output key (e.g., Equipment)',
            'select.valAria': 'Editable field expression',
            'select.valPh': 'Select a field or enter an expression',
            'select.pickerAria': 'Select an existing field',
            'select.pickerTitle': 'Select a JSON or CSV field',
            'select.pickerEmpty': 'Select Field',
            'select.del': 'Delete map entry',
            'select.source.single': 'single object',
            'select.source.value': 'value array',
            'select.source.bodyValue': 'body.value array',
            'select.source.array': 'object array',
            'select.errEmpty': 'Provide an array with at least one sample object.',
            'select.errShape': 'Enter an object or an array containing only objects.',
            'select.errNoFields': 'No fields found. Enter an object with at least one field.',
            'select.parsed': "Parsed {source}: {count} sample record(s), {fields} field(s). Use the corresponding object array in Select's From input. JSON field names are preserved.",
            'select.parseFailed': 'Parsing failed: {message} The current map is unchanged.',
            'json.title': 'Power Apps JSON to Typed Data',
            'json.subtitle': 'Generate a typed ParseJSON formula from Power Automate output to create a record or table.',
            'json.step1': '1. Paste Power Automate JSON',
            'json.jsonAria': 'Sample JSON',
            'json.jsonPh': '{"ID":1,"Title":"Marketing demo equipment loan","Quantity":1}',
            'json.source': 'JSON Source Formula',
            'json.sourcePh': 'varJson or Flow.Run().result',
            'json.target': 'Result Variable / Collection Name',
            'json.root': 'Root Path',
            'json.entire': 'Entire JSON',
            'json.generate': 'Generate Formula',
            'json.example': 'Load Example',
            'json.format': 'Format JSON',
            'json.explainStrong': 'Typed conversion: ',
            'json.explain': 'Infer fields and nested structures with ParseJSON(source, Type(...)). By default, arrays become collections and records are saved with Set. Use the root path to select a returned field such as value.',
            'json.more': 'More Options',
            'json.mode': 'Output Mode',
            'json.modeAuto': 'Auto: ClearCollect for tables, Set for records',
            'json.modeExpr': 'ParseJSON expression only',
            'json.modeSet': 'Set a variable',
            'json.modeCol': 'ClearCollect a collection',
            'json.sep': 'Locale Separator',
            'json.comma': 'Comma ,',
            'json.semi': 'Semicolon ;',
            'json.inline': 'Embed the sample JSON in the formula',
            'json.step2': '2. Power Fx Formula',
            'json.badge': 'Recommended · Typed conversion',
            'json.copy': 'Copy Formula',
            'json.resultAria': 'Generated Power Fx Formula',
            'json.note1': 'Types are inferred from all array elements. Date strings remain Text. Provide a clearer sample if the data contains only nulls, empty arrays, or conflicting types. The formula converts the full structure before extracting the selected root path.',
            'json.note2': 'Use Set or ClearCollect in behavior properties such as OnSelect. Table expressions can be used in Items. Data is processed locally. The formula requires support for Type and typed ParseJSON in your Power Apps environment.',
            'json.ms': 'Microsoft syntax reference',
            'json.kindTable': 'Result: Table',
            'json.kindValue': 'Result: Record / Value',
            'json.statusOk': 'Inferred the structure and generated a typed formula.',
            'json.statusOkHint': 'Inferred the structure and generated a typed formula. To extract the array, set the root path to value.',
            'json.statusFail': 'Could not generate the formula: {message}',
            'json.copyEmpty': 'Generate a valid formula first.',
            'json.copied': 'Formula copied.',
            'json.copyFallback': 'Formula selected. Press Ctrl+C to copy.',
            'json.errDepth': 'JSON exceeds 30 nesting levels. Simplify the sample.',
            'json.errTypes': '{path} contains conflicting types. Use consistent sample types.',
            'json.errNull': '{path} contains only nulls or empty arrays. Provide a non-empty sample.',
            'json.errEmptyObj': '{path} is an empty object. Provide a sample with fields.',
            'json.errSource': 'Enter a JSON source formula.',
            'json.errRoot': 'The root path does not exist.',
            'json.errTarget': 'Enter a result variable or collection name.',
            'json.errScalar': 'Use Set to store a scalar value.',
            'csv.title': 'Microsoft Lists CSV Schema Generator · Power Toolbox',
            'csv.h1': 'CSV Schema Generator',
            'csv.subtitle': 'Define column names, internal names, and field types to generate a schema CSV for a new list.',
            'csv.localBadge': 'Runs locally · No sample data',
            'csv.settingsTitle': 'List and Column Settings',
            'csv.load': 'Load Configuration',
            'csv.save': 'Save Configuration',
            'csv.reset': 'Start Over',
            'csv.fileLabel': 'Export File Name',
            'csv.exportLabel': 'Export Contents',
            'csv.exportValue': 'ListSchema + column headers (0 data rows)',
            'csv.exportAria': 'Export Contents',
            'csv.note': 'Internal names follow display names until you edit them. Short English internal names are easier to reference in Power Apps and Power Automate. The built-in Title column stays in the schema and its display name can be edited.',
            'csv.add': '＋ Add Column',
            'csv.resultTitle': 'Generated Output',
            'csv.fieldSummary': '{n} fields',
            'csv.rowSummary': '{n} data rows',
            'csv.summaryMeta': 'Includes internal names and field types',
            'csv.tabCsv': 'CSV File',
            'csv.tabSchema': 'Field Schema',
            'csv.outputAria': 'Generated Code',
            'csv.valid': 'All fields are valid',
            'csv.copy': 'Copy CSV',
            'csv.download': 'Download Schema CSV',
            'csv.importSummary': 'How do I import it?',
            'csv.import1': 'In Microsoft Lists or SharePoint, choose New list → From CSV and upload the downloaded file. Keep the ListSchema line by avoiding resaving the CSV in Excel.',
            'csv.import2': 'This file contains the schema and column headers. Import behavior can vary by tenant. Check internal names in column settings after import. Use the file to create a new list.',
            'csv.import3': 'SharePoint encodes spaces and other special characters in internal names. The resulting name appears below the input. Use a shorter name if it exceeds 32 characters. Add site-dependent fields such as Lookup and Person after creating the list.',
            'csv.systemBadge': 'System column',
            'csv.columnBadge': 'Column {n}',
            'csv.moveUp': '↑ Move up',
            'csv.moveUpAria': 'Move column {n} up',
            'csv.moveDown': '↓ Move down',
            'csv.moveDownAria': 'Move column {n} down',
            'csv.delete': 'Delete',
            'csv.fixedInternal': 'Internal name is fixed as Title',
            'csv.nameLabel': 'Column Name (Display Name)',
            'csv.namePh': 'e.g., Customer Name',
            'csv.internalLabel': 'Internal Name',
            'csv.syncTitle': 'Follow the display name again',
            'csv.following': 'Following display name',
            'csv.restoreSync': 'Restore sync',
            'csv.internalPh': 'e.g., CustomerName',
            'csv.typeLabel': 'Field Type',
            'csv.required': 'Required',
            'csv.choicesLabel': 'Choices (one per line, no duplicates)',
            'csv.choicesPh': 'Pending\nIn Progress\nCompleted',
            'csv.decimals': 'Decimal Places',
            'csv.automatic': 'Automatic',
            'csv.currency': 'Currency',
            'csv.cny': 'Chinese Yuan CNY',
            'csv.usd': 'US Dollar USD',
            'csv.eur': 'Euro EUR',
            'csv.gbp': 'British Pound GBP',
            'csv.defaultYes': 'Default to Yes',
            'csv.dateOnly': 'Date only (clear to include time)',
            'csv.count': '{custom} custom column(s) + 1 system column',
            'csv.encodedPrefix': 'Encoded internal name: ',
            'csv.labelSystem': 'System column',
            'csv.labelColumn': 'Column {n}',
            'csv.errName': '{label}: Enter a column name.',
            'csv.errDupName': '{label}: Column name is duplicated.',
            'csv.errInternal': '{label}: Enter an internal name.',
            'csv.errLen': '{label}: The encoded internal name exceeds 32 characters. Use a shorter name.',
            'csv.errStart': '{label}: The internal name must start with a letter or underscore.',
            'csv.errDupInternal': '{label}: Internal name is duplicated.',
            'csv.errReserved': '{label}: This internal name is reserved by SharePoint.',
            'csv.errControl': '{label}: Names cannot contain line breaks or control characters.',
            'csv.errChoice': '{label}: Enter at least one choice.',
            'csv.errDupChoice': '{label}: Choices must be unique.',
            'csv.errBadChoice': '{label}: A choice is too long or contains invalid control characters.',
            'csv.errFile': 'Enter an export file name.',
            'csv.toastDownload': 'Schema CSV downloaded with 0 data rows',
            'csv.toastCopy': 'CSV copied',
            'csv.toastCopyFallback': 'Press Ctrl+C to copy the selected CSV',
            'csv.toastSave': 'Configuration saved. Load it later to continue editing.',
            'csv.errTooBig': 'Configuration file is too large',
            'csv.errBadConfig': 'Invalid configuration for this tool',
            'csv.errIncomplete': 'Field configuration is incomplete',
            'csv.toastLoaded': 'Configuration loaded',
            'csv.toastLoadFail': 'Load failed: {message}',
            'csv.confirmReset': 'Clear the current configuration? Save it first if you want to keep it.',
            'csv.defaultFile': 'My List',
            'csv.systemName': 'Title',
            'csv.configSuffix': '.config.json',
            'csv.type.Text': 'Single line of text',
            'csv.type.Note': 'Multiple lines of text',
            'csv.type.Choice': 'Choice',
            'csv.type.MultiChoice': 'Multiple choice',
            'csv.type.Number': 'Number',
            'csv.type.Currency': 'Currency',
            'csv.type.Boolean': 'Yes / No',
            'csv.type.DateTime': 'Date and time',
            'csv.type.URL': 'Hyperlink'
        }
    };

    function normalize(value) {
        const lang = String(value || '').toLowerCase();
        if (lang === 'zh' || lang === 'zh-cn' || lang === 'zh-hans') return 'zh';
        if (lang === 'en' || lang === 'en-us' || lang === 'en-gb') return 'en';
        return '';
    }

    function readStored() {
        try { return normalize(localStorage.getItem(STORAGE_KEY)); }
        catch (_) { return ''; }
    }

    function store(lang) {
        try { localStorage.setItem(STORAGE_KEY, lang); }
        catch (_) {}
    }

    function detect() {
        const query = normalize(new URLSearchParams(location.search).get('lang'));
        if (query) {
            store(query);
            return query;
        }
        const saved = readStored();
        if (saved) return saved;
        const nav = (navigator.languages && navigator.languages[0]) || navigator.language || '';
        return String(nav).toLowerCase().startsWith('zh') ? 'zh' : 'en';
    }

    function resolveVars(vars) {
        const out = {};
        if (!vars) return out;
        Object.keys(vars).forEach(key => {
            const value = vars[key];
            if (value && typeof value === 'object' && value.i18n) out[key] = t(value.i18n, value.vars);
            else out[key] = value == null ? '' : String(value);
        });
        return out;
    }

    function t(key, vars) {
        const lang = window.ToolboxLang === 'en' ? 'en' : 'zh';
        let text = (dict[lang] && dict[lang][key]) || (dict.zh && dict.zh[key]) || key;
        const data = resolveVars(vars);
        Object.keys(data).forEach(name => {
            text = text.split('{' + name + '}').join(data[name]);
        });
        return text;
    }

    function escHtml(value) {
        return String(value).replace(/[&<>"']/g, char => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        }[char]));
    }

    function escAttr(value) {
        return escHtml(value);
    }

    function optionHtml(value, key, selected) {
        return `<option value="${escAttr(value)}" data-i18n="${escAttr(key)}"${selected ? ' selected' : ''}>${escHtml(t(key))}</option>`;
    }

    function ph(key) {
        return `data-i18n-placeholder="${escAttr(key)}" placeholder="${escAttr(t(key))}"`;
    }

    function ti(key) {
        return `data-i18n-title="${escAttr(key)}" title="${escAttr(t(key))}"`;
    }

    function aria(key) {
        return `data-i18n-aria="${escAttr(key)}" aria-label="${escAttr(t(key))}"`;
    }

    function setMsg(el, key, vars) {
        if (!el) return;
        el.dataset.i18nMsg = key;
        if (vars) el.dataset.i18nVars = JSON.stringify(vars);
        else delete el.dataset.i18nVars;
        el.textContent = t(key, vars);
    }

    function clearMsg(el) {
        if (!el) return;
        delete el.dataset.i18nMsg;
        delete el.dataset.i18nVars;
        el.textContent = '';
    }

    function resetLabeled(el) {
        if (!el) return;
        delete el.dataset.i18nMsg;
        delete el.dataset.i18nVars;
        if (el.dataset.i18n) el.textContent = t(el.dataset.i18n);
        else el.textContent = '';
    }

    function paint(el) {
        if (el.dataset.i18nMsg) {
            let vars;
            try { vars = el.dataset.i18nVars ? JSON.parse(el.dataset.i18nVars) : undefined; }
            catch (_) { vars = undefined; }
            el.textContent = t(el.dataset.i18nMsg, vars);
            return;
        }
        if (!el.dataset.i18n) return;
        const text = t(el.dataset.i18n);
        if (el.tagName === 'TITLE') {
            el.textContent = text;
            document.title = text;
            return;
        }
        if (el.children.length === 0) el.textContent = text;
    }

    function syncNavLinks() {
        document.querySelectorAll('a[href]').forEach(anchor => {
            const raw = anchor.dataset.href || anchor.getAttribute('href');
            if (!raw || /^(https?:|\/\/|mailto:|#)/.test(raw) || !raw.includes('.html')) return;
            if (!anchor.dataset.href) anchor.dataset.href = raw;
            const url = new URL(anchor.dataset.href, location.href);
            url.searchParams.set('lang', window.ToolboxLang);
            const file = url.pathname.slice(url.pathname.lastIndexOf('/') + 1);
            anchor.setAttribute('href', file + url.search + url.hash);
        });
    }

    function mountSwitch() {
        if (document.querySelector('.lang-switch')) return;
        const host = document.querySelector('.header') || document.querySelector('header.top');
        if (!host) return;
        const bar = document.createElement('div');
        bar.className = 'lang-switch-bar';
        const group = document.createElement('div');
        group.className = 'lang-switch';
        group.setAttribute('role', 'group');
        group.dataset.i18nAria = 'common.langLabel';
        ['zh', 'en'].forEach(lang => {
            const button = document.createElement('button');
            button.type = 'button';
            button.dataset.setLang = lang;
            button.textContent = lang === 'zh' ? '中' : 'EN';
            button.setAttribute('aria-label', lang === 'zh' ? '中文' : 'English');
            button.addEventListener('click', () => setLang(lang));
            group.append(button);
        });
        bar.append(group);
        host.prepend(bar);
    }

    function updateSwitch() {
        document.querySelectorAll('.lang-switch').forEach(group => {
            group.setAttribute('aria-label', t('common.langLabel'));
        });
        document.querySelectorAll('[data-set-lang]').forEach(button => {
            button.setAttribute('aria-pressed', String(button.dataset.setLang === window.ToolboxLang));
        });
    }

    function applyI18n() {
        document.documentElement.lang = window.ToolboxLang === 'zh' ? 'zh-CN' : 'en';
        mountSwitch();
        document.querySelectorAll('[data-i18n], [data-i18n-msg]').forEach(paint);
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder));
        });
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            el.setAttribute('title', t(el.dataset.i18nTitle));
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            el.setAttribute('aria-label', t(el.dataset.i18nAria));
        });
        document.querySelectorAll('[data-i18n-value]').forEach(el => {
            el.value = t(el.dataset.i18nValue);
        });
        const title = document.querySelector('title[data-i18n]');
        if (title) document.title = t(title.dataset.i18n);
        updateSwitch();
        syncNavLinks();
        document.dispatchEvent(new CustomEvent('toolbox-lang', { detail: { lang: window.ToolboxLang } }));
    }

    function setLang(lang) {
        const next = normalize(lang);
        if (!next || next === window.ToolboxLang) return;
        window.ToolboxLang = next;
        store(next);
        try {
            const url = new URL(location.href);
            url.searchParams.set('lang', next);
            history.replaceState(null, '', url);
        } catch (_) {}
        applyI18n();
    }

    window.ToolboxLang = detect();
    document.documentElement.lang = window.ToolboxLang === 'zh' ? 'zh-CN' : 'en';
    window.t = t;
    window.escHtml = escHtml;
    window.escAttr = escAttr;
    window.optionHtml = optionHtml;
    window.ph = ph;
    window.ti = ti;
    window.ariaAttr = aria;
    window.setMsg = setMsg;
    window.clearMsg = clearMsg;
    window.resetLabeled = resetLabeled;
    window.applyI18n = applyI18n;
    window.setLang = setLang;

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applyI18n);
    else applyI18n();
})();
