<template>
    <div>
        <v-text v-for="item in 4" text=""></v-text>
    </div>
</template>

<script>
import VText from './VText'

export default {
  name: 'VBlockText',
  components: {
    VText
  }
}
</script>

<style scoped>

</style>
