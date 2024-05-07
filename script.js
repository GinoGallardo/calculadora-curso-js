//esto agrega a la pantalla el valor del boton que toquemos
function agregar(valor){
  document.getElementById('pantalla').value += valor
}

//esta accion limpia la pantalla
function borrar(){
  document.getElementById('pantalla').value = ""
}

//esta accion ejecuta los calculos
//EVAL realiza los calculos automaticos
function calcular(){
  const valorPantalla = document.getElementById('pantalla').value
  const resultado = eval(valorPantalla)
  document.getElementById('pantalla').value = resultado
}