<template>
  <div class="d-flex flex-column p-4 w-100">
    <div class="w-100 h-100">
      <h1 class="mb-4">{{ currentFilm && currentFilm.title ? currentFilm.title : '' }}</h1>
      <p class="m-0 h5 mb-3">Director: {{ currentFilm && currentFilm.director ? currentFilm.director : '' }}</p>
      <p class="m-0 h5 mb-3">Release date: {{ currentFilm && currentFilm.release_date ? currentFilm.release_date : '' }}</p>
      <p class="m-0 h5 mb-3">Producers: {{ currentFilm && currentFilm.producer ? currentFilm.producer : '' }}</p>
      <p class="m-0 w-70 mb-4">{{ currentFilm && currentFilm.opening_crawl ? currentFilm.opening_crawl : '' }}</p>
    </div>
    <div class="w-100 d-flex justify-content-between">
      <router-link v-if="currentFilmIndex" class="random_post-link" :to="`/films/${currentFilmIndex}`">
        <b-button variant="info" @click="openCurrentFilm(currentFilmIndex - 1)">Предыдущий</b-button>
      </router-link>
      <b-button v-else variant="secondary">Предыдущий</b-button>
      <router-link class="random_post-link" :to="`/films/manage`">
        <b-button variant="info">К списку</b-button>
      </router-link>
      <router-link v-if="currentFilmIndex < films.length" class="random_post-link" :to="`/films/${currentFilmIndex}`">
        <b-button variant="info" @click="openCurrentFilm(currentFilmIndex + 1)">Следующий</b-button>
      </router-link>
      <b-button v-else variant="secondary">Следующий</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "_film",
  computed: {
    currentFilm() {
      return this.$store.getters['films/getCurrentFilm']
    },
    films() {
      return this.$store.getters['films/getFilms']
    },
    currentFilmIndex() {
      return this.$store.getters['films/getCurrentFilmIndex']
    }
  },
  methods: {
    openCurrentFilm(currentFilm) {
      this.$store.commit('films/SAVE_CURRENT_FILM_INDEX', currentFilm)
      this.$store.dispatch('films/fetchCurrentFilm', currentFilm)
    }
  }
}
</script>
