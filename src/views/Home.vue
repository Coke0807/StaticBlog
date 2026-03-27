<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="avatar">
          <span class="avatar-emoji">🧑‍💻</span>
        </div>
        <h1 class="hero-title">你好，我是 <span class="highlight">Coke</span></h1>
        <p class="hero-subtitle">前端开发者 · 技术博主 · 终身学习者</p>
        <p class="hero-desc">
          热爱编程，热爱生活。在这里分享我的技术探索、读书感悟与生活点滴。
        </p>
        <div class="hero-actions">
          <router-link to="/blog" class="btn btn-primary">阅读博客</router-link>
          <router-link to="/about" class="btn btn-outline">关于我</router-link>
        </div>
      </div>
    </section>

    <!-- Recent Posts -->
    <section class="recent-posts container">
      <h2 class="section-title">最新文章</h2>
      <div class="posts-grid">
        <article
          v-for="post in recentPosts"
          :key="post.id"
          class="post-card"
        >
          <div class="post-meta">
            <span class="post-category">{{ post.category }}</span>
            <span class="post-date">{{ post.date }}</span>
          </div>
          <h3 class="post-title">
            <router-link :to="`/blog/${post.slug}`">{{ post.title }}</router-link>
          </h3>
          <p class="post-summary">{{ post.summary }}</p>
          <div class="post-tags">
            <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <router-link :to="`/blog/${post.slug}`" class="read-more">
            阅读更多 →
          </router-link>
        </article>
      </div>
      <div class="view-all">
        <router-link to="/blog" class="btn btn-outline">查看全部文章</router-link>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats container">
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-number">{{ totalPosts }}</span>
          <span class="stat-label">篇文章</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ totalCategories }}</span>
          <span class="stat-label">个分类</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ totalTags }}</span>
          <span class="stat-label">个标签</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { posts } from '../data/posts.js'

const recentPosts = computed(() => posts.slice(0, 3))
const totalPosts = computed(() => posts.length)
const totalCategories = computed(() => [...new Set(posts.map(p => p.category))].length)
const totalTags = computed(() => [...new Set(posts.flatMap(p => p.tags))].length)
</script>

<style scoped>
.home {
  min-height: 100vh;
}

/* Hero */
.hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  color: white;
  padding: 5rem 1.5rem;
  text-align: center;
}

.hero-content {
  max-width: 680px;
  margin: 0 auto;
}

.avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 3rem;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.highlight {
  color: #ffd700;
}

.hero-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 1rem;
}

.hero-desc {
  font-size: 1rem;
  opacity: 0.8;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-primary {
  background: white;
  color: var(--color-primary);
}

.btn-primary:hover {
  background: #f0f4ff;
  transform: translateY(-2px);
}

.btn-outline {
  border: 2px solid white;
  color: white;
  background: transparent;
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

/* Posts Section */
.recent-posts {
  padding: 4rem 1.5rem;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 0.75rem;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 48px;
  height: 3px;
  background: var(--color-primary);
  border-radius: 2px;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.post-card {
  background: var(--color-card);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border: 1px solid var(--color-border);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.post-category {
  background: var(--color-primary-light);
  color: var(--color-primary);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}

.post-date {
  color: var(--color-muted);
  font-size: 0.85rem;
}

.post-title {
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.5;
}

.post-title a {
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.2s;
}

.post-title a:hover {
  color: var(--color-primary);
}

.post-summary {
  color: var(--color-muted);
  font-size: 0.9rem;
  line-height: 1.6;
  flex: 1;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  background: var(--color-tag-bg);
  color: var(--color-tag);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  font-size: 0.78rem;
}

.read-more {
  color: var(--color-primary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: auto;
  transition: gap 0.2s;
}

.read-more:hover {
  text-decoration: underline;
}

.view-all {
  text-align: center;
}

.view-all .btn-outline {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.view-all .btn-outline:hover {
  background: var(--color-primary-light);
}

/* Stats */
.stats {
  padding: 3rem 1.5rem;
  border-top: 1px solid var(--color-border);
}

.stats-grid {
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
}

.stat-label {
  display: block;
  color: var(--color-muted);
  font-size: 0.9rem;
  margin-top: 0.25rem;
}
</style>
