import{_ as i,c as o,a as s,t as r,F as n,r as h,o as a,b as l}from"./index-DqoVj2rh.js";const _={data(){return{photoset_metadata:{}}},created(){this.fetchPicts()},watch:{$route:"fetchData"},methods:{fetchPicts(){fetch("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=fc565292eb5726468f699db7943d3f08&photoset_id=72157716667933323&user_id=11745666%40N00&extras=url_m&format=json&nojsoncallback=1").then(t=>t.json()).then(t=>this.photoset_metadata=t.photoset).then(t=>this.picts=t.photoset.photo)}}},d={id:"Picts"},p={id:"photo-list"},f=["src","alt"];function m(t,u,k,x,c,P){return a(),o("article",d,[s("ul",p,[s("h2",null,r(c.photoset_metadata.title),1),(a(!0),o(n,null,h(c.photoset_metadata.photo,e=>(a(),o("li",{key:e.id},[s("img",{src:e.url_m,alt:e.title},null,8,f),l(),s("h3",null,"Title: "+r(e.title),1)]))),128))])])}const g=i(_,[["render",m]]);export{g as default};