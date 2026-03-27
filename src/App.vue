<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink, useRoute } from 'vue-router'

const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
</script>

<template>
  <div id="app-wrapper">
    <!-- Navigation -->
    <header class="navbar">
      <div class="navbar-inner container">
        <router-link to="/" class="nav-logo" @click="closeMenu">
          ✍️ <span>Coke's Blog</span>
        </router-link>

        <nav class="nav-links" :class="{ open: menuOpen }">
          <router-link to="/" class="nav-item" @click="closeMenu">首页</router-link>
          <router-link to="/blog" class="nav-item" @click="closeMenu">博客</router-link>
          <router-link to="/about" class="nav-item" @click="closeMenu">关于</router-link>
        </nav>

        <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="切换菜单">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </header>

    <!-- Page Content -->
    <main>
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-inner">
        <p>© 2024 Coke's Blog · Built with ❤️ &amp; Vue 3</p>
        <nav class="footer-links">
          <router-link to="/">首页</router-link>
          <router-link to="/blog">博客</router-link>
          <router-link to="/about">关于</router-link>
        </nav>
      </div>
    </footer>
  </div>
</template>

<style>
/* ========== CSS Variables / Theme ========== */
:root {
  --color-primary: #4f7fff;
  --color-secondary: #7c5cfc;
  --color-primary-light: #eef2ff;
  --color-text: #1a1a2e;
  --color-muted: #6b7280;
  --color-card: #ffffff;
  --color-border: #e5e7eb;
  --color-tag-bg: #f3f4f6;
  --color-tag: #374151;
  --color-bg: #f9fafb;
}

/* ========== Reset & Base ========== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

#app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

a {
  color: inherit;
}

/* ========== Container ========== */
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ========== Navbar ========== */
.navbar {
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.nav-logo {
  font-size: 1.15rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.nav-logo:hover {
  color: var(--color-primary);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-item {
  text-decoration: none;
  color: var(--color-muted);
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  transition: all 0.2s;
}

.nav-item:hover,
.nav-item.router-link-active {
  color: var(--color-primary);
  background: var(--color-primary-light);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.bar {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all 0.2s;
}

@media (max-width: 640px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: white;
    border-bottom: 1px solid var(--color-border);
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  }

  .nav-links.open {
    display: flex;
  }

  .nav-item {
    width: 100%;
    text-align: center;
    padding: 0.65rem;
  }
}

/* ========== Footer ========== */
.footer {
  background: white;
  border-top: 1px solid var(--color-border);
  padding: 1.5rem 0;
  margin-top: 2rem;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.footer-inner p {
  color: var(--color-muted);
  font-size: 0.875rem;
}

.footer-links {
  display: flex;
  gap: 1.25rem;
}

.footer-links a {
  color: var(--color-muted);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--color-primary);
}
</style>

