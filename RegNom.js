const form = document.getElementById('registro');
const lista = document.getElementById('nombres');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellidoP = document.getElementById('apellidoP').value;
  const apellidoM = document.getElementById('apellidoM').value;

  const datos = { nombre, apellidoP, apellidoM };
  const nombres = JSON.parse(localStorage.getItem('nombres') || '[]');
  nombres.push(datos);
  localStorage.setItem('nombres', JSON.stringify(nombres));

  alert(`Nombre ${nombre} registrado correctamente`);
  form.reset();
  
  // Actualizar la lista de nombres registrados
  actualizarLista();
});

function actualizarLista() {
  lista.innerHTML = '';
  const nombres = JSON.parse(localStorage.getItem('nombres') || '[]');
  for (const datos of nombres) {
    const item = document.createElement('li');
    item.textContent = `${datos.nombre} ${datos.apellidoP} ${datos.apellidoM}`;
    lista.appendChild(item);
  }
}

// Actualizar la lista de nombres registrados al cargar la página
actualizarLista();
