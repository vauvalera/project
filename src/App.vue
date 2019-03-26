<template>
  <div class="wrapper" v-if="cards.length">
    <div class="wrapper__cards">
      <v-card
        v-for="(card, key) in cards"
        :key="key"
        :card="card"
      ></v-card>
    </div>
    <div class="wrapper__filter">
      <v-filter />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import VCard from './components/VCard';
import VFilter from './components/VFilter';
import './assets/fonts/fonts.sass';

export default {
  name: 'app',
  components: {
    VFilter,
    VCard,
  },
  computed: {
    ...mapState({
      cards: state => state.cards,
    }),
  },
  created() {
  	this.getItems();
  },
  methods: {
    ...mapActions([
      'getItems',
    ]),
  },
};
</script>

<style lang="sass">
body
  padding: 0
  margin: 0
.wrapper
  font-family: ProximaNovaRegular, sans-serif
  width: 1280px
  margin: 60px auto
  color: #2c3e50
  display: flex
  background-color: #f7f7f7
  align-items: flex-start
  justify-content: space-between
  &__cards
    display: flex
    flex-wrap: wrap
    justify-content: flex-start
    padding: 0 10px 10px 10px
  &__filter
    padding: 10px 10px 0 0
.v-card,
.v-filter
  max-width: 307px
  width: 307px
  background-color: #ffffff
  box-sizing: border-box
</style>
