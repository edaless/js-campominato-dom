// Il computer deve generare 16 numeri casuali nello stesso range della difficolta prescelta 
// (se avete fatto bonus di ieri e partite da li, sennò range rimane di base 1-100): le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, 
// perciò nell’array delle bombe non potranno esserci due numeri uguali.

// In seguito l’utente clicca su una cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - 
// la cella si colora di rosso e la partita termina.

// Altrimenti la cella cliccata si colora di azzurro e 
// l’utente può continuare a cliccare sulle altre celle.

// La partita termina quando il giocatore clicca su una bomba 
// o quando raggiunge il numero massimo possibile di numeri consentiti 
// (ovvero quando ha rivelato tutte le celle che non sono bombe).

// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


const campo = document.querySelector(".campo");

const gioca = document.querySelector("#gioca");

let difficolta;

const numBombe = 16;
// genero array in cui metterò i numeri delle bombe
let arrBombe;

let punteggio = 0;

gioca.addEventListener("click",
    function(){

        // prendo dal select il valore di difficolta
        difficolta = parseInt((document.getElementById("difficolta")).value);
        
        // svuoto l'array
        arrBombe = [];          
        // riempo l'array
        arrBombe = genArrNumUniciRandomMinMax (numBombe, 1, difficolta);  
        console.log(arrBombe);  
        let arrNorm = [];  
        arrNorm = arrSano(arrBombe);  
        
        
        // svuoto il campo
        campo.innerHTML = "";
        // riempo il campo
        generaCampo(difficolta); 

        // mostro il campo
        campo.classList.add("visibile");
            
    }
);



// numTess sarebbe la difficolta
function generaCampo(numTess){
    
    for(let i = 1; i <= numTess; i++){
        // variabile in cui salvo una nuova cella
        let nuovaCella;

        // determino che tipo di cella voglio, la creo associandola alla variabile
        if(numTess === 100){
            nuovaCella = newCella("easy");
        }else if(numTess === 81){
            nuovaCella = newCella("medium");
        }else{
            nuovaCella = newCella("difficult");
        };

        

        // le inserisco il suo numero
        nuovaCella.innerHTML = i;

        // le aggiungo l'event listener
        nuovaCella.addEventListener("click",
            function(){
                // se il numero in questione è una bomba ne aggiungo la classe
                if(arrBombe.includes(i)){
                    nuovaCella.classList.add("bomba");
                    console.log("hai perso, hai fatto " + punteggio + " punti")
                }else{
                    // metto/tolgo la classe clicked (la rendo azzurra)
                    nuovaCella.classList.add("clicked");
                    // stampo il numero in console
                    console.log("cella #" + i);
                    // incremento il punteggio
                    punteggio++;
                };
                console.log(punteggio);

                if(punteggio === difficolta - numBombe){
                    console.log("impressionante, hai vinto")
                    console.log("hai fatto " + punteggio + " punti")
                };

            }
        );

        // aggiungo la cella al campo
        campo.appendChild(nuovaCella);        
        
    }

}


function newCella(tipo){
    //creo nuovo div e lo salvo nella costante mioElement 
    const mioElement = document.createElement("div");
    // le aggiungo la classe cella
    mioElement.classList.add("cella")
    // le aggiungo la classe del tipo passato
    mioElement.classList.add(tipo)
    // ritorno questo div
    return mioElement;
}



function arrSano(arrBombe){
    let arr = [];
    for(let i = 1; i <= difficolta; i++){
        if(!arrBombe.includes(i)){
            arr[i] = (i);
        }else{
            arr[i] = "n";
        };
       
    };
    console.log(arr);
    return arr;

}



// ciclo for console esplicativo 
// for(let i = 0; i < arr.length; i++){
//     console.log("arr[" + i + "]: " + arr[i]);

// };

// ciclo while console esplicativo 
// let i = 0;
// while(i < arr.length){
//     console.log("arr[" + i + "]: " + arr[i]);

//     i++;
// };

// for(){};

// A = document.getElementById("B").value;


//``

// console.log("");
// for(let i = 0; i < 10; i++){

// }

// }


