<template>
  <div class="bg-gray-500">
    <div class="container mx-auto p-4">
      <peliculas @movie-selected="handleMovieSelected" />
      <comprar v-if="selectedMovie" :selectedMovie="selectedMovie" @ticket-purchased="handlecomprard" />
      <pdf v-if="ticket" :ticket="ticket" />
    </div>
  </div>
</template>

<script>
import peliculas from './components/peliculas.vue';
import comprar from './components/comprar.vue';
import pdf from './components/pdf.vue';
import './style.css';

export default {
  components: {
    peliculas,
    comprar,
    pdf
  },
  data() {
    return {
      selectedMovie: null,
      ticket: null
    };
  },
  methods: {
    handleMovieSelected(movie) {
      this.selectedMovie = movie;
    },
    handlecomprard(ticket) {
      this.ticket = ticket;
      this.selectedMovie = null;
    }
  }
}
</script>
