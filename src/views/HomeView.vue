<template>
  <div class="home-container">
    <h2 class="page-title">首页</h2>
    <div class="home-content">
      <p>欢迎访问本网站，这里提供最新资讯和相关信息。</p>
      <div class="news-preview">
        <h3>最新新闻</h3>
        <div class="news-card">
          <h4> <ul>
        <li><router-link to="/NewsDetails1/八旬老太">八旬老太撞大运</router-link></li>
        <li><router-link to="/NewsDetails2/母猪下崽">母猪下崽成2D</router-link></li>
        <li><router-link to="/NewsDetails3/少女得病">少女确诊狂犬病</router-link></li>
        <li><router-link to="/NewsDetails4/外星人近">外星人离咱很近</router-link></li>
    </ul></h4>
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