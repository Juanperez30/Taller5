
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
  });
  
  function validarFormulario(evento) {
      evento.preventDefault();

    var color, marca, modelo, precio;

    color = document.getElementById("color").selectedIndex;
    marca = document.getElementById("marca").selectedIndex;
    modelo = document.getElementById("modelo").value;
  
    //Valido que Modelo del carro
    if(color == ""){
        alert("Selecciona una opción de COLOR");
        return false;
    }
        else if(modelo == "" ){
        alert("Digíte un MODELO");
        return false
        } 
            else if(isNaN(modelo)){
            alert('Inserte unicamente un año vigente en MODELO (2002-2022)');
            return false;
        }
            else if (marca == ""){
                alert("Seleccione una opción en MARCA");
                return false;
            }

 //el formulario se envia
 alert("Muchas gracias por enviar el formulario");
 document.formulario.post();
}
    

function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
  }
    

