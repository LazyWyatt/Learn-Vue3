import { createApp } from 'vue'
import App from './04_teleport內置組件/App.vue'
import registerDirectives from './directives';
import pluginObject from './plugins/plugin_object';
import pluginFunction from './plugins/plugins_function';


const app = createApp(App);

registerDirectives(app);
// app.directive("focus", {
//   mounted(el, bindings, vnode, preVnode) {
//     el.focus();
//   }
// })
app.use(pluginObject);
app.use(pluginFunction);


app.mount('#app');

