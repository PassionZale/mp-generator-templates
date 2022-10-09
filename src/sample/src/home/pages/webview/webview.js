Page({
  data: {
    link: null
  },

  onLoad(options) {
    const { link } = options

    if (typeof link !== 'undefined' && link != null) {
      this.setData({
        link: `${decodeURIComponent(link)}`
      })
    }
  }
})
