const fs = require('fs');
let max = 60;
let min = 0;
let i = 0;
let numero =[];

while(i <7 ){
    numero.push( Math.floor(Math.random()*(max-min +1))+min);
    i++;
    console.log(numero);
}

fs.writeFile('teste.txt', numero, function(erro){
   
    if(erro){
        console.log('Não foi possivel gravar');
    }else{
        
        console.log('O arquivo foi gravado')
        
    }

});




