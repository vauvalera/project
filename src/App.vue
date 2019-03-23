<template>
  <div id="app">
    <v-card
      v-for="(card, key) in cards"
      :key="key"
      :card="card"
    ></v-card>
    <v-filter />
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
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  margin-top: 60px
  display: flex
  background-color: #f7f7f7
  justify-content: space-around
  align-items: flex-start
  padding: 10px 0
</style>
