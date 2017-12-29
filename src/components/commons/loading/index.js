import loadingComponent from './loading.vue'

const Loading = {
  install: function (Vue) {
    Vue.component('Loading', loadingComponent)
  }
}

export default Loading
