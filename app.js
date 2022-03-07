var clickBtn = document.querySelector('#btn-translate');
var userText = document.querySelector('#userText');
var outputSec = document.querySelector('#output-div');
var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function setTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error)
};

function clickHandler() {
    var inputText = userText.value;

    fetch(setTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            outputSec.innerText = translatedText
        })
        .catch(errorHandler);

}

clickBtn.addEventListener('click', clickHandler)