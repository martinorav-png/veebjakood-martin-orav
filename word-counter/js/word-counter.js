class WordCounter {
    constructor(inputText) {

        // Salvestan textarea elemendi selle klassi sisse
        this.inputText = inputText;

        // Kui kasutaja kirjutab tekstikasti, siis käivitab count funktsiooni
        //Arrow funktsioon et 'this' oleks siis wordcounter objekt
        this.inputText.addEventListener('input', () => {
            this.count();
        });
    }

    count() {
        let wordStat = this.getWordStat(this.inputText.value.trim());

        // Annab tulemuse välja  eventiga
        this.emitEvent(wordStat);
    }

    emitEvent(wordStat) {
        let countEvent = new CustomEvent('count', {
            bubbles: true,        
            cancelable: true,     
            detail: {
                wordStat          
            }
        });

        this.inputText.dispatchEvent(countEvent);
    }

    getWordStat(str) {
        // See leiab sõnad, ilma tühikuteta
        let matches = str.match(/\S+/g);

        // Return objekti, mis sisaldab tähemärkide ja sõnade arvu
        return {
            characters: str.length,               // tähemärkide arv
            words: matches ? matches.length : 0,  // kui sõnu ei leitud, siis 0
        };
    }
}
