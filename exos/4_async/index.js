'use strict';

// Asynchrone

console.log('--- Question 1 ---');
/* créer une Promesse qui renvoie un nombre aléatoire au bout de 2 secondes.
  Si ce nombre est pair, le résoudre, sinon le rejeter.


  Utiliser setTimeout().
*/
const random = new Promise(resolve, reject) (
    setTimeout(() =>{
    return Math.random();
    }, 2000))

random
    .then(result) => {

}).catch((err))


console.log('--- Question 2 ---');
/* Consommer la Promesse de 1) pour
  - afficher le nombre renvoyé quand elle résoud
  - logguer un message d'erreur quand elle est rejetée
  - logguer 'Fin' quoi qu'il arrive
*/

console.log('--- Question 3 ---');
/* Créer une promesse en utilisant fetch(), et la consommer pour afficher la donnée contenue dans l'url ci-dessous:
 */
const url =
  'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json';

console.log('--- Question 4 ---');
/* Écrire une fonction getJson() qui prend une URL en entrée,
  et renvoie la Promesse de récupérer la réponse HTTP parsée depuis du JSON
  Utiliser getJson pour refaire la question 3.
*/

console.log('--- BONUS ---');
/* Créer une Promesse qui:
  - crée un nombre aléatoire (delay) en 0 et 5000
  - au bout de 2s, rejeter la Promesse avec le texte 'Trop long...'
  - au bout de delay ms pour résoudre le nombre delay
  - consommer la Promesse de sorte que si elle est rejetée, on recommence jusqu'à ce qu'elle résolve
  - en supposant que l'on ne connaisse pas la limite de 2s, trouver un moyen de la déduire
*/
