import{_ as a,o as n,c as l,a as s,t as o,F as r,r as i}from"./index-b0bb0c40.js";const c={data(){return{posts:[],blog:{}}},created(){this.fetchBlog(),this.fetchTitles()},watch:{$route:"fetchData"},methods:{fetchTitles(){fetch("https://www.googleapis.com/blogger/v3/blogs/6205685541397557767/posts?key=AIzaSyArcKKnRP2Eb-I9laF1uTjhS3qa8xvVtXk").then(e=>e.json()).then(e=>this.posts=e.items).then(e=>this.nextToken=e.nextPageToken).then(e=>this.selfLink=e.selfLink)},fetchBlog(){fetch("https://www.googleapis.com/blogger/v3/blogs/6205685541397557767/?key=AIzaSyArcKKnRP2Eb-I9laF1uTjhS3qa8xvVtXk").then(e=>e.json()).then(e=>this.blog=e)}}},g={id:"Blog"},u={id:"post-list"},_=["href"],d=["innerHTML"];function f(e,p,b,k,h,m){return n(),l("section",g,[s("ul",u,[s("h2",null,o(h.blog.name),1),(n(!0),l(r,null,i(h.posts,t=>(n(),l("li",{key:t.id},[s("h3",null,[s("a",{href:t.url,target:"_blank"},o(t.title),9,_)]),s("p",null," Author: "+o(t.author.displayName)+" Published: "+o(t.published),1),s("p",{innerHTML:t.content},null,8,d)]))),128))])])}const w=a(c,[["render",f]]);export{w as default};
