
function pull(feedurl, containerID, maxItems = 8) {
    //feedurl: string, the url of the rss feed
    //containerID: string, the id of the container element, should be a flow element
    //maxItems: integer, the maximum number of items to display
   var container = $(containerID);
   function success(xml, textStatus, jqXHR) {  
        var xmlDoc = $.parseXML(xml)
        xmlDoc.find("item").slice(0,maxItems).each(function() { 
                $(containerID).append("<li></li>").append($(this).find("title").text()).append("<a></a>").append($(this).)
               //http://codeforbrowser.com/blog/parse-an-rss-feed-with-jquery/ 
                anchor.setAttribute("href",entry.link)
                anchor.appendChild(document.createTextNode(entry.title))
            div.appendChild(anchor)
            container.appendChild(div);



        } )
	      }
  }
    var xhr = $.get(feedurl) 
});
}
function initialize() {
	var slashdot = new google.feeds.Feed("http://rss.slashdot.org/Slashdot/slashdot")
	//var siliconera= new google.feeds.Feed("http://feeds.feedburner.com/siliconera/MkOc?format=xml")
	var theH = new google.feeds.Feed("http://www.h-online.com/grand-atom.xml")
	var kotaku= new google.feeds.Feed("http://feeds.gawker.com/kotaku/full")
	var Phoronix = new google.feeds.Feed("http://feeds.feedburner.com/Phoronix")
	loadRSS(Phoronix, "phoronix");
	loadRSS(theH, "the-h");
	loadRSS(kotaku, "kotaku");
	loadRSS(slashdot, "slashdot");
}
$(".refresh").click(function(){
  var feedID = $(this).data("feed");
  if (feedID == "phoronix") {loadRSS(Phoronix,"phoronix")}
  else if (feedID == "the-h") {loadRSS(theH,"the-h")}
});
})
