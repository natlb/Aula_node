let entrada1 = Number(process.argv[2]);
let entrada2 = Number(process.argv[3]);

if(isNaN(entrada1) || isNaN(entrada2)){
    console.log('É necessario dois numeros');
}else {

// let numero1 = process.argv[entrada1] ;
// let numero2 = process.argv[entrada2];

let soma = entrada1 + entrada2;
console.log(soma);
}

// console.log(process.argv);