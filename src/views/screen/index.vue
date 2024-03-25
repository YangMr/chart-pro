<script setup></script>
<template>
  <div class="viewport">
    <div class="column">
      <div class="overview panel">
        <div class="inner">123</div>
      </div>
      <div class="monitor panel">
        <div class="inner">456</div>
      </div>
      <div class="point panel">
        <div class="inner">销售地统计</div>
      </div>
    </div>
    <div class="column">
      <div class="map">
        <h3 class="title">设备数据统计</h3>
        <div class="geo">地图</div>
      </div>
      <div class="users panel">
        <div class="inner">全国用户总量统计</div>
      </div>
    </div>
    <div class="column">
      <div class="order panel">
        <div class="inner">1</div>
      </div>
      <div class="sales panel">
        <div class="inner">2</div>
      </div>
      <div class="wrap">
        <div class="channel panel">
          <div class="inner">渠道</div>
        </div>
        <div class="quarter panel">
          <div class="inner">销售进度</div>
        </div>
      </div>
      <div class="top panel">
        <div class="inner">全国热榜</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overview {
  height: 0.5729rem;
  // margin-bottom: 0.1042rem;
}

.monitor {
  height: 2.5rem;
  // margin-bottom: 0.1042rem;
}

.point {
  height: 1.7708rem;
}

.map {
  height: 3.0469rem;
  margin-bottom: 0.1042rem;
  display: flex;
  flex-direction: column;
}
.geo {
  flex: 1;
  background-color: rgba(255, 255, 255, 0.2);
}

.users {
  height: 1.7604rem;
}

.order {
  // margin-bottom: 0.1042rem;
  height: 0.7813rem;
}

.sales {
  // margin-bottom: 0.1042rem;
  height: 1.2917rem;
}

.wrap {
  display: flex;
}

.channel {
  margin-right: 0.0521rem;
}

.channel,
.quarter {
  height: 1.2344rem;
  flex: 1;
  // margin-bottom: 0.1042rem;
}

.top {
  height: 1.4583rem;
}
</style>
