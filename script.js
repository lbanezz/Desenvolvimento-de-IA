const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function send() {
  const question = userInput.value;
  if (question.trim() === '') return;

  displayUserMessage(question);
  setTimeout(() => generateResponse(question), 500);
  userInput.value = '';
}

function displayUserMessage(message) {
  const userDiv = document.createElement('div');
  userDiv.className = 'message user';
  userDiv.innerHTML = `<strong>Você:</strong> ${message}`;
  chatBox.appendChild(userDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function displayBotMessage(message) {
  const botDiv = document.createElement('div');
  botDiv.className = 'message bot';
  botDiv.innerHTML = `<strong>Assistente:</strong> ${message}`;
  chatBox.appendChild(botDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateResponse(question) {
  let answer;
  if (question.toLowerCase().includes('amor')) {
    answer = 'João 3:16 - "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."';
  } else if (question.toLowerCase().includes('fé')) {
    answer = 'Hebreus 11:1 - "Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que se não veem."';

  } if (question.toLowerCase().includes('deus')) {
    answer = "Historicamente, Jesus Cristo foi um profeta judeu que viveu na Palestina no século I d.C. Durante sua vida, ele trouxe uma mensagem de libertação a Israel, prometendo a formação de um reino de Deus na Terra. Essa mensagem teria o levado a ser crucificado pelos romanos, os dominadores da Palestina na época.";

  } else {
    answer = 'Desculpe, não encontrei um versículo específico para essa pergunta. Posso te ajudar com algo mais?';
  }
  displayBotMessage(answer);
}
