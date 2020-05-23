<template>
  <div>
    <p>Долгота: {{ item.latitude }}</p>
    <p>Широта: {{ item.longitude }}</p>
  </div>
</template>

<script>
export default {
  name: "Coords",
  props: ["item"],
};
</script>

<style></style>
