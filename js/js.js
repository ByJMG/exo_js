
// Exo 1

function afficheUno(){
    var variableUno = document.getElementById('inputUno').value;

      if(variableUno.trim() === ""){
        alert("Champ vide");
      }else{
        alert("ma variable : "+ variableUno);
      }

}

var boutonPlayUno = document.getElementById('submitUno');
boutonPlayUno.addEventListener("click", afficheUno);

//Exo2

function afficheDos(){
    var variableDosNom = document.getElementById('inputNom').value;
    var variableDosPrenom = document.getElementById('inputPrenom').value;
    var variableDosVille = document.getElementById('inputVille').value;

    if(variableDosNom.trim() === ""){
      alert("Champ nom vide");
    }else if (variableDosPrenom.trim() === "") {
      alert("Champ prenom vide");
    }else if (variableDosVille.trim() === "") {
      alert("Champ ville vide");
    }else{
      alert("prenom : " + variableDosPrenom + " Nom : " + variableDosNom + " Ville : " + variableDosVille);
    }

}

var boutonPlayDos = document.getElementById('submitDos');
boutonPlayDos.addEventListener("click", afficheDos);

// exo 3

function afficheTres(){

while (!demanderPreNom){
  var demanderPreNom = prompt("Quel est votre prénom");

  if(demanderPreNom === null ){
      break;
  }else if (demanderPreNom.trim() === "") {

    alert("Champ prenom vide");
  }else{
    alert("Bonjour, " + demanderPreNom);
  }

}


}

var boutonPlayTres = document.getElementById('submitTres');
boutonPlayTres.addEventListener("click", afficheTres);

// exo 4


function afficheQuatro(){

  while (!demanderPreNomDos){

    var demanderPreNomDos = prompt("Quel est votre prénom");

            if(demanderPreNomDos === null ){
                break;
            }else if(demanderPreNomDos.trim() === ""){
              alert("Champ prenom vide");
            }else{
              var demanderPreNomDos;

              while (!demanderNomDos){

                var demanderNomDos = prompt("Quel est votre nom");
                    if(demanderNomDos === null ){
                        break;
                    }else if(demanderNomDos.trim() === ""){
                      alert("Champ nom vide");
                    }else{
                    var demanderNomDos;

                      while (!demanderVilleDos){

                        var demanderVilleDos = prompt("Quel est votre ville");
                            if(demanderVilleDos === null ){
                                break;
                            }else if(demanderVilleDos.trim() === ""){
                              alert("Champ ville vide");
                            }else{
                            var demanderVilleDos;
                            alert("prenom : " + demanderPreNomDos + ", nom : " + demanderNomDos + ", ville : " + demanderVilleDos);

                            }
                      }
                    }
              }

            }

  }

}



var boutonPlayQuatro = document.getElementById('submitQuatro');
boutonPlayQuatro.addEventListener("click", afficheQuatro);


// exo 5


function afficheCinq(){

  while (!demanderNbUno){

    var demanderNbUno = prompt("Entrez 1ier nombre à virgule");
        if(demanderNbUno === null ){
            break;
        }else if(demanderNbUno.trim() === ""){
          alert("Champ 1ier nombre vide");
        }else{
        var demanderNbUno;
        var splitDemanderNbUno = demanderNbUno.split(/\.|,/);

              while (!demanderNbDos){

                var demanderNbDos =  prompt("Entrez 2ieme nombre à virgule");
                    if(demanderNbDos === null ){
                        break;
                    }else if(demanderNbDos.trim() === ""){
                      alert("Champ 2ieme nombre vide");
                    }else{
                    var demanderNbDos;
                    var splitDemanderNbDos = demanderNbDos.split(/\.|,/);

                    var resultUno = splitDemanderNbUno[0] * splitDemanderNbDos[0];
                    alert(splitDemanderNbUno[0] + " * " + splitDemanderNbDos[0] + " = "+ resultUno );
                    }
              }

        }
    }

}

var boutonPlayCinq = document.getElementById('submitCinq');
boutonPlayCinq.addEventListener("click", afficheCinq);


function afficheCinqPlus(){

  while (!demanderNbUno){

    var demanderNbUno = prompt("Entrez 1ier nombre à virgule");
        if(demanderNbUno === null ){
            break;
        }else if(demanderNbUno.trim() === ""){
          alert("Champ 1ier nombre vide");
        }else{

          var replaceDemanderNbUno = Math.trunc(demanderNbUno.replace(",","."));

              while (!demanderNbDos){

                var demanderNbDos =  prompt("Entrez 2ieme nombre à virgule");
                    if(demanderNbDos === null ){
                        break;
                    }else if(demanderNbDos.trim() === ""){
                      alert("Champ 2ieme nombre vide");
                    }else{

                    var replaceDemanderNbDos = Math.trunc(demanderNbDos.replace(",","."));

                    var resultUno = replaceDemanderNbUno * replaceDemanderNbDos;
                    alert(replaceDemanderNbUno + " * " + replaceDemanderNbDos + " = "+ resultUno );
                    }
              }

        }
    }

}

var boutonPlayCinqPlus = document.getElementById('submitCinqPlus');
boutonPlayCinqPlus.addEventListener("click", afficheCinqPlus);


// exo 6


function afficheSix(){

  while (!demanderNbTres){

    var demanderNbTres = prompt("Entrez 1ier nombre");
        if(demanderNbTres === null ){
            break;
        }else if(demanderNbTres.trim() === ""){
          alert("Champ 1ier nombre vide");
        }else{
          var demanderNbTres;
          while (!demanderNbQuatro){

            var demanderNbQuatro =  prompt("Entrez 2ieme nombre");
                if(demanderNbQuatro === null ){
                    break;
                }else if(demanderNbQuatro.trim() === ""){
                  alert("Champ 2ieme nombre vide");
                }else{
                  var demanderNbQuatro;
                  var resultDos = demanderNbTres % demanderNbQuatro;
                  alert("Modulo de " + demanderNbTres + " % " + demanderNbQuatro + " = "+ resultDos );
                }
            }

        }
  }

}

var boutonPlaySix = document.getElementById('submitSix');
boutonPlaySix.addEventListener("click", afficheSix);


// exo 7


function afficheSept(){
  var demanderPointure = prompt("Votre pointure");
  var demanderNaissance = prompt("Votre année de naissance");
  var resultTres =((((demanderPointure * 2) + 5) * 50) - demanderNaissance) + 1766  ;
  alert("Resultat : "+ resultTres );
}

var boutonPlaySept = document.getElementById('submitSept');
boutonPlaySept.addEventListener("click", afficheSept);


// exo 8


function afficheHuit(){
  var demanderVotreAge = prompt("quel est votre Âge ?");
  if(demanderVotreAge.trim() === ""){
    alert("Il faut entrer un nombre");
  }else{
    if(parseInt(demanderVotreAge) < 18){
      alert("Vous êtes mineur");
    }else{
      alert("Vous êtes majeur");
    }
  }


}

var boutonPlayHuit = document.getElementById('submitHuit');
boutonPlayHuit.addEventListener("click", afficheHuit);
