# Power Platform Toolbox

## 中文

Power Platform Toolbox 是一组纯静态页面，用来生成 Power Automate 表达式、Power Apps 公式，以及新建 Microsoft Lists / SharePoint 列表时使用的 CSV 架构。每个页面右上角都有「中 / EN」切换，输入在浏览器里处理。

在线使用：<https://andyang1090.github.io/power-platform-toolbox/>

地址后加 `?lang=zh` 打开中文，加 `?lang=en` 打开英文，例如 <https://andyang1090.github.io/power-platform-toolbox/?lang=zh> 与 <https://andyang1090.github.io/power-platform-toolbox/?lang=en>。

### 筛选数组表达式生成器

为 Power Automate「筛选数组 (Filter Array)」高级模式生成比较表达式。粘贴 JSON 样例（单个对象、对象数组，或包含数组的对象）后，页面抽出字段，写成 `item()?['字段']` 条件。条件用 AND 或 OR 组合，运算符包括等于、不等于、包含、不包含、大于、大于等于、小于、小于等于、开头和结尾；字段或对比值可以套用 string、toLower、trim、日期、int、float 等格式化，左右位置也可以对调。生成结果可以手改，输入 `@` 或字母会列出 `variables`、`outputs`、`utcNow` 等常用表达式。

<https://andyang1090.github.io/power-platform-toolbox/filter-array.html>

### OData 筛选公式生成器

为 Power Automate 里 SharePoint 或 Dataverse「获取项」的筛选查询生成 OData `$filter`。上传带架构的 CSV 后，页面读取第一行 Schema XML，把显示名映射成内部名；中文内部名和 `_xHHHH_` 编码名会自动加上 `OData_` 前缀。再按 AND 或 OR 添加条件，运算符有 eq、ne、gt、ge、lt、le、substringof、contains、startswith，文本值加引号，数字和布尔不加引号。复制结果后贴到「筛选查询 (Filter Query)」。

<https://andyang1090.github.io/power-platform-toolbox/odata-filter.html>

### 选择操作 (Select Map) 生成器

为 Power Automate「选择 (Select)」动作生成 Map JSON，切换到文本模式后粘贴。字段可以来自 CSV，或来自 JSON（单个对象、对象数组，或 `value` / `body.value` 数组）。CSV 按架构给编码后的内部名补上 `OData_` 前缀；JSON 保留原始字段名，嵌套对象和数组整段保留。键和值可以增删、清空或恢复自动映射；来源是 JSON 时，Select 的 From 使用对应的对象数组。

<https://andyang1090.github.io/power-platform-toolbox/select-map.html>

### JSON 转 Power Fx 公式生成器

把 Power Automate 返回的 JSON 转成带 `Type` 的 `ParseJSON` 公式，在 Power Apps 里得到类型化记录或表。输入 JSON 样例、来源公式（例如 `varJson` 或 `Flow.Run().result`）以及结果变量或集合名，根路径可选整段 JSON，或 `value` 等返回字段。默认数组用 `ClearCollect`、记录用 `Set`，也可以只输出表达式、强制使用 Set 或 ClearCollect、把分隔符改成逗号或分号，或把样例 JSON 嵌进公式。类型按全部数组元素推断，日期字符串保持 Text；公式需要当前环境支持 `Type` 和带类型参数的 `ParseJSON`。

<https://andyang1090.github.io/power-platform-toolbox/power-apps-json.html>

### List CSV 架构生成器

配置列的显示名、内部名和字段类型，导出带 `ListSchema` 首行和列标题、零条数据行的 UTF-8 BOM CSV。在 Microsoft Lists 或 SharePoint 中选择「新建列表 → 从 CSV」导入，用来新建列表。字段类型包括单行文本、多行文本、单项选择、多项选择、数字、货币、是/否、日期与时间和超链接；系统 Title 列会保留，内部名固定为 Title，显示名可以修改。内部名默认跟随显示名，手动改过之后不再跟随，配置可以存成 JSON 再载入；查阅、人员等依赖站点的字段在建表后添加，导入时直接使用下载的文件，避免用 Excel 另存后丢掉首行 ListSchema。

<https://andyang1090.github.io/power-platform-toolbox/list-csv-schema.html>

### 下载并在本地打开

下载完整项目：<https://github.com/andyang1090/power-platform-toolbox/archive/refs/heads/main.zip>

解压后用浏览器打开 `index.html`。不需要构建，也不需要安装依赖或启动本地服务器。

## English

Power Platform Toolbox is a set of static pages that generate Power Automate expressions, Power Apps formulas, and a schema CSV for creating a Microsoft Lists or SharePoint list. Every page has a 中 / EN switch, and input is handled in the browser.

Use it online: <https://andyang1090.github.io/power-platform-toolbox/>

Append `?lang=zh` for Chinese or `?lang=en` for English, for example <https://andyang1090.github.io/power-platform-toolbox/?lang=zh> and <https://andyang1090.github.io/power-platform-toolbox/?lang=en>.

### Filter Array Expression Generator

Builds the comparison expression for a Power Automate Filter Array action in advanced mode. Paste a JSON sample (one object, an array of objects, or an object that contains an array) and the page turns its fields into `item()?['Field']` conditions, combined with AND or OR. Operators include equals, not equals, contains, not contains, greater, greater or equal, less, less or equal, starts with, and ends with; a field or comparison value can be wrapped with string, toLower, trim, a date format, int, or float, and the two sides can be swapped. The result can be edited by hand, and typing `@` or a letter lists common expressions such as `variables`, `outputs`, and `utcNow`.

<https://andyang1090.github.io/power-platform-toolbox/filter-array.html>

### OData Filter Generator

Builds an OData `$filter` for the Filter Query of a SharePoint or Dataverse Get items action in Power Automate. Upload a schema CSV and the page reads the Schema XML on the first line, then maps display names to internal names; Chinese internal names and `_xHHHH_` encoded names receive an `OData_` prefix. Add AND or OR conditions with eq, ne, gt, ge, lt, le, substringof, contains, and startswith, quoting text values and leaving numbers and booleans unquoted. Copy the result into Filter Query.

<https://andyang1090.github.io/power-platform-toolbox/odata-filter.html>

### Select Map Generator

Builds the Map JSON for a Power Automate Select action so it can be pasted in text mode. Load fields from a CSV, or from JSON: one object, an array of objects, or a `value` / `body.value` array. Encoded CSV internal names receive the `OData_` prefix; JSON keeps the original field names and leaves nested objects and arrays intact. Entries can be added, removed, cleared, or restored to the automatic map, and a JSON source uses the matching object array in the Select action's From input.

<https://andyang1090.github.io/power-platform-toolbox/select-map.html>

### JSON to Power Fx Formula Generator

Turns JSON returned by Power Automate into a typed `ParseJSON` formula that produces a record or table in Power Apps. Provide a JSON sample, a source formula such as `varJson` or `Flow.Run().result`, a result variable or collection name, and an optional root path (the whole payload or a returned field such as `value`). Arrays default to `ClearCollect` and records default to `Set`; you can also emit the expression only, force Set or ClearCollect, switch the separator between comma and semicolon, or embed the sample JSON in the formula. Types are inferred from every array element, date strings stay Text, and the formula needs an environment that supports `Type` and typed `ParseJSON`.

<https://andyang1090.github.io/power-platform-toolbox/power-apps-json.html>

### List CSV Schema Generator

Set each column's display name, internal name, and field type, then export a UTF-8 BOM CSV with a `ListSchema` first line, column headers, and zero data rows. Import it in Microsoft Lists or SharePoint with New list → From CSV to create a new list. Field types are single line of text, multiple lines of text, choice, multiple choice, number, currency, yes/no, date and time, and hyperlink; the built-in Title column stays in the schema with the internal name Title, and its display name can be edited. Internal names follow display names until you edit them, the column setup can be saved as JSON and loaded again, site-dependent fields such as Lookup and Person are added after the list exists, and the downloaded file should be imported as-is so an Excel resave does not drop the `ListSchema` line.

<https://andyang1090.github.io/power-platform-toolbox/list-csv-schema.html>

### Download and open locally

Download the project: <https://github.com/andyang1090/power-platform-toolbox/archive/refs/heads/main.zip>

Unzip it and open `index.html` in a browser. There is no build step, and no package install or local server is required.
