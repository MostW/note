<template>
  <div>
    <div id="div1" class="toolbar">
    </div>
    <div style="padding: 5px 0; color: #ccc">中间隔离带</div>
    <div id="div2" class="text"> <!--可使用 min-height 实现编辑区域自动增加高度-->
        <p>请输入内容</p>
    </div>

    <div id="div3" class="div3"></div>
  </div>
</template>

<script>
const E = require('wangeditor') // 使用 npm 安装
export default {
  data () {
    return {
    }
  },
  // 生成编辑器的代码要写在dom节点挂载完成之后
  mounted () {
    let editor1 = new E('#div1', '#div2')
    // var editor = new E(document.getElementById('editor'))
    editor1.create()
    editor1.txt.html('<p>用 JS 设置的内容</p>')
    editor1.txt.append('<p>追加的内容</p>')

    let editor2 = new E('#div3')
    editor2.create()
  }
}
</script>

<style scoped>
.toolbar {
  justify-content: center;
  /* margin: 0 auto; */
}
.text {
  color: aqua;
  border: 1px solid rgba(53, 53, 53, 0.5);
}

.div3 {
  margin: 64px auto;
  width: 800px;
}
</style>
