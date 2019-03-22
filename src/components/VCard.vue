<template>
    <v-block class="v-card">
        <v-text
          class="v-text--pinkish-grey"
          :text="text"
        ></v-text>
        <v-image></v-image>
        <div class="v-card_content">
            <v-text-svg class="v-text--green"></v-text-svg>
            <v-title></v-title>
            <v-block-text :items="items"></v-block-text>
          <div class="v-card_footer">
            <v-button-svg></v-button-svg>
            <div>
              <svgicon
                :name="svg.name"
                :width="svg.width"
                :height="svg.height"
              ></svgicon>
              <svgicon
                :name="svg1.name"
                :width="svg1.width"
                :height="svg1.height"
              ></svgicon>
            </div>
          </div>
        </div>
    </v-block>
</template>

<script>
import VBlock from './elements/VBlock';
import VImage from './elements/VImage';
import VTitle from './elements/VTitle';
import VButtonSvg from './elements/VButtonSvg';
import VTextSvg from './elements/VTextSvg';
import VBlockText from './elements/VBlockText';
import VText from './elements/VText';

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
        name: 'cart',
        width: '19',
        height: '17',
      },
      svg1: {
        name: 'cart',
        width: '20',
        height: '19',
      },
      text: 'Арт. 34534345',
    };
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
};
</script>

<style scoped lang="sass">
.v-card
    .v-text
      text-align: right
      padding: 20px 16px 0 0
    .v-image
      padding: 15px 6px 22px 24px
    &_content
        padding: 22px 10px 30px 32px
        .v-title
          margin: 5px 0 17px 0
    &_footer
      margin-top: 40px
      display: flex
      justify-content: space-between
      align-items: center
      svg
        &:first-child
          margin-right: 10px
</style>
