import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    productos: [],
    producto: {
      id: '',
      nombre: '',
      descripcion: '',
      numero: 0,
      precio: 0,
      categoria: '' 
    }
  },
  mutations: {
    cargar(state, payload) {
      state.productos = payload
    },
    set(state, payload) {
      state.productos.push(payload)
      localStorage.setItem('productos', JSON.stringify(state.productos))
    },
    eliminar(state, payload) {
      state.productos = state.productos.filter(item => item.id !== payload)
      localStorage.setItem('productos', JSON.stringify(state.productos))
    },
    producto(state, payload) {
      if (!state.productos.find(item => item.id === payload)) {
        router.push('/')
        return
      }
      state.producto = state.productos.find(item => item.id === payload)
    },
    update(state, payload) {
      state.productos = state.productos.map(item => item.id === payload.id ? payload : item)
      router.push('/')
      localStorage.setItem('productos', JSON.stringify(state.productos))
    }
  },
  actions: {
    cargarLocalStorage({ commit }) {
      if (localStorage.getItem('productos')) {
        const productos = JSON.parse(localStorage.getItem('productos'))
        commit('cargar', productos)
        return
      }

      localStorage.setItem('productos', JSON.stringify([]))
    },
    setTareas({ commit }, producto) {
      commit('set', producto)
    },
    deleteTareas({ commit }, id) {
      commit('eliminar', id)
    },
    setProducto({ commit }, id) {
      commit('producto', id)
    },
    updateProducto({ commit }, producto) {
      commit('update', producto)
    }
  },
  modules: {
  }
})
