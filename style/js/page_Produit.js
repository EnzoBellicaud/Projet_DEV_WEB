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

function incNumber() {
    if (compteur < 10) {
        compteur++;
    } else if (compteur = 10) {
        compteur = 10;
    }
    document.getElementById("valeur").innerText = compteur;
}


function decNumber() {
    if (compteur > 0) {
        --compteur;
    } else if (compteur = 0) {
        compteur = 10;
    }
    document.getElementById("valeur").innerText = compteur;
}



var i =1;


function img1() {
    switch(i)
    {
        case 1 :
            i = 2;
            document.getElementById("imgsrc").setAttribute("src","image/elastique.jpg");
            document.getElementById("imgsrc").setAttribute("class","imageProductHauteur");
            break;
        case 2 :
            i = 3;
            document.getElementById("imgsrc").setAttribute("src","image/gourdes.jpg");
            document.getElementById("imgsrc").setAttribute("class","imageProductLargeur");
            break;
        case 3 :
            i = 4;
            document.getElementById("imgsrc").setAttribute("src","image/haltere1.jpg");
            document.getElementById("imgsrc").setAttribute("class","imageProductLargeur");
            break;
        case 4 :
            i = 5;
            document.getElementById("imgsrc").setAttribute("src","image/haltere2.png");
            document.getElementById("imgsrc").setAttribute("class","imageProductHauteur");
            break;
        case 5 :
            i = 6;
            document.getElementById("imgsrc").setAttribute("src","image/haltere3.png");
            document.getElementById("imgsrc").setAttribute("class","imageProductLargeur");
            break;
        case 6 :
            i = 1;
            document.getElementById("imgsrc").setAttribute("src","image/Haltere4.jpg");
            document.getElementById("imgsrc").setAttribute("class","imageProductLargeur");
            break;
    }


}



/*Incrementation(-1);
Incrementation(1);*/