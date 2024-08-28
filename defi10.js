// Écrivez un programme JavaScript pour vérifier si la chaîne "Code" est présente à la 5ème position (index 4) dans une chaîne donnée.
//  Si "Code" est présent, renvoyez la chaîne sans "Code", sinon renvoyez la chaîne originale

function verification(str) {
    if (str.length >= 8 && str.substring(4, 8) === "Code") {
        return str.slice(0, 4) + str.slice(8);
    }
    return str;
}



// Écrivez un programme JavaScript pour capitaliser la première lettre de chaque mot d'une chaîne donnée.
// Chaîne d'exemple : "le renard brun rapide"
// Résultat attendu : "Le Renard Brun Rapide"

function capitaliser(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}




// Écrivez un programme JavaScript pour vérifier si tous les chiffres d'un nombre donné sont les mêmes ou non

function areAllDigitsSame(number) {
    const str = number.toString();
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[0]) {
            return false;
        }
    }
    return true
}





// Écrivez une fonction JavaScript pour inverser un nombre



// Écrivez une fonction JavaScript pour extraire les caractères uniques d'une chaîne.
// Chaîne d'exemple : "le-renard-brun-rapide"
// Résultat attendu : "le-rnabrpd
 let array=[];
 function titleCase(str) {
    let words = str.split(' ');

    words.forEach(word => {
        let firstLetter = word.charAt(0).toUpperCase();
        let replacement = word.replace(word.charAt(0),firstLetter);
       array.push(replacement) 
    });
   console.log(array.join(' '));
   
 }
 titleCase('le renard brun rapide');





// Écrivez une fonction JavaScript pour découper une chaîne en morceaux d'une longueur donnée.
// Données de test :
// console.log(string_chop('ressource'));
// console.log(string_chop('ressource',2));
// console.log(string_chop('ressource',3));
// ["ressource"]
// ["re", "ss", "ou", "rc", "e"]
// ["res", "sou", "rce"]




// Écrivez une fonction JavaScript pour trouver un mot dans une chaîne.
// Données de test :
// console.log(search_word('Le renard brun rapide', 'rapide'));
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
// Sortie :
// "'rapide' a été trouvé 1 fois."
// "'aa' a été trouvé 2 fois."







// Créez un tableau de nombres. Filtrez tous les nombres du tableau qui se trouvent entre 30 et 50.
//  Après avoir filtré les nombres, ajoutez 20 à chaque nombre et enfin,
//   imprimez la somme de tous les nombres en utilisant la fonction reduce




// Convertissez le tableau suivant :
// [[1,2], [3,4], [5,6], [7,8], [9,10]]
// en
// [3,7,11,15,19

let array = [[1,2], [3,4], [5,6], [7,8], [9,10]];
let result = array.map(subArray => subArray[0] + subArray[1]);
console.log(result);





// Imprimez le motif ci-dessous :
// 1 2 3 4 5
//  2 3 4 5
//   3 4 5
//    4 5
//     5