// Config
function wget(url) {
	var ajax = new XMLHttpRequest();
	ajax.open("GET", url, false);
	ajax.send();
	return ajax.responseText;
};
window.gay = {
	"author" : "Joy Neop"
};
gay.templ = '<div class="gayradient" datagay="GAYRADIENT" style="background-image: -webkit-linear-gradient(GAYRADIENT);" onclick="gay.changeBg(THISID)" id=THISID><span>GAYRADIENT</span></div>';
gay.templMini = '-webkit-linear-gradient(GAYRADIENT)';
gay.changeBg = function (theGayYouLike) {
	document.body.style.backgroundImage = document.getElementById(theGayYouLike).style.backgroundImage;
};
gay.allGays = JSON.parse(wget("gay.json"));

for (var i = 0; i < gay.allGays.gay.length; i++) {
	document.getElementById("content").innerHTML = document.getElementById("content").innerHTML + gay.templ.replace(/GAYRADIENT/g, gay.allGays.gay[i]).replace(/THISID/g, "'gay-id-" + i + "'");
}

document.body.style.backgroundImage = gay.templMini.replace(/GAYRADIENT/g, gay.allGays.gay[0]);