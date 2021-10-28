<template>
  <article id="home" class='row'>
    <ul id='project-list' style='text-align:right;' >
    <h2>Projects</h2>
      <li v-for="repo in repos" :key="repo.id">
        <h3 class='name' ><a v-bind:href="repo.html_url">{{repo.name}} </a></h3> <p class='description'> {{repo.description}} </p>
      </li>
    </ul>
    <ul id='subscriptions-list' style='text-align:left;' >
    <h2>Watching</h2>
      <li v-for="sub in subs" :key="sub.id">
        <h3 class='name' ><a v-bind:href="sub.html_url">{{sub.name}} </a></h3> <p class='description'> {{sub.description}} </p>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  data() {
    return { 
      repos: [
        { name: "Loading Titles", description: "Loading descriptions", html_url: "https://github.com/dacresni/dacresni" },
      ],
      subs: [
        { name: "Loading Titles", description: "Loading descriptions", html_url: "https://github.com/dacresni/dacresni" },
      ]
    }
  },
  created() {
      this.fetchRepos()
      this.fetchSubs()
  },
  watch: {
      '$route': 'fetchData'
  },
  methods: {
      fetchRepos() {
           fetch("https://api.github.com/users/dacresni/repos")
             .then(response => response.json())
             .then(data =>this.repos = data )
         },
      fetchSubs() {
           fetch("https://api.github.com/users/dacresni/subscriptions")
             .then(response => response.json())
             .then(data =>this.subs = data )
         }
    }
}
</script>
