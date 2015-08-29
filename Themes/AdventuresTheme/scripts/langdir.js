var langcodes = ["fr", "de", "ca", "it", "en"];

// Browser Language Redirect script
// copyright 3rd January 2006, Stephen Chapman
// permission to use this Javascript on your web page is granted
// provided that all of the code in this script (with the sole exception
// of the langcodes array entries) is used without any alteration

var langCode = navigator.language || navigator.systemLanguage;
var lang = langCode.toLowerCase();
lang = lang.substr(0, 2);
var dest = window.location.href;
for (i = langcodes.length - 1; i >= 0; i--) {
    if (lang == langcodes[i]) {
	if (dest.indexof(".html") > 1) {
	    dest = dest.replace(".html","-" + lang + ".html");
	} else {
	    dest = dest + "/index.html";
        }
        window.location.replace ? window.location.replace(dest) : window.location = dest;
    }
}
                    