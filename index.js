// console.log('teste');
// // document.body.style.backgroundColor = 'black';
// var h1 = document.getElementById('titulo');
// // h1.style.color = 'white';
// h1.innerText = 'Olá DOM!';
// console.log(h1);

// var subtitulo = document.createElement('p');
// subtitulo.innerText = 'subtitulo';
// // document.body.appendChild(subtitulo);
// document.body.insertBefore(subtitulo, h1);

// var item = document.createElement('li');
// item.innerText = 'Caderno';

// var lista = document.getElementById('lista');

// lista.appendChild(item);

function mudaCor() {
  var titulo = document.getElementById('titulo');
  titulo.style.color = 'red';
}

function addProduto() {
  var descricao = document.getElementById('valor');
  var lista = document.getElementById('lista');

  var item = document.createElement('li');
  item.innerText = descricao.value;

  lista.appendChild(item);

  descricao.value = '';
}

function clearList() {
  var lista = document.getElementById('lista');

  lista.innerHTML = '';
}
