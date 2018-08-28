// 这里涉及的知识点，1.子组件想父组件传值的.sync方法。2.阿里巴巴矢量图标库用symbol的方式引入使用。3.时间的比较。3.子组件的封装。
<template>
  <div class="content">
    <base-input v-model="startTime" @clickRightBtn="clearInput1">
      <use xlink:href="#icon-kaishishijian" slot="left-icon" width="30px" height="30px"></use>
      <p slot="tip">请输入开始时间，时间格式为2018-08-27 12:12:12</p>
    </base-input>
    <base-input v-model="endTime" @clickRightBtn="clearInput2">
      <use xlink:href="#icon-jieshushijian" slot="left-icon"></use>
      <p slot="tip">请输入结束时间，时间格式为2018-08-27 12:12:12</p>
    </base-input>
    <button class="start-btn" :class="{'can-not-click': !hasContent}" @click.once="startCount">开始计时</button>
    <div class="countDown">
        <span>倒计时：</span>
        <span>{{showText}}</span>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/common/BaseInput'
export default {
  components: {
    BaseInput
  },

  data () {
    return {
      showText: '',
      startTime: '',
      endTime: ''
    }
  },

  computed: {
    hasContent () {
      if (this.startTime || this.endTime) {
        return true
      } else {
        return false
      }
    }
  },

  methods: {
    clearInput1 () {
      this.startTime = ''
    },
    clearInput2 () {
      this.endTime = ''
    },
    startCount () {
      console.log('开始计数')
      let that = this
      setInterval(function () {
        that.compareTime(that.startTime, that.endTime) // 不能用this
      }, 1000)
    },
    compareTime (sTime, eTime) {
      let currentTime = new Date()
      let startTime = new Date(sTime)
      let stopTime = new Date(eTime)
      let totalSecond = parseInt((startTime - currentTime) / 1000)
      let nowToEnd = parseInt((stopTime - currentTime) / 1000)
      if (totalSecond > 0) {
        this.showText = this.formatSeconds(totalSecond)
        console.log(this.showText)
      } else if (totalSecond <= 0) {
        // 已经进入区间
        if (nowToEnd > 0) {
          this.showText = '已经进入区间了'
          console.log('已经进入区间了')
        } else {
          this.showText = '已经结束了'
          console.log('已经结束了')
        }
      }
    },
    formatSeconds (s) {
      var t
      if (s > -1) {
        var hour = Math.floor(s / 3600)
        var min = Math.floor(s / 60) % 60
        var sec = s % 60
        if (hour < 10) {
          t = '0' + hour + ':'
        } else {
          t = hour + ':'
        }

        if (min < 10) {
          t += '0'
        }
        t += min + ':'
        if (sec < 10) {
          t += '0'
        }
        t += sec
      }
      return t
    }
  }
}
</script>

<style scoped>
.content {
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px; */
}

.input {
  width: 100px;
  height: 20px;
}

.countDown {
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translateX(-50%);
  height: 32px;
  line-height: 32px;
  /* margin-left: 16px; */
  padding-left: 8px;
  padding-right: 8px;
  background: rgba(47,206,99,0.1);
  border-radius: 4px;
  color: #2fce63;
}

.can-not-click {
  cursor: not-allowed;
}
</style>
