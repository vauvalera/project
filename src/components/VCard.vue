<template>
    <div class="v-card">
        <v-text
          class="v-text--pinkish-grey"
          :text="art"
        />
        <a
          class="v-card__img"
          href="#"
        >
          <img :src="card.img" />
        </a>
        <div class="v-card__content">
          <v-text-svg
            class="v-text--green"
            :text="stock"
          />
          <v-title :title="card.name"/>
          <v-block-text
            :items="card.tech"
          />
        </div>
        <div class="v-card__actions">
          <v-button-svg
            class="v-button--blue"
            :title="btnBuy"
          />
          <div class="v-card__actions">
            <v-button-svg
              class="v-button__svg"
              :svg="svg"
              @click="setFavorite(card)"
            />
            <v-button-image
              :src="btnCompare"
            />
          </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import VTitle from './elements/VTitle.vue';
import VButtonSvg from './elements/VButtonSvg.vue';
import VTextSvg from './elements/VTextSvg.vue';
import VBlockText from './elements/VBlockText.vue';
import VText from './elements/VText.vue';
import Card from '../classes/Card';
import VButtonImage from './elements/VButtonImage.vue';

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
      return `Арт. ${this.card.art}`;
    },
    stock() {
      const stock = this.card.inStock;
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
  transition: all 0.5s
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
