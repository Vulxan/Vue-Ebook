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
      <menu-bar v-show="isTitleAndMenuShow" ref="menuBar" :isTitleAndMenuShow="isTitleAndMenuShow" :fontSizeList="fontSizeList" :fontSize="defaultFontSize" @setFontSize="setFontSize" :themesList="themesList" :theme="defaultTheme" @setTheme="setTheme" :bookAvailable="bookAvailable" @onProgressChange="onProgressChange" @showContent="showContent"></menu-bar>
    </slide-up>
    <slide-right>
      <table-content v-show="isContentShow" :bookAvailable="bookAvailable" :navigation="navigation" @jumpTo="jumpTo"></table-content>
    </slide-right>
    <fade>
      <div class="table-content-mask" v-show="isContentShow" @click="hideAll"></div>
    </fade>
    <div class="apex-mask" v-if="isApexMaskShow" @click="hideApexMask">
      <div class="left">
        <span class="desc">上一页</span>
      </div>
      <div class="center">
        <span class="desc">显示/隐藏菜单栏</span>
      </div>
      <div class="right">
        <span class="desc">下一页</span>
      </div>
      <slide-down>
        <div class="tip" v-if="isTipShow">
          <span class="text" v-text="tipText"></span>
        </div>
      </slide-down>
    </div>
  </div>
</template>

<script>
import Epub from 'epubjs'
import TitleBar from '@/components/TitleBar'
import MenuBar from '@/components/MenuBar'
import TableContent from '@/components/TableContent'
import SlideDown from '@/components/SlideDown'
import SlideUp from '@/components/SlideUp'
import SlideRight from '@/components/SlideRight'
import Fade from '@/components/Fade'
// const DOWNLOAD_URL = '/Vue-Ebook/epub/2018_Book_AgileProcessesInSoftwareEngine.epub' // Prod
const DOWNLOAD_URL = '/epub/2018_Book_AgileProcessesInSoftwareEngine.epub' // Local
export default {
  name: 'Ebook',
  components: {
    TitleBar,
    MenuBar,
    TableContent,
    SlideDown,
    SlideUp,
    SlideRight,
    Fade
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
      defaultFontSize: 16,
      themesList: [
        {
          name: 'default',
          style: {
            body: {
              'color': '#000',
              'background': '#FFF'
            }
          }
        },
        {
          name: 'eye',
          style: {
            body: {
              'color': '#000',
              'background': '#CEEABA'
            }
          }
        },
        {
          name: 'night',
          style: {
            body: {
              'color': '#FFF',
              'background': '#000'
            }
          }
        },
        {
          name: 'gold',
          style: {
            body: {
              'color': '#000',
              'background': 'rgb(241, 236, 226)'
            }
          }
        }
      ],
      defaultTheme: 0,
      // 图书是否处于可用状态
      bookAvailable: false,
      navigation: null,
      isContentShow: false,
      isApexMaskShow: true,
      isTipShow: false
    }
  },
  computed: {
    tipText () {
      return this.bookAvailable ? '加载完毕' : '加载中'
    }
  },
  methods: {
    hideApexMask () {
      if (!this.bookAvailable) {
        this.isTipShow = true
      } else {
        this.isApexMaskShow = false
      }
    },
    // 根据链接跳转到指定位置
    jumpTo (href) {
      this.rendition.display(href)
      this.toggleTitleAndMenu()
      this.isContentShow = false
    },
    showContent () {
      this.isContentShow = true
    },
    hideAll () {
      this.isContentShow = false
      this.toggleTitleAndMenu()
    },
    // progress 进度条的数值(0-100)
    onProgressChange (progress) {
      const percentage = progress / 100
      const location = percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0
      this.rendition.display(location)
    },
    registerTheme () {
      this.themesList.forEach(theme => {
        this.themes.register(theme.name, theme.style)
      })
    },
    setTheme (index) {
      this.themes.select(this.themesList[index].name)
      this.defaultTheme = index
    },
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
      // this.themes.register(name, styles)
      this.registerTheme()
      // this.themes.select(name)
      this.setTheme(this.defaultTheme)
      // 获取 Locations 对象
      // 通过 epubjs 的钩子函数来实现
      this.book.ready.then(() => {
        this.navigation = this.book.navigation
        return this.book.locations.generate()
      }).then(() => {
        this.locations = this.book.locations
        this.bookAvailable = true
      })
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
          flex 1
        .center
          flex 2
        .right
          flex 1
    .table-content-mask
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      background-color rgba(0, 0, 0, 0.5)
      z-index 125
    .apex-mask
      position fixed
      top 0
      right 0
      bottom 0
      left 0
      display flex
      font-size px2rem(20)
      z-index 100
      color white
      .left
        flex 1
        background-color rgba(29, 176, 184, .5)
        center()
      .center
        flex 2
        background-color rgba(0, 52, 63, .5)
        center()
      .right
        flex 1
        background-color rgba(29, 176, 184, .5)
        center()
      .tip
        position absolute
        top 0
        left 0
        right 0
        border-radius 0 0 px2rem(2) px2rem(2)
        background-color #fff
        padding px2rem(10)
        text-align center
        color #000
        font-size px2rem(10)
</style>
