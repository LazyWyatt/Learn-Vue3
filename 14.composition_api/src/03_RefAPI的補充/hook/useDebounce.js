import { customRef } from 'vue';
//自定義一個ref
export default  function(value, delay = 500) {
  let timer = null;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger()
        }, delay)
      }
    }
  })
}