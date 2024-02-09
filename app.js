let listaDeNumeroSorteado = [];
let numeroLimite = 10;
let numeroAleatorio =gerarNumeroAleatorio();
let tentativas=1;
exibirMensagemInicial();
reiniciarJogo();

function exibirTextoNaTela (tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto , 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela ('h1','Jogo de número secreto')
    exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10')    
}

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute==numeroAleatorio){
        exibirTextoNaTela ('h1','Acertou!');
        let PalavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' ;
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${PalavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas); 
        document.getElementById ('reiniciar').removeAttribute('disabled');   
    }else {
        if (chute>numeroAleatorio) {
            exibirTextoNaTela('p','O numero secreto é menor');
        }else{
            exibirTextoNaTela('p','O numero secreto é maior');
        }
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random()* numeroLimite +1 );    
    let quantidadeDeElementosNaLista =listaDeNumeroSorteado.length;
   
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumeroSorteado = [];
    }
    if (listaDeNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log(listaDeNumeroSorteado)
        return(numeroEscolhido)
    }
}    
   

function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio =gerarNumeroAleatorio();
    limparCampo ();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}