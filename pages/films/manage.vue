<template>
  <div class="m-4 d-flex flex-wrap">
    <b-card
      v-for="(film, key) in films"
      :key="key"
      :header="film.director"
      :title="film.title"
      :sub-title="film.release_date"
      class="mr-4 mb-4 film_card"
    >
      <b-card-text>
        {{ film.opening_crawl }}
      </b-card-text>
      <router-link class="random_post-link" :to="`/films/${key + 1}`">
        <b-button @click="openCurrentFilm(key + 1)">Перейти</b-button>
      </router-link>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Films",
  computed: {
    films() {
      return this.$store.getters['films/getFilms']
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
