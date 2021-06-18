/* global chrome */

import { emitMessage } from './syncMessage';

function save(myList, extStatus) {
  storage(myList, extStatus);
  emitMessage(extStatus);
}

function fetchWords() {
  return new Promise((resolve) => {
    chrome.storage.local.get("status", function (value) {
      if (value["status"])
      {
        resolve(value["status"]["words"]);
      } 
      else
      {
        resolve([]);
      } 
    });
  });
}

function fetchExtState() {
  return new Promise((resolve) => {
    chrome.storage.local.get("status", function (value) {
      if (value["status"])
      {
        console.log(value["status"]["activated"]);
        resolve(value["status"]["activated"]);
      } 
      else
      {
        resolve(true);
      } 
    });
  });
}

async function storage(myList, extStatus) { 
  chrome.storage.local.set({status: extStatus}, function() {
    if(chrome.runtime.lastError) {
      console.error(
        "Error setting + "+ myList + "to" + JSON.stringify(extStatus) +
        ": " + chrome.runtime.lastError.message
      );
    }
  });
}



export { save, fetchWords, fetchExtState };