<template>
  <div class="row">
    <div class="col-md-6">
      <div class="form-floating mb-3">
        <label for="floatingInput">Nombre Producto</label>
        <input
          type="text"
          class="form-control my-2"
          placeholder="Ingrese nombre"
          v-model.trim="producto.nombre"
        />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-floating mb-3">
        <label for="floatingInput">Descripcion</label>
        <input
          type="text"
          class="form-control my-2"
          placeholder="Ingrese descripcion"
          v-model.trim="producto.descripcion"
        />
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <label for="floatingInput">Cantidad Stock</label>
      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          placeholder="Ingrese cantidad"
          v-model.number="producto.numero"
        />
      </div>
    </div>
    <div class="col-md-6">
      <div>
        <label for="floatingInput">Precio</label>
        <input
          type="number"
          min="0"
          step=".01"
          class="form-control"
          placeholder="Ingrese precio"
          v-model.number="producto.precio"
        />
      </div>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-md-6">
      <div class="form-floating">
        <label for="floatingSelect">Selecciona Categoria</label>
        <select
          class="form-select p-3 form-control"
          id="floatingSelect"
          aria-label="Floating label select example"
          v-model="producto.categoria"
        >
          <option value="Frutas y Verdutas">Frutas y Verduras</option>
          <option value="Perecibles">Perecibles</option>
          <option value="No Perecibles">No Perecibles</option>
          <option value="Aseo">Aseo</option>
          <option value="Otros">Otros</option>
        </select>
      </div>
    </div>
  </div>

  <!-- <div class="row">
    <div class="col-md-6">
      <div class="mt-2">
        <div>
          <label for="producto" />
        </div>
        <div class="form-check form-check-inline">
          <input
            type="radio"
            id="radio-1"
            class="form-check-input"
            value="urgente"
            v-model="producto.estado"
          />
          <label for="radio-1" class="form-check-label"
            >Frutas y Verduras</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            type="radio"
            id="radio-2"
            class="form-check-input"
            value="relax"
            v-model="producto.estado"
          />
          <label for="radio-2" class="form-check-label">Perecibles</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            type="radio"
            id="radio-3"
            class="form-check-input"
            value="relax"
            v-model="producto.estado"
          />
          <label for="radio-2" class="form-check-label">No Perecibles</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            type="radio"
            id="radio-4"
            class="form-check-input"
            value="relax"
            v-model="producto.estado"
          />
          <label for="radio-2" class="form-check-label">Golosinas</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            type="radio"
            id="radio-5"
            class="form-check-input"
            value="relax"
            v-model="producto.estado"
          />
          <label for="radio-2" class="form-check-label">Aseo</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            type="radio"
            id="radio-6"
            class="form-check-input"
            value="relax"
            v-model="producto.estado"
          />
          <label for="radio-2" class="form-check-label">Otros</label>
        </div>
      </div>
    </div>
  </div> -->
  <!-- <div class="form-check form-check-inline">
    <input
      type="checkbox"
      id="check-1"
      class="form-check-input"
      v-model="producto.categorias"
      value="javascript"
    />
    <label for="check-1" class="form-check-label">Javascript</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      type="checkbox"
      id="check-2"
      class="form-check-input"
      v-model="producto.categorias"
      value="node js"
    />
    <label for="check-2" class="form-check-label">Node.js</label>
  </div> -->

  <button
    class="btn btn-dark mt-2 btn-block"
    type="submit"
    :disabled="bloquear"
  >
    Procesar
  </button>
</template>

<script>
export default {
  props: {
    producto: Object,
  },
  computed: {
    bloquear() {
      return this.producto.nombre.trim() === "" ? true : false;
    },
  },
};
</script>
