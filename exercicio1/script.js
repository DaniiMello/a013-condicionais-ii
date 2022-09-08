const num = Number(prompt("Digite seu número aqui"))
//aninhados
if (num||0){
     if (num%3===0){
        console.log ("É divisivel por 3")
     }else if (num%2===0){
        console.log ("É divisivel por 2")
     } else {
        console.log("Não é divisivel nem por 2 nem por 3")
     }
 }


//uma operação só
// if (num%2===0 || num%3===0){
//     console.log(num," é divisível por 2 ou 3")
// }