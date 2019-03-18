<template>
    <v-block class="v-card">
        <v-image></v-image>
        <div class="v-card_content">
            <v-text-svg class="v-text--green"></v-text-svg>
            <v-title></v-title>
            <v-block-text></v-block-text>
            <v-button-svg></v-button-svg>
        </div>
    </v-block>
</template>

<script>
import VBlock from './elements/VBlock'
import VImage from './elements/VImage';
import VTitle from './elements/VTitle';
import VButtonSvg from './elements/VButtonSvg';
import VTextSvg from './elements/VTextSvg';
import VBlockText from "./elements/VBlockText";

export default {
  name: 'VCard',
  components: {
      VBlockText,
    VTextSvg,
    VButtonSvg,
    VTitle,
    VImage,
    VBlock
  }
}
</script>

<style scoped lang="sass">
.v-card
    &_content
        padding: 20px
</style>
