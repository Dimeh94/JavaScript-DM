document.addEventListener("DOMContentLoaded", function() {
    var num;  //chiffre aléatoire entre 1 et 100
    var nbtest; //nombre d'essais
    var q; //référence à un bloc div pour l'affichage (<div id="message"></div>)

    var repOK = "Gagné";
    var repPetit = "Trop Petit ";
    var repGrand = "Trop Grand ";

    window.onload = function(){
        init();
    }
    
    function init(){
        //initialisation de q
        q = document.getElementById('message');
        lancer();
    }

    function lancer(){
        nbtest = 0;
        num = Math.floor(Math.random() * (100 - 1)) + 1;
     }

    function test()  {
        var rep = document.getElementById("input").value;
        if (nbtest < 6) { // Limitez le nombre d'essais à 6
            if (isNaN(rep)) { // Utilisez isNaN pour vérifier si 'rep' n'est pas un nombre
            q.innerHTML = '<span style="color:grey">' + "Veuillez entrer un chiffre" + '</span>';
        }
            else {
                nbtest++;
                if (rep == num){
                    q.innerHTML = '<span style="color:green">'+repOK+'</span>';
                    document.getElementById("valider").disabled = true; // Désactivez le bouton après victoire.
                }
                else if (rep < num){
                    q.innerHTML = '<span style="color:blue">'+repPetit+'</span>';
                }
                else {
                    q.innerHTML = '<span style="color:blue">'+repGrand+'</span>';
                }
                q.innerHTML += "[" + nbtest.toString() + "]";
            }
        }
        else {
            q.innerHTML = '<span style="color:red">'+"Vous avez utilisé toutes vos tentatives. Le nombre à deviner était " + num + "."+'</span>';;
            document.getElementById("valider").disabled = true; // Désactivez le bouton après 6 essais.
        }
    }

    const val = document.getElementById("valider");
    val.addEventListener('click', test);

});
