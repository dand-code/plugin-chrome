/*global chrome*/

chrome.runtime.onMessage.addListener(
    function (request, _sender, _sendResponse) {
        if (Array.isArray(request.words))
        {   
            request.words.forEach((word) => { 
                highlightWords(word.word, word.note);
            }); 
         }
     }
);
 
function highlightWords(word, note) { 
  const regExp = new RegExp(word, "ig");

  document.body.innerHTML = document.body.innerHTML.replace(regExp, `<span style='background: yellow; cursor:pointer;' title='${note}'>${word}</span>`)  
}

