<template>
  <div class="ebook">
    <slide-down>
      <title-bar v-show="isTitleAndMenuShow"></title-bar>
    </slide-down>
    <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left" @click="prevPage"></div>
        <div class="center"  @click="toggleTitleAndMenu"></div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
    <slide-up>
      <menu-bar v-show="isTitleAndMenuShow" ref="menuBar" :isTitleAndMenuShow="isTitleAndMenuShow" :fontSizeList="fontSizeList" :fontSize="defaultFontSize" @setFontSize="setFontSize"></menu-bar>
    </slide-up>
  </div>
</template>

<script>
import Epub from 'epubjs'
import TitleBar from '@/components/TitleBar'
import MenuBar from '@/components/MenuBar'
import SlideDown from '@/components/SlideDown'
import SlideUp from '@/components/SlideUp'
const DOWNLOAD_URL = '/epub/2018_Book_AgileProcessesInSoftwareEngine.epub'
export default {
  name: 'Ebook',
  components: {
    TitleBar,
    MenuBar,
    SlideDown,
    SlideUp
  },
  data () {
    return {
      isTitleAndMenuShow: false,
      fontSizeList: [
        { fontSize: 12 },
        { fontSize: 14 },
        { fontSize: 16 },
        { fontSize: 18 },
        { fontSize: 20 },
        { fontSize: 22 },
        { fontSize: 24 }
      ],
      defaultFontSize: 16
    }
  },
  methods: {
    toggleTitleAndMenu () {
      this.isTitleAndMenuShow = !this.isTitleAndMenuShow
      if (!this.isTitleAndMenuShow) {
        this.$refs.menuBar.hideSetting()
      }
    },
    prevPage () {
      // Rendition.prev
      if (this.rendition) {
        this.rendition.prev()
      }
    },
    nextPage () {
      // Rendition.next
      if (this.rendition) {
        this.rendition.next()
      }
    },
    setFontSize (fontSize) {
      this.defaultFontSize = fontSize
      if (this.themes) {
        this.themes.fontSize(fontSize + 'px')
      }
    },
    // 电子书的解析和渲染
    showEpub () {
      // 生成 Book
      this.book = new Epub(DOWNLOAD_URL)
      // 生成 Rendition
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight
      })
      // 通过 Rendition.display 渲染电子书
      this.rendition.display()
      // 获取 Theme 对象
      this.themes = this.rendition.themes
      // 设置默认字体大小
      this.setFontSize(this.defaultFontSize)
    }
  },
  mounted () {
    this.showEpub()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/global';
  .ebook
    position relative
    .read-wrapper
      .mask
        display flex
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        z-index 50
        .left
          flex 0 0 px2rem(100)
        .center
          flex 1
        .right
          flex 0 0 px2rem(100)
</style>
