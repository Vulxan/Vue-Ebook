<template>
  <transition name="slide-up">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'SlideUp'
}
</script>

<style lang="stylus" scoped>
  .slide-up-enter
  .slide-up-leave-to
    transform translate3d(0, 100%, 0)
  .slide-up-enter-to
  .slide-up-leave
    transform translate3d(0, 0, 0)
  .slide-up-enter-active
  .slide-up-leave-active
    transition transform .2s linear
</style>
