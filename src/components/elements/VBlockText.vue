<template>
  <div class="v-block-text">
    <div
      class="v-block-text_item"
      v-for="(item, index) in items"
      :key="index"
    >
        <v-text
          class="v-text--pinkish-grey"
          :text="item.name"
        ></v-text>
        <v-text
          class="v-text--greyish-brown"
          :text="item.value"
        ></v-text>
    </div>
  </div>
</template>

<script>
import VText from './VText';

export default {
  name: 'VBlockText',
  props: {
    items: Array,
  },
  components: {
    VText,
  },
};
</script>

<style scoped lang="sass">
.v-block-text
  &_item
    display: flex
    & > p:first-child
      font-family: ProximaNovaLight
      margin-right: 5px
      font-size: 12px
      line-height: 22px
</style>
