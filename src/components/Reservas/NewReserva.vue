<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold"> Nueva Reserva</h1>
      <div class="card">
        <div class="card-header fw-bold">
          Reserva
        </div>
        <div class="card-body">
          <form @submit.prevent="saveReserva">
            <div class="row mb-3">
              <label for="equipo_id" class="form-label">Equipo ID :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="box" /></div>
                <input type="number" class="form-control" id="equipo_id" v-model="reserva.equipo_id">
              </div>
            </div>
            <div class="row mb-3">
              <label for="cliente_id" class="form-label">Cliente ID :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="user" /></div>
                <input type="number" class="form-control" id="cliente_id" v-model="reserva.cliente_id">
              </div>
            </div>
            <div class="row mb-3">
              <label for="fecha_inicio" class="form-label">Fecha Inicio :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="calendar" /></div>
                <input type="date" class="form-control" id="fecha_inicio" v-model="reserva.fecha_inicio">
              </div>
            </div>
            <div class="row mb-3">
              <label for="fecha_fin" class="form-label">Fecha Fin :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="calendar" /></div>
                <input type="date" class="form-control" id="fecha_fin" v-model="reserva.fecha_fin">
              </div>
            </div>
            <div class="row mb-3">
              <label for="estado" class="form-label">Estado :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="check-circle" /></div>
                <input type="text" class="form-control" id="estado" v-model="reserva.estado">
              </div>
            </div>
            <button class="btn btn-primary" type="submit">Guardar</button>
            <button class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import Swal from 'sweetalert2'
  
  export default {
    name: 'NewReserva',
    data() {
      return {
        reserva: {
          equipo_id: 0,
          cliente_id: 0,
          fecha_inicio: '',
          fecha_fin: '',
          estado: ''
        }
      }
    },
    methods: {
      cancelar() {
        this.$router.push({ name: 'reservas' })
      },
      async saveReserva() {
        const res = await axios.post(`http://127.0.0.1:8000/api/reservas`, this.reserva)
        if (res.status === 200) {
          this.$router.push({ name: 'reservas' })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Reserva ha sido guardada',
            showConfirmButton: false,
            timer: 2000
          })
        }
      }
    }
  }
  </script>
