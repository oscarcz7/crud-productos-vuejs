<template>
    <table class="table mt-2">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Categoria</th>
                <th scope="col">Acción</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in productos" :key="item.id">
                <th scope="row">{{item.id}}</th>
                <td>{{item.nombre}}</td>
                <td>{{item.descripcion}}</td>
                <td>{{item.numero}}</td>
                <td>{{item.precio}}</td>
                <td>{{item.categoria}}</td>
                <td>
                    <button class="btn btn-danger btn-sm" @click="deleteTareas(item.id)">
                        Eliminar
                    </button>
                    <router-link 
                        class="btn btn-warning ml-2 btn-sm"
                        :to="{
                            name: 'Editar',
                            params: {
                                id: item.id
                            }
                        }"
                    >
                        Editar
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState(['productos'])
    },
    methods: {
        ...mapActions(['deleteTareas'])
    }
}
</script>