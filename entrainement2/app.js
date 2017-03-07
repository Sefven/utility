var log = function log(val) {
 "use strict";
 window.console.log(val);
};

var afficherInfosUtilisateur = function afficherInfosUtilisateur(user) {
 "use strict";
 log("créer une fiche HTML pour chaque utilisateur");
 var i div, container;
 container = document.getElementById("utilisateurs");
 for (i = 0; i < users.length; i += 1) {
  //log(users[i]);
  div = document.activeElement('div');
  div.id = "user_" + (i + 1);
  div.className = "user";
  div.innerHTML = '<span>' + users[i].nom + '</span>
  div.innerHTML += '<span>' + users[i].prenom + '</span>';
  //log(div);
  container.appendChild(div);
  

 }
 log(users);
 //parcourir avec une boucle...
 //créer une div par utilisateurs
 //appendChild cette div dans le conteneur #utilisateur
}

var entrainement2 = function entrainement1() {
 "use strict";
 var tableau, utilisateur1, utilisateur2, utilisateur3;

 utilisateur1 = {}

 utilisateur2 = {}

 utilisateur3 = {}

 tableau = [utilisateur1, utilisateur2, utilisateur3];
}

