// Exercice 5.1

// while(true){
//     const nombre = 1;
//     const UserGuess = window.prompt(`Entrez un nombre entre 1 et 3 :`);
//     if((UserGuess > 3) || (UserGuess < 1)){
//         window.alert(`Veuillez entrez un bon nombre`);
//         continue;
//     }
//     else if (UserGuess == nombre){
//         window.alert(`Bravo vous avez saisie le bon nombre`);
//         break;
//     } ;
// }




// Exercice 5.2


// while(true){
//     const nombre = 13;
//     const UserGuess = window.prompt(`Entrez un nombre entre 10 et 20 :`);
//     if (UserGuess == nombre){
//         window.alert(`Bravo vous avez saisie le bon nombre`);
//         break;
//     } ;

//     if((UserGuess > 20)){
//         window.alert(`Veuillez entrez un nombre plus petit`);
//     } else if((UserGuess < 10)){
//         window.alert(`Veuillez entrez un nombre plus grand`);
//     }
//     else {
//         window.alert(`Dommage ce n'est pas le bon nombre`);
//     }
    
// }




// Exercice 5.3  //     5.4


// let num = Number(prompt(`Entrez un nombre ici :`));

// for(let i = 0; i < 10; i +=1){
    
//     num += 1;
//     console.log(num);
// };



// Exercice 5.5


// const num = Number(prompt(`Entrez un nombre ici :`));

// for(let i = 1; i < 10; i +=1){
    
//     let resultat = num * i;
//     console.log(`${num} x ${i} = ${resultat}`);
    
    
// };


// const num = Number(prompt(`Entrez un nombre ici :`));
// let text = "";

// for(let i = 1; i <= 10; i +=1){
    
//     let resultat = num * i;
//     text +=(`${num} x ${i} = ${resultat} \n`);
    
    
// };

// alert(text)




// Exercice 5.6

// let valeurUser = Number(prompt(`Entrez votre nombre ici :`));

// function sumRange(start, end) {
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//       sum += i;
//     }
//     return sum;
//   }

// console.log(sumRange(1,valeurUser));