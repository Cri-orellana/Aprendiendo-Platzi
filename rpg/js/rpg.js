function iniciarJuego() {
    let botonMascota = document.getElementById('boton-espiritu')
    botonMascota.addEventListener('click',  seleccionarEspirituJugador)
}

function seleccionarEspirituJugador() {
    let inputSalamander = document.getElementById
    ('salamander')
    let inputUndine = document.getElementById('undine')
    let inputSylph = document.getElementById('sylph')
    let inputGnome = document.getElementById('gnome')
    let inputGaia = document.getElementById('gaia')
    let inputMagma = document.getElementById('magma')
    let inputZephyr = document.getElementById('zephyr')
    let inputNimbus = document.getElementById('nimbus')

    if (inputSalamander.checked){
        alert('Has seleccionado a Salamander!')
    } else if (inputUndine.checked){
        alert('Has seleccionado a Undine!')
    } else if (inputSylph.checked){
        alert('Has seleccionado a Sylph!')
    } else if (inputGnome.checked){
        alert('Has seleccionado a Gnome!')
    } else if (inputGaia.checked){
        alert('Has seleccionado a Gaia!')
    } else if (inputMagma.checked){
        alert('Has seleccionado a Magma!')
    } else if (inputZephyr.checked){
        alert('Has seleccionado a Zephyr!')
    } else if (inputNimbus.checked){
        alert('Has seleccionado a Nimbus!')
    }else{
        alert('Selecciona un espíritu para continuar')
    }    

    
}



window.addEventListener('load', iniciarJuego)