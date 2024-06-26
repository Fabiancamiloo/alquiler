import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBank, faBuilding, faPencilAlt, faPhone, faPlus, faTag, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

// Agregar los íconos a la biblioteca de Font Awesome
library.add(faPhone);
library.add(faUser);
library.add(faTrash);
library.add(faPencilAlt);
library.add(faTag);
library.add(faBuilding);
library.add(faBank);
library.add(faPlus);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app');
