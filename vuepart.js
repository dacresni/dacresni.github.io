Vue.component('feed-item', {
    props: ['feed'],
    template: '<li><a v-bind:href="feed.url" > {{feed.headline }} </a> </li>'
})
//{id:0, headline: "slashdot", url: "https://slashdot.org"}, {id:1, headline: "phoronix", url: "https://www.phoronix.com"}, {id:2, headline: "slashdot", url: "http://www.siliconera.com/"}

var rssfeed = new Vue( {
    el: "#slashdot",
    data: { 
        articles:[ ]
    },
    created: function() { 
        fetch("https://feed.offtopical.net/", { method: "GET",mode:"cors"}).then(function(response){ Console.log(response.text())});
    } 
})
