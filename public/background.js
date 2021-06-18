/*global chrome*/

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message === 'get-word-list'){
      chrome.storage.local.get("status", function (data) {
        sendResponse(data.status);
      });
    }
    return true;
});