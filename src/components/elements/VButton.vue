<template>
  <button class="v-btn" @click="click">
    <div class="v-btn_content">
      <slot>{{ title }}</slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    title: {
      type: String,
      default: 'Купить',
    },
  },
  methods: {
    click(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style scoped lang="sass">
.v-btn
  min-width: 99.4px
  height: 35px
  background-color: #0284c6
  border: none
  display: flex
  &:hover
    cursor: pointer
  &:active
    background-color: #0a608b
  &:focus
    outline: none
  &_content
    font-family: ProximaNova
    display: flex
    justify-content: center
    align-items: center
    display: flex
    flex: 1 0 auto
    font-size: 13.8px
    font-weight: normal
    font-style: normal
    font-stretch: normal
    line-height: normal
    letter-spacing: normal
    color: #ffffff
  &--white
    background-color: #f8f8f8
    .v-btn_content
      color: #333333
    &:active
      background-color: #dfdfdf
  &--fullsize
    width: 100%
</style>
