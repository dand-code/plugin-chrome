/*global chrome*/

class Highlight { 
    constructor() { 
        this.words = [];
        this.originalHtml = document.body.innerHTML;
    }

    updateWords(words) { 
        this.words = words;
    }

    highlightWords() { 
        document.body.innerHTML = this.originalHtml;
        this.words.forEach((word) => {
            this._highlightWord(word.word, word.note);
        });
    } 

    _highlightWord(word, note) { 
        const regExp = new RegExp(word, "ig");
        document.body.innerHTML = document.body.innerHTML.replace(regExp, `<span style='background: yellow; cursor:pointer;' title='${note}'>${word}</span>`)
    }
}


window.addEventListener("load", myMain, false);

function myMain() {
    let highlighter = new Highlight();

    chrome.runtime.sendMessage('get-word-list', (response) => {
        console.log('received user data', response);
        if (response)
        {
            highlighter.updateWords(response);
            highlighter.highlightWords();
        }
      });
    
    chrome.runtime.onMessage.addListener(
        function (request, _sender, _sendResponse) {
            if (Array.isArray(request.words))
            {
                highlighter.updateWords(request.words);
                highlighter.highlightWords();
            }
         }
    );
}


