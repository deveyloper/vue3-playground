<template>
  <div class="container">
    <div class="logo">Notes</div>
    <div class="header">header</div>
    <div class="menu">
      <div class="menu-wrapper">
        <div class="menu-item" v-for="menu in menus" :key="menu.title">
          <img
            style="width: 1.5em; height: 1.5em; color: white"
            :src="`${publicPath}assets/${menu.source}.png`"
          />
          <span class="menu-text">{{ menu.text }}</span>
        </div>
      </div>
    </div>
    <div class="content">
      <Note v-for="note in notes" :note="note" :key="note.title" />
    </div>
    <div class="subcontent"></div>
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
      publicPath: process.env.BASE_URL,
      selectedNote: "abc",
      menus: [
        { text: "Notes", source: "note" },
        { text: "Tag", source: "tag" },
        { text: "Documents", source: "document" },
        { text: "Calendar", source: "calendar" },
        { text: "Trash", source: "delete" },
      ],
      notes: [
        {
          title: "How to cook a lamb",
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
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(10, 1fr);
  height: 100vh;
}

.header {
  background-color: yellow;
  grid-column: 3 / -1;
  grid-row: 1/2;
  text-align: center;
}
.logo {
  grid-column: 1/3;
  grid-row: 1/2;
  background-color: chocolate;
  font-size: 2em;
  font-weight: bold;
  padding: 20px;
}
.menu {
  color: white;
  background-color: #273236;
  grid-column: 1/3;
  grid-row: 2/10;
  padding: 20px;
  display: grid;
  grid-gap: 5px;
}

.menu-item {
  height: 40px;
}

.menu-text {
  padding-left: 15px;
  font-size: 1.5em;
}

.menu-wrapper {
  height: 300px;
}

.footer {
  grid-column: 1/-1;
  grid-row: 10/11;
}

.content {
  background-color: #ebf4f6;
  grid-column: 3/7;
  grid-row: 2/10;
  border-top-left-radius: 10%;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
}
.subcontent {
  background-color: #ebf4f6;
  grid-column: 7/11;
  grid-row: 2/10;
  border-top-right-radius: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.menu-item-div {
}

.footer {
  background-color: aqua;
}
@media screen and (max-width: 1992px) {
  body {
    background-color: darkorange;
    font-size:20px;
  }
}

@media screen and (max-width: 700px) {
  body {
    background-color: olive;
    font-size:16px;
  }
  
}

@media screen and (max-width: 1020px) {
  .menu-text{
    display: none;
  }
  body{
    font-size: 12px;
  }
  .menu, .logo{
    grid-column: 1/2;
  }
  .content{
    grid-column: 2/7;
  }

  .header{
    grid-column: 2/11;
  }

  .menu-wrapper{
    text-align: center;
  }
  
}
</style>
