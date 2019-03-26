<template>
  <v-button>
    <svgicon
     :name="svg.name"
     :width="svg.width"
     :height="svg.height"
    ></svgicon>
    {{ title }}
  </v-button>
</template>

<script>
import VButton from './VButton';
import '../../assets/fonts/animations.sass';

export default {
  name: 'VButtonSvg',
  components: { VButton },
  props: {
    title: String,
    svg: {
      type: Object,
      default() {
        return {
          name: 'cart',
          width: '20',
          height: '19',
        };
      },
    },
  },
};
</script>

<style scoped lang="sass">
.v-button
  &:hover
    animation: rotate 1s 1
  svg
    margin-right: 10px
  &--svg
    width: 100%
    height: 20px
    &:active
      box-shadow: none
    svg
      margin-right: 0
</style>
