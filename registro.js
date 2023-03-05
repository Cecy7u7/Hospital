const registroForm = document.getElementById("registro-form");
const loginForm = document.getElementById("login-form");

// Registro de usuario
registroForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const contrasena = document.getElementById("contrasena").value;
  const usuario = { nombre, email, contrasena };
  localStorage.setItem(email, JSON.stringify(usuario));
  alert("Usuario registrado correctamente.");
  registroForm.reset();
});

// Inicio de sesión
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email-login").value;
  const contrasena = document.getElementById("contrasena-login").value;
  const usuarioGuardado = localStorage.getItem(email);
  if (usuarioGuardado) {
    const usuario = JSON.parse(usuarioGuardado);
    if (usuario.contrasena === contrasena) {
      alert(`Bienvenido, ${usuario.nombre}!`);
      loginForm.reset();
    } else {
      alert("Contraseña incorrecta.");
    }
  } else {
    alert("No se encontró ningún usuario con ese email.");
  }
});
