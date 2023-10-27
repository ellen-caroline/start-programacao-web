/* formatos do js
{
    propriedade: valor associado
}

e 

objeto.função
*/

var elementosDuvida = document.querySelectorAll('.duvida')

/*
function nome(argumento) {
    conteúdo da função
}
*/ 
elementosDuvida.forEach(function (duvida){
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})