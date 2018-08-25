<template>
  <div class="menu-bar">
    <div class="menu-wrapper" :class="{'hide-box-shadow': isSettingShow || !isTitleAndMenuShow}">
      <div class="icon-wrapper">
        <span class="icon icon-menu" @click="showSetting(0)"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icon icon-progress" @click="showSetting(1)"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icon icon-bright" @click="showSetting(2)"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icon icon-a" @click="showSetting(3)">A</span>
      </div>
    </div>
    <slide-up>
      <div class="setting-wrapper" v-show="isSettingShow">
        <div class="setting-font-size" v-if="showTag === 3">
          <div class="preview" :style="{ fontSize: fontSizeList[0].fontSize + 'px'}">A</div>
          <div class="select">
            <div class="select-wrapper" v-for="(item, index) of fontSizeList" :key="index" @click="setFontSize(item.fontSize)">
              <div class="line"></div>
              <div class="point-wrapper">
                <div class="point" v-show="fontSize === item.fontSize">
                  <div class="small-point"></div>
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
          <div class="preview" :style="{ fontSize: fontSizeList[fontSizeList.length - 1].fontSize + 'px'}">A</div>
        </div>
        <div class="setting-theme" v-else-if="showTag === 2">
          <div class="setting-theme-item" v-for="(item, index) of themesList" :key="index" @click="setTheme(index)">
            <div class="preview" :style="{background: item.style.body.background}"></div>
            <div class="desc" v-text="item.name" :class="{'selected': index === theme}"></div>
          </div>
        </div>
      </div>
    </slide-up>
  </div>
</template>

<script>
import SlideUp from './SlideUp'
export default {
  name: 'MenuBar',
  data () {
    return {
      isSettingShow: false,
      showTag: null
    }
  },
  props: {
    isTitleAndMenuShow: Boolean,
    fontSizeList: Array,
    fontSize: Number,
    themesList: Array,
    theme: Number
  },
  components: {
    SlideUp
  },
  methods: {
    showSetting (tag) {
      this.showTag = tag
      this.isSettingShow = true
    },
    hideSetting () {
      this.isSettingShow = false
    },
    setFontSize (fontSize) {
      this.$emit('setFontSize', fontSize)
    },
    setTheme (theme) {
      this.$emit('setTheme', theme)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/global';
  .menu-bar
    transform-style preserve-3d
    position absolute
    bottom 0
    left 0
    width 100%
    z-index 100
    height px2rem(48)
    .menu-wrapper
      width 100%
      height 100%
      background-color white
      display flex
      box-shadow 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15)
      &.hide-box-shadow
        box-shadow none
      .icon-wrapper
        flex 1
        center()
    .setting-wrapper
      position absolute
      bottom px2rem(48)
      left 0
      width 100%
      height px2rem(60)
      background-color white
      box-shadow 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15)
      .setting-font-size
        height 100%
        display flex
        .preview
          flex 0 0 px2rem(40)
          center()
          position relative
          &:first-child
            transform translate(((100vw - 2 * px2rem(40)) / 14 + px2rem(40)) / 2 - px2rem(40) / 2, 0)
          &:last-child
            transform translate(-(((100vw - 2 * px2rem(40)) / 14 + px2rem(40)) / 2 - px2rem(40) / 2), 0)
        .select
          display: flex
          flex 1
          .select-wrapper
            flex 1
            display: flex
            align-items center
            &:first-child
              .line
                &:first-child
                  border-top none
            &:last-child
              .line
                &:last-child
                  border-top none
            .line
              flex 1
              height 0
              border-top px2rem(1) solid #CCC
            .point-wrapper
              position relative
              flex 0 0 0
              height px2rem(7)
              border-left px2rem(1) solid #CCC
              .point
                position absolute
                top 0
                left 0
                width px2rem(20)
                height px2rem(20)
                border-radius 50%
                background-color white
                border px2rem(1) solid #CCC
                box-shadow 0 px2rem(3) px2rem(4) rgba(0, 0, 0, .15)
                transform translate(-50%, -35%)
                center()
                .small-point
                  width px2rem(5)
                  height px2rem(5)
                  background-color black
                  border-radius 50%
      .setting-theme
        height 100%
        display flex
        .setting-theme-item
          flex 1
          display flex
          flex-direction column
          padding px2rem(5)
          box-sizing border-box
          &:first-child
            .preview
              border px2rem(1) solid #CCC
          .preview
            flex 1
            box-sizing border-box
          .desc
            flex 0 0 px2rem(20)
            font-size px2rem(14)
            color #CCC
            center()
            &.selected
              color: #333
</style>
