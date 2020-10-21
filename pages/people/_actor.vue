<template>
  <div class="d-flex flex-column p-4 w-100">
    <div class="w-100 h-100">
      <h1 class="mb-4">{{ currentActor && currentActor.name ? currentActor.name : '' }}</h1>
      <p class="m-0 h5 mb-3">Gender: {{ currentActor && currentActor.gender ? currentActor.gender : '' }}</p>
      <p class="m-0 h5 mb-3">Skin color: {{ currentActor && currentActor.skin_color ? currentActor.skin_color : '' }}</p>
      <p class="m-0 h5 mb-3">Hair color: {{ currentActor && currentActor.hair_color ? currentActor.hair_color : '' }}</p>
      <p class="m-0 h5 mb-3">Eye color: {{ currentActor && currentActor.eye_color ? currentActor.eye_color : '' }}</p>
      <p class="m-0 h5 mb-3">Height: {{ currentActor && currentActor.height ? currentActor.height : '' }}</p>
      <p class="m-0 h5 mb-3">Mass: {{ currentActor && currentActor.mass ? currentActor.mass : '' }}</p>
      <p class="m-0 h5 mb-3">Birth year: {{ currentActor && currentActor.birth_year ? currentActor.birth_year : '' }}</p>
    </div>
    <div class="w-100 d-flex justify-content-between">
      <router-link v-if="currentPeopleIndex" class="random_post-link" :to="`/people/${currentPeopleIndex}`">
        <b-button variant="info" @click="openCurrentActor(currentPeopleIndex - 1)">Предыдущий</b-button>
      </router-link>
      <b-button v-else variant="secondary">Предыдущий</b-button>
      <router-link class="random_post-link" :to="`/people/manage`">
        <b-button variant="info">К списку</b-button>
      </router-link>
      <router-link v-if="currentPeopleIndex < people.length" class="random_post-link" :to="`/people/${currentPeopleIndex}`">
        <b-button variant="info" @click="openCurrentActor(currentPeopleIndex + 1)">Следующий</b-button>
      </router-link>
      <b-button v-else variant="secondary">Следующий</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "_actor",
  computed: {
    currentActor() {
      return this.$store.getters['people/getCurrentActor']
    },
    people() {
      return this.$store.getters['people/getPeople']
    },
    currentPeopleIndex() {
      return this.$store.getters['people/getCurrentActorIndex']
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
