Vue.component('feed-item', {
    props: ['feed'],
    template: '<li><a v-bind:href="url"> {{feed.headline }} </a> ></li>'
})

var rssfeed = new Vue( {
    el: "#slashdot",
    data: { 
        articles:[
            {id:0, headline: "slashdot", url: "https://slashdot.org"},
            {id:1, headline: "phoronix", url: "https://www.phoronix.com"},
            {id:2, headline: "slashdot", url: "http://www.siliconera.com/"}
        ]
    }
})
