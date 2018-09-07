<template>
  <div class="content">
    <div class="horn"></div>
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
$box-height: 20px;
$box-width: 100px;
$box-background: gray;
$box-border-width: 2px;
$box-border-color: aqua;
$horn-width: 10px;
.horn {
  position: absolute;
  right: $box-height + 4;
  top: -$horn-width / 1.4;
  transform: rotate(45deg);
  width: $horn-width;
  height: $horn-width;
  border-width: $box-border-width 0 0 $box-border-width;
  border-style: solid;
  border-color: $box-border-color;
  // background: $box-background;
}
.content {
  position: relative;
  // background: $box-background;
  float: right;
  color: $box-border-color;
  padding: 0 $box-height;
  width: $box-width;
  height: $box-height;
  line-height: $box-height;
  border-radius: $box-height / 2;
  border-bottom: $box-border-width solid $box-border-color;
  &::before {
    content: '';
    position: absolute;
    width: $box-width;
    height: $box-height;
    top: -$box-border-width;
    left: 0;
    border-width: $box-border-width 0 $box-border-width $box-border-width;
    border-style: solid;
    border-color: $box-border-color;
    border-radius: $box-height/2 0 0 $box-height/2;
  }
  &::after {
    content: '';
    position: absolute;
    width: $box-height;
    height: $box-height;
    top: -$box-border-width;
    right: 0;
    border-width: $box-border-width $box-border-width $box-border-width 0;
    border-style: solid;
    border-color: $box-border-color;
    border-radius: 0 $box-height/2 $box-height/2 0;
  }
}
</style>
