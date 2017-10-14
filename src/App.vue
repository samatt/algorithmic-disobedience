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
body {
  background-color: rgb(62,62,81);
  color: rgb(182,230,235);
  @import url('https://fonts.googleapis.com/css?family=Inconsolata');
  font-family: 'Inconsolata', monospace;
  text-align: center;

  $pink: rgb(238,110,82);
}

a {
  background-color: rgb(224,247,72);
  color: rgb(62,62,81);
}
em {
  color: rgb(238,110,82);
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
