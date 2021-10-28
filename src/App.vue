<template>
  <div id="app">
      <nav id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/photos">Photos</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}



#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
