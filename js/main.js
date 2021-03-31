var app = new Vue({
  el: '#app',
  data: {
    products: [
      { id: 1, title: 'Almaz', short_text: 'short_text', image: 'images/eggplant/1almaz.jpg', descr: 'Full descr' },
      { id: 2, title: 'Epic F1', short_text: 'short_text', image: 'images/eggplant/2epicf1.jpg', descr: 'Full descr' },
      { id: 3, title: 'Swan', short_text: 'short_text', image: 'images/eggplant/3lebed.jpg', descr: 'Full descr' },
      { id: 4, title: 'Ping Pong', short_text: 'short_text', image: 'images/eggplant/4ping-pong.jpg', descr: 'Full descr' },
      { id: 5, title: 'White', short_text: 'short_text', image: 'images/eggplant/5white.jpg', descr: 'Full descr' },
    ],
    product: [{}],
    btnVisible: 0,
    cart: [],
  },
  mounted:
    function () {
      this.getProduct()
      this.checkInCart()
      this.getCart()
      console.log(this.cart)
    },
  methods: {
    addItem: function () {
      localStorage.setItem('prod', id)
    },
    getProduct: function () {
      if (window.location.hash) {
        var id = window.location.hash.replace('#', '')
        if (this.products && this.products.length > 0) {
          for (i in this.products) {
            if (this.products[i] && this.products[i].id && id == this.products[i].id) this.product = this.products[i]
          }
        }
      }
    },
    addToCard: function (id) {
      var cart = []
      if (localStorage.getItem('cart')) {
        cart = localStorage.getItem('cart').split(',')
      }

      if (cart.indexOf(String(id)) === -1) {
        cart.push(id);
        localStorage.setItem('cart', cart.join())
        this.btnVisible = 1
      }
    },
    checkInCart: function () {
      if (this.product && this.product.id && localStorage.getItem('cart').split(',').indexOf(String(this.product.id) != -1)) {
        this.btnVisible = 1
      }
    },
    getCart: function () {
      let localStorageCart = localStorage.getItem('cart').split(',')
      for (item of this.products) {
        if (localStorageCart.indexOf(String(item.id)) != -1) {
          this.cart.push(item);
        }
      }
    }
  }
})