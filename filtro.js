const fs = require('fs');

let lista =[];

let comando = String(process.argv [3]);
let tarefa = String(process.argv [4]);
let status = 'Pendente';
let clear = new boolean (false);


while (comando !='limpar'){

    fs.writeFile('teste.txt', lista, {flag: 'a'} ,function(erro){
   
        if(erro){
            console.log('Não foi possivel gravar');
        }else{
            
            console.log('O arquivo foi gravado')
            
        }
    
    });
      
    if (comando = 'inserir'){
    lista.tarefaL.push() =  console.log('Tarefa:' + tarefaL );

        
    }

    if (comando = 'listar'){
        for ( taf of lista){
   
        console.log('Tarefa' +tarefa + '| Status' + status);
        }
    }

    if (comando = 'fazer'){
        status = 'Feito'; 
    }

    if (comando= 'limpar'){
        clear = console.log ('Tem certeza que quer apagar a lista:')
             if (clear = true ){
                delete lista;
                console.log ('A lista de tarefas foi excluida');
            }else{
            console.log('Lista não apagada');
            }
    }

}



