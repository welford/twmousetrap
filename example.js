/*\
title: $:/plugins/welford/twmousetrap/example.js
type: application/javascript
module-type: startup

registers a sample keypress thingy
\*/

(function(){
/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

// Export name and synchronous status
exports.name = "twmousetrapexample";
exports.platforms = ["browser"];
exports.after = ["twmousetrap"];
exports.synchronous = true;


exports.startup = function() {
	$tw.Mousetrap.bind("ctrl+shift+x",
		function() {
			alert("Hi there!");
		}
	);
	$tw.Mousetrap.bind("/",
		function() {
			if(document.getElementById("topsearch")){
				document.getElementById("topsearch").focus();
				document.getElementById("topsearch").select();
			}
		},
		"keyup"
	);
};
//
})();
