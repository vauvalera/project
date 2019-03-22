<template>
  <p
    class="v-text"
    v-text="text"
  ></p>
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

<style scoped lang="sass">
.v-text
  font-family: ProximaNova
  font-size: 12.8px
  font-weight: 300
  margin: 0
  &--greyish-brown
    color: #4f4f4f
  &--pinkish-grey
    color: #bfbfbf
  &--17
    font-size: 17px
</style>
