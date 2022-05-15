let usuario = document.getElementById('user')
let contraseña = document.getElementById('pass')

function validacion(){
    if(usuario.value == ''){
        alert("Complete el espacio asignado con su usuario")
        return false
    }
    if(contraseña.value == ''){
        alert("Complete el espacio asignado con su contraseña")
        return false
    }
    if(!usuario.value.includes('@')){
        alert("Su usuario debe tener el valor '@'")
        return false
    }
    alert('Ha iniciado sesión con exito')
}