<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold"> Editar Contrato</h1>
      <div class="card">
        <div class="card-header fw-bold">
          Contrato
        </div>
        <div class="card-body">
          <form @submit.prevent="updateContrato">
            <div class="row mb-3">
              <label for="reserva_id" class="form-label">Reserva ID :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="file-contract" /></div>
                <input type="number" class="form-control" id="reserva_id" v-model="contrato.reserva_id">
              </div>
            </div>
            <div class="row mb-3">
              <label for="terminos" class="form-label">Términos :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="file-alt" /></div>
                <textarea class="form-control" id="terminos" v-model="contrato.terminos"></textarea>
              </div>
            </div>
            <div class="row mb-3">
              <label for="fecha_contrato" class="form-label">Fecha Contrato :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="calendar" /></div>
                <input type="date" class="form-control" id="fecha_contrato" v-model="contrato.fecha_contrato">
              </div>
            </div>
            <div class="row mb-3">
              <label for="estado" class="form-label">Estado :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="check-circle" /></div>
                <input type="text" class="form-control" id="estado" v-model="contrato.estado">
              </div>
            </div>
            <button class="btn btn-primary" type="submit">Actualizar</button>
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
    name: 'EditarContrato',
    data() {
      return {
        contrato: {
          id: 0,
          reserva_id: 0,
          terminos: '',
          fecha_contrato: '',
          estado: ''
        }
      }
    },
    methods: {
      cancelar() {
        this.$router.push({ name: 'contratos' })
      },

      async updateContrato() {
        const res = await axios.put(`http://127.0.0.1:8000/api/contratos/${this.contrato.id}`, this.contrato)
        
        if (res.status === 200) {
          this.$router.push({ name: 'contratos' })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Contrato ha sido actualizado',
            showConfirmButton: false,
            timer: 2000
          })
        }
      }
    },
    mounted() {
      this.contrato.id = this.$route.params.id
      axios.get(`http://127.0.0.1:8000/api/contratos/${this.contrato.id}`)
        .then(response => {
          this.contrato = response.data.contrato
        })
    },
  }
  </script>

