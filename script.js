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
  botDiv.innerHTML = `<strong>Chatbot:</strong> ${message}`;
  chatBox.appendChild(botDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateResponse(question) {
  let answer;
  if (question.toLowerCase().includes('cachorro')) {
    answer = 'Cachorros são animais de estimação adoráveis e leais!';
  } else if (question.toLowerCase().includes('gato')) {
    answer = 'Gatos são animais independentes e adoram dormir!';
  } else {
    answer = 'Desculpe, não sei muito sobre isso. Pergunte sobre gatos ou cachorros!';
  }

  if (question.toLowerCase().includes('quem foi Jesus')) {
    answer = 'Historicamente, Jesus Cristo foi um profeta judeu que viveu na Palestina no século I d.C. Durante sua vida, ele trouxe uma mensagem de libertação a Israel, prometendo a formação de um reino de Deus na Terra. Essa mensagem teria o levado a ser crucificado pelos romanos, os dominadores da Palestina na época.';

  displayBotMessage(answer);
}
