// Delete complete Chrome browser history
function clearHistory() {
    chrome.history.deleteAll(() => {
        console.log("Chrome just forgot your browser history!");
    });
};

// On closing of a page
chrome.tabs.onRemoved.addListener(() => {
    clearHistory();
});

// On closing of Chrome
chrome.runtime.onSuspend.addListener(() => {
    clearHistory();
});

// Author: Mauro Cunha
