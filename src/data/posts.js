export const posts = [
  {
    id: 1,
    slug: 'hello-world',
    title: '你好，世界！我的第一篇博客',
    date: '2024-03-01',
    category: '生活',
    tags: ['随笔', '开始'],
    summary: '欢迎来到我的个人博客！这是我的第一篇文章，记录我开始写博客的初衷与想法。',
    content: `
## 欢迎来到我的博客

你好！我叫 **Coke**，这是我的个人博客。

### 为什么要写博客？

写博客对我来说有很多意义：

1. **记录成长** — 把学习过程中的思考和感悟记录下来
2. **分享知识** — 希望自己的经历能帮助到其他人
3. **锻炼写作** — 通过写作整理思路，提升表达能力

### 博客内容

这个博客会涵盖以下方向：

- 💻 技术分享（前端、Vue、JavaScript 等）
- 📖 读书笔记
- 🌱 生活感悟
- 🎯 项目复盘

感谢你的到来，希望我们能在这里相遇、相知。

> 路漫漫其修远兮，吾将上下而求索。— 屈原
    `
  },
  {
    id: 2,
    slug: 'vue3-getting-started',
    title: 'Vue 3 入门指南：从零开始构建现代前端应用',
    date: '2024-03-10',
    category: '技术',
    tags: ['Vue3', 'JavaScript', '前端'],
    summary: 'Vue 3 带来了 Composition API、更好的 TypeScript 支持和显著的性能提升。本文将带你快速上手 Vue 3 的核心概念。',
    content: `
## Vue 3 入门指南

Vue 3 是 Vue.js 的最新主要版本，带来了许多令人兴奋的新特性。

### 核心新特性

#### 1. Composition API

Composition API 是 Vue 3 最重要的新特性之一：

\`\`\`javascript
import { ref, computed, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const doubled = computed(() => count.value * 2)

    function increment() {
      count.value++
    }

    onMounted(() => {
      console.log('组件已挂载')
    })

    return { count, doubled, increment }
  }
}
\`\`\`

#### 2. \`<script setup>\` 语法糖

更简洁的写法：

\`\`\`vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
const increment = () => count.value++
</script>

<template>
  <button @click="increment">点击次数: {{ count }}</button>
</template>
\`\`\`

#### 3. 性能提升

Vue 3 的虚拟 DOM 重写带来了：
- 更快的组件挂载速度
- 更小的打包体积
- 更好的 Tree-shaking 支持

### 快速开始

\`\`\`bash
npm create vite@latest my-vue-app -- --template vue
cd my-vue-app
npm install
npm run dev
\`\`\`

Vue 3 的生态系统非常丰富，结合 Vite、Pinia、Vue Router 可以快速构建现代化的前端应用。
    `
  },
  {
    id: 3,
    slug: 'github-pages-deploy',
    title: '如何将 Vue3 项目部署到 GitHub Pages',
    date: '2024-03-20',
    category: '技术',
    tags: ['GitHub', 'CI/CD', '部署'],
    summary: '本文介绍如何使用 GitHub Actions 自动化构建并将 Vue3 项目部署到 GitHub Pages，实现免费托管静态网站。',
    content: `
## 部署 Vue3 到 GitHub Pages

GitHub Pages 提供免费的静态网站托管服务，结合 GitHub Actions 可以实现自动化部署。

### 步骤一：配置 Vite

在 \`vite.config.js\` 中设置 \`base\` 选项：

\`\`\`javascript
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [vue()],
})
\`\`\`

### 步骤二：创建 GitHub Actions 工作流

在 \`.github/workflows/deploy.yml\` 中：

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/deploy-pages@v4
\`\`\`

### 步骤三：启用 GitHub Pages

1. 进入仓库的 **Settings** → **Pages**
2. 将 Source 设置为 **GitHub Actions**
3. 推送代码，等待 Actions 执行完毕

### 访问你的网站

部署完成后，你的网站将可以通过以下 URL 访问：

\`https://<用户名>.github.io/<仓库名>/\`

整个流程非常简单，只需几分钟即可完成配置！
    `
  },
  {
    id: 4,
    slug: 'my-2024-reading-list',
    title: '2024 年读书清单与感悟',
    date: '2024-03-25',
    category: '读书',
    tags: ['读书', '年度总结'],
    summary: '分享我 2024 年读过的几本好书，以及这些书带给我的思考与改变。',
    content: `
## 2024 年读书清单

今年我读了不少好书，在此分享几本对我影响最大的。

### 技术类

**《Vue.js 设计与实现》- 霍春阳**

这本书深入讲解了 Vue.js 的响应式原理、虚拟 DOM、编译器等核心机制。读完后对框架的理解上升了一个台阶。

⭐⭐⭐⭐⭐

**《JavaScript 高级程序设计（第4版）》**

JS 红宝书，经典中的经典。每次读都有新的收获。

⭐⭐⭐⭐⭐

### 思维与方法论

**《思考，快与慢》- 丹尼尔·卡尼曼**

诺贝尔经济学奖得主的经典之作。书中介绍了人类思维的两种系统：

- **系统一**：快速、直觉、自动
- **系统二**：缓慢、理性、深思熟虑

了解自己的思维模式，才能做出更好的决策。

⭐⭐⭐⭐⭐

**《深度工作》- 卡尔·纽波特**

在信息爆炸的时代，专注力是稀缺资源。这本书教会了我如何进行深度工作，提高效率。

⭐⭐⭐⭐

### 总结

阅读是最廉价的投资，但回报却是巨大的。希望 2025 年能继续保持阅读的习惯，读更多好书。
    `
  }
]

export const getPostBySlug = (slug) => posts.find(p => p.slug === slug)
export const getPostsByCategory = (category) => posts.filter(p => p.category === category)
export const categories = [...new Set(posts.map(p => p.category))]
