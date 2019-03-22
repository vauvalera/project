<template>
 <div class="v-text_svg">
  <svgicon
    :name="svg.name"
    :width="svg.width"
    :height="svg.height"
  ></svgicon>
  <v-text :text="text"></v-text>
 </div>
</template>

<script>
import VText from './VText';

export default {
  name: 'VTextSvg',
  components: { VText },
  props: {
    text: {
      type: String,
      default: 'Физический размер',
    },
    svg: {
      type: Object,
      default() {
        return {
          name: 'ok',
          width: '12',
          height: '10',
        };
      },
    },
  },
};
</script>

<style scoped lang="sass">
.v-text
    &_svg
        display: flex
        align-items: center
        svg
            margin-right: 8px
    &--green
        color: #81c03d
</style>
