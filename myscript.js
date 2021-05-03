// Descrizione:
// Creare uno slider di immagini: potete usare le immagini che desiderate. Per facilitarvi la vita usate immagini delle stesse dimensioni :faccia_leggermente_sorridente: Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera.
// Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
// Bonus: Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.


const app = new Vue ({
    el:`#vueContainer`,
    data:{
        indexImg:0,
        images: ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg","img/img4.jpg" ],
        classiArrow:"flex flex-column-content",
        classiImgContainer:"flex",
        classiContainer:"justifyContent margin-top",
        dot:"dot",
        blue:"color-blue",
       

    },
    methods:{
        fotoSuccessiva: function(){
            this.indexImg += 1;
            if(this.indexImg == this.images.length){
                this.indexImg = 0;
            }
        },
        fotoPrecedente: function(){
            this.indexImg -= 1;
            if(this.indexImg == -1){
                this.indexImg = this.images.length -1 ;
            }
        },
        dotOnClick:function(){
            this.dot="color-blue dot"
            this.indexImg = 0
            
           
        },
        dotOnClickOne:function(){
            this.indexImg = 1
        },
        dotOnClickTwo:function(){
            this.indexImg = 2
        },
        dotOnClickThree:function(){
            this.indexImg = 3
        }
    }


});