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
  userDiv.innerHTML = `<strong>Pergunta:</strong> ${message}`;
  chatBox.appendChild(userDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function displayBotMessage(message) {
  const botDiv = document.createElement('div');
  botDiv.className = 'message bot';
  botDiv.innerHTML = `<strong>ChatBot:</strong> ${message}`;
  chatBox.appendChild(botDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// perguntas e respostas da inteligencia artificial


function generateResponse(question) {
  let answer;
  if (question.toLowerCase().includes('amor')) {
    answer = 'João 3:16 - "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."';

  } else if (question.toLowerCase().includes('fé')) {
    answer = 'Hebreus 11:1 - "Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que se não vem.';

  }  else if (question.toLowerCase().includes('deus')) {
    answer = 'Historicamente, Jesus Cristo foi um profeta judeu que viveu na Palestina no século I d.C. Durante sua vida, ele trouxe uma mensagem de libertação a Israel, prometendo a formação de um reino de Deus na Terra. Essa mensagem teria o levado a ser crucificado pelos romanos, os dominadores da Palestina na época.';

  } else if (question.toLowerCase().includes('estudo biblico')) {
    answer = 'se você deseja um estudo bibiclo via WhatsApp entre em contato com o número <a href="https://wa.me/5512982000062?text=Ol%C3%A1+desejo+receber+estudo+b%C3%ADblico.">+55 12 98200-0062</a> desejo a você um bom estudo!';

  } else if (question.toLowerCase().includes('livros que voce recomenda para o lar')) {
    answer = 'Fundamentos do Lar Cristão - Ellen White';

  } else if (question.toLowerCase().includes('quais os livros da biblia que tem apenas 1 capitulo')) {
    answer = 'Obadias, Filemom, II João, III João e Judas.';

  } else if (question.toLowerCase().includes('quais os livros da biblia que terminam com um ponto de interrogação ?')) {
    answer = 'Lamentações, Jonas e Naum.';

  } else if (question.toLowerCase().includes('qual o menor livro da biblia')) {
    answer = 'II João (possui somente 13 versículos).';

  } else if (question.toLowerCase().includes('por que o rei Davi não pode construir um templo para Deus')) {
    answer = 'Por causa das muitas guerras que ele teve de enfrentar contra os seus inimigos. I Reis 5-3.';

  } else if (question.toLowerCase().includes('ola')) {
    answer = 'Olá em que posso ajudar ?';

  } else if (question.toLowerCase().includes('qual e a unica mulher cuja a idade e mencionada na biblia')) {
    answer = 'Sara. Gênesis 23-1.';

  } else {
    answer = 'Desculpe, não encontrei um versículo específico para essa pergunta. Posso te ajudar com algo mais?';
  }
  displayBotMessage(answer);
}