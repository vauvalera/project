<template>
  <div class="v-filter">
    <v-button
      class="v-button--blue v-button--fullsize"
      :title="buttonView"
      @click="getItems"
    ></v-button>
    <v-button
      class="v-button--white v-button--fullsize"
      :title="buttonClear"
      @click="clearFilter"
    ></v-button>
    <v-text
      class="v-text--17"
      :text="producer"
    ></v-text>
    <div class="v-filter_checkboxes">
      <v-check-box
        v-for="item in items"
        :key="item.code"
        :name="item.name"
        :code="item.code"
        :value="isChecked(item.code)"
        @change="change"
      ></v-check-box>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import VText from './elements/VText.vue';
import VButton from './elements/VButton.vue';
import VCheckBox from './elements/VCheckBox.vue';

export default {
  name: 'VFilter',
  data() {
    return {
      buttonView: 'Показать результат',
      buttonClear: 'Очистить',
      producer: 'Производитель',
    };
  },
  components: {
    VCheckBox,
    VText,
    VButton,
  },
  computed: {
    ...mapState({
      items: state => state.items,
      filter: state => state.filter,
    }),
  },
  methods: {
    ...mapMutations([
      'addElemToFilter',
      'deleteElemFromFilter',
      'clearFilter',
    ]),

    ...mapActions([
      'getItems',
    ]),

    change(code, value) {
      if (value) {
        this.addElemToFilter(code);
        return;
      }
      this.deleteElemFromFilter(code);
    },

    isChecked(code) {
      return this.filter.some(item => item === code);
    },
  },
};
</script>

<style lang="sass">
.v-filter
  padding: 30px 28px
  display: flex
  flex-direction: column
  .v-button--white
    margin-top: 10px
  .v-text--17
    text-align: left
    margin: 26px 0 20px 0
  &_checkboxes
    display: flex
    flex-wrap: wrap
</style>
