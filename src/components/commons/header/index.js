import headerComponent from './header'

const header = {
  install: function (Vue) {
    Vue.component('Header', headerComponent)
  }
}

export default header
