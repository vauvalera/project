<template>
    <div class="v-card">
        <v-text
          class="v-text--pinkish-grey"
          :text="art"
        ></v-text>
        <a
          class="v-card__img"
          href="#"
        >
          <img :src="card.getImage()" />
        </a>
        <div class="v-card__content">
          <v-text-svg
            class="v-text--green"
            :text="stock"
          ></v-text-svg>
          <v-title :title="card.getName()"></v-title>
          <v-block-text
            :items="card.getTech()"
          ></v-block-text>
        </div>
        <div class="v-card__actions">
          <v-button-svg
            class="v-button--blue"
            :title="btnBuy"
          ></v-button-svg>
          <div class="v-card__actions">
            <v-button-svg
              class="v-button__svg"
              :svg="svg"
              @click="setFavorite(card)"
            ></v-button-svg>
            <v-button-image
              :src="btnCompare"
            ></v-button-image>
          </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import VTitle from './elements/VTitle';
import VButtonSvg from './elements/VButtonSvg';
import VTextSvg from './elements/VTextSvg';
import VBlockText from './elements/VBlockText';
import VText from './elements/VText';
import Card from '../classes/Card';
import VButtonImage from './elements/VButtonImage';

export default {
  name: 'VCard',
  data() {
    return {
      btnBuy: 'Купить',
      btnCompare: require('../assets/images/scale.jpg'),
      svg: {
        name: 'heart',
        width: '20',
        height: '20',
      },
    };
  },
  props: {
    card: Card,
  },
  components: {
    VButtonImage,
    VText,
    VBlockText,
    VTextSvg,
    VButtonSvg,
    VTitle,
  },
  computed: {
    art() {
      const art = this.card.getArt();
      return `Арт. ${art}`;
    },
    stock() {
      const stock = this.card.getInStock();
      return stock ? 'В наличии' : 'Отсутсвует';
    },
  },
  methods: {
    ...mapActions([
      'setFavorite',
    ]),
  },
};
</script>

<style lang="sass">
.v-card
  margin-right: 10px
  margin-top: 10px
  padding: 20px 32px 30px
  &__img
    display: flex
    justify-content: center
    margin: 18px 0 22px 0
  &__actions
    display: flex
    justify-content: space-between
    align-items: center
    .v-button__svg
      margin-right: 10px
  &:nth-child(3n)
    margin-right: 0
  .v-text.v-text--pinkish-grey
    text-align: right
    font-size: 12px
    line-height: normal
  .v-text_svg.v-text--green
    margin-bottom: 5px
  .v-block-text
    min-height: 110px
    margin: 17px 0  40px 0
</style>
