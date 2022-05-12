<template>
    <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart.prevent='handleTouchStart'
      @touchmove='handleTouchMove'
      @touchend='handleTouchEnd'
      @click="handleLetterClick"
    >
      {{item}}
    </li>
    </ul>
</template>
<script>

export default{
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
      // 节流
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    updated () {
      this.startY = this.$refs['A'][0].offsetTop
    },
    handleTouchMove (e) {
      // 使用节流，减少函数的使用频率
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          // touches[0]表示触摸屏幕时手指的信息,79表示header的高度
          const index = Math.floor((touchY - this.startY) / 20)
          // 20表示每个字母的高度
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 8)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/variables.styl'
.list
  position:absolute
  right: 0
  bottom: 0
  top: 1.58rem
  display: flex
  flex-direction: column
  justify-content: center
  width
  .item
    line-height: .4rem
    text-align: center
    color: $bgColor

</style>
