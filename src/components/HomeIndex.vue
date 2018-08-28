<template>
  <div class="content">
    <nav class="navigation">
      <div class="nav-ul">
        <li class="first-li" @click="tag = 0" :class="{'selected': tag === 0}">时间状态栏</li>
        <li class="second-li" @click="tag = 1" :class="{'selected': tag === 1}">vue自定义指令</li>
      </div>
    </nav>
    <!-- vue自定义指令 -->
    <div v-if="tag === 0">
      <count-down></count-down>
    </div>
    <!-- 时间状态栏 -->
    <div v-else>
      <long-press></long-press>
    </div>
  </div>
</template>

<script>
import LongPress from '@/components/LongPress'
import CountDown from '@/components/CountDown'
export default {
  components: {
    LongPress,
    CountDown
  },
  data () {
    return {
      tag: 0 // 切换导航的标记
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.content {
}

.navigation {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}

.first-li {
  margin-right: 15px;
  cursor: pointer;
}

.second-li {
  margin-left: 15px;
  cursor: disabled;
}

.selected {
  border-bottom: 2px solid aqua;
}
</style>
