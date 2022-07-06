//declaraçao de função 
//declaraçao de parenteses em funçao e obrigatorio
//tudo o que entrar dentro das chaves e o codigo que sera guardado e 
//executado apenas quando ativado pela funçao
function tocasompom(){
    document.querySelector('#som_tecla_pom').play();
}
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

const listaDeTeclas = document.querySelectorAll('.tecla');

