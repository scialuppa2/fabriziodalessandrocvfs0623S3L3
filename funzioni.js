  const aggiungiLista = function(){
    const elemento = document.createElement('p')
    elemento.innerText = document.getElementById('cosafare').value
    const contenitore = document.querySelector('#lista')
    contenitore.appendChild(elemento)
  }

  const pulsante = document.querySelector('#button')
  pulsante.addEventListener('click', aggiungiLista)

  