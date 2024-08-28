1- Qu'est-ce qu'un objet en JavaScript ?

* un object est une sorte de contenaire qui contient plusieurs valeurs attribuer a un meme element et pour le declarer on utilise dess accolade {}.

2- Créez un objet pour contenir des informations sur votre recette préférée. Il doit avoir des propriétés pour le titre (une chaîne de caractères), les portions (un nombre) et les ingrédients (un tableau de chaînes de caractères). Sur des lignes séparées (une instruction console.log pour chaque), affichez les informations de la recette de sorte qu'elles ressemblent à ceci :
Mole
Portions : 2
Ingrédients :
cannelle
cumin
cacao

const recette = {
  titre: "Mole",
  portions: 2,
  ingredients: ["cannelle", "cumin", "cacao"]
};
console.log(recette.titre);
console.log("Portions :", recette.portions);
console.log("Ingrédients :");
recette.ingredients.forEach(ingredient => console.log(ingredient));

3-Quelle est la différence entre la notation par point et la notation par crochets pour accéder aux propriétés d'un objet 

 Notation par point:
Utilise un point (.) suivi du nom de la propriété.
Ne peut être utilisée que lorsque le nom de la propriété est un identifiant JavaScript valide (c'est-à-dire sans espaces, caractères spéciaux, ou débutant par un chiffre).
Plus lisible et couramment utilisée.
 Notation par crochets:
Utilise des crochets ([]) et permet d'accéder aux propriétés en utilisant une chaîne de caractères.
Doit être utilisée si le nom de la propriété contient des espaces, des caractères spéciaux, commence par un chiffre, ou si le nom de la propriété est dynamique (stocké dans une variable).
Plus flexible que la notation par point.

4-Comment parcourez-vous les propriétés d'un objet en JavaScript ?
Pour parcourir les propriétés d'un objet en JavaScript sont :
La boucle for...in
     permet de parcourir toutes les propriétés énumérables d'un objet
La méthode Object.keys() avec une boucle for ou forEach
     La méthode Object.keys() renvoie un tableau contenant tous les noms des propriétés énumérables de l'objet. Vous pouvez ensuite utiliser une boucle for ou forEach pour parcourir ce tableau.
La méthode Object.entries() avec une boucle for ou forEach
    La méthode Object.entries() renvoie un tableau de paires [clé, valeur] pour chaque propriété énumérable de l'objet. Vous pouvez utiliser une boucle for ou forEach pour parcourir ces paires.

5-Quelle est la différence entre un objet et un tableau en JavaScript ?
Les tableaux sont utilisés lorsque nous devons collecter une liste d’éléments du même type de données ou de la même structure. D'un autre côté, les objets sont utilisés lors du regroupement de plusieurs ensembles de données qui vont ensemble à l'aide d'étiquettes, où chaque propriété ou clé a sa propre valeur de n'importe quel type.

6-Écrivez une fonction JavaScript pour convertir un objet en une liste de paires [clé, valeur]
une fonction JavaScript qui convertit un objet en une liste de paires [clé, valeur]. Pour cela, on utilise la méthode intégrée Object.entries(), qui renvoie un tableau de paires [clé, valeur] pour chaque propriété énumérable d'un objet donné.
function convertirObjetEnPaires(objet) {
  return Object.entries(objet);
}

7-Écrivez une fonction qui prend un objet représentant une personne et retourne son nom complet
function obtenirNomComplet(personne) {
  if (personne.prenom && personne.nom) {
    return personne.prenom + " " + personne.nom;
  } else {
    return 
  }
}

8-Créez un objet avec vos détails personnels. Imprimez maintenant toutes les clés de l'objet dans l'ordre croissant
const mesInformation = {
  nom: "Diallo",
  prenom: "Siradio",
  age: 21,
  profession: "Développeur ",
};
const cles = Object.keys(meInformation);
cles.sort();
cles.forEach(cle => console.log(cle));

9-Créez un objet avec vos détails personnels. Filtrez maintenant toutes les valeurs de l'objet et affichez-les dans l'ordre décroissant.
const mesInformation = {
  nom: "Diallo",
  prenom: "Siradio",
  age: 21,
  profession: "Développeur ",
};
const valeurs = Object.values(mesInformation);
valeurs.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});
valeurs.forEach(valeur => console.log(valeur));

10-Créez une fonction JavaScript à l'intérieur d'un objet qui trouve le maximum de 3 nombres. Appelez maintenant cette fonction de l'objet et imprimez le nombre maximum
const utilitaires = {
  trouverMaximum: function(a, b, c) {
    return Math.max(a, b, c);
  }
};
const nombreMax = utilitaires.trouverMaximum(7, 15, 10);
console.log("Le nombre maximum est :", nombreMax);










