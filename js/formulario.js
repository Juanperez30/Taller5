document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();


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
  if(!(((direccion.toLowerCase().includes('cll'))) || ((direccion.toLowerCase().includes('cra')))
  || ((direccion.toLowerCase().includes('av'))) || ((direccion.toLowerCase().includes('anv')))
  || ((direccion.toLowerCase().includes('trans'))))) {
      alert('Ingrese una direccion correcta');
    return;
  }


  //valido que escriba algo en usuario
  var usuario = document.getElementById('usuario').value;
    if(usuario.length >20){
      alert('Usuario muy largo (mas de 20 caracteres)');
    return;
  }
  if(usuario.length < 10 ){
    alert('Usuario muy corto (menos de 10 caracteres)')
  }


 //valido Contraseña, falta terminar este

  var clave = document.getElementById('clave').value;
  if (clave.length == 0) {
    alert('Debe escribir una Contraseña');
    return;
  }
  if(clave.length < 15 ){
      alert('La Contraseña debe tener al menos 15 caracteres')
    return;
  }
  if(clave.length > 20){
      alert('Contraseña muy larga (mas de 20 caracteres)');
    return;
  }

  var validado = validar_clave(clave);
  if(!validado){
      alert('La contraseña debe tener al menos una mayuscula, una minuscula, un numero y un caracter raro(&,/,#,%)');
    return;
  }

  var confclave = document.getElementById('confclave').value;
  if (!(confclave === clave)) {
    alert('las contraseñas no coinciden');
    return;
  }

  var correo = document.getElementById('correo').value;
  if (correo.length > 120) {
    alert('El limite de caracteres es 120');
    return;
  }
  if (correo.length == 0){
    alert('Debe escribir algo en el correo');
    return;
  }
  alert('Formulario diligenciado correctamente');
  this.submit();
}



function validar_clave(contrasenna)
		{
			if(contrasenna.length >= 8)
			{
				var mayuscula = false;
				var minuscula = false;
				var numero = false;
				var caracter_raro = false;

				for(var i = 0;i<contrasenna.length;i++)
				{
					if(contrasenna.charCodeAt(i) >= 65 && contrasenna.charCodeAt(i) <= 90)
					{
						mayuscula = true;
					}
					else if(contrasenna.charCodeAt(i) >= 97 && contrasenna.charCodeAt(i) <= 122)
					{
						minuscula = true;
					}
					else if(contrasenna.charCodeAt(i) >= 48 && contrasenna.charCodeAt(i) <= 57)
					{
						numero = true;
					}
					else
					{
						caracter_raro = true;
					}
				}
				if(mayuscula == true && minuscula == true && caracter_raro == true && numero == true)
				{
					return true;
				}
			}
			return false;
		}
