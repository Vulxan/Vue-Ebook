<template>
  <div class="table-content">
    <div class="table-content-wrapper" v-if="bookAvailable">
      <div class="table-content-item" v-for="(item, index) of navigation.toc" :key="index" @click.stop="jumpTo(item.href)">
        <span class="text" v-text="item.label"></span>
      </div>
      <!-- <div class="table-content-item" v-if="!bookAvailable">
        <span class="text">加载中...</span>
      </div> -->
    </div>
    <div class="table-undone-wrapper" v-else>
      <div class="table-undone-item">
        <span class="text">加载中...</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableContent',
  props: {
    bookAvailable: Boolean,
    navigation: Object
  },
  methods: {
    jumpTo (target) {
      this.$emit('jumpTo', target)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/global';
  .table-content
    position absolute
    left 0
    top 0
    bottom 0
    background-color #FFF
    z-index 150
    .table-content-wrapper
    .table-undone-wrapper
      width px2rem(400)
      box-sizing border-box
      padding px2rem(20)
      background-color #fff
      height 100%
      font-size px2rem(20)
      .table-content-item
      .table-undone-item
        cursor pointer
        margin px2rem(10) 0
      .table-undone-item
        height 100%
        center()
</style>
