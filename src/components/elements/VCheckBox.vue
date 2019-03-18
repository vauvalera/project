<template>
  <button class="v-btn" @click="click">
    <div class="v-btn_content">
      <slot>{{ title }}</slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'Vbutton',
  props: {
    title: String
  },
  methods: {
    click (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="sass">
.v-btn
  background-color: #0284c6
  border: none
  &:hover
    cursor: pointer
  &:focus
    background-color: #0a608b
  &_content
    font-family: ProximaNova
    font-size: 13.8px
    font-weight: normal
    font-style: normal
    font-stretch: normal
    line-height: normal
    letter-spacing: normal
    text-align: center
    color: #ffffff
</style>
