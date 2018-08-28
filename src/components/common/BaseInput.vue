<template>
  <div class="input-wrapper">
    <div class="input-content">
      <div class="input-center">
        <svg class="icon" slot="left-icon" style="width: 30px; height: 30px">
          <slot name="left-icon"></slot>
        </svg>
        <input id="inputText" class="input-setting" v-model="inputValue" @input="$emit('input', inputValue)" type="text">
        <svg class="icon right-icon" slot="right-icon" style="width: 30px; height: 30px" @click="clickRightBtn">
          <use xlink:href="#icon-qingchu"></use>
        </svg>
      </div>
    </div>
    <div class="input-tip">
      <slot name="tip"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  },

  data () {
    return {
      inputValue: '',
      startTime: '',
      endTime: '',
      showText: ''
    }
  },

  mounted () {
  },

  methods: {
    clickRightBtn () {
      this.$emit('clickRightBtn')
      this.inputValue = ''
    }
  }
}
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-center {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.left-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.input-setting {
  width: 300px;
  height: 30px;
  padding-left: 8px;
}

.right-icon {
  position: absolute;
  right: 0;
  top: 50%;
  width: 30px;
  height: 30px;
  transform: translateY(-50%);
}
</style>
