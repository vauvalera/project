<template>
  <div id="app">
    <v-card />
    <v-card />
    <v-card />
    <v-filter />
  </div>
</template>

<script>
import VCard from './components/VCard';
import VFilter from './components/VFilter';
import './assets/fonts/fonts.sass';

export default {
  name: 'app',
  components: {
    VFilter,
    VCard,
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
