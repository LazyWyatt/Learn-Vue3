import { createApp } from 'vue';
import App from './14.組件的v-model/App.vue';

// import { sum } from './11.異步組件的使用/utils/math';
// console.log(sum(20, 30));

//返回一個Promise
// import('./11.異步組件的使用/utils/math').then((res) => {
//   console.log(res.sum(20, 30));
// });

createApp(App).mount('#app');
