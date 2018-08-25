<template>
  <div class="title-wrapper">
    <div class="left">
      <span class="icon icon-back"></span>
    </div>
    <div class="right">
      <div class="icon-wrapper">
        <span class="icon icon-cart"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icon icon-person"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icon icon-more"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleBar'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/global';
  .title-wrapper
    position absolute
    top 0
    left 0
    width 100%
    height px2rem(48)
    z-index 100
    background-color white
    display flex
    box-shadow 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15)
    .left
      flex 0 0 px2rem(60)
      center()
    .right
      flex 1
      display flex
      justify-content flex-end
      .icon-wrapper
          flex 0 0 px2rem(40)
          center()
</style>
