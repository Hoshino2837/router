<template>
    {{ $route.params.name }}
  <div class="news-container">
     <h1 class="news-title">震惊！六十老太横穿马路风驰电掣造车撵</h1>
    <!-- 新闻元信息（时间、地点标注） -->
    <div class="news-meta">
      发布时间：2025年08月25日 15:30 | 事发地点：月野市星路与花火路交叉口 | 记者：林晓
    </div>

    <!-- 新闻导语 -->
    <div class="news-lead">
      今日下午3时许，月野市星路与花火路交叉口发生一起交通事故。一名62岁老太未走斑马线横穿马路时，与正常行驶的小轿车发生碰撞。所幸事故未造成严重伤亡，目前警方已介入调查。
    </div>

    <!-- 新闻正文 -->
    <div class="news-content">
      <p class="news-paragraph">
        据现场目击者王先生介绍，事发时他正驾车等待红灯，亲眼目睹了事故全过程。"当时老太太从路东的绿化带突然冲出来，根本没看两边来车，跑得比我家二十多岁的小伙子还快！"王先生回忆，肇事车辆是一辆白色家用轿车，当时正以约40公里/小时的速度正常行驶，司机发现老太时立即急刹，但距离过近未能完全避开，车头右侧与老太发生轻微碰撞，老太随即倒地。
      </p>

      <p class="news-paragraph">
        记者在现场看到，事发路段为双向四车道，中间设有隔离绿化带，事发点距离最近的斑马线约80米。周边商户李女士告诉记者，该路段因临近菜市场，常有老年人横穿马路，"之前就见过好几次险况，尤其是早晚高峰，有些老人图方便不愿意绕路走斑马线"。
      </p>

      <p class="news-paragraph">
        肇事司机张先生在接受采访时仍心有余悸："我刚过路口就看到人冲出来，马上踩了刹车，ABS都触发了，还是蹭到了。下车一看老太太捂着膝盖哼哼，我赶紧报了警和急救。"张先生出示的行车记录仪显示，事故发生前车辆未超速，且他在经过路口时已有减速动作。
      </p>

      <p class="news-paragraph">
        随后赶到的120急救人员对老太进行了初步检查，发现其右膝擦伤、左手腕轻微扭伤，暂无骨折或颅内损伤迹象。医护人员将其送往附近的月野市第一医院进一步观察，据医院消息，老太生命体征平稳，预计次日即可出院。
      </p>

      <p class="news-paragraph">
        处理事故的交警告诉记者，该路段近半年已发生3起类似行人横穿马路引发的交通事故，均未造成严重后果。"我们在绿化带设置过隔离栏，但总被人破坏，也曾安排过志愿者劝导，但效果有限。"
      </p>

      <!-- 专家观点 -->
      <div class="news-expert">
        <p><strong>交通专家分析：</strong> 月野市交通研究所李教授表示，老年人交通安全意识薄弱和"就近心理"是此类事故高发的主要原因。建议在事故多发路段增设智能警示装置，当检测到行人横穿时，可同步对过往车辆发出声光预警，同时加强对老年人的交通安全宣传教育。</p>
      </div>

      <!-- 警方提醒模块 -->
      <div class="news-reminder">
        <p><strong>警方提醒：</strong> 根据《道路交通安全法》第62条规定，行人通过路口或横过道路，应当走人行横道或过街设施；通过有交通信号灯的人行横道，应当按照交通信号灯指示通行。违反上述规定引发事故的，行人需承担相应责任。驾驶员驾车时需保持安全车速，遇路口务必减速观察，确保安全通行。</p>
      </div>

      <!-- 后续进展 -->
      <div class="news-update">
        <p><strong>最新进展：</strong> 截至发稿前，交警部门已调取周边监控录像，事故责任认定工作正在进行中。市政部门表示将在本周内对该路段绿化带增设防翻越护栏，并规划新增一处人行横道。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.news-title {
  color: #1a1a1a;
  font-size: 24px;
  margin-bottom: 15px;
  line-height: 1.3;
}
.news-meta {
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.news-lead {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 20px;
  color: #333;
}
.news-content {
  color: #444;
  line-height: 1.8;
}
.news-paragraph {
  margin-bottom: 18px;
}
.news-expert {
  background-color: #f9f9f9;
  padding: 15px;
  margin: 20px 0;
  border-left: 3px solid #42b983;
}
.news-reminder {
  background-color: #fff8e1;
  padding: 15px;
  margin: 20px 0;
  border: 1px solid #ffe082;
}
.news-update {
  margin-top: 30px;
  padding-top: 15px;
  border-top: 1px dashed #ccc;
  color: #d32f2f;
}
</style>