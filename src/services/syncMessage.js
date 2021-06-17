/* global chrome */

function emitMessage(message) { 
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
}
  
export { emitMessage };