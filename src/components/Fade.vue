<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'Fade'
}
</script>

<style lang="stylus" scoped>
  .fade-enter
  .fade-leave-to
    opacity 0
  .fade-enter-to
  .fade-leave
    opacity 1
  .fade-enter-actve
  .fade-leave-active
    transition opacity .1s
</style>
