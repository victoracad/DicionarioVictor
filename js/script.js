
//Coloca todos os elementos (neste caso todos os botoes) em uma array (vetor).
const botoesMostrar = document.querySelectorAll('.botao-mostrar');
const conteudosEscondidos = document.querySelectorAll('.conteudo-escondido');

/*Para cada (forEach) elemento que tiver na array/vetor vai ser representado pela variavel 'botao'. A variavel "posicao" recebe o valor da posição do botão que foi apertado,
 Ex vetor{botao1, botao2} se o botão que foi apertado foi o 'botao2' a varivel "posicao" recebe '1'*/
botoesMostrar.forEach((botao, index) => {
    botao.addEventListener('click', () => {

      /*pega somente um elemento da array/vetor do 'conteudosEscondidos' que vai aparecer e joga na variavel "conteudoEscondido".
      Percebesse que vai ser pego somente um elemento do vetor "conteudosEscondidos"
      vai ser somente o elemento da posição do botão no qual o usuário clicou.*/
        const conteudoEscondido = conteudosEscondidos[index]; //vetor[posição do vetor]
        
        conteudoEscondido.classList.toggle('contEscAtivo');//coloca e tira a classe contEscAtivo no elemento 'conteudoEscondido'

        //Troca o texto do botão apertado
        if(botao.textContent === 'Mostrar mais'){
          botao.textContent = 'Esconder';//alterna o texto do botão
        }else{
          botao.textContent = 'Mostrar mais';//alterna o texto do botão
        }
        
    });
});
















