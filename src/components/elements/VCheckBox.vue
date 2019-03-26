<template>
  <div class="checkbox">
    <input
      type="checkbox"
      :checked="checked"
      :id="code"
      @change="change"
    />
    <div class="checkbox__block"></div>
    <label
      class="checkbox__label"
      :for="code"
      v-if="title"
    >
      {{ title }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'VCheckBox',
  props: {
    value: Boolean,
    object: Object,
    code: String,
    name: String,
  },
  computed: {
    checked() {
      if (this.object) {
        return this.object.value;
      }

      return this.value;
    },
    title() {
      if (this.object) {
        return this.object.name;
      }

      return this.name;
    },
  },
  methods: {
    change(e) {
      if (this.object) {
        this.$emit('change', this.object, e.target.checked);
        return;
      }

      if (this.code) {
        this.$emit('change', this.code, e.target.checked);
        return;
      }

      this.$emit('change', e.target.checked);
    },
  },
};
</script>

<style lang="sass">
.checkbox
  display: inline-flex
  position: relative
  align-items: flex-start
  user-select: none
  margin: 2px 0
  flex-basis: 50%
  font-family: 'ProximaNovaLight', Sans-serif
  font-size: 14px
  line-height: normal
  &__block
    cursor: pointer
    width: 14px
    height: 14px
    border: 1px solid #d7d7d7
    box-sizing: border-box
    background: #fff
  &__label
    margin-left: 10px
    cursor: pointer
    max-width: 51px
  input[type=checkbox]
    margin: 0
    position: absolute
    cursor: pointer
    left: 0
    top: 0
    width: 14px
    height: 14px
    opacity: 0
    &:checked
      & + .checkbox__block
        background: #3e8bdc url('../../assets/images/ok.jpg') no-repeat center
        border-color: #3e8bdc
      & + .checkbox__block + .checkbox__label
        color: #3e8bdc

</style>
