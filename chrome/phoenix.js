let pattern = "https://ipapi.co/json*";

function redirect(requestDetails) {
    return {
        redirectUrl: "https://raw.githubusercontent.com/skynetcap/phoenix-extension/master/country"
    };
}

chrome.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls: [pattern]},
    ["blocking"]
);
