<template>
  <div>
    <div class="postal-code">
      <img src="../../img/street.png" width="50" />
      <p>Улица: {{ item.street }}</p>
    </div>
    <div class="postal-code">
      <img src="../../img/letter.png" width="50" />
      <p>Почтовый индекс: {{ item.postal_code }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Address",
  props: ["item"],
};
</script>

<style></style>
