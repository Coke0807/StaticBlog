<template>
  <div class="blog-page container">
    <div class="page-header">
      <h1>博客文章</h1>
      <p>{{ filteredPosts.length }} 篇文章</p>
    </div>

    <!-- Filter Tabs -->
    <div class="filter-tabs">
      <button
        class="filter-btn"
        :class="{ active: activeCategory === '' }"
        @click="activeCategory = ''"
      >全部</button>
      <button
        v-for="cat in categories"
        :key="cat"
        class="filter-btn"
        :class="{ active: activeCategory === cat }"
        @click="activeCategory = cat"
      >{{ cat }}</button>
    </div>

    <!-- Posts List -->
    <div class="posts-list">
      <article
        v-for="post in filteredPosts"
        :key="post.id"
        class="post-item"
      >
        <div class="post-left">
          <div class="post-date-block">
            <span class="post-day">{{ post.date.split('-')[2] }}</span>
            <span class="post-month">{{ monthName(post.date) }}</span>
          </div>
        </div>
        <div class="post-right">
          <div class="post-meta">
            <span class="post-category">{{ post.category }}</span>
            <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <h2 class="post-title">
            <router-link :to="`/blog/${post.slug}`">{{ post.title }}</router-link>
          </h2>
          <p class="post-summary">{{ post.summary }}</p>
          <router-link :to="`/blog/${post.slug}`" class="read-more">阅读全文 →</router-link>
        </div>
      </article>
    </div>

    <div v-if="filteredPosts.length === 0" class="empty-state">
      <span class="empty-icon">📭</span>
      <p>暂无该分类的文章</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { posts, categories } from '../data/posts.js'

const activeCategory = ref('')

const filteredPosts = computed(() =>
  activeCategory.value
    ? posts.filter(p => p.category === activeCategory.value)
    : posts
)

const monthNames = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
const monthName = (dateStr) => {
  const month = parseInt(dateStr.split('-')[1]) - 1
  return monthNames[month]
}
</script>

<style scoped>
.blog-page {
  padding: 2.5rem 1.5rem 4rem;
}

.page-header {
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
}

.page-header p {
  color: var(--color-muted);
  margin-top: 0.25rem;
}

/* Filter Tabs */
.filter-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
}

.filter-btn {
  padding: 0.4rem 1rem;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  background: var(--color-card);
  color: var(--color-muted);
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

/* Posts List */
.posts-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post-item {
  display: flex;
  gap: 1.5rem;
  background: var(--color-card);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: box-shadow 0.2s;
}

.post-item:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
}

.post-left {
  flex-shrink: 0;
}

.post-date-block {
  text-align: center;
  background: var(--color-primary-light);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  min-width: 52px;
}

.post-day {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}

.post-month {
  display: block;
  font-size: 0.72rem;
  color: var(--color-primary);
  margin-top: 0.15rem;
}

.post-right {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.post-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
}

.post-category {
  background: var(--color-primary);
  color: white;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  font-size: 0.78rem;
  font-weight: 600;
}

.tag {
  background: var(--color-tag-bg);
  color: var(--color-tag);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  font-size: 0.78rem;
}

.post-title {
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.4;
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
}

.read-more {
  color: var(--color-primary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  width: fit-content;
}

.read-more:hover {
  text-decoration: underline;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 0;
  color: var(--color-muted);
}

.empty-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 0.75rem;
}

@media (max-width: 480px) {
  .post-item {
    flex-direction: column;
  }
  .post-left {
    display: none;
  }
}
</style>
