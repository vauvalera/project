<template>
  <v-block>
    <div class="v-filter">
      <v-button
        class="v-btn--fullsize"
        :title="buttonView"
        @click="view"
      ></v-button>
      <v-button
        class="v-btn--white v-btn--fullsize"
        :title="buttonClear"
        @click="clear"
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
  </v-block>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import VBlock from './elements/VBlock.vue';
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
    VBlock,
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

    view() {
      this.getItems();
    },

    clear() {
      this.clearFilter();
    },
  },
};
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
