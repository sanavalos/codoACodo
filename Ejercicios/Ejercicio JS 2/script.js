let numero = 0;

function tabla(numero) {
  let titulo = document.createElement("h2");
  titulo.innerText = `La tabla del ${numero}:`;
  document.body.appendChild(titulo);
  for (let i = 1; i < 10; i++) {
    const p = document.createElement("p");
    let resultado = document.createTextNode(`${numero} x ${i}: ${numero * i}`);
    p.appendChild(resultado);
    document.body.appendChild(p);
  }
}

tabla(11);
tabla(10);
tabla(9);
