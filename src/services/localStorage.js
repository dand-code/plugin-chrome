/* global chrome */

function save(ref, item) {
  localStorage.setItem(ref, JSON.stringify(item));
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { words:  item}, function (response) { 
        console.log(response.farwell);
    });
  });
}

function fetch(ref) {
  const item = localStorage.getItem(ref);
  return JSON.parse(item); 
}

export { save, fetch };