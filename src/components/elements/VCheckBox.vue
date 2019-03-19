<template>
  <label class="checkbox" >
    <input type="checkbox" v-bind:checked="value" @click="click"/>
    <div class="checkbox_text">{{ title }}</div>
  </label>
</template>

<script>
export default {
  name: 'VCheckBox',
  props: {
    value: Boolean,
    title: String
  },
  methods: {
    click (e) {
      this.$emit('change', e.target.checked)
    }
  }
}
</script>

<style scoped lang="sass">
.checkbox
  display: inline-flex
  align-items: baseline
  font-size: 14px
  line-height: 14px
  cursor: pointer
  user-select: none
  margin: 2px 0
  flex-basis: 50%
  input
    position: relative
    cursor: pointer
    color: #4a4a4a
    & + .checkbox_text
      margin-left: 10px
      width: 51px
      line-height: 20px
    &:checked
      &:after
        height: 14px
        width: 14px
        position: absolute
        content: '\2713'
        color: #fff
        display: inline-block
        text-align: center
        background-color: #3e8bdc
        border: none
      & + .checkbox_text
        color: #3e8bdc
    &:after
      content: ''
      position: absolute
      height: 13px
      width: 13px
      background: #fff
      border: 1px solid #d7d7d7

</style>
