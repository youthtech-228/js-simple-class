// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

class MyDic {
  constructor(words) {
    this.words = new Set(words);
  }
  isInDic = (word) => {
    return this.words.has(word);
  };
}

let myDic = new MyDic(['cat', 'dog', 'bear']);
console.log(myDic.isInDic('cat'));
console.log(myDic.isInDic('horse'));
