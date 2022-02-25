(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{549:function(s,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#域"}},[s._v("#")]),s._v(" 域")]),s._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("域，可以理解为 OJ 中的 OJ。"),a("br"),s._v("\n用户有权限为自己创建多个域。（取决于用户组设定，需要 PRIV_CREATE_DOMAIN 权限）。\n同一 Hydro 实例上的多个域间完全独立，仅用户信息相通（您在一个 Hydro 实例上注册账户后，在该实例的所有域中均有效）。")]),s._v(" "),a("h2",{attrs:{id:"创建域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建域"}},[s._v("#")]),s._v(" 创建域")]),s._v(" "),a("p",[s._v("登录账号后，在“我的”选项卡中找到“我的域”，并点击“创建域”，填入以下信息：")]),s._v(" "),a("ul",[a("li",[s._v("ID： 每个域有一个唯一的 ID，将会在域 URL 中体现。"),a("strong",[s._v("创建后无法修改。")])]),s._v(" "),a("li",[s._v("名称： 域的名字，创建后可以更改。")]),s._v(" "),a("li",[s._v("公告： 域主页上显示的公告，创建后可以更改。")]),s._v(" "),a("li",[s._v("avatar： 域头像，与用户头像同理，可以使用 "),a("code",[s._v("gravatar:email")]),s._v(" 或 "),a("code",[s._v("qq:id")]),s._v(" 或 "),a("code",[s._v("github:name")]),s._v(" 或 "),a("code",[s._v("url:link")]),s._v(" 的格式添加。将会在“我的域”界面内显示。")])]),s._v(" "),a("p",[s._v("创建域后，您将在此域中拥有管理员权限，可以在域内进行添加题目/创建比赛等操作。")]),s._v(" "),a("h2",{attrs:{id:"初始化讨论节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化讨论节点"}},[s._v("#")]),s._v(" 初始化讨论节点")]),s._v(" "),a("p",[s._v("您可以在“管理域”选项卡中点击“初始化讨论节点”按钮初始化讨论节点。")]),s._v(" "),a("h2",{attrs:{id:"访问控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问控制"}},[s._v("#")]),s._v(" 访问控制")]),s._v(" "),a("p",[a("strong",[s._v("未登录用户将默认使用 "),a("code",[s._v("guest")]),s._v(" 权限，登录用户将默认使用 "),a("code",[s._v("default")]),s._v(" 权限。")]),s._v("（所以将登陆用户设为 "),a("code",[s._v("default")]),s._v(" 权限后并不会显示在“管理用户”页内，这也表示所有用户默认不会出现在管理列表中）"),a("br"),s._v("\n所以将一个用户的权限设为 "),a("code",[s._v("default")]),s._v(" 和将用户移出该域是等价的。")]),s._v(" "),a("p",[s._v("对于不在列表中的用户，点击右上角“添加用户”，在左侧选中用户，右侧选择权限组，再点击“确定”即可。")]),s._v(" "),a("h2",{attrs:{id:"创建比赛"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建比赛"}},[s._v("#")]),s._v(" 创建比赛")]),s._v(" "),a("p",[s._v("若您想要创建比赛，您可以在“比赛”选项卡中点击“创建一个比赛”按钮，并填写：")]),s._v(" "),a("ul",[a("li",[s._v("规则；")]),s._v(" "),a("li",[s._v("标题；")]),s._v(" "),a("li",[s._v("开始日期，时间；")]),s._v(" "),a("li",[s._v("持续时间；")]),s._v(" "),a("li",[s._v("题目： 此比赛包含的题目的 "),a("strong",[s._v("ID")]),s._v("，若有多个则用逗号分隔；")]),s._v(" "),a("li",[s._v("内容： 该比赛的详细介绍；")]),s._v(" "),a("li",[s._v("是否 Rated： 该比赛是否会改变参加选手的 RP。")])]),s._v(" "),a("p",[s._v("设置完后可点击“创建”按钮创建比赛。")]),s._v(" "),a("p",[s._v("在比赛中可以进入 "),a("code",[s._v("/contest/<id>/broadcast")]),s._v("（即比赛公告页网址后面加一个 "),a("code",[s._v("/broadcast")]),s._v("） 对所有参赛选手发布比赛公告，所有参与比赛的选手都会收到私信提醒，且他们已打开的比赛页面将弹出公告弹窗。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),a("p",[s._v("若因为删除比赛内题目导致比赛无法打开，可以通过 "),a("code",[s._v("/contest/<id>/edit")]),s._v("（即比赛页面后加上 "),a("code",[s._v("/edit")]),s._v("）直接访问比赛编辑页并修正配置文件。")])]),s._v(" "),a("h2",{attrs:{id:"创建作业"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建作业"}},[s._v("#")]),s._v(" 创建作业")]),s._v(" "),a("p",[s._v("若您想要创建作业，您可以在“作业”选项卡中点击“创建作业”按钮，并填写：")]),s._v(" "),a("ul",[a("li",[s._v("标题；")]),s._v(" "),a("li",[s._v("开始日期、时间；")]),s._v(" "),a("li",[s._v("结束日期、时间；")]),s._v(" "),a("li",[s._v("最长延期；")]),s._v(" "),a("li",[s._v("延期递交扣分规则；")]),s._v(" "),a("li",[s._v("题目：此作业包含的题目的 "),a("strong",[s._v("ID")]),s._v("，若有多个则用逗号分隔；")]),s._v(" "),a("li",[s._v("内容：该作业的详细介绍。")])]),s._v(" "),a("p",[s._v("之后点击“创建”按钮进行创建。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),a("p",[s._v("若因为删除作业内题目导致作业无法打开，可以通过 "),a("code",[s._v("/homework/<id>/edit")]),s._v("（即作业页面后加上 "),a("code",[s._v("/edit")]),s._v("）直接访问作业编辑页并修正配置文件。")])]),s._v(" "),a("h2",{attrs:{id:"创建训练"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建训练"}},[s._v("#")]),s._v(" 创建训练")]),s._v(" "),a("p",[s._v("若您想要创建训练，您可以在“训练” 项卡中点击“新建训练计划”，填写以下信息：")]),s._v(" "),a("ul",[a("li",[s._v("标题：该训练的标题；")]),s._v(" "),a("li",[s._v("简介：该训练的简介，会与标题同时显示在列表页面中；")]),s._v(" "),a("li",[s._v("说明：该训练的详细信息；")]),s._v(" "),a("li",[s._v("计划：该训练的具体题目及计划信息，其格式如下：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[\n  {章节详细信息},\n  {章节详细信息},\n  ...\n  {章节详细信息}\n]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("其中，“章节详细信息”的包含以下部分：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("_id")]),s._v("：章节数字编号；")]),s._v(" "),a("li",[a("code",[s._v("title")]),s._v("：章节标题；")]),s._v(" "),a("li",[a("code",[s._v("requireNids")]),s._v("：训练此章节之前需要完成的章节数字编号，若无要求则留空，若有多个则使用逗号分隔；")]),s._v(" "),a("li",[a("code",[s._v("pids")]),s._v("：此章节中包含的题目的 "),a("strong",[s._v("ID")]),s._v("，若有多个则使用逗号分隔。")])]),s._v(" "),a("p",[a("strong",[s._v("举例")]),s._v("：若要在训练中创建三个章节，章节中分别有 "),a("strong",[s._v("ID")]),s._v(" 为 1，2，3 的题目。其中章节一、二无前置条件，章节三需要同时完成章节一、二后才能进行，则格式如下：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"入门"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"requireNids"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pids"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"精通"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"requireNids"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pids"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"大师"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"requireNids"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pids"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),a("p",[s._v("若因为删除训练计划内题目导致训练计划无法打开，可以通过 "),a("code",[s._v("/training/<id>/edit")]),s._v("（即训练计划页面后加上 "),a("code",[s._v("/edit")]),s._v("）直接访问训练计划编辑页并修正配置文件。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);