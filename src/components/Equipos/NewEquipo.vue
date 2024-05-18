<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold"> Nuevo Equipo</h1>
      <div class="card">
        <div class="card-header fw-bold">
          Equipo
        </div>
        <div class="card-body">
          <form @submit.prevent="saveEquipo">
            <div class="row mb-3">
              <label for="nombre" class="form-label">Nombre :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                <input type="text" class="form-control" id="nombre" v-model="equipo.nombre">
              </div>
            </div>
            <div class="row mb-3">
              <label for="descripcion" class="form-label">Descripción :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="align-left" /></div>
                <input type="text" class="form-control" id="descripcion" v-model="equipo.descripcion">
              </div>
            </div>
            <div class="row mb-3">
              <label for="tipo" class="form-label">Tipo :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="tools" /></div>
                <input type="text" class="form-control" id="tipo" v-model="equipo.tipo">
              </div>
            </div>
            <div class="row mb-3">
              <label for="precio_por_día" class="form-label">Precio por Día :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="dollar-sign" /></div>
                <input type="number" class="form-control" id="precio_por_día" v-model="equipo.precio_por_día">
              </div>
            </div>
            <div class="row mb-3">
              <label for="cantidad_disponible" class="form-label">Cantidad Disponible :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="box" /></div>
                <input type="number" class="form-control" id="cantidad_disponible" v-model="equipo.cantidad_disponible">
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
    name: 'NewEquipo',
    data() {
      return {
        equipo: {
          nombre: '',
          descripcion: '',
          tipo: '',
          precio_por_día: 0,
          cantidad_disponible: 0
        }
      }
    },
    methods: {
      cancelar() {
        this.$router.push({ name: 'equipos' })
      },
      async saveEquipo() {
        const res = await axios.post(`http://127.0.0.1:8000/api/equipos`, this.equipo)
        if (res.status === 200) {
          this.$router.push({ name: 'equipos' })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Equipo ha sido guardado',
            showConfirmButton: false,
            timer: 2000
          })
        }
      }
    }
  }
  </script>
