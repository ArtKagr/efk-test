<template>
  <div class="d-flex m-4 justify-content-end w-100">
    <div class="user">
      <b-icon-circle-fill class="user-avatar" variant="info"></b-icon-circle-fill>
      <div class="user-data">
        <span class="user-data-name">Artyom K.</span>
        <span class="user-data-role">Frontend developer</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      text: null,
    }
  },
}
</script>
