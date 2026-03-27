<template>
  <div class="about-page container">
    <!-- Profile Section -->
    <section class="profile">
      <div class="avatar-large">
        <span class="avatar-emoji">🧑‍💻</span>
      </div>
      <div class="profile-info">
        <h1>关于我</h1>
        <p class="tagline">前端开发者 · 技术博主 · 终身学习者</p>
        <p class="bio">
          你好！我是 <strong>Coke</strong>，一名热爱前端开发的工程师。
          我专注于 Vue.js、JavaScript 和现代 Web 技术，致力于构建高质量、用户友好的 Web 应用。
        </p>
        <p class="bio">
          这个博客是我记录技术探索、读书感悟和生活点滴的地方。
          希望我的文章能给你带来一些启发和帮助。
        </p>
        <div class="social-links">
          <a href="https://github.com/Coke0807" target="_blank" rel="noopener" class="social-btn">
            <span>🐙</span> GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <h2 class="section-title">技术栈</h2>
      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-card">
          <span class="skill-icon">{{ skill.icon }}</span>
          <div class="skill-info">
            <span class="skill-name">{{ skill.name }}</span>
            <div class="skill-bar-track">
              <div class="skill-bar" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
          <span class="skill-level">{{ skill.level }}%</span>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="timeline-section">
      <h2 class="section-title">成长历程</h2>
      <div class="timeline">
        <div v-for="item in timeline" :key="item.year" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-year">{{ item.year }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <h2 class="section-title">联系我</h2>
      <div class="contact-card">
        <p>📮 如果你有任何问题、建议或者合作意向，欢迎通过以下方式联系我：</p>
        <ul class="contact-list">
          <li>
            <span class="contact-icon">🐙</span>
            <span>GitHub：</span>
            <a href="https://github.com/Coke0807" target="_blank" rel="noopener">github.com/Coke0807</a>
          </li>
          <li>
            <span class="contact-icon">📝</span>
            <span>博客：通过文章评论留言</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
const skills = [
  { name: 'Vue.js / Vue 3', icon: '💚', level: 90 },
  { name: 'JavaScript / ES6+', icon: '🟡', level: 88 },
  { name: 'HTML5 / CSS3', icon: '🎨', level: 92 },
  { name: 'Vite / Webpack', icon: '⚡', level: 80 },
  { name: 'Git / GitHub', icon: '🐙', level: 85 },
  { name: 'Node.js', icon: '💚', level: 70 },
]

const timeline = [
  {
    year: '2024',
    title: '开始写技术博客',
    desc: '创建个人博客，开始分享技术学习心得与生活感悟。'
  },
  {
    year: '2023',
    title: '深入学习 Vue 3',
    desc: '系统学习 Vue 3 Composition API、Pinia 状态管理，参与多个实际项目开发。'
  },
  {
    year: '2022',
    title: '进入前端开发领域',
    desc: '开始系统学习前端开发，掌握 HTML、CSS、JavaScript 基础，接触 Vue.js 框架。'
  },
  {
    year: '2021',
    title: '接触编程',
    desc: '第一次接触编程，被代码的魅力深深吸引，开始自学之路。'
  },
]
</script>

<style scoped>
.about-page {
  padding: 2.5rem 1.5rem 4rem;
}

/* Profile */
.profile {
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--color-border);
  flex-wrap: wrap;
}

.avatar-large {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.avatar-emoji {
  font-size: 3.5rem;
}

.profile-info {
  flex: 1;
  min-width: 240px;
}

.profile-info h1 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.tagline {
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: 1rem;
}

.bio {
  color: var(--color-muted);
  line-height: 1.8;
  margin-bottom: 0.75rem;
}

.social-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
  flex-wrap: wrap;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  background: var(--color-card);
  color: var(--color-text);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;
}

.social-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

/* Section Title */
.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-primary);
  display: inline-block;
}

/* Skills */
.skills-section {
  margin-bottom: 3rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.skill-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 0.875rem 1rem;
}

.skill-icon {
  font-size: 1.4rem;
}

.skill-info {
  flex: 1;
  min-width: 0;
}

.skill-name {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.35rem;
}

.skill-bar-track {
  height: 5px;
  background: var(--color-border);
  border-radius: 3px;
  overflow: hidden;
}

.skill-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: 3px;
  transition: width 1s ease;
}

.skill-level {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-primary);
  flex-shrink: 0;
}

/* Timeline */
.timeline-section {
  margin-bottom: 3rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-border);
}

.timeline-item {
  position: relative;
  margin-bottom: 1.75rem;
}

.timeline-dot {
  position: absolute;
  left: -1.75rem;
  top: 5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-primary);
  border: 2px solid white;
  box-shadow: 0 0 0 2px var(--color-primary);
}

.timeline-content {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 1rem 1.25rem;
}

.timeline-year {
  display: inline-block;
  background: var(--color-primary);
  color: white;
  padding: 0.15rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.timeline-content h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.35rem;
}

.timeline-content p {
  font-size: 0.9rem;
  color: var(--color-muted);
  line-height: 1.6;
}

/* Contact */
.contact-section {
  margin-bottom: 2rem;
}

.contact-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
}

.contact-card > p {
  color: var(--color-muted);
  margin-bottom: 1rem;
  line-height: 1.7;
}

.contact-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: var(--color-text);
}

.contact-list a {
  color: var(--color-primary);
  text-decoration: none;
}

.contact-list a:hover {
  text-decoration: underline;
}
</style>
