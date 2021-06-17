/* global chrome */

import { emitMessage } from './syncMessage';

function save(myList, wordList) {
  storage(myList, wordList);
  emitMessage({ words: wordList });
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



export { save, fetch };