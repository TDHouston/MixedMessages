const affirm = [
  "Keep smiling, because life is a beautiful thing and there's so much to smile about!",
  "Remember to be awesome today!",
  "You're stronger than you think.",
  "Embrace the glorious mess that you are.",
  "Life is short. Smile while you still have teeth!",
  "You're a limited edition.",
  "Make today so awesome, yesterday gets jealous.",
  "Be the reason someone smiles today.",
  "You're someone's reason to smile.",
  "Don't forget to be great today!",
  "Believe you can and you're halfway there.",
  "Your vibe attracts your tribe.",
  "Choose kindness and laugh often.",
  "Life isn't perfect, but your outfit can be.",
  "Be yourself; everyone else is already taken.",
  "Dream big, work hard, stay focused.",
  "You're like a four-leaf clover: hard to find and lucky to have.",
  "Stay positive, work hard, make it happen!",
  "You are capable of amazing things.",
  "Every day is a second chance.",
];

const numberGenerator = () => {
  const number = Math.floor(Math.random() * 21);
  return number;
};

const messageGenerator = (arr, func) => {
  let randomIndex = func();
  for (let i = 0; i < arr.length; i++) {
    if (randomIndex === i) {
      return arr[i];
    }
  }
};

console.log(messageGenerator(affirm, numberGenerator))