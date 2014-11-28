// parse rss sans jquery
/* jshint esnext: true */
function putItemIntoContaner(item, containerID){
    var titleElement = item.getElementsByTagName("title")[0];
    var linkElement= item.getElementsByTagName("link")[0];
    var fragment = document.createDocumentFragment();
    var el = document.createElement("li");
    el.textContent = titleElement.textContent;
    var a = document.createElement("a");
    a.setAttribute("href",linkElement.textContent );
    el.appendChild(a);
    fragment.appendChild(el);
    var container = document.getElementsById(containerID);
    container.appendChild(fragment);
    //iterate over item nodes >> <a href="node.link" >node.title</a>
    //put description in popup

}

function pull(feedURL, containerID ) {
    var maxItems = 8 ;
    //feedURL: string, the url of the rss feed
    //containerID: string, the id of the container element, should be a flow element
    //maxItems: integer, the maximum number of items to display
    //

    //req.open("GET","http://www.siliconera.com/feed/",true)
    var oReq = new XMLHttpRequest( );
    oReq.open("GET",feedURL,false);
    oReq.onload=function(){
        var theXML = oReq.responseXML;
        var items = theXML.evaluate("//item",theXML,null, XPathResult.ORDERED_NODE_ITERATOR_TYPE , null);
        //items is an itterator that retuns <item> elements of the RSS Feed.
        var next = items.iterateNext();
        var i=0 ;
        while (next & i < maxItems){ //WARNING, this could iterate over ENTIRE THING
            putItemIntoContaner(next, containerID);
            next = items.iterateNext();
            i++;
        }

    };
    oReq.send();
}
var feeds = {
    Marketplace:"http://www.marketplace.org/latest-stories/long-feed.xml",
    kotaku:"http://kotaku.com/rss",
    theVerge:"http://www.theverge.com/rss/index.xml",
    linuxNews:"http://www.linux.com/feeds/original-content"
};

feeds.forEach(pull)