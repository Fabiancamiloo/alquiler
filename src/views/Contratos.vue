<template>
    <div class="container">
        <h1 class="text-start">Listado de Contratos
            <button @click="newContrato" class="btn btn-success mx-2">
                <font-awesome-icon icon="plus" />
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Reserva ID</th>
                    <th scope="col">Términos</th>
                    <th scope="col">Fecha Contrato</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(contrato, index) in contratos" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ contrato.reserva_id }}</td>
                    <td>{{ contrato.terminos }}</td>
                    <td>{{ contrato.fecha_contrato }}</td>
                    <td>{{ contrato.estado }}</td>
                    <td>
                        <button @click="deleteContrato(contrato.id)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editContrato(contrato.id)" class="btn btn-warning mx-2">
                            <font-awesome-icon icon="pencil-alt" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'Contratos',
    data() {
        return {
            contratos: []
        };
    },
    methods: {
        deleteContrato(id) {
            Swal.fire({
                title: `¿Quieres eliminar el contrato con ID ${id}?`,
                showCancelButton: true,
                confirmButtonText: 'Eliminar'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                        .delete(`http://127.0.0.1:8000/api/contratos/${id}`)
                        .then(response => {
                            if (response.data.success) {
                                Swal.fire('Eliminado!', '', 'success');
                                this.contratos = response.data.contratos;
                            }
                        });
                }
            });
        },
        editContrato(id) {
            this.$router.push({ name: 'EditarContrato', params: { id: id } });
        },
        newContrato() {
            this.$router.push({ name: 'NewContrato' });
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/contratos")
            .then(response => {
                this.contratos = response.data.contratos;
            });
    }
};
</script>
