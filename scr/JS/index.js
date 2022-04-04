/*
quando clicar no poliedro da Listagem tem que esconder o Cartao do poliedro ativo e mostrar o próximo cartao  que será selecionado / ativo 

Para isso necessita manipular DOIS elementos do document ( html) 
    1- listagem
    2- cartao do poliedro

precisa criar DUAS variavéis no JS para manipular os elementos  da tela

precisa usar um evento de CLIQUE para o usuário selecionar a listagem dos poliedros para :

    -remover a classe aberto somente do cartao que está aberto
    - ao clicar no poliedro da listagem, pegar o ID dele para saber qual cartao mostrar
    - remover a classe ativo que marca o poliedro selecionado
    - adicionar a classe ativo no item da listagem que foi selecionado

*/

// criando as DUAS varriávei no JS para manipular os elementos da tela
const listaSelecaoPoliedros = document.querySelectorAll('.poliedro')
const poliedrosCard = document.querySelectorAll('.cartao-poliedro')

listaSelecaoPoliedros.forEach(poliedro => { 
    // precisa usar um evento de CLIQUE para o usuário selecionar a listagem dos poliedros 
           
    poliedro.addEventListener('click', () => {
        // -remover a classe aberto somente do cartao que está aberto 
        const cartaoPoliedroAberto = document.querySelector('.aberto')
        cartaoPoliedroAberto.classList.remove('aberto')
    
    // - ao clicar no poliedro da listagem, pegar o ID dele para saber qual cartao mostrar
        const idPoliedroSelecionado = poliedro.attributes.id.value

        const idDoCartaoPoliedroParaAbrir = 'cartao-' + idPoliedroSelecionado
        const cartaoPoliedroParaAbrir = document.getElementById('cartao-' + idPoliedroSelecionado)
        cartaoPoliedroParaAbrir.classList.add('aberto') 
       
        // - remover a classe ativo que marca o poliedro selecionado
        const poliedroAtivoNaListagem = document.querySelector('.ativo')
        poliedroAtivoNaListagem.classList.remove('ativo')

        // - adicionar a classe ativo no item da listagem que foi selecionado
        const poliedroSelecionadoNaListagem = document.getElementById(idPoliedroSelecionado)
        poliedroSelecionadoNaListagem.classList.add('ativo')

    })
    
} )

