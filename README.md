# 毛小娟 Joyce · 个人网站

纯静态网站，没有框架和构建步骤。首页是简短介绍与内容目录，访客可以按兴趣进入四个独立分类。

## 内容放在哪里

| 页面 | 文件 | 内容 |
|---|---|---|
| 首页 | `index.html` | 一句介绍、四个分类入口 |
| 认识 Joyce | `about.html` | 个人介绍、经历、顾问身份 |
| 轻咨询 | `consulting.html` | 适合人群、常见问题、讨论重点、三个约定、预约步骤 |
| 咨询手记 | `notes.html` | 匿名案例的问题与项目方向，支持按主题筛选 |
| 联系我 | `contact.html` | 微信二维码、公众号名片 |

共用样式在 `assets/site.css`，移动端菜单和手记筛选在 `assets/site.js`。每个页面都有主导航、当前分类提示、页脚导航；不依赖网络字体或第三方脚本。

2026-10-10 文案优化：以访客的具体问题为起点，说明讨论重点与微信预约步骤。参考 [GrowthMentor](https://www.growthmentor.com/)、[Clarity](https://clarity.fm/how-it-works)、[April Dunford](https://www.aprildunford.com/consultant) 的服务表达；页面文案围绕 Joyce 的原有资料重新撰写。

案例目前展示问题与项目方向；发布实际成果、评价或数据前，需有对应事实。咨询时长与交流方式由双方在微信确认，费用沿用「两杯咖啡钱，随喜就好」。

## 本地预览

在项目目录运行 `zsh 启动预览.command`，保留终端窗口，再在浏览器访问 http://127.0.0.1:8787/index.html 。启动文件已有执行权限时，也可直接双击。按 Control+C 停止服务。若浏览器提示「拒绝连接」，重新运行这个启动文件即可。

也可以双击 `index.html` 离线查看，或在项目目录运行：

```sh
python3 -m http.server 8787 --bind 127.0.0.1
```

然后打开 http://127.0.0.1:8787/ 。按 Control+C 停止服务。

## 怎么改内容

直接编辑对应 HTML 文件中的文字即可。修改分类名称或导航链接时，请同时更新五个页面的顶部导航、移动端导航和页脚导航。

### 加一个新案例

1. 打开 `notes.html`，搜索「案例卡片模板」。
2. 复制一个完整的 `<article class="note" ...>…</article>`，粘贴到 `notes-list` 中。
3. 改期数、匿名标签、标题和描述；`data-note-category` 填 `ai`（AI 与效率）或 `knowledge`（知识管理）。
4. 新主题需要在 `notes-toolbar` 中增加一个筛选按钮，按钮的 `data-note-filter` 与案例的 `data-note-category` 保持一致。
5. 更新 `notes-count` 中的公开手记数；`about.html` 中的轻咨询期数只在实际完成新一期咨询后更新。

目前已公开两篇手记，VOL.03 仍在整理中。第三篇发布后移除对应的 `notes-pending` 提示。页面上的三期轻咨询与两篇公开手记是不同的计数。

### 换照片或联系方式

| 资产 | 文件 |
|---|---|
| 人像照片 | `assets/photo.jpg` |
| 原始 New Moon logo | `assets/logo.jpg` |
| 个人微信二维码 | `assets/wechat-qr.jpg` |
| 名片（含公众号二维码） | `assets/card.jpg` |
| 浏览器图标 | `assets/favicon.png` |

文件名不变即可直接替换。二维码保留一圈白边。本人照片使用原图彩色，不添加黑白滤镜；取景可在 `assets/site.css` 中搜索 `object-position` 微调。首页旧链接 `#contact` 会自动转到联系页。

## 发布

正式地址：https://joycemao2026.github.io/

GitHub Pages 按仓库现有设置，从 `main` 分支自动发布，不需要构建。更新这五个 HTML 文件和 `assets/` 后，等待 Pages 部署完成即可。

`linear-local/` 是线性资本网站的本地参考副本，不参与 Joyce 网站运行。
