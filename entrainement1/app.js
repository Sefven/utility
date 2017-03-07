

var log = function log(val) {
 "use strict";
 window.console.log(val);
};
//-------------------------------------------------------------------------
var comprendreReturn = function comprendreReturn(a1) {
 "use strict";
 return typeof a1;
};
log(comprendreReturn("un exemple..."));
res = comprendreReturn(true && true && false);
log(res); // on a capturé la valeur de retour de la fonction...

//utilisez la fonction comprendreReturn
//avec un objet en argument et faire un tst sur la valeur de retour
//si c'est "objet" lancez alert ('c'\est un objet');
//res = comprendreReturn({name: "Jack"});

//if (comprendreReturn({name : Jack}) === "object") {
//alert("c'est un objet !")
//}
//dire ici si en js => si res vaut "objet"

var entrainement1 = function entrainement1() {
 "use strict";
 log("app is ready !")
}


document.write("<h1>Entrainement 1</h1>" +'<br>')
var str, bool, nb, und, isnull, obj, utilisateur1, utilisateur2; {
 str = "une chaine de caracs";
 nb = window.innerWidth;
 bool = typeof str === "string";
 und = "une chaine de caracs";
 isnull = document.getElementById("vide");
 obj = {};


 //document.write pour afficher sur page
 document.write("la valeur de str = " + str + '<br>');
 document.write("la valeur de bool = " + bool + '<br>');
 document.write("la valeur de nb = " + nb + '<br>');
 document.write("la valeur de und = " + und + '<br>');
 document.write("la valeur de isnull = " + isnull + '<br>');
 document.write("la valeur de obj = " + obj + '<br>');

 obj.estPratique = true;
 obj.estMultiforme = true;
 obj.estDifficile = false;
 document.write("les objets sont pratique ? " + obj.estPratique + '<br>');


 document.write("----------------------------------------------------------" + '<br>')
 // pour separer par exemple



 var afficherInfosUtilisateur = function afficherInfosUtilisateur(user) {
  document.write("Votre nom et prenom : " + user.nom + " " + user.prenom + '<br>');
  document.write("Votre age :" + user.age + "ans" + '<br>');
  document.write("Votre proffesion :" + user.profession + '<br>');
  document.write("Votre couleur preférée :" + user.couleurPref + '<br>')
  //on peut aussi ecrire dcmt.write une seule fois suivie de + a la fin
 }
 var utilisateur1 = {
  nom: "amangoula",
  prenom: "guillaume",
  age: 36,
  profession: "dev js",
  couleurPref: "noir",
  hobbies: ["aaaaaa", "bbbbbb", "cccccccc", "ddddddddd"]
 };

 var utilisateur2 = {
  nom: "Guer",
  prenom: "Sef",
  age: 32,
  profession: "dev html",
  couleurPref: "vert",
  hobbies: ["avion", "paramoteur", "cinema"]
 };

 var utilisateur3 = {
  nom: "vador",
  prenom: "Darth",
  profession: "sith",
  couleurPref: "noir",
  hobbies: ["combat sabre laser", "télekinésie", "etre père", "étrangler sous fiffe de l'empire", "détruire des planetes"]
 };

 log(utilisateur3);
 log(utilisateur3.hobbies);
 log(utilisateur3.hobbies[0]);
 log(utilisateur3.hobbies[1]);
 log(utilisateur3.hobbies[2]);
 log(utilisateur3.hobbies[3]);
 log(utilisateur3.hobbies[4]);
 log(utilisateur3.hobbies[777]); //undefined

 var hobbies = utilisateur3.hobbies;
 log(hobbies[0] + " et " + hobbies[1]);


 //creer une var pour la boucle----------------------------------------------------
 var compteur = 0;
 while (compteur < hobbies.length) {
  log(compteur);
  log('tour de boucle n° ' + (compteur + 1));
  log(hobbies[compteur]);
  compteur += 1;
 }
 log('fin de la boucle ^^');
 log('parcours avec une boucle for ');

 for (compteur = 0; compteur < hobbies.length; compteur += 1) {
  log('tour de boucle n° ' + (compteur += 1));
  log(hobbies[compteur]);
 }
 //----------------------------------------------------------------------------------------
 log('-----------------CREATION ELEMENT HTML-------------------');
 var x = document.createElement('div');
 x.id = "mon_element_cree_dynamiquement_par_js";
 x.className = "module inutile";
 x.textContent = "Je suis une div crée en JS !"
 //on a cree dynamiquement une div depuis js
 //on lui appliqué un id et 2 classes CSS
 log(x);
 document.body.appendChild(x);


 afficherInfosUtilisateur(utilisateur1); //pr kil sache ke utilisateur 1&2 sont la var
 document.write("----------------------------------------------------------" + '<br>')
 afficherInfosUtilisateur(utilisateur2);
 //----------------------------------------------------------------------------------------

 if (utilisateur1.nom === "Guer") {
  document.write("Votre nom : Guer");

 } else if (utilisateur2.prenom === "Sef") {
  document.write("Votre prenom: Sef ");

 } else {
  document.write("mauvaise réponse");
 }


 if ("0") {
  //alert('1/ affiché ou pas ?');
 }
 if (0) {  // ne marche pas sas guimets
  //alert('2/ affiché ou pas ?');
 }



};