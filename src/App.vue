<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
$green: rgb(224,247,72);
$pink: rgb(238,110,82);
$blue: rgb(182,230,235);
$dark-blue: rgb(62,62,81);

h1, h2, h3, h4 {
  color: $blue;
}

body {
  background-color: $dark-blue;
  color: white;
  @import url('https://fonts.googleapis.com/css?family=Inconsolata');
  font-family: 'Inconsolata', monospace;
}

a {
  color: $pink;
}
.header {
  text-align: center;
}

.title {
  margin-bottom: 0px;
}
.subtitle {
  margin-top: 5px;
  color: white;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}
.section {
  margin-top: 2px;
  max-width: 650px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
