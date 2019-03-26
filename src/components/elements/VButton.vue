<template>
  <button class="v-button" @click="click">
    <div class="v-button__content">
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
.v-button
  width: 100px
  height: 35px
  border: none
  display: flex
  background-color: transparent
  &:hover
    cursor: pointer
  &:focus
    outline: none
  &:active
    -moz-box-shadow: 0 2px 5px rgba(0,0,0,0.5)
    -webkit-box-shadow: 0 2px 5px rgba(0,0,0,0.5)
    box-shadow: 0 2px 5px rgba(0,0,0,0.5)
  &__content
    font-family: ProximaNovaRegular
    display: flex
    justify-content: center
    align-items: center
    display: flex
    flex: 1 0 auto
    font-size: 14px
    font-weight: normal
    font-style: normal
    font-stretch: normal
    line-height: normal
    letter-spacing: normal
    color: #ffffff
  &--white
    background-color: #f8f8f8
    .v-button__content
      color: #333333
    &:hover
      background-color: #dfdfdf
  &--blue
    background-color: #0284c6
    &:hover
      background-color: #0a608b
  &--fullsize
    width: 100%
</style>
