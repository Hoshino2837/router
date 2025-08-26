<template>
  <div class="about-container">
    <h2 class="page-title">关于我们</h2>
    <div class="about-content">
      <p>本网站是一个资讯展示平台，致力于为用户提供及时、准确的新闻信息。</p>
      
      <div class="about-section">
        <h3>网站介绍</h3>
        <p>我们专注于收集和发布各类社会新闻、本地资讯，旨在为公众提供透明、客观的信息来源。</p>
      </div>
      
      <div class="about-section">
        <h3>联系方式</h3>
        <p>邮箱：contact@example.com</p>
        <p>电话：123-4567-8910</p>
      </div>
      
      <div class="about-section">
        <h3>免责声明</h3>
        <p>本网站发布的信息均来自公开渠道，仅供参考。如涉及侵权，请联系我们删除。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
}

.page-title {
  color: #2c3e50;
  border-bottom: 2px solid #42b983;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.about-content {
  line-height: 1.8;
}

.about-section {
  margin: 25px 0;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 5px;
}

h3 {
  color: #333;
  margin-top: 0;
}
</style>