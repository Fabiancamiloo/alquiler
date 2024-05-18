<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold"> Editar Pago</h1>
      <div class="card">
        <div class="card-header fw-bold">
          Pago
        </div>
        <div class="card-body">
          <form @submit.prevent="updatePago">
            <div class="row mb-3">
              <label for="contrato_id" class="form-label">Contrato ID :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="file-contract" /></div>
                <input type="number" class="form-control" id="contrato_id" v-model="pago.contrato_id">
              </div>
            </div>
            <div class="row mb-3">
              <label for="monto" class="form-label">Monto :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="dollar-sign" /></div>
                <input type="number" class="form-control" id="monto" v-model="pago.monto">
              </div>
            </div>
            <div class="row mb-3">
              <label for="fecha_pago" class="form-label">Fecha de Pago :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="calendar" /></div>
                <input type="date" class="form-control" id="fecha_pago" v-model="pago.fecha_pago">
              </div>
            </div>
            <div class="row mb-3">
              <label for="metodo_pago" class="form-label">Método de Pago :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="credit-card" /></div>
                <input type="text" class="form-control" id="metodo_pago" v-model="pago.metodo_pago">
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
    name: 'EditarPago',
    data() {
      return {
        pago: {
          id: 0,
          contrato_id: 0,
          monto: 0,
          fecha_pago: '',
          metodo_pago: ''
        }
      }
    },
    methods: {
      cancelar() {
        this.$router.push({ name: 'pagos' })
      },

      async updatePago() {
        const res = await axios.put(`http://127.0.0.1:8000/api/pagos/${this.pago.id}`, this.pago)
        
        if (res.status === 200) {
          this.$router.push({ name: 'pagos' })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Pago ha sido actualizado',
            showConfirmButton: false,
            timer: 2000
          })
        }
      }
    },
    mounted() {
      this.pago.id = this.$route.params.id
      axios.get(`http://127.0.0.1:8000/api/pagos/${this.pago.id}`)
        .then(response => {
          this.pago = response.data.pago
        })
    },
  }
  </script>
