<template>
  <div class="note">
    {{ note.body }}
  </div>
</template>

<script>
export default {
  name: "Note",
  props: ["note"],
  mounted() {
    console.log(this.note);
  },
};
</script>

<style scoped>
.note {
  height: 75px;
  background-color: #dddddd;
  padding: 5px;
}
</style>
