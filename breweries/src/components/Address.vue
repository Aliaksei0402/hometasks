<template>
  <div>
    <p>Страна: {{ item.country }}</p>
    <p>Штат: {{ item.state }}</p>
    <p>Город: {{ item.city }}</p>
    <p>Улица: {{ item.street }}</p>
    <p>Индекс: {{ item.postal_code }}</p>
  </div>
</template>

<script>
export default {
  name: "Address",
  props: ["item"],
};
</script>

<style scoped>
p {
  color: red;
}
</style>
