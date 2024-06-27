<template>
    <div>
        <h1 class="text-2xl text-center font-bold mb-4">Listado de Películas</h1>

        <div v-if="error" class="text-red-500">{{ error }}</div>
        <div v-if="loading" class="text-gray-500">Cargando...</div>

        <div v-if="!loading && movies.length">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div v-for="movie in paginatedMovies" :key="movie.id" class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="align-center text-xl font-semibold">{{ movie.title }}</h2>
                    <img :src="movie.image" alt="Movie poster"
                        class="mt-4  w-full h-64 object-contain rounded-lg mb-2">
                    <div class="h-30">
                        <p class="text-gray-700 ">{{ movie.description }}</p>

                        <p class="text-gray-700">{{ movie.year }}</p>
                    </div>
                    <button @click="openModal(movie)" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Comprar
                        Ticket</button>
                </div>
            </div>
            <div class="mt-4 flex justify-center">
                <button @click="prevPage" :disabled="currentPage === 1"
                    class="px-4 py-2 mx-1 bg-gray-300 rounded">Anterior</button>
                <span v-for="page in totalPages" :key="page" class="">
                    <button @click="goToPage(page)"
                        :class="{ 'bg-blue-500 text-white': currentPage === page, 'bg-gray-300': currentPage !== page }"
                        class="px-2 py-1 rounded">{{ page }}</button>
                </span>
                <button @click="nextPage" :disabled="currentPage === totalPages"
                    class="px-4 py-2 mx-1 bg-gray-300 rounded">Siguiente</button>
            </div>

        </div>

        <Modal v-if="showModal" @close="showModal = false">
            <comprar :selectedMovie="selectedMovie" @ticket-purchased="handleTicketPurchased" />
        </Modal>
    </div>
</template>

<script>
import api from '../api';
import Modal from './modal.vue';
import comprar from './comprar.vue';

export default {
    components: {
        Modal,
        comprar,
    },
    data() {
        return {
            movies: [],
            loading: true,
            error: null,
            currentPage: 1,
            moviesPerPage: 3,
            showModal: false,
            selectedMovie: null,
            pageNumber: 1
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.movies.length / this.moviesPerPage);
        },
        paginatedMovies() {
            const start = (this.currentPage - 1) * this.moviesPerPage;
            const end = start + this.moviesPerPage;
            return this.movies.slice(start, end);
        }
    },
    methods: {
        fetchMovies() {
            api.getMovies()
                .then(data => {
                    this.movies = data;
                    this.loading = false;
                })
                .catch(error => {
                    this.error = 'Error occurred while fetching movies. Please try again later.';
                    this.loading = false;
                });
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        openModal(movie) {
            this.selectedMovie = movie;
            this.showModal = true;
        },
        goToPage(page) {
            this.currentPage = page;
        },

        handleTicketPurchased(ticket) {
            console.log('Ticket Purchased:', ticket);
            this.showModal = false;
        }
    },
    mounted() {
        this.fetchMovies();
    }
};
</script>