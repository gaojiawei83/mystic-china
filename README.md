# I Ching Wisdom · 易经智慧网

> 中华智慧 · 源远流长 — Traditional Chinese Wisdom for the Modern World

**网址**: https://ichingzhen.com  
**Google Analytics 衡量 ID**: `G-1N8MHJD8CS`  
**AdSense**: `ca-pub-6088657581972288`  
**Data Stream ID**: `14854200586`

---

## 项目结构

```
haiwaiyijing/
├── index.html                 # 网站首页（含所有栏目+每日更新+工具预览）
├── about.html                 # 关于我们
├── contact.html               # 联系我们
├── guestbook.html             # 互动社区（Giscus 留言板）
├── tools.html                 # 免费工具栏目
├── privacy-policy.html        # 隐私政策
├── robots.txt                 # SEO robots
├── sitemap.xml                # 网站地图
├── ads.txt                    # AdSense 验证
├── LICENSE                    # MIT 许可证
├── README.md                  # 项目说明
├── TEMPLATE.md                # 新文章模板参考
│
├── css/
│   ├── style.css              # 主样式（导航、Hero、五行、引用、每日更新等）
│   └── blog.css               # 博客样式（列表页、文章页、explain-term、易经原文等）
│
├── js/
│   ├── main.js                # 主 JS（导航、视差、动画、引用轮播、回到顶部等）
│   └── lang.js                # 翻译/解释按钮系统（popup + inline explain）
│
├── images/
│   └── bg-landscape.png       # 背景图
│
└── blog/
    ├── index.html             # 博客文章列表页
    ├── template.html          # 旧模板（已废弃，参考 TEMPLATE.md）
    ├── iching-original.html   # 易经原文系列（第一章：乾卦）
    ├── what-is-iching.html    # 什么是易经？入门指南
    ├── yin-yang-explained.html    # 阴阳详解
    ├── yin-yang-is-tao.html       # 一阴一阳之谓道
    ├── iching-hexagrams.html      # 64卦概览
    ├── iching-quotes.html         # 10句易经名言
    ├── heaven-moves-with-strength.html  # 天行健
    ├── taiji-in-iching.html       # 太极创世
    ├── xi-ci-zhuan.html           # 系辞传哲学
    ├── five-elements-guide.html   # 五行完全指南
    ├── feng-shui-basics.html      # 风水基础
    ├── feng-shui-bedroom.html     # 卧室风水
    ├── feng-shui-colors.html      # 风水颜色
    ├── feng-shui-health.html      # 健康风水
    ├── feng-shui-wealth.html      # 财富风水
    └── taoism-te-ching.html       # 道德经入门
```

## 技术栈

- **纯静态 HTML/CSS/JS** — 不需要构建工具
- **CSS 变量** — 统一颜色体系（`css/style.css` 顶部 `:root` 定义）
- **UTF-8 编码** — 所有文件必须 UTF-8 保存
- **Google Analytics 4** — `G-1N8MHJD8CS`
- **Google AdSense** — `ca-pub-6088657581972288`

## 设计风格

- **苹果极简风格** — 白底 + 水墨山水背景
- **配色** — 黑白色系（`--text-primary: #1d1d1f` 等）
- **字体** — SF Pro Display / PingFang SC / Microsoft YaHei
- **Glassmorphism** — 毛玻璃导航栏（`backdrop-filter: blur(20px)`）

## 中文翻译/解释系统

两种模式，由用户按钮切换（状态保存在 localStorage）:

1. **中文翻译** (`zh-text`) — 每段英文下方显示中文翻译
2. **解释模式** (`explain-inline`) — 显示术语的深度解释

切换按钮和 JS 逻辑在各文章页面中内嵌。

## 易经原文系列的特别说明

`blog/iching-original.html` 是本网站的特色栏目，包含：
- 古文原文（classical-chinese 样式）
- 英文翻译
- 现代中文翻译
- 深度解释（explain-inline）

每个卦一个页面。乾卦（Hexagram 1）已做完，后续的坤卦、屯卦等需要按相同模板创建。

## 每日更新栏目

首页 Hero 下方有一个 `daily-update-section`，展示今日更新和下次计划更新。需要手动更新日期和内容。

## 注意事项

- 所有 HTML 文件头部包含 Google Analytics 和 AdSense 代码
- 每个文章页面有 schema.org JSON-LD 结构化数据
- Open Graph 标签用于社交媒体分享
- 页面 canonical URL 用 `ichingzhen.com` 域名
- 日期格式统一用 `Month DD, YYYY`（英文）

## 导航结构

全站统一6项导航：

```
☯ Logo    Blog    I Ching Text    Tools    Community    About
           文章      易经原文         工具      互动社区      关于
```

- **Blog** → blog/index.html — 所有文章列表
- **I Ching Text** → blog/iching-original.html — 易经原文系列
- **Tools** → tools.html — 免费工具（即将上线）
- **Community** → guestbook.html — Giscus 在线留言板
- **About** → about.html — 关于我们
- 首页 I Ching / Ba Gua / Feng Shui / Five Elements 栏目保留在页面内，不占导航位
- Contact 在 Footer 中，不占主导航

## 新增文章流程

1. 参考 `TEMPLATE.md` 文件
2. 在 `blog/` 目录下创建新 HTML 文件
3. 在 `blog/index.html` 列表最前面添加新条目
4. 更新 `sitemap.xml` 添加新 URL
5. 如需在首页体现，更新 `index.html` 的 Daily Update 栏目
