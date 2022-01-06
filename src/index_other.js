'use strict';


document.addEventListener(
  'DOMContentLoaded',
  async function () {
    const promise1 = getJson ('https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json');
    const promise2 = getJson ('https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json');

    const allPromise = await Promise.all([promise1, promise2])
    const tweets = allPromise.flat();
  
  
    console.log('Le tableau de tweet', tweets);

    // ### Projet Touitter ###
    // Attention: toucher au DOM coûte cher, utiliser le moins possible les APIs du DOM

    // [1] créer une fonction createLi(), qui pour un tweet en entrée, crée et retourne un <li> contenant le texte du tweet

    

    // [2] créer et ajouter un <ol> à la page, puis y ajouter les <li> de tweets en utilisant [1]

    let ol = document.createElement('ol');
    document.body.append(ol);

    

    // [3] créer un <bouton> de filtre pour que quand on clique dessus, ne garde que les tweets en français à l'écran
    const btn = document.createElement("button");
    btn.innerText = "Filter";
    document.body.insertBefore(btn, document.querySelector('ol'));

    let isFr = false;

    btn.addEventListener('click', () => {
      if (isFr) {
        const olMulti = createOlFinal(tweets);
        ol.replaceWith(olMulti);
        ol = olMulti;
        isFr = false;
      } else {
        const arrFr = tweets.filter(tweet => {
          return tweet.lang === 'fr';
        });

        let olFr = createOlFinal(arrFr);
        ol.replaceWith(olFr);
        ol = olFr;

        isFr = true;
      }
    });

    // [4] modifier le bouton de filtre pour pouvoir réafficher tous les tweets quand on reclique dessus


    /* [5] créer une fonction createOl(), qui pour un tableau tweets en entrée, crée et retourne un <ol> rempli de <li>
et l'utiliser à [2], [3], [4] */

    

    

    /* [6] Créer un bouton qui, quand on clique dessus:
        - active le tracking de la souris: la console affiche position de la souris (event.clientX, event.clientY) quand la souris bouge
        - désactive le tracking quand on reclique dessus
    */
    const trackBtn = document.createElement("BUTTON");
    const textBtn = document.createTextNode("Tracking Mouse");
    trackBtn.append(textBtn);
    document.body.append(trackBtn);
    document.body.insertBefore(trackBtn, document.querySelector('ol'));


    let active = false;

    function displayMousePosition() {
      window.addEventListener('mousemove', (e) => {
        if(active){
        console.log(e.clientX, e.clientY);
        }
      });
    }
    displayMousePosition();

    trackBtn.addEventListener('click', () => { 
      if (active) {
        active = false;
      } else {
        active = true;
      }
    })

    /* [7] créer une fonction qui crée et renvoie le bouton de filtre.
      Cette fonction doit contenir toute la logique liée au filtre.
      Utiliser cette fonction pour remplacer le code de création du bouton de filtre.
    */

    // [8] Utiliser la fonction getJson() pour charger les tweets à la place des lignes 6 à 11

    /* [9] Utiliser Promise.all() pour charger également les tweets de cette url :
      'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json'
    */
   

    // ### BONUS : LOCALSTORAGE ###

    // [1] Rajouter un bouton "fav" à chaque li

    /* [2] quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
  + et stocker l'ensemble des id_str fav dans le localStorage */

    // [3] au chargement de la page, lire le localStorage pour favoriser les favoris.
  },
  { once: true },
);