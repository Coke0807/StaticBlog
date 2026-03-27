# Coke's Blog — 个人静态博客

一个基于 **Vue 3 + Vite** 构建的纯静态个人博客网站，部署在 GitHub Pages 上。

## 🌐 在线访问

**[https://coke0807.github.io/StaticBlog/](https://coke0807.github.io/StaticBlog/)**

## ✨ 功能特性

- 📝 博客文章列表，支持按分类筛选
- 📖 Markdown 内容渲染（标题、代码块、引用等）
- 🏠 首页展示最新文章与统计信息
- 👤 关于页面（技术栈、成长历程、联系方式）
- 📱 响应式设计，完美适配移动端
- 🚀 GitHub Actions 自动构建并部署到 GitHub Pages

## 🛠️ 技术栈

- [Vue 3](https://vuejs.org/) + Composition API
- [Vite](https://vite.dev/) — 极速构建工具
- [Vue Router 4](https://router.vuejs.org/) — 客户端路由（Hash 模式）
- GitHub Actions — CI/CD 自动部署

## 🚀 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 📦 部署到 GitHub Pages

1. 进入仓库 **Settings → Pages**
2. 将 Source 设置为 **GitHub Actions**
3. 推送代码到 `main` 分支，GitHub Actions 将自动构建并部署

## 📝 添加新文章

编辑 `src/data/posts.js`，在 `posts` 数组中添加新的文章对象。
