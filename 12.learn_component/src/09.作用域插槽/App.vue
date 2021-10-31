<template>
  <div>
    <!-- 編譯作用域 -->
    <!-- <child-cpn>
      <button>我是組件的按鈕</button>
    </child-cpn> -->

    <!-- <show-hobbies :hobbies="hobbies">
      <template v-slot:wyatt="slotProps">
        <button>{{ slotProps.item }} - {{ slotProps.index }}</button>
      </template>
    </show-hobbies> -->

    <!-- 具名插槽 -->
    <show-hobbies :hobbies="hobbies">
      <template v-slot="wyatt">
        <button>{{ wyatt.item }} - {{ wyatt.index }}</button>
      </template>
    </show-hobbies>

    <!-- 獨占默認插槽縮寫 -->
    <!-- 如果插槽只有一個預設的插槽可以在組件上寫上v-slot="插槽名字" -->
    <!-- 如果組件內部指定了具名插槽，則不可以寫在組件，則需要使template -->
    <show-hobbies :hobbies="hobbies" v-slot="wyatt">
      <button>{{ wyatt.item }} - {{ wyatt.index }}</button>
    </show-hobbies>
  </div>
</template>

<script>
  import ChildCpn from './ChildCpn.vue';
  import ShowHobbies from './showHobbies.vue';
  export default {
    components: {
      ChildCpn,
      ShowHobbies,
    },
    data() {
      return {
        hobbies: ['tennis', 'football', 'basketball'],
      };
    },
  };
</script>

<style lang="scss" scoped></style>
