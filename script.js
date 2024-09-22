//  if or else
 
//  let mode = 'dark';
//         let color;

//         if (mode === 'dark') {
//             color = 'black';
//         }
//         else{
//             color = 'white';
//         }

//         console.log(color);

//odd or even

// let num = 15;
// if (num % 1 === 0) {
//     console.log(num, 'is odd')
// }
// else{
//     console.log(num, 'is even')
// }

// let age = prompt("How old are you?");
// if (age >= 18) {
//     alert('you are an adult');
// } else if (age < 18) {
//     alert('you are a minor');
// }
 
let score = prompt('enter your score (0-100):');
let grade;

if(score >= 90 && score <=100){
    grade = 'A';
} else if(score >= 70 && score <=89){
    grade = 'B';
} else if(score >= 60 && score <=69){
    grade = 'C';
}else if(score >= 50 && score <=59){
    grade = 'D';
}else if(score >= 0 && score <=49){
    grade = 'F';
}

document.write('according to your score, your grad was : ', grade)