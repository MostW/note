<template>
  <div class="content">
    <nav class="navigation">
      <div class="nav-ul">
        <li class="first-li li-item" @click="tag = 0" :class="{'selected': tag === 0}">时间状态栏</li>
        <li class="second-li li-item" @click="tag = 1" :class="{'selected': tag === 1}">vue自定义指令</li>
        <li class="third-li li-item" @click="tag = 2" :class="{'selected': tag === 2}">消息框</li>
        <li class="fourth-li li-item" @click="tag = 3" :class="{'selected': tag === 3}">wangeditor</li>
      </div>
    </nav>
    <!-- <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg" onload="alert('asd')"> -->
    <!-- vue自定义指令 -->
    <div v-if="tag === 0">
      <count-down></count-down>
    </div>
    <!-- 时间状态栏 -->
    <div v-else-if="tag === 1">
      <long-press></long-press>
    </div>
    <!-- 消息框 -->
    <div v-else-if="tag === 2">
      <base-message-box>
        测试消息组件
      </base-message-box>
    </div>
    <!-- 富文本编辑器 -->
    <div v-else-if="tag === 3">
      <base-editor></base-editor>
    </div>
  </div>
</template>

<script>
import LongPress from '@/components/LongPress'
import CountDown from '@/components/CountDown'
import BaseMessageBox from '@/components/common/BaseMessageBox'
import BaseEditor from '@/components/common/BaseEditor.vue'
export default {
  components: {
    LongPress,
    CountDown,
    BaseMessageBox,
    BaseEditor
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

/* .first-li {
} */

.li-item {
  margin-right: 15px;
  cursor: pointer;
}

/* .second-li {
  margin-left: 15px;
  cursor: disabled;
} */

.selected {
  border-bottom: 2px solid aqua;
}
</style>
