// Descrizione:
// Creare uno slider di immagini: potete usare le immagini che desiderate. Per facilitarvi la vita usate immagini delle stesse dimensioni :faccia_leggermente_sorridente: Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera.
// Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
// Bonus: Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.


const app = new Vue({
    el: `#vueContainer`,
    data: {
        indexImg: 0,
        images: ["https://images.pexels.com/photos/4464820/pexels-photo-4464820.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4464820.jpg&fm=jpg","https://images.pexels.com/photos/4464821/pexels-photo-4464821.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4464821.jpg&fm=jpg", "https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4464819.jpg&fm=jpg","https://images.pexels.com/photos/4464815/pexels-photo-4464815.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4464815.jpg&fm=jpg"],
        classiArrow: "flex flex-column-content",
        classiImgContainer: "flex",
        classiContainer: "justifyContent margin-top",
        dot: "dot",
        blue: "color-blue",


    },
    methods: {
        /**
              * @param {number} direction - +1 se vogliamo andare avanti, -1 se indietro.
              */
        changeImg(direction, changedByAI) {
            let newIndex = this.indexImg + direction;

            if (newIndex < 0) {
                /*
                Se indice < di 0, facciamo andare l'utente all'ultima immagine della lista
                */
                newIndex = this.images.length - 1;

            } else if (newIndex > (this.images.length - 1)) {
                /*
                Se l'indice è già l'ultimo della lista delle immagini, facciamo andare l'utente alla prima immagine
                */
                newIndex = 0;
            }

            this.indexImg = newIndex;
        },
        onDotClick(clickedIndex) {
            this.indexImg = clickedIndex;
        },
        play() {
            clearInterval(this.interval);

            this.interval = setInterval(() => {
                this.changeImg(+1, true);
            }, 5000);
        },
        pause() {
            clearInterval(this.interval);
        }
    },
    mounted() {
        const elementoHtml = document.querySelector(".slider-container");

        elementoHtml.focus();

        this.play();
    }
    


});