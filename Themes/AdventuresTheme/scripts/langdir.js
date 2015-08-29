var langcodes = ["fr", "de", "ca", "it", "en"];

var langCode = navigator.language || navigator.systemLanguage;
var lang = langCode.toLowerCase();
lang = lang.substr(0, 2);
var dest = window.location.href;
for (i = langcodes.length - 1; i >= 0; i--) {
    if (lang == langcodes[i]) {
	if (dest.indexOf(".html") > 1) {
	    dest = dest.replace(".html","-" + lang + ".html");
	} else {
	    dest = dest + "/index.html";
        }
        window.location.replace ? window.location.replace(dest) : window.location = dest;
    }
}
                    