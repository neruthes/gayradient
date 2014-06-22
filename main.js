if (window.location.hostname != "www.gayradient.com") {
	window.location.replace("http://www.gayradient.com/");
}

function wget(url) {
	var ajax = new XMLHttpRequest();
	ajax.open("GET", url, false);
	ajax.send();
	return ajax.responseText;
};

function initSize() {
	document.getElementById("body").style.height = window.innerHeight + "px";
	document.getElementById("bg").style.height = window.innerHeight + "px";
}

initSize();

window.onresize = initSize;

window.gay = {
	"author" : "Joy Neop"
};

gay.templ = '<div class="gayradient" datagay="GAYRADIENT" style="background-image: linear-gradient(GAYRADIENT);" onclick="gay.changeBg(\'THISID\')" id=\'THISID\'><span>GAYRADIENT</span></div>';
gay.templMini = 'linear-gradient(GAYRADIENT)';

gay.sss = "";

gay.changeBg = function (gayID) {
	window.location.hash = gayID;
	gay.sss = document.getElementById(gayID).style.backgroundImage;
	document.getElementById("body").style.backgroundImage = gay.sss;
	document.getElementById("bg").style.opacity = "0";
	setTimeout('document.getElementById("bg").style.backgroundImage = gay.sss;', 200);
	setTimeout('document.getElementById("bg").style.opacity = "1";', 250);
};

gay.allGays = JSON.parse(wget("gay.json"));
for (var i = 0; i < gay.allGays.gay.length; i++) {
	document.getElementById("content").innerHTML = document.getElementById("content").innerHTML + gay.templ.replace(/GAYRADIENT/g, gay.allGays.gay[i].toUpperCase()).replace(/THISID/g, "gay-id-" + i);
}

if (window.location.href.indexOf("#") != -1) {
	gay.changeBg(window.location.hash.slice(1));
	window.scrollTo(0, 0);
} else {
	gay.changeBg("gay-id-" + Math.round(Math.random()*(gay.allGays.gay.length-1)));
	document.getElementById("bg").style.backgroundImage = gay.templMini.replace(/GAYRADIENT/g, gay.allGays.gay[Math.round(Math.random()*(gay.allGays.gay.length-1))]);
	document.getElementById("body").style.backgroundImage = gay.templMini.replace(/GAYRADIENT/g, gay.allGays.gay[Math.round(Math.random()*(gay.allGays.gay.length-1))]);
}

// console.log("Hi, I'm seeking 2015 summer internship...");
// console.log("Intersted in me? Invite me to send an application to your company after reading my resume, thanks! http://www.joyneop.com/resume/ ");