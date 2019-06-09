<template>
  <p
    class="v-text"
    v-text="text"
  />
</template>

<script>
export default {
  name: 'VText',
  props: {
    text: {
      type: String,
      default: 'Физический размер',
    },
  },
};
</script>

<style lang="sass">
.v-text
  font-family: ProximaNovaRegular, sans-serif
  font-size: 13px
  font-weight: 300
  line-height: normal
  margin: 0
  &--greyish-brown
    color: #4f4f4f
  &--pinkish-grey
    color: #bfbfbf
  &--17
    font-size: 17px
</style>
