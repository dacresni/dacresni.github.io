<template>
  <div id="app">
      <span ref="backToTop" tabindex="-1" />
	<ul class="skip-links">
	  <li>
	    <a href="#main" ref="skipLink" class="skip-link">Skip to main content</a>
	  </li>
	</ul>
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
.skip-links {
  list-style: none;
}
.skip-link {
  white-space: nowrap;
  margin: 1em auto;
  top: 0;
  position: fixed;
  left: 50%;
  margin-left: -72px;
  opacity: 0;
}
.skip-link:focus {
  opacity: 1;
  background-color: white;
  padding: 0.5em;
  border: 1px solid black;
}

</style>
