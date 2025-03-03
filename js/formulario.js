const enviarFormulario = async (event) => {
  event.preventDefault(); // Evitar la recarga de la página

  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const telefono = document.getElementById('telefono');

  console.log(nombre.value);
  console.log(telefono.value);
  console.log(email.value);

  // Si no necesitas un checkbox, remueve esta parte; si lo necesitas, asegúrate de definirlo
  // const checkbox = document.getElementById('checkbox');
  // if (!checkbox.checked) return; // Si es necesario usar

  try {
      const respuesta = await fetch(
          'https://us-central1-cim-dev-caa.cloudfunctions.net/registrarUsuario',
          {
              method: 'POST',
              redirect: 'follow',
              cache: 'no-store',
              body: JSON.stringify({
                  nombre: nombre.value,
                  email: email.value,
                  telefono: telefono.value
              }),
              headers: { 'Content-Type': 'application/json' }
          }
      );

      if (!respuesta.ok) {
          throw new Error('Network response was not ok.');
      }

      const data = await respuesta.json();
      console.log('data: ', data);

      // Aquí puedes mostrar un mensaje de éxito, limpiar el formulario, etc.
      alert('Formulario enviado con éxito');

  } catch (error) {
      console.error('Error:', error);
      // Aquí puedes mostrar un mensaje de error
      alert('Error al enviar el formulario');
  }
};

// Agrega el evento para el formulario
document.getElementById('contactForm').addEventListener('submit', enviarFormulario);