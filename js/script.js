/*  -----------------------------------------------------------------------------------------------
    Descrizione:
    Partendo dal markup base fornito, fare uno slider usando Vue.

    Bonus:
    1- al click su una thumb, visualizzare in grande l'immagine corrispondente
    2- applicare l'autoplay allo slider: ogni 2 secondi, cambia immagine automaticamente
    3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
--------------------------------------------------------------------------------------------------- */

// Creo una nuova istanza dell'applicazione
const {createApp} = Vue;

// Creo il componente root
createApp ({
    data() {
        return {
        activeIndex: 0,
            games: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
                
            ]
        }
    },

    // Dichiaro i metodi che servono per l'azione dello slider: prevGame(per mandare indietro la thumb al click della freccia su); nextGame(per mandare avanti la thumb al click della freccia giù); autoScroll(per l'auto scorrimento); stopScroll(per stoppare lo scorrimento quando si passa con il mouse sopra lo slider-wrapper); showGame(al click su una thumb, visualizza in grande l'immagine corrispondente)
    methods: {
        prevGame() {
            this.activeIndex--
            if(this.activeIndex < 0) {
                this.activeIndex = this.games.length - 1
            }
        },
        nextGame() {
            this.activeIndex++
            if(this.activeIndex > this.games.length - 1) {
                this.activeIndex = 0;
            }
        },
        autoScroll() {
            this.scroll = setInterval(() => {
                this.nextGame();
            },2000)
        },
        stopScroll() {
            clearInterval(this.scroll);
        },
        showGame(gameClicked) {
            this.activeIndex = gameClicked;
        }
    },
    // "Monto" la funzione sul DOM
    mounted() {
        this.autoScroll();
    }
}).mount('#app'); // "Monto" l'instanza dell'applicazione all'elemento div#app