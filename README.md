# berlinfog homepage

新版个人主页：Astro 静态站点，文章仍使用 Markdown。旧 Jekyll 文章已迁入，并为旧的日期链接生成 301 跳转。

## 本地预览

```bash
npm install
npm run dev
```

访问 `http://localhost:4321`。

## 写文章

在 `src/content/posts/` 新建一个 Markdown 文件：

```md
---
title: 新文章标题
date: 2026-07-21
tags: [notes]
---

正文写在这里。
```

## 改主题

- `src/config.ts`：站点名称、简介、社交链接、默认皮肤。
- `src/styles/global.css`：三套皮肤的颜色变量和所有视觉样式。
- 右上角的月亮和星星按钮可在浏览器中即时切换明暗与配色。

GitHub Pages 使用 `.github/workflows/deploy.yml` 自动部署。部署前在仓库 **Settings → Pages** 中将 Source 设为 **GitHub Actions**。
