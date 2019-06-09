<template>
  <v-button class="v-button__image">
    <img
      :src="src"
    />
    {{ title }}
  </v-button>
</template>

<script>
import VButton from './VButton.vue';
import '../../assets/fonts/animations.sass';

export default {
  name: 'VButtonImage',
  components: {
    VButton,
  },
  props: {
    title: String,
    src: String,
  },
};
</script>

<style lang="sass">
.v-button
  &__image
    width: 100%
    height: auto
    &:active
      box-shadow: none
    &:hover
      animation: rotate 1s 1
</style>
