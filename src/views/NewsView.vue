<template>
  <div class="news-view-container">
    <!-- 根据路由参数显示对应新闻内容 -->
    <component 
      :is="currentNewsComponent" 
      v-if="currentNewsComponent"
    />
    
    <!-- 若未选择新闻则显示提示 -->
    <div class="no-news提示" v-else>
      <p>请从首页选择要查看的新闻</p>
    </div>
  </div>
</template>

<script>
// 导入所有新闻详情组件
import NewsDetailsView1 from './NewsDetailsView1.vue'
import NewsDetailsView2 from './NewsDetailsView2.vue'
import NewsDetailsView3 from './NewsDetailsView3.vue'
import NewsDetailsView4 from './NewsDetailsView4.vue'

export default {
  name: 'NewsView',
  data() {
    return {
      // 新闻组件映射表，与路由参数对应
      newsComponents: {
        '八旬老太': NewsDetailsView1,
        '母猪下崽': NewsDetailsView2,
        '少女得病': NewsDetailsView3,
        '外星人近': NewsDetailsView4
      }
    }
  },
  computed: {
    // 根据路由参数获取当前需要显示的新闻组件
    currentNewsComponent() {
      const newsKey = this.$route.params.name
      return this.newsComponents[newsKey]
    }
  },
  watch: {
    // 监听路由变化，确保路由参数改变时重新加载组件
    '$route'(to) {
      // 路由变化时触发组件重新渲染
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>
.news-view-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.no-news提示 {
  text-align: center;
  padding: 50px 0;
  color: #666;
  font-size: 18px;
}
</style>