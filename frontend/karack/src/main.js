import { createApp } from "vue";
import App from "./views/App.vue"; // Le chemin doit correspondre à l'emplacement réel de App.vue
import router from "./router"; // Assure-toi que le chemin vers ton fichier router.js est correct

createApp(App)
  .use(router) // Utilisation du router dans l'application Vue
  .mount("#app"); // Montée de l'application dans l'élément avec l'id 'app'
