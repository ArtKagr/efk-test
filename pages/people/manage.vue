<template>
  <div class="m-4 d-flex flex-wrap">
    <b-card
      v-for="(actor, key) in people"
      :key="key"
      :header="actor.gender"
      :title="actor.name"
      class="mr-4 mb-4 w-100"
    >
      <router-link class="random_post-link" :to="`/people/${key + 1}`">
        <b-button @click="openCurrentActor(key + 1)">Перейти</b-button>
      </router-link>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "People",
  computed: {
    people() {
      return this.$store.getters['people/getPeople']
    }
  },
  methods: {
    openCurrentActor(currentActor) {
      this.$store.commit('people/SAVE_CURRENT_PEOPLE_INDEX', currentActor)
      this.$store.dispatch('people/fetchCurrentActor', currentActor)
    }
  }
}
</script>
