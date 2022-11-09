var compteur = 1;
document.getElementById("valeur").innerText = compteur;

function Incrementation(n) {
    

    switch(compteur){
        case 0 :
            compteur=1;
            document.getElementById("valeur").innerText = compteur;
            break;
        case 21 :
            compteur=20;
            document.getElementById("valeur").innerText = compteur;
            break;
        default :
            compteur = compteur + n;
            document.getElementById("valeur").innerText = compteur;
            break;
        }
    
    
    document.getElementById("valeur").innerText = compteur;
}






/*Incrementation(-1);
Incrementation(1);*/