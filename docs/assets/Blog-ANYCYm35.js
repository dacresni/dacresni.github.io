import{_ as r,c as o,a as s,F as h,r as c,o as n,t as a}from"./index-DGQyWKVG.js";const i={data(){return{posts:[],blog:{}}},created(){this.fetchBlog(),this.fetchTitles()},watch:{$route:"fetchData"},methods:{fetchTitles(){fetch("https://www.googleapis.com/blogger/v3/blogs/6205685541397557767/posts?key=AIzaSyArcKKnRP2Eb-I9laF1uTjhS3qa8xvVtXk").then(t=>t.json()).then(t=>this.posts=t.items).then(t=>this.nextToken=t.nextPageToken)},fetchBlog(){fetch("https://www.googleapis.com/blogger/v3/blogs/6205685541397557767/?key=AIzaSyArcKKnRP2Eb-I9laF1uTjhS3qa8xvVtXk").then(t=>t.json()).then(t=>this.blog=t)}}},g={id:"Blog"},u={id:"post-list"},d=["href"],_=["innerHTML"];function p(t,f,b,k,l,m){return n(),o("section",g,[s("ul",u,[(n(!0),o(h,null,c(l.posts,e=>(n(),o("li",{key:e.id},[s("h3",null,[s("a",{href:e.url,target:"_blank"},a(e.title),9,d)]),s("p",null," Author: "+a(e.author.displayName)+" Published: "+a(e.published),1),s("p",{innerHTML:e.content},null,8,_)]))),128))])])}const w=r(i,[["render",p]]);export{w as default};