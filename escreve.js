const fs = require('fs');

fs.writeFile('teste.txt', 'Hello', function(erro){
    if(erro){
        console.log('Não foi possivel gravar');
    }else{
        console.log('O arquivo foi gravado')
    }

});

console.log('ok');