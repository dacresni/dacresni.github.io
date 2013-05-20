
google.load("feeds","1");
google.setOnLoadCallback(initialize);
function loadRSS(feedObject, targetID) {
   feedObject.setNumEntries(8);
   feedObject.load(function(result){ 
   if (!result.error) {
      var container = document.getElementById(targetID);
      for (var i = 0; i < result.feed.entries.length; i++) {
	var entry = result.feed.entries[i];
	var div = document.createElement("li");
	anchor = document.createElement("a") 
	    anchor.setAttribute("href",entry.link)
	    anchor.appendChild(document.createTextNode(entry.title))
	div.appendChild(anchor)
	container.appendChild(div);
      }
  }
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
