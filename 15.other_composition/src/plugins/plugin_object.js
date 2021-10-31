export default {
  install(app) {
    app.config.globalProperties.$name = "wyattlazy"
    console.log(app);
  }
}