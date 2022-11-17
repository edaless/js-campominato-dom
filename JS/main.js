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
const difficolta = parseInt((document.getElementById("difficolta")).value);


const numBombe = 16;
// genero array con i numeri delle bombe
const arrBombe = genArrNumUniciRandomMinMax (numBombe, 1, difficolta)
// console.log( difficolta);
console.log(arrBombe);

gioca.addEventListener("click",
    function(){
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

        if(arrBombe.includes(i)){
            nuovaCella.classList.add("bomba");
        };

        // le inserisco il suo numero
        nuovaCella.innerHTML = i;

        // le aggiungo l'event listener
        nuovaCella.addEventListener("click",
            function(){
                // metto/tolgo la classe clicked (la rendo azzurra)
                nuovaCella.classList.toggle("clicked");
                // stampo il numero in console
                console.log("cella #" + i);
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


