<template>
  <div class="coords">
    <img src="../../img/map.png" width="50" />
    <div>
      <p>Долгота: {{ item.latitude }}</p>
      <p>Широта: {{ item.longitude }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Coords",
  props: ["item"],
};
</script>

<style></style>
