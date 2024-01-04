const respostas = {
    'qual a capital do Brasil?': 'A capital do Brasil é Brasília.',
    'quem foi Albert Einstein?': 'Albert Einstein foi um físico teórico alemão.',
    'o que é fotossíntese?': 'A fotossíntese é o processo pelo qual as plantas produzem sua própria comida usando luz solar.',
    // Adicione mais perguntas e respostas aqui
  };
  
  function buscarResposta(pergunta) {
    pergunta = pergunta.toLowerCase();
  
    if (respostas[pergunta]) {
      return respostas[pergunta];
    } else {
      return 'Desculpe, não tenho informações sobre essa pergunta.';
    }
  }
  
  function exibirResposta(resposta) {
    const chatContainer = document.getElementById('chat-container');
    const messageElement = document.createElement('div');
    messageElement.classList.add('IA-message');
    messageElement.innerText = resposta;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  
  function enviarPergunta() {
    const pergunta = document.getElementById('user-input').value;
    exibirResposta(pergunta);
  
    const resposta = buscarResposta(pergunta);
  
    setTimeout(() => {
      exibirResposta(resposta);
    }, 1000);
  
    document.getElementById('user-input').value = '';
  }
  