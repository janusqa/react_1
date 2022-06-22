const container = document.getElementById('root');
const h1 = document.createElement('h1');
h1.className = 'header';
const h1_text = document.createTextNode('Hello, Plain Vanilla JS');
h1.appendChild(h1_text);
container.appendChild(h1);
