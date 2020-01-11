<template>
  <h1 :style="headingStyles">Success!!</h1>
</template>
<script>
export default {
  data () {
    return {
      headingStyles: {
        color: this.color
      }
    }
  },
  props: ['title', 'color']
}
</script>
