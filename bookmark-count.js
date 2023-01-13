function changecount() {
let counter = localStorage.getItem('a')+localStorage.getItem('b')+localStorage.getItem('c')+localStorage.getItem('d')+localStorage.getItem('e')+localStorage.getItem('f')+localStorage.getItem('g')+localStorage.getItem('h')+localStorage.getItem('i')+localStorage.getItem('j')+localStorage.getItem('k')+localStorage.getItem('l')+localStorage.getItem('m')+localStorage.getItem('n')+localStorage.getItem('o')+localStorage.getItem('p')+localStorage.getItem('q')+localStorage.getItem('r')+localStorage.getItem('s');
document.getElementById("count").innerHTML = counter;
let numbersaved = 0;

if (document.getElementById('count').textContent.toLowerCase().includes('?a'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?b'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?c'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?d'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?e'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?f'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?g'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?h'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?i'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?j'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?k'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?l'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?m'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?n'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?o'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?p'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?q'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?r'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?s'.toLowerCase())){numbersaved++;}
setTimeout(function (){
document.getElementById("indicator").innerHTML = numbersaved;
}, 1);
}
changecount();

$('.bookmark').click(function() {
setTimeout(function (){
changecount();
}, 1);
});
