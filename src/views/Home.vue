<template>
  <h1 class="my-5">Registro de Productos</h1>

  <form @submit.prevent="procesarFormulario" class="mb-3">
    <Input :producto="producto" />
  </form>
  <hr />
  <hr />
  <div class="mt-2 mb-3">
    <h3>Listado de Productos</h3>
  </div>
  <ListaTareas  />
</template>

<script>
import Input from "../components/Input";
import ListaTareas from "../components/ListaTareas";
import { mapActions } from "vuex";
const shortid = require("shortid");

export default {
  name: "Home",
  components: {
    Input,
    ListaTareas,
  },
  data() {
    return {
      producto: {
        id: "",
        nombre: "",
        descripcion: "",
        numero: 0,
        precio: "",
        categoria: "",
      },
    };
  },
  methods: {
    ...mapActions(["setTareas"]),
    procesarFormulario() {
      console.log(this.producto);
      if (this.producto.nombre.trim() === "") {
        console.log("Campo vacío");
        return;
      }
      console.log("no está vacio");

      // generar id
      this.producto.id = shortid.generate();
      console.log(this.producto.id);

      // envian los datos
      this.setTareas(this.producto);

      // limpiar datos
      this.producto = {
        id: "",
        nombre: "",
        descripcion: "",
        numero: 0,
        precio: "",
        categoria: "",
      };
    },
  },
};
</script>
