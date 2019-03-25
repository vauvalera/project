<template>
 <img
   class="v-image"
   :src="src"
   :width="width"
   :height="height"
 />
</template>

<script>
export default {
  name: 'VImage',
  props: {
    src: {
      type: String,
      default: require('../../assets/images/img.png'),
    },
    width: {
      type: String,
      default: '278',
    },
    height: {
      type: String,
    },
  },
};
</script>

<style scoped lang="sass">
.v-image
</style>
