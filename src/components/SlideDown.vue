<template>
  <transition name="slide-down">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'SlideDown'
}
</script>

<style lang="stylus" scoped>
  .slide-down-enter
  .slide-down-leave-to
    transform translate3d(0, -100%, -1px)
  .slide-down-enter-to
  .slide-down-leave
    transform translate3d(0, 0, -1px)
  .slide-down-enter-active
  .slide-down-leave-active
    transition transform .1s linear
</style>
