<template>
 <a
   href="#"
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
      default: '',
    },
  },
};
</script>

<style lang="sass">
.v-title
  text-decoration: none
  color: #262626
  font-family: ProximaNovaRegular
  text-align: start
  font-size: 18px
  font-weight: normal
  font-style: normal
  font-stretch: normal
  line-height: normal
  letter-spacing: normal
  margin: 0
</style>
