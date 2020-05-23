<template>
  <div id="app">
    <ul>
      <li v-for="item in breweries" :key="item.id" :item="item">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import breweries from "./data/breweries";

export default {
  name: "App",
  components: {},
  data: () => ({
    breweries,
  }),
};
</script>

<style lang="scss"></style>
