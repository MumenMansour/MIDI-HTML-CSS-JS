//declaraçao de função 
//declaraçao de parenteses em funçao e obrigatorio
//tudo o que entrar dentro das chaves e o codigo que sera guardado e 
//executado apenas quando ativado pela funçao

/*assim o erro de auto execuçao da aplicação de "play" nao e barrada
pela proteçao de executaçao dos navegadores pois so sera execut
quando o usuario acionar o botao

document.querySelector('.tecla_pom').onclick = tocasompom;

ao atribuir o tocasom bom com o sinal de = para a funcao de onclic
o parenteses deve ser retirado para o navegador nao executar sem 
a interaçao do usuario causando assim o erro de permisao de autoexec
desenvolvimento para fazer ativaçao do onclick para listas 
para melhor desenvolvimento manutençao e ediçao*/

/*---------------REFERENCIAS-------------------
sao declaradas e criadas com base no valor que vao receber 
e ter que armazenar 

constante
variavel

constante --  nome da variavel --- recebe codigo */

/* criar condiçao aonde a repetiçao deve parar com contador
apos as chaves havera a rotina com o laço enquanto houver repetiçao */

/*while (contador < listaDeTeclas.length ){
   
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    

    template striker 
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;

    console.log(contador);
    console.log(idAudio);
}
*/

function tocaSom(seletorAudio){
   const elemento =  document.querySelector(seletorAudio);
 

   if (elemento != null && elemento.localName === 'audio') {
        console.log();
        elemento.play();   
    }
    
    else {
        ('Elemento nao encontrado');
        console.log('Elemento nao encontrado')
    }

}


const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0

for (let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){
        console.log(evento.code)

        if (evento.code === 'Sapace' || evento.code === 'Enter' ) {
            tecla.classList.add('ativa');
        }

       // if (evento.code === 'Enter') {
       //     tecla.classList.add('ativa');
       // }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
        }

}



