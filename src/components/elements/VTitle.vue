<template>
 <p
   class="v-title"
   v-html="title"
 />
</template>

<script>
export default {
  name: 'VTitle',
  props: {
    title: {
      type: String,
      default: 'Canon PowerShot SX400 IS\n' +
              'с улучшенной матрицей\n' +
              'и объективом'
    }
  }
}
</script>

<style scoped lang="sass">
.v-title
  color: #262626
  font-family: ProximaNova
  text-align: start
  font-size: 18px
  font-weight: normal
  font-style: normal
  font-stretch: normal
  line-height: normal
  letter-spacing: normal
  margin: 0
</style>
