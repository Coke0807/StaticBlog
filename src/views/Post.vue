<template>
  <div class="post-page">
    <div v-if="post" class="container">
      <!-- Breadcrumb -->
      <nav class="breadcrumb">
        <router-link to="/">首页</router-link>
        <span> / </span>
        <router-link to="/blog">博客</router-link>
        <span> / </span>
        <span>{{ post.title }}</span>
      </nav>

      <!-- Post Header -->
      <header class="post-header">
        <div class="post-meta">
          <span class="post-category">{{ post.category }}</span>
          <span class="post-date">📅 {{ post.date }}</span>
        </div>
        <h1 class="post-title">{{ post.title }}</h1>
        <p class="post-summary">{{ post.summary }}</p>
        <div class="post-tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">🏷 {{ tag }}</span>
        </div>
      </header>

      <!-- Post Body -->
      <article class="post-body" v-html="renderedContent"></article>

      <!-- Navigation -->
      <div class="post-nav">
        <router-link to="/blog" class="back-btn">← 返回博客列表</router-link>
      </div>
    </div>

    <!-- 404 -->
    <div v-else class="not-found container">
      <span class="not-found-icon">🔍</span>
      <h2>文章未找到</h2>
      <p>该文章不存在或已被删除</p>
      <router-link to="/blog" class="btn-primary-link">← 返回博客列表</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getPostBySlug } from '../data/posts.js'

const route = useRoute()
const post = computed(() => getPostBySlug(route.params.slug))

// Simple markdown renderer
const renderedContent = computed(() => {
  if (!post.value) return ''
  let content = post.value.content

  // Code blocks (must be processed first)
  const codeBlocks = []
  content = content.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const safeLang = lang.replace(/[^a-zA-Z0-9]/g, '')
    const placeholder = `__CODEBLOCK_${codeBlocks.length}__`
    codeBlocks.push(
      `<pre class="code-block"><code class="lang-${safeLang}">${escapeHtml(code.trim())}</code></pre>`
    )
    return placeholder
  })

  // Inline code
  content = content.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
  // Bold
  content = content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  // Italic
  content = content.replace(/\*(.+?)\*/g, '<em>$1</em>')
  // Blockquote
  content = content.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
  // H2
  content = content.replace(/^## (.+)$/gm, '<h2>$1</h2>')
  // H3
  content = content.replace(/^### (.+)$/gm, '<h3>$1</h3>')
  // H4
  content = content.replace(/^#### (.+)$/gm, '<h4>$1</h4>')
  // Ordered list items (mark with data attribute)
  content = content.replace(/^\d+\. (.+)$/gm, '<li data-ol>$1</li>')
  // Unordered list items
  content = content.replace(/^[-*] (.+)$/gm, '<li>$1</li>')
  // Wrap consecutive ordered <li data-ol> in <ol>
  content = content.replace(/(<li data-ol>[\s\S]*?<\/li>(\s*<li data-ol>[\s\S]*?<\/li>)*)/g,
    (match) => `<ol>${match.replace(/ data-ol/g, '')}</ol>`
  )
  // Wrap consecutive unordered <li> (not data-ol) in <ul>
  content = content.replace(/(<li>[\s\S]*?<\/li>(\s*<li>[\s\S]*?<\/li>)*)/g,
    (match) => `<ul>${match}</ul>`
  )
  // Paragraphs for non-HTML lines
  content = content.replace(/^(?!<[a-zA-Z/!])(.+)$/gm, '<p>$1</p>')

  // Restore code blocks
  codeBlocks.forEach((block, i) => {
    content = content.replace(`__CODEBLOCK_${i}__`, block)
  })

  return content
})

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
</script>

<style scoped>
.post-page {
  padding: 2rem 0 4rem;
  min-height: calc(100vh - 120px);
}

.breadcrumb {
  font-size: 0.85rem;
  color: var(--color-muted);
  margin-bottom: 2rem;
}

.breadcrumb a {
  color: var(--color-primary);
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.breadcrumb span {
  margin: 0 0.25rem;
}

/* Post Header */
.post-header {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.post-category {
  background: var(--color-primary);
  color: white;
  padding: 0.2rem 0.7rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
}

.post-date {
  color: var(--color-muted);
  font-size: 0.9rem;
}

.post-title {
  font-size: clamp(1.6rem, 4vw, 2.25rem);
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.post-summary {
  color: var(--color-muted);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: var(--color-tag-bg);
  color: var(--color-tag);
  padding: 0.2rem 0.65rem;
  border-radius: 4px;
  font-size: 0.82rem;
}

/* Post Body */
.post-body {
  max-width: 720px;
  line-height: 1.8;
  color: var(--color-text);
  font-size: 1.02rem;
}

.post-body :deep(h2) {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 2rem 0 1rem;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid var(--color-border);
  color: var(--color-text);
}

.post-body :deep(h3) {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1.5rem 0 0.75rem;
  color: var(--color-text);
}

.post-body :deep(h4) {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 1.25rem 0 0.5rem;
  color: var(--color-text);
}

.post-body :deep(p) {
  margin-bottom: 1rem;
}

.post-body :deep(ul) {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.post-body :deep(li) {
  margin-bottom: 0.4rem;
}

.post-body :deep(blockquote) {
  border-left: 4px solid var(--color-primary);
  padding: 0.75rem 1rem;
  margin: 1rem 0;
  background: var(--color-primary-light);
  border-radius: 0 8px 8px 0;
  font-style: italic;
  color: var(--color-muted);
}

.post-body :deep(.code-block) {
  background: #1e1e2e;
  color: #cdd6f4;
  padding: 1.25rem 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1rem 0;
  font-size: 0.9rem;
  line-height: 1.6;
}

.post-body :deep(.inline-code) {
  background: var(--color-primary-light);
  color: var(--color-primary);
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9em;
  font-family: monospace;
}

.post-body :deep(strong) {
  font-weight: 700;
  color: var(--color-text);
}

/* Nav */
.post-nav {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.back-btn {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transition: gap 0.2s;
}

.back-btn:hover {
  text-decoration: underline;
}

/* Not Found */
.not-found {
  text-align: center;
  padding: 5rem 0;
}

.not-found-icon {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
}

.not-found h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.not-found p {
  color: var(--color-muted);
  margin-bottom: 1.5rem;
}

.btn-primary-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
}

.btn-primary-link:hover {
  text-decoration: underline;
}
</style>
