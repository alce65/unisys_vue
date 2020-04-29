import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const url = 'http://localhost:3000/mensajes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    /**
     * setter: actualiza el estado a partir del back
     * @param {*} state: stado actual
     * @param {*} messages: objeto correspondiente a la propiedad messages
     */
    updateMessages (state, messages) {
      state.messages = messages
    },
    /**
     * setter: actualiza el stado con un nuevo mensaje
     * @param {*} state
     * @param {*} message
     */
    newMessage (state, message) {
      state.messages.push(message)
    }
  },
  actions: {
    getMessages ({ commit }) {
      axios.get(url).then(res => {
        const msg = res.data.map(item => item.titulo)
        commit('updateMessages', msg)
      })
    },
    postMessage ({ commit }, msg) {
      axios.post(url, msg).then(res => {
        console.log(res)
        if (res.status === 201 && res.data.id) {
          commit('newMessage', msg.titulo)
        }
      })
    }
  }
})

