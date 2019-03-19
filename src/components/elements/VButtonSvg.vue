<template>
  <v-button class="v-btn--svg">
    <svgicon
     :name="svg.name"
     :width="svg.width"
     :height="svg.height"
    ></svgicon>
    {{ title }}
  </v-button>
</template>

<script>
import VButton from './VButton'

export default {
  name: 'VButtonSvg',
  components: { VButton },
  props: {
    title: {
      type: String,
      default: 'Купить'
    },
    svg: {
      type: Object,
      default () {
        return {
          name: 'cart',
          width: '20',
          height: '19'
        }
      }
    }
  }
}
</script>

<style scoped lang="sass">
.v-btn
  &--svg
    svg
      margin-right: 10px
</style>
