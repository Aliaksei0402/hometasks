<template>
  <div id="app">
    <div v-for="item in breweries" :key="item.id" :item="item">
      <div class="alert alert-info">
        {{ item.name }}
        <Address :item="item" />
        <Coords :item="item" />
        <div>Телефон: {{ item.phone }}</div>
      </div>
    </div>

    <!-- < v-for="item in breweries" :key="item.id" :item="item" /> -->
  </div>
</template>

<script>
import breweries from "./data/breweries";
import Address from "./components/Address.vue";
import Coords from "./components/Coords";

export default {
  name: "App",
  components: {
    Address,
    Coords,
  },
  data: () => ({
    breweries,
  }),
};
</script>

<style lang="scss"></style>
