<template>
 <img
   class="v-image"
   :src="src"
 />
</template>

<script>
export default {
  name: 'VImage',
  props: {
    src: {
      type: String,
      default: require('../../assets/img.png'),
    },
  },
};
</script>

<style scoped lang="sass">
.v-image
</style>
