<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Factura</h1>
      <button @click="generatePDF" class="bg-blue-500 text-white px-4 py-2 rounded">Descargar Factura</button>
    </div>
  </template>
  
  <script>
  import jsPDF from 'jspdf';
  
  export default {
    props: ['ticket'],
    methods: {
      generatePDF() {
        const doc = new jsPDF();
        doc.text(`Factura de Compra`, 10, 10);
        doc.text(`Cliente: ${this.ticket.name}`, 10, 20);
        doc.text(`Correo: ${this.ticket.email}`, 10, 30);
        doc.text(`Película: ${this.ticket.movie.title}`, 10, 40);
        doc.text(`Cantidad de Entradas: ${this.ticket.quantity}`, 10, 50);
        doc.text(`Ubicación: ${this.ticket.location}`, 10, 60);
        doc.text(`Fecha y Hora de Compra: ${this.ticket.date}`, 10, 70);
        doc.text(`Fecha y Hora de la Película: ${this.ticket.movie.date}`, 10, 80);
        doc.save('factura.pdf');
      }
    }
  }
  </script>
  