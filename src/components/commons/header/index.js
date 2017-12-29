import headerComponent from './header.vue'

const Header={
  install:function (Vue) {
    Vue.component('Header',headerComponent)
  }
}

export default Header
