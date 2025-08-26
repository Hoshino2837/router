<template>
  <div class="home-container">
    <h2 class="page-title">首页</h2>
    <div class="home-content">
      <p>欢迎访问本网站，这里提供最新资讯和相关信息。</p>
      <div class="news-preview">
        <h3>最新新闻</h3>
        <div class="news-card">
          <h4><router-link to="/news">六旬老太横穿马路被撞 目击者称其速度"堪比年轻人奔跑"</router-link></h4>
          <p class="preview-text">今日下午3时许，月野市星路与花火路交叉口发生一起交通事故，一名62岁老太未走斑马线横穿马路时与小轿车碰撞...</p>
          <p class="preview-time">发布时间：2025年08月25日 15:30</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home-container {
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

.home-content {
  line-height: 1.6;
}

.news-preview {
  margin-top: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
}

.news-card {
  margin-top: 15px;
  padding: 15px;
  background-color: white;
  border-left: 3px solid #42b983;
}

.preview-text {
  color: #666;
  margin: 10px 0;
}

.preview-time {
  color: #999;
  font-size: 14px;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>