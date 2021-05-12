<template>
  <div class="container">
    <div class="logo">logo</div>
    <div class="header">header</div>
    <div class="menu">menu</div>
    <div class="content">content</div>
    <div class="subcontent">sub content</div>
    <div class="footer">footer</div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
body * {
  font-family: sans-serif;
  text-align: center;
  color: black;
}

.container {
  display: grid;
  grid-template: repeat(10, 1fr) / repeat(10, 1fr);
  height: 90vh;
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
}
.menu {
  background-color: red;
  grid-column: 1/3;
  grid-row: 3/10;
}

.footer {
  grid-column: 1/-1;
  grid-row: 10/11;
}

.content {
  background-color: blueviolet;
  grid-column: 3/7;
  grid-row: 3/10;
  border-top-left-radius: 10%;
}
.subcontent {
  background-color: darkmagenta;
  grid-column: 7/11;
  grid-row: 3/10;
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
