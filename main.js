const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const BOT_IMG = "bot.png";
const PERSON_IMG = "user.png";
const BOT_NAME = "BOT";
const PERSON_NAME = "User";
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  ["Whara is kandy"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"],
  ["What is your name"],
  ["How old are you"],
  ["What is the capital of sri lanka"],
  ['How is wether today'],
  ["I'm glad to hear that!", "That's awesome!", "Fantastic!"],
  ["I'm sorry to hear that.", "That sounds tough.", "I hope things get better soon."],
  ["Sure, how can I assist you?", "Once upon a time...", "Why don't you hear a joke: Why did the scarecrow win an award? Because he was outstanding in his field!"],
  ["Got it!", "Okay!", "Nice to hear!"],
  ["Goodbye!", "See you later!", "Take care!"],
  ["How about trying something new today?", "Why not have some sushi?", "Maybe a nice pizza would be great."],
  ["What's up, bro?", "Hey bro!", "Bro, how can I help?"],
  ["That's a great question.", "Let's figure it out.", "What exactly do you want to know?"],
  ["That's okay.", "No worries.", "I understand."],
  ["Please tell me more.", "Can you elaborate?", "I'm here to listen."],
  ["That's funny!", "Haha, good one!", "LOL!"],
  ["I am a chatbot, so I don't have a traditional name. But you can call me ChatBot.", "You can call me your friendly assistant!", "I'm here to help, you can call me whatever you like!"],
  ["I don't have an age, but I'm always here to help you.", "Age is just a number, especially for a chatbot!", "I am timeless."],
  ["The capital of Sri Lanka is Sri Jayawardenepura Kotte.", "Sri Jayawardenepura Kotte is the capital city of Sri Lanka.", "Sri Lanka's capital is Sri Jayawardenepura Kotte."],
  ["The weather is great! How about where you are?", "It's sunny here. How's it over there?", "It looks like it's going to rain soon. How's the weather where you are?"]
]
const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am chat bot"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["In Sri Lanka"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok", "I understand", "What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!", "Good one!"],
  ["Chat bot"],
  ["I am a chat bot"],
  ["Sri jayawardanapura kotte"],
  ["Fine"],
  ["I'm glad to hear that!", "That's awesome!", "Fantastic!"],
  ["I'm sorry to hear that.", "That sounds tough.", "I hope things get better soon."],
  ["Sure, how can I assist you?", "Once upon a time...", "Why don't you hear a joke: Why did the scarecrow win an award? Because he was outstanding in his field!"],
  ["Got it!", "Okay!", "Nice to hear!"],
  ["Goodbye!", "See you later!", "Take care!"],
  ["How about trying something new today?", "Why not have some sushi?", "Maybe a nice pizza would be great."],
  ["What's up, bro?", "Hey bro!", "Bro, how can I help?"],
  ["That's a great question.", "Let's figure it out.", "What exactly do you want to know?"],
  ["That's okay.", "No worries.", "I understand."],
  ["Please tell me more.", "Can you elaborate?", "I'm here to listen."],
  ["That's funny!", "Haha, good one!", "LOL!"],
  ["I am a chatbot, so I don't have a traditional name. But you can call me ChatBot.", "You can call me your friendly assistant!", "I'm here to help, you can call me whatever you like!"],
  ["I don't have an age, but I'm always here to help you.", "Age is just a number, especially for a chatbot!", "I am timeless."],
  ["The capital of Sri Lanka is Sri Jayawardenepura Kotte.", "Sri Jayawardenepura Kotte is the capital city of Sri Lanka.", "Sri Lanka's capital is Sri Jayawardenepura Kotte."],
  ["The weather is great! How about where you are?", "It's sunny here. How's it over there?", "It looks like it's going to rain soon. How's the weather where you are?"]
];
const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]
const robot = ["How do you do, fellow human", "I am not a bot"];
msgerForm.addEventListener("submit", event => {
  event.preventDefault();
  const msgText = msgerInput.value;
  if (!msgText) return;
  msgerInput.value = "";
  addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
  output(msgText);
});
function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")  
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");
  if (compare(prompts, replies, text)) {
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } else if (text.match(/(robot|bot|robo)/gi)) {
    product = robot[Math.floor(Math.random() * robot.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }
  const delay = input.split(" ").length * 100;
  setTimeout(() => {
    addChat(BOT_NAME, BOT_IMG, "left", product);
  }, delay);
}
function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}
function addChat(name, img, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;
  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}
function get(selector, root = document) {
  return root.querySelector(selector);
}
function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();
  return `${h.slice(-2)}:${m.slice(-2)}`;
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}