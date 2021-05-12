<template>
  <div class="container">
    <div class="logo">Notes</div>
    <div class="header">header</div>
    <div class="menu">
      <p>Tags</p>
      <p>Notes</p>
      <p>Calendar</p>
      <p>Archive</p>
      <p>Trash</p>
    </div>
    <div class="content">
      <Note v-for="note in notes" :note="note" :key="note.title" />
    </div>
    <div class="subcontent">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </div>
    <div class="footer">footer</div>
  </div>
</template>

<script>
import Note from "./components/Note.vue";
export default {
  name: "App",
  components: { Note },
  data() {
    return {
      selectedNote: "abc",
      notes: [
        {
          title: "a",
          body: "1",
        },
        {
          title: "b",
          body: "2",
        },
        {
          title: "c",
          body: "3",
        },
      ],
    };
  },
};
</script>

<style scoped>
body {
  background-color: grey;
}
body * {
  font-family: sans-serif;
}

.container {
  display: grid;
  grid-template: repeat(10, 1fr) / repeat(10, 1fr);
  height: 100vh;
}

.header {
  background-color: yellow;
  grid-column: 3 / -1;
  grid-row: 1/3;
  text-align: center;
}
.logo {
  grid-column: 1/3;
  grid-row: 1/3;
  background-color: chocolate;
  font-size: 2em;
  font-weight: bold;
  padding: 20px;
}
.menu {
  grid-column: 1/3;
  grid-row: 3/10;
  padding: 20px;
}

.footer {
  grid-column: 1/-1;
  grid-row: 10/11;
}

.content {
  background-color: grey;
  grid-column: 3/7;
  grid-row: 3/10;
  border-top-left-radius: 10%;
  padding: 20px;
  display: grid;
  grid-gap: 5px;
}
.subcontent {
  background-color: grey;
  grid-column: 7/11;
  grid-row: 3/10;
  border-top-right-radius: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.footer {
  background-color: aqua;
}
@media screen and (max-width: 1992px) {
  body {
    background-color: darkorange;
  }
}

@media screen and (max-width: 700px) {
  body {
    background-color: olive;
  }
}
</style>
