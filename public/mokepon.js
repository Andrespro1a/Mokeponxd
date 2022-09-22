const sectionSeleccionarReiniciar = document.getElementById("boton-reiniciar")
    sectionSeleccionarReiniciar.style.display = "none"
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    
const botonMascotajugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const AtaqueJugadorMascota =document.getElementById("imagen-jugador")

const AtaqueJugadorEnemigo = document.getElementById("imagen-enemigo")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugadas")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes  = document.getElementById("resultado")
const ataqueDeljugador = document.getElementById("ataque-del-jugador")
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let jugadorId = null
let enemigoId = null
let mokepones = []
let mokeponesEnemigos = []
let ataqueEnemigo = []
let opcionDeMokepones
let ataquesMokepon
let ataquesMokeponEnemigo
let mascotaJugador
let mascotaJugadorObjeto
let botonFuego 
let botonAgua 
let botonTierra 
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let ataqueJugador = []
let inputCapipepo 
let inputRatigueya 
let inputHipodoge 
let inputTucapalma
let inputPydos
let inputLangostelvis
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./js/m.jpg"
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20 
const anchoMaximoDelMapa = 700

if(anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa *  500 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon {
    constructor(n, f, v, fotoMapa, id= null) {
        this.id = id
        this.nombre = n
        this.foto = f
        this.vida = v
        this.ataques = []
        this.ancho = 60
        this.alto = 60
        this.x = aleatorio(0, mapa.width - this.ancho) 
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon(){
        lienzo.drawImage(
        this.mapaFoto,
        this.x,
        this.y,
        this.ancho,
        this.alto
    ) 
    }
}

let hipodoge = new Mokepon("Hipodoge", "./js/h.png", 5, "./js/hv.png",)
let capipepo = new Mokepon("Capipepo", "./js/c.png", 5,"./js/cc.png")
let ratigueya = new Mokepon("Ratigueya", "./js/r.png", 5, "./js/rr.png")
let tucapalma = new Mokepon("Tucapalma", "./js/t.png", 5,"./js/tt.png")
let pydos = new Mokepon("Pydos", "./js/p.png", 5,"./js/pp.png")
let langostelvis = new Mokepon("Langostelvis", "./js/l.png", 5,"./js/ll.png")

const HIPODOGE_ATAQUES = [
    { nombre: "💧", id: "boton-agua" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🌱", id: "boton-tierra" },
]
hipodoge.ataques.push(...HIPODOGE_ATAQUES)

const CAPIPEPO_ATAQUES = [
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🔥", id: "boton-fuego" }, 
]
capipepo.ataques.push(...CAPIPEPO_ATAQUES)

const RATIGUEYA_ATAQUES = [
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🌱", id: "boton-tierra" },
]
ratigueya.ataques.push(...RATIGUEYA_ATAQUES)

const TUCAPALMA_ATAQUES = [
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🔥", id: "boton-agua" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🌱", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-tierra" },
]
tucapalma.ataques.push(...TUCAPALMA_ATAQUES)

const PYDOS_ATAQUES = [
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🔥", id: "boton-tierra" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🔥", id: "boton-agua" },
    { nombre: "💧", id: "boton-fuego" },
]
pydos.ataques.push(...PYDOS_ATAQUES)

const LANGOSTELVIS = [
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "💧", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🌱", id: "boton-agua" },
    { nombre: "💧", id: "boton-tierra" },
]
langostelvis.ataques.push(...LANGOSTELVIS)

mokepones.push(hipodoge,capipepo,ratigueya,tucapalma,pydos,langostelvis)

function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
        inputTucapalma = document.getElementById("Tucapalma")
        inputPydos = document.getElementById("Pydos")
        inputLangostelvis = document.getElementById("Langostelvis")
    })
           
    botonMascotajugador.addEventListener("click", seleccionarMascotaJugador)
    botonReiniciar.addEventListener("click",rieniciarJuego)

    UnirseAlJuego()
}
 
function UnirseAlJuego(){
    fetch(`http://192.168.1.19:8080/unirse`)
        .then(function(res) {
            if(res.ok){
                res.text()
                   .then(function(respuesta) {
                    console.log(respuesta)
                    jugadorId = respuesta
                   })
            }
        })
}

function seleccionarMascotaJugador() {  
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id   
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    } else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id    
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id      
    } else {
        alert("Selecciona una mascota")
        return
    }

    sectionSeleccionarMascota.style.display = "none"

    seleccionarMascotaMokepon(mascotaJugador)
    
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa() 
}

function seleccionarMascotaMokepon(mascotaJugador) {
    fetch(`http://192.168.1.19:8080/mokepon/${jugadorId}`, {
       method: "post",
       headers: {
        "Content-Type":"application/json"
       },
       body: JSON.stringify ({
        mokepon: mascotaJugador
       })   
    })

}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques   
        }   
    }

    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
     botonFuego = document.getElementById("boton-fuego")
     botonAgua = document.getElementById("boton-agua")
     botonTierra = document.getElementById("boton-tierra")
     botones = document.querySelectorAll(".BAtaque")
} 

function secuencienciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
          if (e.target.textContent === "🔥") {
            ataqueJugador.push("FUEGO")
            console.log(ataqueJugador)
            boton.style.background = "#112f58"
            boton.disabled = true
          } else if(e.target.textContent === "💧") {
            ataqueJugador.push("AGUA")
            console.log(ataqueJugador)
            boton.style.background = "#112f58"
            boton.disabled = true
          } else {
            ataqueJugador.push("TIERRA")
            console.log(ataqueJugador)
            boton.style.background = "#112f58"
            boton.disabled = true
        }
        if (ataqueJugador.length === 5){
            enviarAtaques()
        }
        })
    })   
}

function enviarAtaques(){
    fetch(`http://192.168.1.19:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })
    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques(){
    fetch(`http://192.168.1.19:8080/mokepon/${enemigoId}/ataques`)
        .then(function(res){
            if (res.ok){
                res.json()
                .then(function ({ ataques}){
                    if (ataques.length === 5){
                        ataqueEnemigo = ataques
                        combate()
                    }
                })

            }
        })

}

function seleccionarMascotaEnemigo(enemigo) {
  spanMascotaEnemigo.innerHTML = enemigo.nombre
  ataquesMokeponEnemigo = enemigo.ataques
  secuencienciaAtaque()
}


function ataqueAleatorioEnemigo() {
    console.log("Ataques enemigo", ataquesMokeponEnemigo)
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1 ) {
        ataqueEnemigo.push("FUEGO")
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push("AGUA")
    } else {
        ataqueEnemigo.push("TIERRA")
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate() 
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo] 
}

function combate(){
    clearInterval(intervalo)

    for (let i = 0; i< ataqueJugador.length; i++) {
        if (ataqueJugador[i] === ataqueEnemigo[i]) {
            indexAmbosOponentes(i, i)
            crearMensaje("Esto fue un empate😉😉")
        } else if ((ataqueJugador[i] === "FUEGO"  && ataqueEnemigo[i] === "TIERRA") || (ataqueJugador[i] === "AGUA" && ataqueEnemigo[i] === "FUEGO") || (ataqueJugador[i] === "TIERRA" && ataqueEnemigo[i] === "AGUA")){ 
         indexAmbosOponentes(i, i)
         crearMensaje("FELICITACIONES! Ganaste SIUU 😎😎")
         victoriasJugador++
         spanVidasJugador.innerHTML = victoriasJugador
        } else {
         indexAmbosOponentes(i, i)
         crearMensaje("PERDISTE WEY NOOooOOooO 😴😴")
         victoriasEnemigo++
         spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
     }
     revisarVictoria()
}
function revisarVictoria() {
    if (victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("Esto fue un empate😉😉")
    } else if (victoriasJugador > victoriasEnemigo) {
       crearMensajeFinal("FELICITACIONES! Ganaste SIUU 😎😎🎉")
    } else {
        crearMensajeFinal("PERDISTE WEY NOOooOOooO 😴😴")
    }
}

function crearMensaje(resultado) {
   let nuevoAtaqueDelJugador = document.createElement("p")
   let nuevoAtaqueDelEnemigo = document.createElement("p")

   sectionMensajes.innerHTML = resultado
   nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
   nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
   
   ataqueDeljugador.appendChild(nuevoAtaqueDelJugador)
   ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
   sectionSeleccionarReiniciar.style.display = "block"
   sectionMensajes.innerHTML = resultadoFinal  
}

function rieniciarJuego() {
  location.reload()
}

function aleatorio(min, maxi) {
   var resultado;
   resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
   return resultado;
}

function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    mokeponesEnemigos.forEach(function(mokepon){
        mokepon.pintarMokepon()
        revisarColision(mokepon)
    })
}



function enviarPosicion(x, y){
    fetch(`http://192.168.1.19:8080/mokepon/${jugadorId}/posicion`,{
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            x,
            y
        })        
    })
    .then(function(res){
        if (res.ok){
            res.json()
            .then(function({enemigos}){
                console.log(enemigos)
                mokeponesEnemigos = enemigos.map(function(enemigo) {
                    let mokeponEnemigo = null
                    const mokeponNombre = enemigo.mokepon.nombre || ""
                    if (mokeponNombre === "Hipodoge") {
                        mokeponEnemigo = new Mokepon("Hipodoge", "./js/h.png", 5, "./js/hv.png",  enemigo.id)
                    } else if (mokeponNombre === "Capipepo") {
                        mokeponEnemigo = new Mokepon("Capipepo", "./js/c.png", 5,"./js/cc.png", enemigo.id)
                    } else if (mokeponNombre === "Ratigueya") {
                        mokeponEnemigo = new Mokepon("Ratigueya", "./js/r.png", 5, "./js/rr.png", enemigo.id)
                    } else if (mokeponNombre === "Tucapalma") {
                        mokeponEnemigo = new Mokepon("Tucapalma", "./js/t.png", 5,"./js/tt.png", enemigo.id)
                    } else if (mokeponNombre === "Pydos") {
                        mokeponEnemigo = new Mokepon("Pydos", "./js/p.png", 5,"./js/pp.png", enemigo.id)
                    } else if (mokeponNombre === "Langostelvis") {
                        mokeponEnemigo = new Mokepon("Langostelvis", "./js/l.png", 5,"./js/ll.png", enemigo.id) 
                    }
                    mokeponEnemigo.x = enemigo.x
                    mokeponEnemigo.y = enemigo.y
                    
                    return mokeponEnemigo
                }) 
            })
        }
    })
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5   
}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = - 5   
}

function moverAbajo(){
    mascotaJugadorObjeto.velocidadY =  5   
}

function moverArriba(){
    mascotaJugadorObjeto.velocidadY = - 5   
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowLeft":
                moverIzquierda()
                break 
        case "ArrowRight":
            moverDerecha()
            break   
        default:
            break
    }
}

function iniciarMapa() {
    
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    console.log(mascotaJugadorObjeto, mascotaJugador);
    intervalo = setInterval(pintarCanvas, 50)
    
    window.addEventListener("keydown", sePresionoUnaTecla)

    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]  
        }   
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    console.log("Se detecto una colision");

    enemigoId = enemigo.id
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener("load", iniciarJuego)

