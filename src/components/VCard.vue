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
        <div class="v-card__footer">
          <v-button-svg></v-button-svg>
          <div>
            <svgicon
              class="v-card__favorite"
              :name="svg.name"
              :width="svg.width"
              :height="svg.height"
              @click="clickFavorite"
            ></svgicon>
            <img :src="card.getImage()">
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

export default {
  name: 'VCard',
  data() {
    return {
      svg: {
        name: 'heart',
        width: '19',
        height: '17',
      },
    };
  },
  props: {
    card: Card,
  },
  components: {
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
  &__footer
    display: flex
    justify-content: space-between
    align-items: center
      margin: 40px 20px 0 25px
  &__favorite
    margin-right: 10px
    &:hover
      cursor: pointer
</style>
