var app = new Vue({
  el: '#app',
  data: {
    products: [
      { id: 1, title: 'Almaz', short_text: 'short_text', image: 'images/eggplant/1almaz.jpg', descr: 'Full descr' },
      { id: 2, title: 'Epic F1', short_text: 'short_text', image: 'images/eggplant/2epicf1.jpg', descr: 'Full descr' },
      { id: 3, title: 'Swan', short_text: 'short_text', image: 'images/eggplant/3lebed.jpg', descr: 'Full descr' },
      { id: 4, title: 'Ping Pong', short_text: 'short_text', image: 'images/eggplant/4ping-pong.jpg', descr: 'Full descr' },
      { id: 5, title: 'White', short_text: 'short_text', image: 'images/eggplant/5white.jpg', descr: 'Full descr' },
    ]
  },
  mounted:
    function () {
      console.log(localStorage.getItem('prod'))
    },
  methods: {
    addItem: function() {
      localStorage.setItem('prod', id)
    }
  }
})