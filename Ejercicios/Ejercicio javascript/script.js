//creacion y asignacion variables
var primera = 40;
var segunda = 16;
var sumatotal = primera + segunda;

//agregando texto a etiqueta h1
document.querySelector('h1').innerText = 'La suma de las dos variables es: ';

//creacion h2 y asignacion valor de variable en DOM
const h2 = document.createElement('h2');
let resultado = document.createTextNode(sumatotal);
h2.appendChild(resultado);
document.body.appendChild(h2)
