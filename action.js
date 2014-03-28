// parse rss sans jquery
/* jshint esnext: true */
function pull(feedurl, containerID, maxItems = 8) {
    //feedurl: string, the url of the rss feed
    //containerID: string, the id of the container element, should be a flow element
    //maxItems: integer, the maximum number of items to display
    //
    //var container = document.getElementById(container);
    
    //req.open("GET","http://www.siliconera.com/feed/",true)
    var oReq = new XMLHttpRequest( );
    oReq.open("GET",feedurl,false);
    oReq.onload=function(container ){ 
        var theXML = oReq.responseXML;
        var items = theXML.evaluate("//item",theXML,null, XPathResult.ORDERED_NODE_ITERATOR_TYPE , null); 
        //items is an itterator that retuns <item> elements of the RSS Feed.
        var next = items.iterateNext(); 
        while (next){ //WARNING, this will iterate over ENTIRE THING!
            //iterate over item nodes >> <a href="node.link" >node.title</a>
            //put description in popup 
        }


    };
    oReq.send();
}
