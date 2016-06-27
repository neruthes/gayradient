window.gay = {};

gay.initSize = function () {
	document.getElementById("body").style.height = window.innerHeight + "px";
	document.getElementById("bg").style.height = window.innerHeight + "px";
};

gay.initSize();

window.onresize = gay.initSize;

gay.templ = '<a href="#gay-THISSEQ" class="gayradient" style="background-image: linear-gradient(GAYRADIENT);" testonclick="gay.changeBg(THISSEQ)"><span>GAYRADIENT</span></a>';
gay.templMini = 'linear-gradient(GAYRADIENT)';

gay.backgroundImageInUse = "";

gay.changeBg = function (gayID) {
	gay.backgroundImageInUse = gay.templMini.replace(/GAYRADIENT/g, gay.allGays.gay[gayID]);
	document.getElementById("body").style.backgroundImage = gay.backgroundImageInUse;
	document.getElementById("bg").style.opacity = "0";
	setTimeout(function(){
		document.getElementById("bg").style.backgroundImage = gay.backgroundImageInUse;
	}, 200);
	setTimeout(function(){
		document.getElementById("bg").style.opacity = "1";
	}, 250);
};

window.onhashchange = function(){
	gay.changeBg(window.location.hash.slice(5));
};

var gayjax = new XMLHttpRequest();
gayjax.open("GET", "gay.json", true);
gayjax.send();
gayjax.onload = function () {
	gay.allGays = JSON.parse(gayjax.responseText);
	for (var i = 0; i < gay.allGays.gay.length; i++) {
		document.getElementById("content").innerHTML = document.getElementById("content").innerHTML + gay.templ.replace(/GAYRADIENT/g, gay.allGays.gay[i].toUpperCase()).replace(/THISSEQ/g, i);
	}
	if (window.location.href.indexOf("#") != -1) {
		gay.changeBg(window.location.hash.slice(5));
	} else {
		window.location.hash = "#gay-" + Math.round(Math.random()*(gay.allGays.gay.length-1));
		gay.changeBg(window.location.hash.slice(5));
	}
};

Array.forEach.call(document.getElementsByClassName('jn-show-onload'), function (node) {
	window.setTimeout(function () {
		node.style.opacity = 1;
	}, 1000);
});
