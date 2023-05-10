var botao = document.getElementById('clique');
botao.onclick = function(){
    if(botao.value === 'troca'){
        pers1.src = 'spacex.jpg';
        botao.value = 'Retornar';
        botao.innerHTML = '(Voltar)';
    }else{
        pers1.src = 'ngc6355.jpg';
        botao.value = 'troca';
        botao.innerHTML = '(Trocar)';
    }
}