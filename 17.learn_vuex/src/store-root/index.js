import { createStore } from 'vuex';
import { INCREMENT_N } from './mutation-types';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      counter: 100,
      name: "wyatt",
      age: 23,
      height: 1.65,
      books: [
        { name: "精通Vue3", price: 330, count: 5 },
        { name: "深入React", price: 390, count: 2 },
        { name: "初學Angular", price: 300, count: 6 },
      ],
      discount: 0.6,
      banners: []
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    [INCREMENT_N](state, payload) {
      state.counter += payload.n
    },
    addBannerData(state, payload) {
      state.banners = payload;
    }
  },
  getters: {
    totalPrice(state, getters) {
      // const totalPrice = 0;
      const totalPrice = state.books.reduce((acc, curr) => {
        return acc + curr.price * curr.count
      }, 0)
      return totalPrice * getters.currentDiscount
    },
    currentDiscount(state) {
      return state.discount * 0.8
    },
    totalPriceCounterGreaterN(state, getters) {
      return function(n) {
        const totalPrice = state.books.reduce((acc, curr) => {
          if(curr.count > n) {
            acc = acc + curr.price * curr.count
          }
          return acc 
        }, 0)
        return totalPrice * getters.currentDiscount
      }
    },
    nameInfo(state) {
      return `name: ${state.name}`
    },
    ageInfo(state) {
      return `age: ${state.age}`
    },
    heightInfo(state) {
      return `height: ${state.height}`
    }
  },
  actions: {
    // 放函數
    incrementAction(context, payload) {
      console.log(payload);
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    },
    decrementAction(context, dispatch, state, rootState, getters, rootGetters) {
      console.log(context)
      context.commit('decrement')
    },
    getHomeMultidata(context) {
      return new Promise((resolve, reject) => {
        axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
          context.commit("addBannerData",  res.data.data.banner.list)
          resolve({name: 'wyatt'})
        }).catch(err => {
          reject(err)
        })
      })
      
    }
  }
});

export default store;