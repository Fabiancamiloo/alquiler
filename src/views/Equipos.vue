<template>
    <div class="container">
        <h1 class="text-start">Listado de Equipos
            <button @click="newEquipo" class="btn btn-success mx-2">
                <font-awesome-icon icon="plus" />
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Precio por Día</th>
                    <th scope="col">Cantidad Disponible</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(equipo, index) in equipos" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ equipo.nombre }}</td>
                    <td>{{ equipo.descripcion }}</td>
                    <td>{{ equipo.tipo }}</td>
                    <td>{{ equipo.precio_por_día }}</td>
                    <td>{{ equipo.cantidad_disponible }}</td>
                    <td>
                        <button @click="deleteEquipo(equipo.id)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editEquipo(equipo.id)" class="btn btn-warning mx-2">
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
    name: 'Equipos',
    data() {
        return {
            equipos: []
        };
    },
    methods: {
        deleteEquipo(id) {
            Swal.fire({
                title: `¿Quieres eliminar el equipo con ID ${id}?`,
                showCancelButton: true,
                confirmButtonText: 'Eliminar'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                        .delete(`http://127.0.0.1:8000/api/equipos/${id}`)
                        .then(response => {
                            if (response.data.success) {
                                Swal.fire('Eliminado!', '', 'success');
                                this.equipos = response.data.equipos;
                            }
                        });
                }
            });
        },
        editEquipo(id) {
            this.$router.push({ name: 'EditarEquipo', params: { id: id } });
        },
        newEquipo() {
            this.$router.push({ name: 'NewEquipo' });
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/equipos")
            .then(response => {
                this.equipos = response.data.equipos;
            });
    }
};
</script>
