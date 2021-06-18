/* global chrome */

function emitMessage(message) { 
  chrome.tabs.query({}, function (tabs) {
    for (let i=0; i<tabs.length; ++i) {
      chrome.tabs.sendMessage(tabs[i].id, message);
    }
  });
}
  
export { emitMessage };