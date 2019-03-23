<template>
    <v-block class="v-card">
        <v-text
          class="v-text--pinkish-grey"
          :text="art"
        ></v-text>
        <v-image></v-image>
        <div class="v-card_content">
            <v-text-svg class="v-text--green" :text="stock"></v-text-svg>
            <v-title></v-title>
            <v-block-text :items="card.getTech()"></v-block-text>
          <div class="v-card_footer">
            <v-button-svg></v-button-svg>
            <div>
              <svgicon
                class="v-card_favorite"
                :name="svg.name"
                :width="svg.width"
                :height="svg.height"
                @click="clickFavorite"
              ></svgicon>
              <img :src="card.getImage()">
            </div>
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
      items: [
        { name: 'Физический размер', value: '23.2 x 15.2 мм' },
        { name: 'Диафрагма', value: 'CMOS' },
        { name: 'Формат записи', value: 'RAW, JPEG, MP4 и другие' },
        { name: 'Фокусное расстояние', value: '18-55 мм.' },
      ],
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
    .v-text
      text-align: right
      padding: 20px 15px 0 0
    .v-image
      padding: 15px 6px 0 24px
    .v-block-text
      padding-bottom: 21px
    &_content
        padding: 20px 20px 30px 32px
        .v-title
          padding: 5px 40px 17px 0
    &_footer
      margin-top: 40px
      display: flex
      justify-content: space-between
      align-items: center
    &_favorite
      margin-right: 10px
      &:hover
        cursor: pointer
</style>
