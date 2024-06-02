(function(win, doc){
    'use strict';
    
    //Veririca se o usuário quer realmente apagar o dado.
    if(doc.querySelector('.btnDel'))/*Verifica se existe o botão btnDel*/ {
        let btnDel = doc.querySelectorAll('.btnDel');//pega todos os botões de deletar que existirem na página
        for(let i = 0; i < btnDel.length; i++){
            btnDel[i].addEventListener('click', function(event){
                if(confirm('Você quer realmente apagar este dado?')){
                    return true;
                } else{
                    event.preventDefault();
                }
            })
        }
    }

    //CÓDIGO AJAX PARA O FORMULÁRIO
    if(doc.querySelector('#form')){ /*Verifica se existe um ID dentro do formulário chamado form*/ 
        let form = doc.querySelector('#form'); //caso exista, vamos criar uma variável que irá receber essas informações
        function sendForm(event){ //este trecho cria uma função para tratarmos o envio via ajax
            event.preventDefault(); //este trecho apaenas visa prevenir os eventos padrões do formulário
            let data = new FormData(form); //API formulário para facilitar o envio
            let ajax = new XMLHttpRequest(); // -> inicia o Ajax
            let token = doc.querySelectorAll('input')[0].value;//seleciona todas as entradas do formulário
            ajax.open('POST', form.action);//abrimos o ajax e passamos todas as informações que vêm do nosso formulário
            ajax.setRequestHeader('X-CSRF-TOKEN', token);//vamos manter no cabeçalho o token do formulário
            ajax.onreadystatechange = function(){
                if(ajax.status === 200 && ajax.readyState === 4){
                    let result = doc.querySelector('#result');
                    result.innerHTML = 'Cadastro Efetuado com sucesso!';
                    result.classList.add('alert');
                    result.classList.add('alert-success');

                }
            }
            ajax.send(data);//este trecho, especificamente, recebe os dados do formulário
            form.reset();//limpa o formulário 
        }
        form.addEventListener('submit', sendForm, false);
    }


})(window, document);