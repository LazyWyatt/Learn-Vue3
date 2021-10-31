import { computed } from 'vue'; 
import { mapState, useStore } from 'vuex';
export function useState(mapper) {
  const store = useStore();

  // 獲取對應對象的functions: {name: function, age: function}
  const storeStateFns = mapState(mapper)

  // 轉換
  const storeState = {}
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({$store: store});
    storeState[fnKey] = computed(fn);
  })

  return storeState
}