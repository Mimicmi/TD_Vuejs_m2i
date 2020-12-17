import { createApp } from 'vue'
import App from './App.vue'
import Product from "./components/Product";
import Form from "./components/Form";
import router from "../src/router/index";
import AboutDetails from "./components/AboutDetails";


const app = createApp(App);

app.use(router);

app.component("Product", Product);
app.component("Form", Form);
app.component("AboutDetails", AboutDetails);

app.mount('#app');

