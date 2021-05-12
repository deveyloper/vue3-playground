<template>
  <div class="note">
    <div class="note-title">{{note.title}}</div>
    <div>{{ note.body }}</div>
    <div>{{ note.body }}</div>
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
  background-color: white;
  padding: 5px;
  display: grid;
  grid-template-rows: 15px auto 15px;
}

.note-title{
  font-weight: bold;
}
</style>
