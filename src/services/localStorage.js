/* global chrome */

function save(myList, item) {
  storage(myList, item);
  emitMessage(item);
}

function fetch() {
  return new Promise((resolve) => {
    chrome.storage.local.get("myList", function (value) {
      resolve(value["myList"]);
    });
  });
}

async function storage(myList, items) { 
  chrome.storage.local.set({myList: items}, function() {
    if(chrome.runtime.lastError) {
      console.error(
        "Error setting + "+ myList + "to" + JSON.stringify(items) +
        ": " + chrome.runtime.lastError.message
      );
    }
  });
}

function emitMessage(item) { 
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { words:  item});
  });
}

export { save, fetch };