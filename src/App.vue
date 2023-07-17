<template>
  <div id="app">
      <nav id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/photos">Photos</router-link> |
        <router-link to="/posts">Blog</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    <router-view/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
