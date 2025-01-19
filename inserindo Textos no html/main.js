function inserir() { //o botão ativa a função inserir que fara as seguintes ações

    var texto = document.querySelector('#txt').value //armazenará o valor (texto do input) na variavel texto

    document.querySelector('#texto').innerHTML = texto //acessa o documento e escreve nos elementos com o id="texto", o conteudo da variavel acima
    
//para uma melhor performance pode se trocar querySelector para getElementById('nome do id')
//caso use geyElementeById, não é necessário usar #, afinal já esta puxando o ID
}

//caso seja necessario uma validação em tempo real use isso

//if(nome variavel){
//  document.querySelector('id do local onde vai ser colocado o texto').innerHTML = nome variavel
//}else{
//    document.querySelector('id do local onde vai ser colocado o texto').innerHTML = "nenhum texto foi escrito"
//}