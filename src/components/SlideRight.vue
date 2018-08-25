<template>
  <transition name="slide-right">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'SlideRight'
}
</script>

<style lang="stylus" scoped>
  .slide-right-enter
  .slide-right-leave-to
    transform translate3d(-100%, 0, 0)
  .slide-right-enter-to
  .slide-right-leave
    transform translate3d(0, 0, 0)
  .slide-right-enter-active
  .slide-right-leave-active
    transition transform .2s linear
</style>
