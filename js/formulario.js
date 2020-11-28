document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();

  //valido que escriba algo en usuario
  var usuario = document.getElementById('usuario').value;
  if(usuario.length == 0) {
    alert('No has escrito nada en el usuario');
    return;
  }

//valido el nombre
  var nombre = document.getElementById('Nombre').value;
  if(nombre.length == 0) {
    alert('No has escrito nada en el nombre');
    return;
  }
  if(nombre.length > 25){
    alert('El nombre es muy largo');
    return;
  }

//valido el apellido
  var apellido = document.getElementById('Apellidos').value;
  if(apellido.length == 0) {
    alert('No has escrito nada en el apellido');
    return;
  }
  if(apellido.length > 25){
    alert('El apellido es muy largo');
    return;
  }

  //valido la Direccion, estan mal los parentesis de abajo
  var direccion = document.getElementById('Direccion').value;
  if(direccion.length == 0) {
    alert('No has escrito nada en la direccion');
    return;
  }
  if(!((direccion.toLowerCase().includes('cll'))) || ((direccion.toLowerCase().includes('cra'))) || (!(direccion.toLowerCase().includes('av'))) || (!(direccion.toLowerCase().includes('anv'))) || (!(direccion.toLowerCase().includes('trans')))){
      alert('Ingrese una direccion correcta');
    return;
  }

 //valido Contraseña, falta terminar este

  var clave = document.getElementById('clave').value;
  if (clave.length < 6) {
    alert('La clave no es válida');
    return;
  }

  this.submit();
}
