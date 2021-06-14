/*global chrome*/

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message === 'get-word-list')
    {
      chrome.storage.local.get("myList", function (data) {
        sendResponse(data.myList);
      });
    }
    return true;
});