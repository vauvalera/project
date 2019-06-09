<template>
 <div class="v-text__svg">
  <svgicon
    :name="svg.name"
    :width="svg.width"
    :height="svg.height"
  />
  <v-text :text="text"></v-text>
 </div>
</template>

<script>
import VText from './VText.vue';

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

<style lang="sass">
.v-text
    &__svg
        display: flex
        align-items: baseline
        svg
            margin-right: 8px
    &--green
        color: #81c03d
</style>
