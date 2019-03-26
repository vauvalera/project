<template>
  <v-button @click="click">
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
  methods: {
    click(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style lang="sass">
.v-button
  svg
    margin-right: 10px
  &__svg
    width: 100%
    height: 20px
    &:active
      box-shadow: none
    &:hover
      animation: rotate 1s 1
    svg
      margin-right: 0
</style>
