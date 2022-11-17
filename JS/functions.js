
function randomIntero(min, max){
    return (Math.floor(Math.random() * ((max + 1) - min) + min));
}


function genArrNumUniciRandomMinMax(quanti, min, max){
    const newArr = [];

    while (newArr.length < quanti){
        let newNumber = randomIntero(min, max);

        if(!newArr.includes(newNumber)){
            newArr.push(newNumber);
        };
    }

    return newArr;
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


