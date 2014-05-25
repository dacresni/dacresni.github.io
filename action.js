// parse rss sans jquery
/* jshint esnext: true */
function putItemIntoContaner(item, container){ 
    var titleElement = item.getElementsByTagName("title")[0];
    var linkElement= item.getElementsByTagName("link")[0];
    var framgent = document.createDocumentFragment();
    el = document.createElement("li");
    el.textContent = title.textContent;
    a = document.createElement("a");
    a.setAttribute("href",linkElement.textContent );
    el.appendChild(a);
    fragment.appendChild(el);
    var container = document.getElementsById(container);
    //iterate over item nodes >> <a href="node.link" >node.title</a>
    //put description in popup 
   
}

function pull(feedURL, containerID, maxItems = 8) {
    //feedurl: string, the url of the rss feed
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
        while (next & i < maxItems){ //WARNING, this will iterate over ENTIRE THING
            putItemIntoContaner(next, containerID);
            next = items.iterateNext();
        }


    };
    oReq.send();
}
