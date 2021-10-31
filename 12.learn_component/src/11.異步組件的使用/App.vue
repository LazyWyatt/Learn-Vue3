<template>
  <div>
    App組件
    <home></home>
    <suspense>
      <template #default>
        <async-category></async-category>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspense>
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue';
  import Home from './Home.vue';
  import Loading from './Loading.vue';

  // import AsyncCategory from './AsyncCategory.vue';
  const AsyncCategory = defineAsyncComponent(() =>
    import('./AsyncCategory.vue')
  );

  // const AsyncCategory = defineAsyncComponent({
  //   loader: () => import('./AsyncCategory.vue'),
  //   loadingComponent: Loading,
  //   //還沒加載好顯示loading組件
  //   // errorComponent: Error,
  //   delay: 2000,
  //   //在Loading之前等待2秒
  //   /*
  //     err: 錯誤訊息
  //     retry: 函數，調用retry重新加載
  //     fail: 函數，不繼續嘗試加載
  //     attempts: 紀錄嘗試的次數
  //   */
  //   onError: function(err, retry,fail ,attempts) {},
  // });

  export default {
    components: {
      Home,
      AsyncCategory,
      Loading,
    },
  };
</script>

<style lang="scss" scoped></style>
