<template>
<div class="v-block">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VBlock',
};
</script>

<style scoped lang="sass">
.v-block
  max-width: 307px
  width: 307px
  background-color: #ffffff
  box-sizing: border-box
</style>
