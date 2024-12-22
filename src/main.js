import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"



// 添加 Font Awesome 圖標到庫
library.add(fas);

const app = createApp(App);

// 註冊 FontAwesomeIcon 全域元件
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
