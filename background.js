let state = false;
chrome.browserAction.onClicked.addListener(function(tabs) {
    if (!state) {
        chrome.tabs.insertCSS(null, { file: "filter.css" });
        state = !state;
        return;
    }
    chrome.tabs.reload(null);
    state = !state;
});