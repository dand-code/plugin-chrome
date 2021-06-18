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
        this.words.forEach((word) => {
            this._highlightWord(word.word, word.note);
        });
    }
    
    resetHTML() { 
        document.body.innerHTML = this.originalHtml;
    }

    _highlightWord(word, note) { 
        const regExp = new RegExp(word, "ig");
        document.body.innerHTML = document.body.innerHTML.replace(regExp, `<span style='background: yellow; cursor:pointer;' title='${note}'>$&</span>`)
    }
}


window.addEventListener("load", myMain, false);

function myMain() {
    let highlighter = new Highlight();

    chrome.runtime.sendMessage('get-word-list', (response) => {
        if (response && response.activated)
        {
            highlighter.updateWords(response.words);
            highlighter.highlightWords();
        }
      });
    
    chrome.runtime.onMessage.addListener(
        function (request, _sender, _sendResponse) {

            highlighter.resetHTML();
            if (request.activated === false)
                return true;
            if (Array.isArray(request.words))
            {
                highlighter.updateWords(request.words);
                highlighter.highlightWords();
            }
            return true;
         }
    );
}


