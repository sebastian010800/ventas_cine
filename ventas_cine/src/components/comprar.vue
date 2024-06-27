<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Compra de Ticket para {{ selectedMovie.title }}</h1>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700">Cantidad de Entradas:</label>
          <input type="number" v-model="ticket.quantity" class="w-full p-2 border border-gray-300 rounded">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Ubicación:</label>
          <input type="text" v-model="ticket.location" class="w-full p-2 border border-gray-300 rounded">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Nombre:</label>
          <input type="text" v-model="ticket.name" class="w-full p-2 border border-gray-300 rounded">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Correo Electrónico:</label>
          <input type="email" v-model="ticket.email" class="w-full p-2 border border-gray-300 rounded">
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Generar Factura</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['selectedMovie'],
    data() {
      return {
        ticket: {
          quantity: 1,
          location: '',
          name: '',
          email: ''
        }
      };
    },
    methods: {
      handleSubmit() {
        this.$emit('ticket-purchased', {
          ...this.ticket,
          movie: this.selectedMovie,
          date: new Date()
        });
      }
    }
  }
  </script>
  