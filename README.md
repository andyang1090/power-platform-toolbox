# Power Platform Toolbox

Power Platform Toolbox 是一组在浏览器里运行的静态页面，用来生成 Power Automate 表达式、Power Apps 公式，以及新建 Microsoft Lists / SharePoint 列表时使用的 CSV 架构。

Power Platform Toolbox is a set of static pages that run in the browser. They generate Power Automate expressions, Power Apps formulas, and a schema CSV for creating a Microsoft Lists or SharePoint list.

在线使用：<https://andyang1090.github.io/power-platform-toolbox/>

Use it online: <https://andyang1090.github.io/power-platform-toolbox/>

地址后加 `?lang=zh` 打开中文，加 `?lang=en` 打开英文，例如 <https://andyang1090.github.io/power-platform-toolbox/?lang=zh> 与 <https://andyang1090.github.io/power-platform-toolbox/?lang=en>。

Append `?lang=zh` for Chinese or `?lang=en` for English, for example <https://andyang1090.github.io/power-platform-toolbox/?lang=zh> and <https://andyang1090.github.io/power-platform-toolbox/?lang=en>.

## 全站功能 / Site-wide features

首页列出五个工具，并提供「下载完整项目」按钮。每个页面顶部靠右有「中 / EN」切换，工具页有返回首页的链接。输入和生成都在浏览器本地完成。

The homepage lists the five tools and includes a Download full project button. Every page has a 中 / EN switch at the top right, and each tool page links back to the homepage. Input and generation stay in the browser.

- 每个页面顶部都有「中 / EN」切换。选择会写入浏览器 localStorage，键名是 `power-toolbox-lang`。

  Every page has a 中 / EN switch at the top. The choice is stored in the browser under the localStorage key `power-toolbox-lang`.

- 打开页面时，地址栏的 `?lang=` 优先。可识别的值是 `zh`、`zh-cn`、`zh-hans`、`en`、`en-us`、`en-gb`，识别后会记住这次选择。

  On load, a `?lang=` query wins. Recognized values are `zh`, `zh-cn`, `zh-hans`, `en`, `en-us`, and `en-gb`, and that choice is remembered.

- 没有 `?lang=` 时使用上次记住的语言。两者都没有时，浏览器语言以 `zh` 开头则用中文，否则用英文。

  With no `?lang=`, the stored language is used. If neither is set, a browser language starting with `zh` selects Chinese, and any other language selects English.

- 点击「中」或「EN」会切换界面文字，并把当前地址更新为带 `?lang=` 的地址。工具页之间的链接也会带上当前语言参数。

  Choosing 中 or EN switches the interface text and updates the current address to include `?lang=`. Links between the tool pages keep the current language parameter.

- 首页「下载完整项目」按钮指向 <https://github.com/andyang1090/power-platform-toolbox/archive/refs/heads/main.zip>。

  The homepage Download full project button points to <https://github.com/andyang1090/power-platform-toolbox/archive/refs/heads/main.zip>.

- 窗口宽度至少 1024px、高度至少 650px 时，筛选数组、OData、选择操作和 JSON 转 Power Fx 把输入放在左侧、结果放在右侧。宽度低于 1024px 时，这些页面改为单列：工具栏换行，条件行纵向排列，按钮和输入框至少约 44px，表单文字约 16px。List CSV 架构生成器在宽屏上左右分栏，宽度低于 1024px 时叠成一列，并使用同样的触控尺寸。

  When the window is at least 1024px wide and 650px tall, the Filter Array, OData, Select, and JSON to Power Fx pages place inputs on the left and the result on the right. Below 1024px those pages become one column: toolbars wrap, condition rows stack, buttons and inputs are at least about 44px, and form text is about 16px. The List CSV Schema Generator uses two panes on a wide screen, stacks them below 1024px, and uses the same touch sizes.

- 筛选数组、OData、选择操作和 JSON 转 Power Fx 可以填入同一套示例，并随当前语言切换。中文示例是一条设备借用记录，字段为 ID、Title、借用编号、借用人邮箱、部门、设备名称、设备类别、借用数量。英文示例的对应字段是 ID、Title、LoanNumber、BorrowerEmail、Department、EquipmentName、EquipmentCategory、Quantity。

  The Filter Array, OData, Select, and JSON to Power Fx tools can load one shared sample, and that sample follows the current language. The Chinese sample is an equipment-loan record with ID, Title, 借用编号, 借用人邮箱, 部门, 设备名称, 设备类别, and 借用数量. The English sample uses ID, Title, LoanNumber, BorrowerEmail, Department, EquipmentName, EquipmentCategory, and Quantity.

## 筛选数组表达式生成器 / Filter Array Expression Generator

为 Power Automate「筛选数组 (Filter Array)」高级模式生成比较表达式。字段写成 `item()?['字段']`，多条条件用 `@and(...)` 或 `@or(...)` 包起来，单条条件直接写成 `@equals(...)` 这类调用。

Builds the comparison expression for a Power Automate Filter Array action in advanced mode. Fields are written as `item()?['Field']`. Several conditions are wrapped in `@and(...)` or `@or(...)`, and a single condition is written directly as a call such as `@equals(...)`.

直接打开：<https://andyang1090.github.io/power-platform-toolbox/filter-array.html>

Open it directly: <https://andyang1090.github.io/power-platform-toolbox/filter-array.html>

- 粘贴 JSON 样例。输入或粘贴后会自动解析。可以是单个对象、对象数组，或某个属性本身是数组的对象；后一种会改用它的第一个数组属性。数组的第一个元素是对象时，页面收集每个对象元素的字段名。

  Paste a JSON sample. It is parsed on input and on paste. The sample can be one object, an array of objects, or an object whose property is an array; the last of these uses that object's first array property. When the first array element is an object, the page collects the field names of each object element.

- JSON 无法解析时显示错误，并清空已抽出的字段。样例为空时也会清空字段。

  Invalid JSON shows an error and clears the extracted fields. An empty sample clears the fields as well.

- 「填入示例」载入当前语言的借用记录，并在还没有条件时补上一条。「清空输入」会清掉 JSON、条件、表达式和错误，并把组合方式设回 AND。

  Load Example inserts the loan record for the current language and adds one condition when none exist. Clear Input removes the JSON, conditions, expression, and errors, and sets the combiner back to AND.

- 条件用 AND（全部满足）或 OR（满足任意）组合，默认 AND。可以添加和删除条件。新条件优先选用还没用过的字段；没有字段时使用 `Column`。

  Conditions combine with AND (match all) or OR (match any), and AND is the default. Conditions can be added and removed. A new condition prefers a field that is not used yet, and uses `Column` when no fields have been parsed.

- 每一行有字段、对调按钮、运算符、对比值、格式化和值类型。字段下拉显示为 `item()?['字段']`。

  Each row has a field, a swap button, an operator, a comparison value, a format, and a value type. The field dropdown is shown as `item()?['Field']`.

- 运算符有等于 `equals`、不等于 `not(equals)`、包含 `contains`、不包含 `not(contains)`、大于 `greater`、大于等于 `greaterOrEquals`、小于 `less`、小于等于 `lessOrEquals`、开头 `startsWith`、结尾 `endsWith`。不等于和不包含会写成 `not(equals(...))` 和 `not(contains(...))`。

  Operators are equals `equals`, not equals `not(equals)`, contains `contains`, not contains `not(contains)`, greater `greater`, greater or equal `greaterOrEquals`, less `less`, less or equal `lessOrEquals`, starts with `startsWith`, and ends with `endsWith`. Not equals and not contains are written as `not(equals(...))` and `not(contains(...))`.

- 格式化作用在字段一侧，可选无格式化、`string`、`toLower`、`toUpper`、`trim`、`formatDateTime(..., 'yyyy-MM-dd')`、`int`、`float`，以及把字段一侧换成 `null`。

  Formatting applies to the field side. The choices are no formatting, `string`, `toLower`, `toUpper`, `trim`, `formatDateTime(..., 'yyyy-MM-dd')`, `int`, `float`, and replacing the field side with `null`.

- 对比值类型有文本、数字、布尔。输入时会按值自动选择：`true` / `false` 为布尔，纯数字为数字，其余为文本，之后仍可改类型。

  Comparison values can be text, number, or boolean. Typing chooses the type: `true` / `false` becomes boolean, a plain number becomes number, and anything else becomes text. The type can still be changed afterward.

- 文本值加单引号，值里的单引号写成两个单引号。数字不加引号，空值或非数字写成 `0`。布尔只把不区分大小写的 `true` 写成 `true`，其余写成 `false`。对比值本身是 `null` 时输出不加引号的 `null`。对比值同时含有 `(` 和 `)` 时，按表达式原样插入。

  Text values are wrapped in single quotes, and a single quote inside the value is written as two single quotes. Numbers are unquoted; an empty or non-numeric value becomes `0`. A boolean writes `true` only for `true` in any letter case, and writes `false` otherwise. A comparison value of `null` is written as unquoted `null`. A comparison value that contains both `(` and `)` is inserted as an expression.

- 对调按钮交换字段和对比值的左右位置。格式化仍然包在字段表达式上。

  The swap button exchanges the field and the comparison value. Formatting still wraps the field expression.

- 生成结果可以手改。再次改条件、字段或样例时会按当前条件重新生成，并自动排成多行。「切换单行/多行」可以把已有换行收成一行；展开多行时只处理以 `@and(` 或 `@or(` 开头的表达式。

  The result can be edited by hand. Changing a condition, field, or sample regenerates it from the current conditions and formats it on multiple lines. Toggle Single / Multiline collapses existing line breaks into one line. Expanding to multiple lines applies only to an expression that starts with `@and(` or `@or(`.

- 在结果框输入 `@` 或字母会列出常用表达式，可用上下方向键选择，用 Enter 或 Tab 插入，用 Esc 关闭。条目有 `null`、`variables('...')`、`outputs('...')`、`body('...')`、`items('Apply_to_each')`、`string()`、`int()`、`float()`、`toLower()`、`toUpper()`、`trim()`、`utcNow()`、`formatDateTime(, 'yyyy-MM-dd')`、`addDays(utcNow(), 7, 'yyyy-MM-dd')`、`if(, , )`、`coalesce(, )`、`empty()`、`length()`。中英文下，变量、步骤和 Body 的占位名不同。

  Typing `@` or a letter in the result lists common expressions. Arrow keys move the selection, Enter or Tab inserts it, and Esc closes the list. The entries are `null`, `variables('...')`, `outputs('...')`, `body('...')`, `items('Apply_to_each')`, `string()`, `int()`, `float()`, `toLower()`, `toUpper()`, `trim()`, `utcNow()`, `formatDateTime(, 'yyyy-MM-dd')`, `addDays(utcNow(), 7, 'yyyy-MM-dd')`, `if(, , )`, `coalesce(, )`, `empty()`, and `length()`. The placeholders for a variable, step, and body follow the current language.

- 「复制结果」把表达式写入剪贴板，并显示已复制提示。结果为空时不复制。

  Copy Result writes the expression to the clipboard and shows a copied notice. An empty result is not copied.

## OData 筛选公式生成器 / OData Filter Generator

为 Power Automate 里 SharePoint 或 Dataverse「获取项」的筛选查询生成 OData 筛选表达式，复制后贴到 Filter Query。

Builds an OData filter expression for the Filter Query of a SharePoint or Dataverse Get items action in Power Automate. Copy it into Filter Query.

直接打开：<https://andyang1090.github.io/power-platform-toolbox/odata-filter.html>

Open it directly: <https://andyang1090.github.io/power-platform-toolbox/odata-filter.html>

- 点击或拖拽上传 `.csv`，按 UTF-8 读取，并显示已选文件名。文件读失败或内容为空时显示错误。

  Click or drop a `.csv` file. It is read as UTF-8, and the selected file name is shown. A read failure or an empty file shows an error.

- 带 `ListSchema=` 或 `<Field` 的架构 CSV 会读取字段 XML。`Computed` 字段略过。显示名优先用 `DisplayName`，否则用 `Title`，内部名用 `Name`。第二行有列标题时只保留这些列，XML 里没有的列用列名本身；没有第二行时使用全部可映射字段。

  A schema CSV containing `ListSchema=` or `<Field` is read from its Field XML. `Computed` fields are skipped. The display name is `DisplayName`, or `Title` when that is absent, and the internal name is `Name`. When the second line lists column headers, only those columns are kept, and a column missing from the XML uses its own name. With no second line, every mappable field is used.

- 普通 CSV 用第一行做显示名。第二行对应单元格若有内部名，且不含空格，就用该内部名。单元格为空或含空格时，从显示名里去掉字母、数字和下划线以外的字符；去掉后若为空，仍用原来的显示名。

  A plain CSV uses the first row as display names. A second-row cell is used as the internal name when it has a value and contains no space. An empty cell, or a cell that contains a space, keeps the display name with every character outside letters, digits, and underscore removed. If that leaves nothing, the original display name is kept.

- 内部名会再按 OData 规则处理：已经以 `OData_` 开头的保持不变；`id` 写成 `ID`；不含 `_xHHHH_` 的纯英文标识符保持不变；中文名和其他 `_xHHHH_` 编码名加上 `OData_` 前缀。映射结果显示为只读 JSON。

  Internal names then follow the OData rule: a name that already starts with `OData_` stays unchanged, `id` becomes `ID`, a pure English identifier with no `_xHHHH_` encoding stays unchanged, and a Chinese name or other `_xHHHH_` encoded name receives an `OData_` prefix. The mapping is shown as read-only JSON.

- 「填入示例」用当前语言的借用记录生成一条带 `ListSchema` 的 CSV 并解析。中文等非英文标识符会先编成 `_xHHHH_` 再加 `OData_`。「清空输入」会清掉文件、映射、条件和表达式，并把组合方式设回 AND。重新解析 CSV 会按新字段重开一条条件。

  Load Example builds a `ListSchema` CSV from the loan record in the current language and parses it. A non-English identifier is encoded as `_xHHHH_` before the `OData_` prefix is added. Clear Input removes the file, mapping, conditions, and expression, and sets the combiner back to AND. Parsing a CSV again starts one new condition from the new fields.

- 条件用 AND（全部满足）或 OR（满足任意）组合，默认 AND，多条之间换行连接。可以添加和删除条件。字段下拉显示「显示名 (内部名)」。没有映射时默认是 Title。新条件优先选用还没用过的字段。

  Conditions combine with AND (match all) or OR (match any). AND is the default, and several conditions are joined on new lines. Conditions can be added and removed. The field dropdown shows `Display name (internal name)`. With no mapping, the default field is Title. A new condition prefers a field that is not used yet.

- 运算符有 `eq`、`ne`、`gt`、`ge`、`lt`、`le`、`substringof`、`contains`、`startswith`。比较运算写成 `字段 eq 值`。`substringof` 的参数顺序是值在前、字段在后。`contains` 和 `startswith` 的参数顺序是字段在前、值在后。`substringof` 标注为 SharePoint 用法，`contains` 标注为 OData v4 用法。

  Operators are `eq`, `ne`, `gt`, `ge`, `lt`, `le`, `substringof`, `contains`, and `startswith`. Comparisons are written as `Field eq value`. For `substringof`, the value comes before the field. For `contains` and `startswith`, the field comes before the value. `substringof` is labeled for SharePoint, and `contains` is labeled for OData v4.

- 值类型有「文本（带单引号）」和「数字/布尔（无引号）」。文本里的单引号写成两个单引号。数字和布尔不加引号。

  Value types are text (single quotes) and number/boolean (unquoted). A single quote inside text is written as two single quotes. Numbers and booleans are left unquoted.

- 输入对比值或更换字段时会猜测类型：值为数字、`true` 或 `false` 时选数字/布尔；其他非空值选文本。值为空时，字段名包含 `id`、`num`、`count`、`amount`、`qty`、`quantity`、`price`、`age` 或 `库存` 则猜为数字/布尔，否则猜为文本。类型下拉可以改。

  Typing a comparison value or changing the field guesses the type. A number, `true`, or `false` selects number/boolean, and any other non-empty value selects text. When the value is empty, a field name containing `id`, `num`, `count`, `amount`, `qty`, `quantity`, `price`, `age`, or `库存` is guessed as number/boolean, and any other name is guessed as text. The type dropdown can be changed.

- 表达式框可以手改。条件变化时会按当前条件重新生成。页面提示把结果贴到 Power Automate 的筛选查询。「复制结果」写入剪贴板并提示已复制；内容为空时不复制。

  The expression box can be edited by hand. Condition changes regenerate it from the current conditions. The page says to paste the result into Filter Query in Power Automate. Copy Result writes it to the clipboard and shows a copied notice. An empty result is not copied.

## 选择操作 (Select Map) 生成器 / Select Map Generator

为 Power Automate「选择 (Select)」动作生成 Map JSON。切换到文本模式后粘贴。JSON 来源保留原始字段名；CSV 来源按 OData 规则给需要编码的内部名加 `OData_` 前缀。

Builds the Map JSON for a Power Automate Select action so it can be pasted in text mode. A JSON source keeps the original field names. A CSV source adds the `OData_` prefix to internal names that need it.

直接打开：<https://andyang1090.github.io/power-platform-toolbox/select-map.html>

Open it directly: <https://andyang1090.github.io/power-platform-toolbox/select-map.html>

- 输入方式有「上传 CSV」和「输入 JSON」两个标签。CSV 为点击或拖拽上传 `.csv`，按 UTF-8 读取。读失败或内容为空时显示错误。

  The input source is either Upload CSV or Enter JSON. A CSV is clicked or dropped, then read as UTF-8. A read failure or an empty file shows an error.

- 架构 CSV 的解析与 OData 工具相同：读取 Field XML，略过 `Computed`，用显示名对应 `Name`，有第二行列标题时只保留这些列，再套用 `OData_` 前缀规则。

  A schema CSV is parsed the same way as in the OData tool: Field XML is read, `Computed` fields are skipped, display names map to `Name`, a second header line limits the columns, and the `OData_` prefix rule is applied.

- 普通 CSV 只使用第一行列名。每个列名既是键也是引用名，并套用同一套 `OData_` 前缀规则。

  A plain CSV uses only the header row. Each header is both the key and the reference name, and the same `OData_` prefix rule is applied.

- JSON 可以是单个对象、对象数组、`value` 数组，或 `body.value` 数组。页面取所有对象的顶层字段，嵌套对象和数组整段保留为该字段的值。字段名按 JSON 原样引用。

  JSON can be one object, an array of objects, a `value` array, or a `body.value` array. The page takes the top-level fields of every object, and a nested object or array stays as that field's value. Field names are referenced as they appear in the JSON.

- 「解析 JSON 并生成映射」成功后会替换当前映射，并显示来源类型、样本条数和字段数，同时提示 Select 的 From 使用对应的对象数组。空数组、元素不是对象，或对象没有字段时解析失败，当前映射保持不变。

  Parse JSON and Build Map replaces the current map after a successful parse. It reports the source type, sample count, and field count, and it says to use the matching object array in the Select action's From input. An empty array, a non-object element, or an object with no fields fails parsing and leaves the current map unchanged.

- JSON 标签下的「填入示例」载入当前语言的借用记录并生成映射，同时先收起字段映射预览。再次点击「解析 JSON 并生成映射」，或改上传 CSV，预览会重新显示。「清空输入」会清掉 CSV、JSON、映射和结果。

  Load Example on the JSON tab inserts the loan record for the current language, builds the map, and hides the field-mapping preview. Parse JSON and Build Map, or a CSV upload, shows the preview again. Clear Input removes the CSV, JSON, map, and result.

- 字段映射预览是只读 JSON，键为显示名或 JSON 字段名，值为实际引用名。

  The field-mapping preview is read-only JSON. The key is the display name or JSON field name, and the value is the reference name actually used.

- 每一行有输出键和值表达式。自动表达式是 `@item()?['引用名']`，引用名里的单引号写成两个单引号。值框旁边的字段下拉可以把某一字段的表达式填进该行。键和值都可以手改。

  Each row has an output key and a value expression. The automatic expression is `@item()?['Reference']`, and a single quote in the reference is written as two single quotes. The field dropdown beside the value inserts that field's expression into the row. The key and the value can both be edited.

- 可以添加映射、删除一行、清空全部，或「恢复自动配置」。恢复后按当前字段重新生成全部行。新行优先选用还没出现在值表达式里的字段。

  Map entries can be added, a row can be deleted, everything can be cleared, or Restore Auto Map can rebuild every row from the current fields. A new row prefers a field whose expression is not already used.

- 输出是只读的 Map JSON。键为空的行不写入；同一个键出现多行时，后面的值覆盖前面的值。没有行时输出为空。页面提示切换到「选择」操作的文本模式后粘贴。

  The output is read-only Map JSON. A row with an empty key is omitted. When the same key appears on more than one row, the later value replaces the earlier one. With no rows, the output is empty. The page says to switch the Select action to text mode before pasting.

- 「复制 JSON」把 Map 写入剪贴板并提示已复制。内容为空时不复制。

  Copy JSON writes the map to the clipboard and shows a copied notice. An empty result is not copied.

## JSON 转 Power Fx 公式生成器 / JSON to Power Fx Formula Generator

把 Power Automate 返回的 JSON 转成带 `Type` 的 `ParseJSON` 公式，在 Power Apps 里得到类型化记录或表。页面标题是「Power Apps JSON 转对象」。

Turns JSON returned by Power Automate into a typed `ParseJSON` formula that produces a record or table in Power Apps. The page title is Power Apps JSON to Typed Data.

直接打开：<https://andyang1090.github.io/power-platform-toolbox/power-apps-json.html>

Open it directly: <https://andyang1090.github.io/power-platform-toolbox/power-apps-json.html>

- 粘贴 JSON 样例。默认 JSON 来源公式是 `varJson`，默认结果变量 / 集合名是 `colResult`，默认根路径是「整段 JSON」。来源框的提示例子还有 `Flow.Run().result`。

  Paste a JSON sample. The JSON source formula defaults to `varJson`, the result variable or collection name defaults to `colResult`, and the root path defaults to Entire JSON. The source placeholder also shows `Flow.Run().result`.

- 根路径下拉列出对象字段路径，标签用 `→` 连接。路径只沿对象字段展开，数组元素里的路径不会出现；从根对象往下最多列出 16 层字段。刷新路径时，原来的路径还在就会保持选中。

  The root-path dropdown lists object field paths and joins the labels with `→`. Paths follow object fields only, so paths inside array elements are omitted, and at most 16 levels below the root object are listed. When the paths are refreshed, the previous path stays selected if it still exists.

- 「生成公式」会重新识别路径并写出公式。修改 JSON、来源、目标名、根路径、输出方式、分隔符或嵌入选项时也会更新公式。

  Generate Formula refreshes the paths and writes the formula. Editing the JSON, source, target name, root path, output mode, separator, or embed option updates the formula as well.

- 「填入示例」载入当前语言的借用记录。来源或目标名为空时，会分别补上 `varJson` 和 `colResult`。「格式化 JSON」在样例是合法 JSON 时按两空格缩进排版。「清空输入」会清掉 JSON、来源、目标名和结果，把根路径设回整段 JSON，取消嵌入，输出方式设回自动，分隔符设回逗号。

  Load Example inserts the loan record for the current language. An empty source or target is filled with `varJson` or `colResult`. Format JSON pretty-prints a valid sample with two-space indentation. Clear Input removes the JSON, source, target, and result, sets the root path back to the entire JSON, clears embed, sets the output mode back to automatic, and sets the separator back to a comma.

- 「更多选项」里的输出方式有四种：自动（数组用 `ClearCollect`，记录用 `Set`）、仅 `ParseJSON` 表达式、强制 `Set`、强制 `ClearCollect`。区域分隔符可选逗号或分号。勾选「将示例 JSON 直接嵌入公式」后，公式中的 JSON 来源就是这段样例文本。

  More options has four output modes: automatic (`ClearCollect` for an array and `Set` for a record), the `ParseJSON` expression only, forced `Set`, and forced `ClearCollect`. The list separator can be a comma or a semicolon. With Embed sample JSON checked, the formula's JSON source is the sample text itself.

- 类型按全部数组元素推断。文本（包括看起来像日期的字符串）是 `Text`，数字是 `Number`，布尔是 `Boolean`，数组写成 `[...]`，对象写成记录。同一位置的 `null` 在还有其他值时不参与推断。对象字段取所有样本的键，缺字段的样本按空值处理。字段名用单引号包裹，名称里的单引号写成两个单引号。

  Types are inferred from every array element. Text, including a string that looks like a date, is `Text`; a number is `Number`; a boolean is `Boolean`; an array is written as `[...]`; an object is written as a record. A `null` at the same position is ignored while another value is present. Object fields are the keys from every sample, and a sample that lacks a key is treated as an empty value. Field names are wrapped in single quotes, and a single quote in a name is written as two single quotes.

- 无法生成时会说明原因：嵌套超过 30 层、同一路径类型不一致、只有 `null` 或空数组、空对象、未嵌入时来源公式为空、根路径不存在、需要保存时目标名为空，或对基础值使用 `ClearCollect`。

  When a formula cannot be generated, the page reports the reason: nesting deeper than 30 levels, mixed types at one path, only `null` or an empty array, an empty object, an empty source formula when the sample is not embedded, a missing root path, an empty target name when the result is saved, or `ClearCollect` used for a scalar value.

- 公式形如 `ParseJSON(来源, Type(...))`。选择根路径时，先按整段 JSON 生成 `Type`，再在结果后追加 `.'字段'`。自动模式下，选中的根是数组时外包 `ClearCollect`，否则外包 `Set`。仅表达式模式不外包。嵌入样例时，JSON 文本放进 Power Fx 字符串，内部双引号写成两个双引号。

  The formula has the shape `ParseJSON(source, Type(...))`. With a root path, `Type` is built from the whole JSON, then `.'Field'` is appended for each selected segment. In automatic mode, an array root is wrapped in `ClearCollect` and any other root is wrapped in `Set`. Expression-only mode has no wrapper. An embedded sample is placed in a Power Fx string, and each double quote inside it is written as two double quotes.

- 结果旁会标明「结果是表」或「结果是记录 / 值」。对象含有 `value` 数组且根路径仍是整段 JSON 时，状态提示把根路径改成 `value`。结果框只读。

  The result is labeled as a table or as a record / value. When the object contains a `value` array and the root path is still the entire JSON, the status says to change the root path to `value`. The result box is read-only.

- 「复制公式」写入剪贴板。还没有公式时提示先生成；剪贴板不可用时选中公式，并提示按 Ctrl+C。

  Copy Formula writes the formula to the clipboard. With no formula yet, it asks you to generate one first. If the clipboard is unavailable, it selects the formula and says to press Ctrl+C.

- 页面说明：`Set` / `ClearCollect` 用于 OnSelect 等行为属性，表表达式可用于 Items；数据只在本地处理；公式需要当前环境支持 `Type` 和带类型参数的 `ParseJSON`。并链到 Microsoft 的 ParseJSON 语法参考：<https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-parsejson>。

  The page notes that `Set` / `ClearCollect` belong on behavior properties such as OnSelect, that a table expression can be used for Items, that the data stays local, and that the formula needs an environment that supports `Type` and typed `ParseJSON`. It links to the Microsoft ParseJSON reference: <https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-parsejson>.

## List CSV 架构生成器 / List CSV Schema Generator

配置列的显示名、内部名和字段类型，导出带 `ListSchema` 首行、列标题和零条数据行的 UTF-8 BOM CSV。在 Microsoft Lists 或 SharePoint 中用「新建列表 → 从 CSV」新建列表。页面标题是「CSV 架构生成器」，并标明本地运行、无示例数据。

Set each column's display name, internal name, and field type, then export a UTF-8 BOM CSV with a `ListSchema` first line, column headers, and zero data rows. Create a list in Microsoft Lists or SharePoint with New list → From CSV. The page title is CSV Schema Generator, and it is marked as running locally with no sample data.

直接打开：<https://andyang1090.github.io/power-platform-toolbox/list-csv-schema.html>

Open it directly: <https://andyang1090.github.io/power-platform-toolbox/list-csv-schema.html>

- 打开时有系统 Title 列和一条空白自定义列。导出文件名可改，中文环境默认「我的列表」，英文环境默认 `My List`，最长 100 个字符。「导出内容」固定显示为 ListSchema 加列标题、0 条数据。

  The page starts with the system Title column and one blank custom column. The export file name can be edited. It defaults to 我的列表 in Chinese and `My List` in English, with a maximum of 100 characters. Export content is fixed as ListSchema plus column headers and 0 data rows.

- 系统 Title 列始终排在第一，不能删除、上移或下移。内部名固定为 `Title`，类型固定为单行文本，显示名可以改，必填可以勾选。自定义列可以添加、删除、上移和下移，但不能移到系统列之前。

  The system Title column stays first and cannot be deleted or moved. Its internal name is fixed as `Title`, its type is fixed as single line of text, its display name can be edited, and it can be marked required. Custom columns can be added, deleted, and moved up or down, and they cannot move above the system column.

- 每列有显示名、内部名、字段类型和必填。显示名最长 255 个字符。内部名默认跟随显示名；手改内部名后不再跟随，并可按「恢复同步」重新跟随。输入框下方显示编码后的实际内部名。

  Each column has a display name, an internal name, a field type, and a required checkbox. A display name can be up to 255 characters. The internal name follows the display name until it is edited, and Restore sync makes it follow again. The encoded internal name is shown under the input.

- 实际内部名按 SharePoint 方式编码：字母、数字和下划线以外的字符写成 `_x` 加四位十六进制字符码；已有的 `_xHHHH_` 片段会先把开头的下划线编码，避免被再次当成转义。

  The actual internal name is encoded in the SharePoint style: a character outside letters, digits, and underscore becomes `_x` plus its four-digit hexadecimal character code. An existing `_xHHHH_` sequence has its leading underscore encoded first, so it is not treated as an escape again.

- 字段类型有单行文本、多行文本、单项选择、多项选择、数字、货币、是/否、日期与时间、超链接。

  Field types are single line of text, multiple lines of text, choice, multiple choice, number, currency, yes/no, date and time, and hyperlink.

- 单行文本在架构里最大长度 255。多行文本是纯文本，不启用富文本和追加，行数为 6。单项选择是下拉框，多项选择和单项选择都不允许填入列表外的值。选项在文本框里每行一个。

  Single line of text has a schema maximum length of 255. Multiple lines of text is plain text, with rich text and append turned off, and a line count of 6. Choice uses a dropdown. Choice and multiple choice both leave fill-in off. Choices are entered one per line.

- 数字和货币的小数位数可选 0、1、2、3、4、5 或自动，默认 2。货币可选人民币 CNY（2052）、美元 USD（1033）、欧元 EUR（1031）、英镑 GBP（2057），默认人民币。

  Number and currency decimals can be 0, 1, 2, 3, 4, 5, or automatic, and the default is 2. Currency can be Chinese yuan CNY (2052), US dollar USD (1033), euro EUR (1031), or British pound GBP (2057). Chinese yuan is the default.

- 是/否可以勾选默认值为「是」，未勾选时默认值为否。日期与时间默认「仅日期」，取消勾选后包含时间；导出的日期字段关闭友好显示格式。超链接在架构里的格式是 Hyperlink。

  Yes/no can default to Yes. When that box is clear, the default is No. Date and time defaults to date only, and clearing that box includes the time. Exported date fields set friendly display format to disabled. Hyperlink fields use the Hyperlink format in the schema.

- 校验会检查这些情况，并在出错时逐条列出、停用复制和下载；全部通过时显示「字段检查通过」。显示名和内部名要有内容，显示名不能重复。编码后的内部名最长 32 个字符，要以字母或下划线开头，不能重复。自定义列不能使用 `Title`，也不能使用这些保留内部名：`id`、`created`、`modified`、`author`、`editor`、`attachments`、`contenttype`、`contenttypeid`、`guid`、`uniqueid`、`fileleafref`、`fileref`、`fsobjtype`、`linktitle`、`linktitlenomenu`、`owshiddenversion`、`_uiversionstring`。名称不能含换行或控制字符。选择列至少要有一个选项，选项不能重复，每项最长 255 个字符，也不能含控制字符。导出文件名要有内容。比较时不区分大小写。

  Validation lists each problem and disables copy and download until they are gone. A valid setup shows that the field check passed. Display names and internal names need a value, and display names must be unique. An encoded internal name can be at most 32 characters, must start with a letter or underscore, and must be unique. A custom column cannot use `Title` or these reserved internal names: `id`, `created`, `modified`, `author`, `editor`, `attachments`, `contenttype`, `contenttypeid`, `guid`, `uniqueid`, `fileleafref`, `fileref`, `fsobjtype`, `linktitle`, `linktitlenomenu`, `owshiddenversion`, and `_uiversionstring`. Names cannot contain line breaks or control characters. A choice column needs at least one choice; choices must be unique, each choice can be at most 255 characters, and choices cannot contain control characters. The export file name needs a value. These comparisons ignore letter case.

- 结果有「CSV 文件」和「字段架构」两个标签。CSV 第一行是 `ListSchema=` 加架构 JSON，第二行是带引号的列标题，没有数据行。字段架构标签显示同一份架构 JSON。摘要显示字段数、0 条数据和「含内部名与字段类型」。

  The result has CSV file and Field schema tabs. The CSV has `ListSchema=` plus the schema JSON on the first line, quoted column headers on the second line, and no data rows. The Field schema tab shows that same schema JSON. The summary shows the field count, 0 data rows, and that internal names and field types are included.

- 「复制 CSV」复制不含 BOM 的完整 CSV。剪贴板不可用时切到 CSV 标签、选中文本，并提示按 Ctrl+C。「下载带架构 CSV」下载带 UTF-8 BOM 的文件。文件名里的 `< > : " / \ | ? *` 和控制字符会换成下划线，末尾的点和空格会去掉；换成下划线并去掉这些字符后若为空，则用默认文件名。已有的 `.csv` 后缀会去掉后再加上 `.csv`。

  Copy CSV copies the full CSV without a BOM. If the clipboard is unavailable, the page switches to the CSV tab, selects the text, and says to press Ctrl+C. Download Schema CSV downloads the file with a UTF-8 BOM. `< > : " / \ | ? *` and control characters in the file name become underscores, and a trailing dot or space is removed. If nothing remains, the default file name is used. An existing `.csv` suffix is removed and `.csv` is added again.

- 「保存配置」下载 JSON，格式标记为 `lists-schema-builder`、版本 1，包含文件名和各列设置。中文环境的后缀是 `.配置.json`，英文环境是 `.config.json`。「载入配置」读取这种 JSON：最大 2MB，版本必须是 1，列数为 1 到 200，第一列会固定成系统 Title 列。格式不对或字段不完整时提示载入失败。

  Save configuration downloads JSON marked `lists-schema-builder`, version 1, including the file name and every column. The suffix is `.配置.json` in Chinese and `.config.json` in English. Load configuration reads that JSON: the limit is 2MB, the version must be 1, the column count must be from 1 to 200, and the first column is forced back to the system Title column. A wrong format or an incomplete field reports that loading failed.

- 「重新开始」会先确认，然后恢复成系统 Title 列、一条空白列和默认文件名。切换语言会刷新按钮和校验文字，已填写的列名保持不变。

  Start over asks for confirmation, then restores the system Title column, one blank column, and the default file name. Switching language refreshes the buttons and validation text, and column names that were already entered stay as entered.

- 页面里的导入说明写明：用「新建列表 → 从 CSV」上传下载的文件；首行是 ListSchema，不要用 Excel 重新另存；文件只有列架构和标题，没有数据行；导入结果以租户为准，建好后可在列设置里核对内部名；这个文件用来新建列表，不用于修改已有列表的内部名；查阅、人员等依赖站点的字段在建表后添加。

  The import notes on the page say to upload the downloaded file with New list → From CSV, to keep the ListSchema line by not resaving the CSV in Excel, and that the file contains only the column schema and headers. They also say the import result depends on the tenant, that internal names can be checked in the column settings afterward, that the file creates a new list rather than changing internal names on an existing list, and that site-dependent fields such as Lookup and Person are added after the list exists.

## 下载并在本地打开 / Download and open locally

下载完整项目：<https://github.com/andyang1090/power-platform-toolbox/archive/refs/heads/main.zip>

Download the project: <https://github.com/andyang1090/power-platform-toolbox/archive/refs/heads/main.zip>

解压后用浏览器打开 `index.html`。不需要构建，也不需要安装依赖或启动本地服务器。首页和各个工具页都可以直接打开。

Unzip it and open `index.html` in a browser. There is no build step, and no package install or local server is required. The homepage and each tool page can be opened directly.
