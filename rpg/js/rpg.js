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

    let spanEspirituJugador = document.getElementById('espiritu-jugador')

    if (inputSalamander.checked){
        spanEspirituJugador.innerHTML = 'Salamander'
    } else if (inputUndine.checked){
        spanEspirituJugador.innerHTML = 'Undine'
    } else if (inputSylph.checked){
        spanEspirituJugador.innerHTML = 'Sylph'
    } else if (inputGnome.checked){
        spanEspirituJugador.innerHTML = 'Gnome'
    } else if (inputGaia.checked){
        spanEspirituJugador.innerHTML = 'Gaia'
    } else if (inputMagma.checked){
        spanEspirituJugador.innerHTML = 'Magma'
    } else if (inputZephyr.checked){
        spanEspirituJugador.innerHTML = 'Zephyr'
    } else if (inputNimbus.checked){
        spanEspirituJugador.innerHTML = 'Nimbus'
    }else{
        alert('Selecciona un espíritu para continuar')
    }
    
    seleccionarEspirituEnemigo()
    
}

function seleccionarEspirituEnemigo(){
    let numeroAleatorio = aleatorio(1,8)
    let spanEspirituEnemigo = document.getElementById('espiritu-enemigo')

    if (numeroAleatorio == 1){
        spanEspirituEnemigo.innerHTML = 'Salamander'
    } else if (numeroAleatorio == 2){
        spanEspirituEnemigo.innerHTML = 'Undine'
    } else if (numeroAleatorio == 3){
        spanEspirituEnemigo.innerHTML = 'Sylph'
    } else if (numeroAleatorio == 4){
        spanEspirituEnemigo.innerHTML = 'Gnome'
    } else if (numeroAleatorio == 5){
        spanEspirituEnemigo.innerHTML = 'Gaia'
    } else if (numeroAleatorio == 6){
        spanEspirituEnemigo.innerHTML = 'Magma'
    } else if (numeroAleatorio == 7){
        spanEspirituEnemigo.innerHTML = 'Zephyr'
    } else{
        spanEspirituEnemigo.innerHTML = 'Nimbus'
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}




window.addEventListener('load', iniciarJuego)