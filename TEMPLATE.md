# 新文章生成模板

> **使用方法**: 复制模板 → 替换 `{{占位符}}` → 填写内容 → 更新列表页和 sitemap

---

## 模板 A：普通博客文章

用于：哲学解读、风水指南、五行说明等

```html
<!DOCTYPE html>
<html lang="en">
<head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1N8MHJD8CS"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-1N8MHJD8CS');
</script>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="{{文章描述，150字以内，英文}}">
<meta name="keywords" content="{{关键词，英文逗号分隔}}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://ichingzhen.com/blog/{{文件名}}.html">
<meta property="og:title" content="{{文章标题}} — I Ching Wisdom">
<meta property="og:description" content="{{简短描述}}">
<meta property="og:type" content="article"><meta property="og:url" content="https://ichingzhen.com/blog/{{文件名}}.html">
<meta property="article:published_time" content="{{YYYY-MM-DD}}">
<title>{{文章标题}} — I Ching Wisdom · 易经智慧网 Blog</title>
<link rel="stylesheet" href="../css/style.css"><link rel="stylesheet" href="../css/blog.css">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><text y='28' font-size='28'>☯</text></svg>">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"BlogPosting","headline":"{{文章标题}}","description":"{{描述}}","datePublished":"{{YYYY-MM-DD}}","dateModified":"{{YYYY-MM-DD}}","author":{"@type":"Person","name":"I Ching Wisdom"}}</script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6088657581972288" crossorigin="anonymous"></script>
</head>
<body>
<nav class="navbar"><div class="nav-container"><a href="../" class="nav-logo"><span class="logo-icon">☯</span><span>I Ching Wisdom · 易经智慧网</span></a><button class="menu-toggle" aria-label="Toggle menu"><span></span><span></span><span></span></button><ul class="nav-links"><li><a href="../">Home<span class="nav-zh">首页</span></a></li><li><a href="index.html">Blog<span class="nav-zh">文章</span></a></li><li><a href="iching-original.html">I Ching Text<span class="nav-zh">易经原文</span></a></li><li><a href="../tools.html">Tools<span class="nav-zh">工具</span></a></li><li><a href="../guestbook.html">Community<span class="nav-zh">互动社区</span></a></li><li><a href="../about.html">About<span class="nav-zh">关于</span></a></li></ul></div></nav>
<main class="post-page"><article class="post-container">
<nav class="breadcrumb"><a href="../">Home<span class="nav-zh">首页</span></a><span>›</span><a href="index.html">Articles</a><span>›</span>{{分类}}</nav>
<header class="post-header"><span class="post-category">{{分类}}</span><h1>{{文章标题}}</h1><div class="post-meta"><span>{{日期，如 May 11, 2026}}</span><span>{{阅读时长}} min read</span></div></header>

<div class="ad-container ad-inline"><div class="ad-slot">Advertisement</div></div>
<div class="post-content">

<!-- ====== 正文内容从这里开始 ====== -->

<p>开头段落...</p>
<div class="zh-text">开头段落的中文翻译。</div>

<!-- 可点击术语（弹出解释） -->
<p>The <span class="explain-term">{{中文术语}}<span class="explain-pop"><span class="pop-zh">{{中文}}</span><span class="pop-en">{{英文解释}}</span></span></span> is...</p>

<!-- 大段引用 -->
<blockquote>古文原文<br>英文翻译</blockquote>
<div class="zh-text">中文翻译。</div>

<h2>二级标题</h2>

<p>段落内容...</p>

<ul>
<li>列表项</li>
</ul>

<div class="zh-text">中文翻译。</div>

<!-- 内联解释（开关控制显示/隐藏） -->
<div class="explain-inline"><span class="ei-zh">{{中文术语}}</span> — <span class="ei-en">{{英文详细解释}}</span></div>

<div class="ad-container ad-inline"><div class="ad-slot">Advertisement</div></div>

<div class="key-point"><strong>Key Takeaway:</strong> 核心总结（英文）</div>
<div class="zh-text"><strong>核心要点：</strong>核心总结（中文）</div>

<!-- ====== 正文内容结束 ====== -->

</div>
<div class="ad-container ad-inline"><div class="ad-slot">Advertisement</div></div>
<div class="share-buttons"><span style="color:var(--text-secondary);font-size:0.85rem;margin-right:8px;">Share:</span><button class="share-btn" onclick="window.open('https://twitter.com/intent/tweet?text={{标题URL编码}}&url='+encodeURIComponent(window.location.href))" aria-label="Share on Twitter">𝕏</button><button class="share-btn" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(window.location.href))" aria-label="Share on Facebook">f</button><button class="share-btn" onclick="navigator.clipboard.writeText(window.location.href);this.textContent='✓';setTimeout(()=>this.textContent='🔗',2000)" aria-label="Copy link">🔗</button></div>
</article>
<section class="related-posts"><h3>Related Articles</h3><div class="related-grid">
<a href="{{相关文章1}}.html" class="related-card"><h4>{{标题1}}</h4><p>{{简短描述1}}</p></a>
<a href="{{相关文章2}}.html" class="related-card"><h4>{{标题2}}</h4><p>{{简短描述2}}</p></a>
</div></section></main>
<footer class="footer"><div class="footer-content"><div class="footer-links"><a href="../">Home</a><a href="index.html">Blog</a><a href="iching-original.html">I Ching Text</a><a href="../tools.html">Tools</a><a href="../guestbook.html">Community</a><a href="../about.html">About</a><a href="../contact.html">Contact</a><a href="../privacy-policy.html">Privacy Policy</a></div><p class="footer-copy">&copy; <span class="current-year">2026</span> I Ching Wisdom · 易经智慧网 — 100% Free Forever.</p></div></footer>
<button class="back-to-top" aria-label="Back to top">↑</button>
<script src="../js/main.js"></script>
</body></html>
```

### 关键元素说明

| 元素 | 用途 |
|------|------|
| `<span class="explain-term">` | 可点击术语，弹出 popup 解释框。`pop-zh`=中文, `pop-en`=英文 |
| `<div class="zh-text">` | 中文翻译，默认隐藏，右上角"中文翻译"按钮切换 |
| `<div class="explain-inline">` | 内联解释，默认隐藏，"注释解释"按钮切换。`ei-zh`=中文, `ei-en`=英文 |
| `<blockquote>` | 古文引用或重点语录 |
| `<div class="key-point">` | 核心要点突出显示 |
| `<div class="ad-container ad-inline">` | 广告位（建议每2-3个段落插入一个） |

### 分类选项

- `I Ching` — 易经相关
- `I Ching Philosophy` — 易经哲学解读
- `Feng Shui` — 风水相关
- `Five Elements` — 五行相关
- `Chinese Philosophy` — 中国哲学（道德经等）
- `I Ching Original Text · 易经原文` — 易经原文系列

---

## 模板 B：易经原文系列

用于：每个卦的原文翻译和解释页面

见 `blog/iching-original.html` — 乾卦第一（完整参考）。

关键差异：
- 需要 `iching-original-toolbar` 工具条 + 中文翻译/注释解释按钮的内嵌 JS
- 使用 `.hexagram-header`、`.classical-chinese`、`.line-item`、`.english-trans` 等专用样式
- 每卦包含：卦辞、爻辞（6条+用九/用六）、彖传、象传、文言传（乾坤）
- 底部有 `.next-chapter-box` 指向下一章
- 翻译/解释 JS 逻辑内嵌在页面中（不依赖 `lang.js`）

---

## 发布流程

每次新增或修改文章后，需要同步更新以下文件：

### 1. `blog/index.html` — 博客列表页
在 `<div class="blog-list">` 最前面添加：
```html
<article><span class="list-category">分类</span><h3 class="list-title"><a href="文件名.html">文章标题</a></h3><p class="list-excerpt">简短摘要</p><div class="list-meta"><span>日期</span><span>X min read</span></div></article>
```

### 2. `sitemap.xml` — 网站地图
在合适位置添加：
```xml
<url><loc>https://ichingzhen.com/blog/文件名.html</loc><lastmod>YYYY-MM-DD</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
```

### 3. `index.html` — 首页（可选）
如有重大更新，更新首页 Daily Update 栏目中的今日更新和下次计划。

---

## 样式参考

### 可用 CSS 变量 (`css/style.css :root`)

```
--bg-deep: #f5f5f7          # 深背景
--bg-primary: #ffffff       # 主背景
--text-primary: #1d1d1f     # 主文字色
--text-secondary: #424245   # 次文字色
--text-muted: #86868b       # 弱文字色
--glass-bg: rgba(255,255,255,0.92)  # 毛玻璃背景
--glass-border: rgba(0,0,0,0.08)    # 毛玻璃边框
--radius-md: 12px
--radius-lg: 20px
```

### 图片/图标

- **favicon**: 内嵌 SVG ☯
- **背景图**: `images/bg-landscape.png`（通过 CSS body 设置）
- **文章内图标**: 使用 emoji 或 Unicode 符号

---

## 重要约定

1. **所有文件 UTF-8 编码** 保存
2. **日期格式**: 文章内用 `Month DD, 2026`，meta 用 `2026-MM-DD`
3. **域名**: `https://ichingzhen.com`（canonical + og:url）
4. **Google Analytics**: `G-1N8MHJD8CS`
5. **AdSense**: `ca-pub-6088657581972288`
6. **版权年份**: footer 中用 `<span class="current-year">` 由 JS 自动填充
7. **不要写 HTML 注释**（保持简洁）
8. **每个英文段落配上中文翻译**（`.zh-text`）
