// Owned by: www.gayradient.com
// File name: main.js
// (c) Copyright 2014 Joy Neop

if (window.location.hostname != "www.gayradient.com") {
	window.location.replace("http://www.gayradient.com/");
}

var wget = function (url) {
	var ajax = new XMLHttpRequest();
	ajax.open("GET", url, false);
	ajax.send();
	return ajax.responseText;
};

window.gay = {};

gay.initSize = function () {
	document.getElementById("body").style.height = window.innerHeight + "px";
	document.getElementById("bg").style.height = window.innerHeight + "px";
};

gay.initSize();

window.onresize = gay.initSize;

gay.templ = '<div class="gayradient" data-gay="GAYRADIENT" style="background-image: linear-gradient(GAYRADIENT);" onclick="gay.changeBg(THISSEQ)" id=\'THIS_ID\'><span>GAYRADIENT</span></div>';
gay.templMini = 'linear-gradient(GAYRADIENT)';

gay.sss = "";

gay.changeBg = function (gayID) {
	window.location.hash = "gay-" + gayID;
	gay.sss = gay.templMini.replace(/GAYRADIENT/g, gay.allGays.gay[gayID]);
	document.getElementById("body").style.backgroundImage = gay.sss;
	document.getElementById("bg").style.opacity = "0";
	setTimeout('document.getElementById("bg").style.backgroundImage = gay.sss;', 200);
	setTimeout('document.getElementById("bg").style.opacity = "1";', 250);
};

gay.allGays = JSON.parse(wget("gay.json"));

for (var i = 0; i < gay.allGays.gay.length; i++) {
	document.getElementById("content").innerHTML = document.getElementById("content").innerHTML + gay.templ.replace(/GAYRADIENT/g, gay.allGays.gay[i].toUpperCase()).replace(/THISID/g, "gra-" + i).replace(/THISSEQ/g, i);
}

if (window.location.href.indexOf("#") != -1) {
	gay.changeBg(window.location.hash.slice(5));
} else {
	gay.changeBg(Math.round(Math.random()*(gay.allGays.gay.length-1)));
}

// console.log("Hi, I'm seeking 2015 summer internship...");
// console.log("Intersted in me? Invite me to send an application to your company after reading my resume, thanks! http://www.joyneop.com/resume/ ");