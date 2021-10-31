import { computed } from 'vue'; 
import { mapGetters, useStore } from 'vuex';
export function useMapper(mapper, mapFn) {
  const store = useStore();

  const storeStateFns = mapFn(mapper)

  // 轉換
  const storeState = {}
    Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({$store: store});
    storeState[fnKey] = computed(fn);
  })

  return storeState
}