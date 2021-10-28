<template>
  <article id="Picts" >
    <ul id='photo-list'  >
    <h2>{{photoset_metadata.title}}</h2>
      <li v-for="photo in photoset_metadata.photo" :key="photo.id">
        <img :src= "photo.url_m" :alt="photo.title"> <h3>Title: {{photo.title}} </h3>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  data() {
    return { 
      photoset_metadata: {} //photoset 
    }
  },
  created() {
      this.fetchPicts()
  },
  watch: {
      '$route': 'fetchData'
  },
  methods: {
      fetchPicts(){
        fetch("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=fc565292eb5726468f699db7943d3f08&photoset_id=72157716667933323&user_id=11745666%40N00&extras=url_m&format=json&nojsoncallback=1") 
        .then(response => response.json())
          .then(data => this.photoset_metadata= data.photoset )
          .then(data => this.picts = data.photoset.photo )
         },
    }
}
// https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
</script>
