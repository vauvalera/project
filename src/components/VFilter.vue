<template>
  <v-block>
    <div class="v-filter">
      <v-button
        class="v-btn--fullsize"
        :title="buttonView"
      ></v-button>
      <v-button
        class="v-btn--white v-btn--fullsize"
        :title="buttonClear"
      ></v-button>
      <v-text
        class="v-text--17"
        :text="producer"
      ></v-text>
      <div class="v-filter_checkboxes">
        <v-check-box
          v-for="checkbox in checkboxs"
          :key="checkbox.value"
          :title="checkbox.title"
        ></v-check-box>
      </div>
    </div>
  </v-block>
</template>

<script>
import VBlock from './elements/VBlock'
import VText from './elements/VText'
import VButton from './elements/VButton'
import VCheckBox from './elements/VCheckBox'

export default {
  name: 'VFilter',
  data () {
    return {
      buttonView: 'Показать результат',
      buttonClear: 'Очистить',
      producer: 'Производитель',
      checkboxs: [
        { title: 'Canon' },
        { title: 'Fujifilm' },
        { title: 'Nikon' },
        { title: 'Panasonic' },
        { title: 'Leica' },
        { title: 'Olympus' },
        { title: 'Pentax' },
        { title: 'Geleral Electrics' },
        { title: 'Sigma' },
        { title: 'Zenit' }
      ]
    }
  },
  components: {
    VCheckBox,
    VText,
    VButton,
    VBlock
  }
}
</script>

<style scoped lang="sass">
.v-filter
  padding: 30px
  display: flex
  flex-direction: column
  .v-btn--white
    margin-top: 10px
  .v-text--17
    text-align: left
    margin: 25px 0 30px 0
  &_checkboxes
    display: flex
    flex-wrap: wrap
</style>
