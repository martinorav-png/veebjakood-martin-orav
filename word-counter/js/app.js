const inputText = document.querySelector('#text');
const statElem = document.querySelector('#stat');

new WordCounter(inputText);


const render = (event) => {
    statElem.innerHTML = `<p>Oled kirjutanud <span class="highlight">${event.detail.wordStat.words} sõna</span> 
        ja <span class="highlight">${event.detail.wordStat.characters} tähemärki</span>.</p>`;
}

inputText.addEventListener('count', render);