import { createRouter, createWebHistory } from 'vue-router';

import EditarEquipo from '../components/Equipo/EditarEquipo.vue';
import NewEquipo from '../components/Equipo/NewEquipo.vue';
import Equipos from '../views/Equipos.vue';
import EditarReserva from '../components/Reserva/EditarReserva.vue';
import NewReserva from '../components/Reserva/NewReserva.vue';
import Reservas from '../views/Reservas.vue';
import EditarCliente from '../components/Cliente/EditarCliente.vue';
import NewCliente from '../components/Cliente/NewCliente.vue';
import Clientes from '../views/Clientes.vue';
import EditarContrato from '../components/Contrato/EditarContrato.vue';
import NewContrato from '../components/Contrato/NewContrato.vue';
import Contratos from '../views/Contratos.vue';
import EditarPago from '../components/Pago/EditarPago.vue';
import NewPago from '../components/Pago/NewPago.vue';
import Pagos from '../views/Pagos.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/equipos',
    name: 'equipos',
    component: Equipos
  },
  {
    path: '/editar-equipo/:id',
    name: 'EditarEquipo',
    component: EditarEquipo
  },
  {
    path: '/add-equipo/',
    name: 'NewEquipo',
    component: NewEquipo
  },
  {
    path: '/reservas',
    name: 'reservas',
    component: Reservas
  },
  {
    path: '/editar-reserva/:id',
    name: 'EditarReserva',
    component: EditarReserva
  },
  {
    path: '/add-reserva/',
    name: 'NewReserva',
    component: NewReserva
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: Clientes
  },
  {
    path: '/editar-cliente/:id',
    name: 'EditarCliente',
    component: EditarCliente
  },
  {
    path: '/add-cliente/',
    name: 'NewCliente',
    component: NewCliente
  },
  {
    path: '/contratos',
    name: 'contratos',
    component: Contratos
  },
  {
    path: '/editar-contrato/:id',
    name: 'EditarContrato',
    component: EditarContrato
  },
  {
    path: '/add-contrato/',
    name: 'NewContrato',
    component: NewContrato
  },
  {
    path: '/pagos',
    name: 'pagos',
    component: Pagos
  },
  {
    path: '/editar-pago/:id',
    name: 'EditarPago',
    component: EditarPago
  },
  {
    path: '/add-pago/',
    name: 'NewPago',
    component: NewPago
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
