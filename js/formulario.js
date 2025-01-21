// var time = new Date()
// console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds())
// console.log("dentro del formulario 1")
// const enviar = () => {
//     console.log("enviado")
// }
const enviarFormulario = async () => {
    const boton = document.getElementById('botonformulario1')
    const nombre = document.getElementById('inputnombre')
    const email = document.getElementById('inputmail')
    const telefono = document.getElementById('inputtelefono')
    const checkbox = document.getElementById('gridCheck')
  
    console.log(boton)
    console.log(nombre.value)
    console.log(telefono.value)
    console.log(email.value)
    console.log(checkbox.checked)
  
    if (checkbox.checked === true) {
      boton.innerHTML = 'enviado'
      boton.style.background = '#ff9c08'
      const respuesta = await fetch(
        'https://us-central1-cim-dev-caa.cloudfunctions.net/registrarUsuario',
  
        {
          method: 'POST',
          redirect: 'follow',
          cache: 'no-store',
          body: `{"nombre": "${nombre.value}", "email": "${email.value}", "telefono": "${telefono.value}"}`,
          headers: { 'Content-Type': 'text/plain' }
        },
      )
      
      const data = await respuesta.json()
      console.log('data: ', data)
      
    }
  }
  