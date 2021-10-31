const App = {
  template: '#my-app',
  data() {
    return {
      books: [
        {
          id: 1,
          name: '夢之心理學',
          publicDate: '2019/09/20',
          price: 850,
          discount: 0.79,
          count: 1,
        },
        {
          id: 2,
          name: '給不小心就會太在意的你',
          publicDate: '2019/10/03',
          price: 300,
          discount: 0.79,
          count: 1,
        },
        {
          id: 3,
          name: '世界第一的R90高效睡眠法',
          publicDate: '2020/11/23',
          price: 360,
          discount: 0.79,
          count: 1,
        },
        {
          id: 4,
          name: '原子習慣',
          publicDate: '2019/06/01',
          price: 330,
          discount: 0.79,
          count: 1,
        },
      ],
    }
  },
  methods: {
    increment(index) {
      console.log(index)
      this.books[index].count++
    },
    decrement(index) {
      if (this) this.books[index].count--
    },
    removeBook(index) {
      this.books.splice(index, 1)
    },
    formatPrice(price) {
      return '$' + price
    },
  },
  computed: {
    totalPrice: {
      get: function () {
        let finalPrice = 0
        for (let book of this.books) {
          finalPrice += book.count * book.price
        }
        return finalPrice
      },
    },
    // Vue3不支持過濾器， 推薦兩種做法， 使用計算屬性/使用全局的方法
    filterBooks() {
      return this.books.map((item) => {
        const newItem = Object.assign({}, item)
        newItem.price = '$' + item.price
        return newItem
      })
      //map 會修改原陣列，他們指向同樣的位置
    },
  },
}

Vue.createApp(App).mount('#app')
