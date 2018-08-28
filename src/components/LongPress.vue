// 这里涉及的知识：vue自定义指令
<template>
  <div class="content">
    <span>请长按下面的按钮：</span>
    <button v-longpress="increateTime">已经按了{{time}}秒</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: 0 // 长按的时间
    }
  },
  methods: {
    increateTime () {
      this.time += 1
    }
  }
}
</script>

<style scoped>
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: aqua;
}
</style>
