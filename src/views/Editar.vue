<template>
  
  <h1 class="my-5">Editar Producto: {{producto.nombre}}</h1>
  <form @submit.prevent="updateProducto(producto)">
    <Input :producto="producto" />
  </form>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Input from '../components/Input'
export default {
    components:{
        Input
    },
    computed: {
        ...mapState(['producto'])
    },
    methods: {
        ...mapActions(['setProducto', 'updateProducto'])
    },
    created(){
        this.setProducto(this.$route.params.id)
    }
}
</script>
