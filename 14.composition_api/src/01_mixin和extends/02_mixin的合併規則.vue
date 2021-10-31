<template>
  <div>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  import {demoMixin} from './mixins/demoMixin'

  export default {
    mixins: [demoMixin],
    data() {
      return {
        message: "Hi"
      }
    },
    created() {
      console.log("組件內的created")
    },
    methods: {
      foo() {
        console.log()
      }
    }
  }
  //data會進行合併，衝突時保留組件自身數據
  //生命週期鉤子函數，合併到陣列中，都會被調用
  //值為Object，例如methods、 components、 directives都將被合併為一個Object
  //methods中函數不重複，都會生效，衝突的話組件內部的函數生效。
</script>

<style scoped>

</style>
