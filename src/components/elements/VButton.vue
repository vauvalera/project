<template>
  <button class="v-btn">
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
      default: 'Купить'
    }
  }
}
</script>

<style scoped lang="sass">
.v-btn
  min-width: 99.4px
  height: 35px
  background-color: #0284c6
  border: none
  display: inline-flex
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
</style>
