<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <header class="app-header">
      <div class="logo-container">
        <img alt="Vue logo" src="./assets/logo.png" class="logo">
        <h1 class="site-title">城市新闻资讯</h1>
      </div>
      
      <nav class="main-nav">
        <router-link to="/" class="nav-link" active-class="active">首页</router-link>
        <!-- <router-link to="/news" class="nav-link" active-class="active">新闻</router-link> -->
        <router-link to="/about" class="nav-link" active-class="active">关于</router-link>
      </nav>
    </header>

    <!-- 主要内容区 -->
    <main class="content-container">
      <router-view />
    </main>

    <!-- 页脚 -->
    <footer class="app-footer">
      <p>© 2025 城市新闻资讯平台 | 版权所有</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 头部样式 */
.app-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  padding: 0 20px;
}

.logo-container {
  display: flex;
  align-items: center;
  padding: 15px 0;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  height: 40px;
  margin-right: 15px;
}

.site-title {
  font-size: 1.5rem;
  margin: 0;
  color: #343a40;
}

/* 导航样式 */
.main-nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  gap: 20px;
  border-top: 1px solid #e9ecef;
}

.nav-link {
  color: #495057;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #212529;
  background-color: #e9ecef;
}

.nav-link.active {
  color: white;
  background-color: #42b983;
  font-weight: 500;
}

/* 内容区样式 */
.content-container {
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 30px auto;
  padding: 0 20px;
}

/* 页脚样式 */
.app-footer {
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 20px;
  text-align: center;
  color: #6c757d;
  font-size: 0.9rem;
  margin-top: auto;
}
</style>