<template>
  <div>
    <hr>
    <h2> root: {{$store.state.rootCounter}} </h2>
    <h2> home: {{homeCounter}} </h2>
    <h2> double: {{ doubleHomeCounter}}</h2>
    <button @click="increment">Mutations: home+1</button>
    <button @click="incrementAction">Actions: home+1</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions, createNamespacedHelpers} from 'vuex';
  // import { createNamespacedHelpers} from 'vuex';
  import { useState, useGetters} from '../hooks/index.js';

  // const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers("home");
  
  export default {
    computed: {
      // 1.寫法一:
      ...mapState({
        homeCounter: state => state.home.homeCounter
      }),
      ...mapGetters({
        doubleHomeCounter: "home/doubleHomeCounter"
      })

      // 2.寫法二
      // ...mapState("home", ["homeCounter"]),
      // ...mapGetters("home", ["doubleHomeCounter"])

      // 3.寫法三
      // ...mapState(["homeCounter"]),
      // ...mapGetters(["doubleHomeCounter"])
    },
    methods: {
      // 1.寫法一:
      ...mapMutations({
        increment: "home/increment"
      }),
      ...mapActions({
        incrementAction: "home/incrementAction"
      })

      // 2.寫法二:
      // ...mapMutations("home", ["increment"]),
      // ...mapActions("home", ["incrementAction"])

      // 3.寫法三:
      // ...mapMutations(["increment"]),
      // ...mapActions(["incrementAction"])
    },
    setup() {
      // const state = useState("home", ["homeCounter"])
      // const getters = useGetters("home", ["doubleHomeCounter"]);
      
      // const mutations = mapMutations(["increment"]);
      // const actions = mapActions(["incrementActions"])
      // return {
      //   ...state,
      //   ...getters,
      //   ...mutations,
      //   ...actions
      // }
    }
  }
</script>

<style scoped>

</style>