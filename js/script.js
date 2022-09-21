import { AIdata } from './data.js';
const net = new brain.NeuralNetwork();
net.train(AIdata);

const colorEl = document.querySelector('.color');
const guessEl = document.querySelector('.guess');
const whiteBtn = document.getElementById('white-btn');
const blackBtn = document.getElementById('black-btn');
const printBtn = document.getElementById('print-btn');

let color;
whiteBtn.addEventListener('click', () => {
  chooseColor(1);
});
blackBtn.addEventListener('click', () => {
  chooseColor(0);
});

printBtn.addEventListener('click', () => {
  console.log(JSON.stringify(AIdata));
});

const chooseColor = value => {
  AIdata.push({
    input: color,
    output: [value],
  });
  setRandomColor();
};

const setRandomColor = () => {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };
  const guess = net.run(color)[0];
  guessEl.style.color = guess > 0.5 ? '#fff' : '#000';
  guessEl.textContent = guess > 0.5 ? 'White' : 'Black';
  colorEl.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${
    color.b * 255
  })`;
};
setRandomColor();
