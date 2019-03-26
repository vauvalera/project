<template>
    <v-block class="v-card">
        <v-text
          class="v-card__art v-text--pinkish-grey"
          :text="art"
        ></v-text>
        <a
          class="v-card__img"
          href="#"
        >
          <v-image></v-image>
        </a>
        <div class="v-card__content">
          <v-text-svg
            class="v-card__stock v-text--green"
            :text="stock"
          ></v-text-svg>
          <v-title :title="card.getName()"></v-title>
          <v-block-text
            class="v-card__tech"
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
              class="v-card__favorite v-button--svg"
              :svg="svg"
              @click="clickFavorite"
            ></v-button-svg>
            <v-button-image
              :src="card.getImage()"
            ></v-button-image>
          </div>
        </div>
    </v-block>
</template>

<script>
import { mapActions } from 'vuex';
import VBlock from './elements/VBlock';
import VImage from './elements/VImage';
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
    VImage,
    VBlock,
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
    clickFavorite() {
      this.setFavorite(this.card);
    },
  },
};
</script>

<style scoped lang="sass">
.v-card
  margin-right: 10px
  margin-top: 10px
  padding: 20px 32px 30px
  &:nth-child(3n)
    margin-right: 0
  &__art
    text-align: right
    font-size: 12px
    line-height: normal
  &__img
    display: flex
    justify-content: center
    margin: 18px 0 22px 0
  &__stock
    margin-bottom: 5px
  &__tech
    min-height: 110px
    margin: 17px 0  40px 0
  &__actions
    display: flex
    justify-content: space-between
    align-items: center
      margin: 40px 20px 0 25px
</style>
