<template>
  <div>
    <base-input ></base-input>
  </div>
</template>

<script>
import BaseInput from '@/components/common/BaseInput.vue'
export default {
  components: {
    BaseInput
  },
  data () {
    return {
      price: 10,
      quantity: 2
    }
  }
}
</script>

