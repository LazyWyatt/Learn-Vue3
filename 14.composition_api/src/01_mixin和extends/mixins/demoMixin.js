export const demoMixin = {
  data() {
    return {
      message: "Hello DemoMixin"
    }
  },
  methods: {
    foo() {
      console.log("demo mixin foo")
    }
  },
  created() {
    console.log("mixins的created週期")
  }
}