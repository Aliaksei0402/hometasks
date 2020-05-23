<template>
  <div id="app">
    <div
      class="card border-secondary mb-3 brewery"
      v-for="item in breweries"
      :key="item.id"
      :item="item"
    >
      <div class="card-header bg-transparent border-secondary title">
        <img class="beer" src="../img/beer.png" width="50" />
        <h1>{{ item.name }}</h1>
      </div>
      <div class="card-body text-secondary">
        <City :item="item" />
        <div class="card-text">
          <Address :item="item" />
          <Coords :item="item" />
        </div>
      </div>
      <div class="card-footer bg-transparent border-secondary">
        Телефон пивоварни: +{{ item.phone }}
      </div>
    </div>
  </div>
</template>

<script>
import breweries from "./data/breweries";
import City from "./components/City";
import Address from "./components/Address.vue";
import Coords from "./components/Coords";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

export default {
  name: "App",
  components: {
    Address,
    Coords,
    City,
  },
  data: () => ({
    breweries,
  }),
};
</script>

<style lang="scss"></style>
