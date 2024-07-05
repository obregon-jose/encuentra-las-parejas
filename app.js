let selecciones = [];
let numeroTarjetas = 50; //debe ser un numero PAR
let tiempo = 0;
let pistasMaximas = 5;
let elementoTime = document.getElementById('time');
let permitirSeleccion = true;


let iconos = [
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/rottweiler.png" alt="rottweiler"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/budgie--v2.png" alt="budgie--v2"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/cat.png" alt="cat"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/poodle.png" alt="poodle"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/peacock.png" alt="peacock"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/nest.png" alt="nest"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/ostrich-head-in-sand.png" alt="ostrich-head-in-sand"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/peace-pigeon.png" alt="peace-pigeon"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/owl.png" alt="owl"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/pinguin.png" alt="pinguin"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/turkey-.png" alt="turkey-"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/bee.png" alt="bee"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/hornet-hive.png" alt="hornet-hive"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/aquarium.png" alt="aquarium"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/dog-bowl.png" alt="dog-bowl"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/birdhouse.png" alt="birdhouse"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/home.png" alt="home"/>',
    '<img width="96" height="96" src="https://img.icons8.com/color/96/car--v1.png" alt="car--v1"/>',
    '<img width="96" height="96" src="https://img.icons8.com/color/96/000000/airplane-take-off.png" alt="airplane-take-off"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/waterspout.png" alt="waterspout"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/umbrella.png" alt="umbrella"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/autumn.png" alt="autumn"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/winter.png" alt="winter"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/sun.png" alt="sun"/>',
    '<img width="96" height="96" src="https://img.icons8.com/emoji/96/star-emoji.png" alt="star-emoji"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/diversity--v1.png" alt="diversity--v1"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/billing.png" alt="billing"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/fish-food.png" alt="fish-food"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/wicker-basket.png" alt="wicker-basket"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/bread.png" alt="bread"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/strawberry.png" alt="strawberry"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/greek-salad.png" alt="greek-salad"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/salami-pizza.png" alt="salami-pizza"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/sunny-side-up-eggs.png" alt="sunny-side-up-eggs"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/mcdonalds-french-fries.png" alt="mcdonalds-french-fries"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/cutted-watermelon.png" alt="cutted-watermelon"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/carrot.png" alt="carrot"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/corn.png" alt="corn"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/prawn.png" alt="prawn"/>',
    '<img width="96" height="96" src="https://img.icons8.com/fluency/96/crab.png" alt="crab"/>',
]
function perder(){
    alert("Perdiste \n Reinicia el tablero.")
    permitirSeleccion = false;
}

function ganar(){

}

function generarTablero() {
    tiempo = 0;
    pistasMaximas = 5;
    pista();
    // Inicia el tiempo regresivo CORREGIR
    //iniciarTiempoRegresivo();

    let tablero = document.getElementById("tablero")
    let tarjetas = []

    let icono = iconos[Math.floor(Math.random() * iconos.length)];

    for (let i = 0; i < numeroTarjetas; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${icono}
                </div>
                <div class="cara superior">
                    <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/help.png" alt="help"/>
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            icono = iconos[Math.floor(Math.random() * iconos.length)]
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

function seleccionarTarjeta(i) {
    if (!permitirSeleccion) return;

    let tarjeta = document.getElementById("tarjeta" + i);
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)";
        selecciones.push(i);
    }
    if (selecciones.length == 2) {
        permitirSeleccion = false;
        deseleccionar(selecciones);
        selecciones = [];
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        permitirSeleccion = true;
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            trasera1.style.background = "skyblue"
            trasera2.style.background = "skyblue"
        }
    }, 1000);
}

generarTablero()

//////////////////////////////////////////////////////
iniciarTiempoRegresivo()
function iniciarTiempoRegresivo() {
    const intervalo = setInterval(function() {
        tiempo++;
        elementoTime.textContent = formatearTiempo(tiempo);

        if (tiempo <= 0) {
            clearInterval(intervalo);
            //perder();
            // console.log("El tiempo se ha agotado.");
        } else {
            // if (tiempo > 15) {
            //     elementoTime.style.color = 'initial';
            // } else {
            //     elementoTime.style.color = 'red';
            // }
        }
        

    }, 1000);
}

function formatearTiempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
}

function pista(){
    let elementoPista = document.getElementById("pistas");
    let pista = [];

    for (let i = 0; i < pistasMaximas; i++) {
        pista.push(`
            <div>
                <img width="32" height="32" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-idea-lifestyles-flaticons-lineal-color-flat-icons.png" alt="external-idea-lifestyles-flaticons-lineal-color-flat-icons"/>
            </div>     
        `)
    }
    pista.sort(() => Math.random() - 0.5);
    elementoPista.innerHTML = pista.join(" ");

    // if (pistasMaximas > 0) {
    //     mostrarPista();
    //     pistasMaximas--;
    // } else {
    //     alert("Ya no tienes pistas disponibles.")
    // }
}



function mostrarPista() {
    pistasMaximas--;
    pista();
    let tarjetasIguales = [];
    let tarjetasRevisadas = [];

    // Buscar tarjetas iguales que no han sido reveladas correctamente
    for (let i = 0; i < numeroTarjetas; i++) {
        for (let j = i + 1; j < numeroTarjetas; j++) {
            let tarjeta1 = document.getElementById("trasera" + i);
            let tarjeta2 = document.getElementById("trasera" + j);
            if (tarjeta1.innerHTML === tarjeta2.innerHTML 
                && tarjeta1.style.background !== "skyblue" 
                && tarjeta2.style.background !== "skyblue" 
                //&& !tarjetasRevisadas.includes(i) 
                //&& !tarjetasRevisadas.includes(j)
            ) {
                tarjetasIguales.push([i, j]);
                tarjetasRevisadas.push(i, j);
                
                //break;  //Romper el ciclo interno para evitar duplicados

            }
        }
    }
    // Si se encontraron tarjetas iguales, mostrar una pista
    if (tarjetasIguales.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * tarjetasIguales.length);
        let pista = tarjetasIguales[indiceAleatorio];
        let tarjeta1 = document.getElementById("tarjeta" + pista[0]);
        let tarjeta2 = document.getElementById("tarjeta" + pista[1]);

        // Aplicar efecto visual temporal como pista
        //tarjeta1.style.transform = "rotateY(180deg)";
        //tarjeta2.style.transform = "rotateY(180deg)";
        
        for (let i = 0; i < tarjetasIguales.length; i++) {
            let tarjeta1 = document.getElementById("tarjeta" + tarjetasIguales[i][0]);
            let tarjeta2 = document.getElementById("tarjeta" + tarjetasIguales[i][1]);
            tarjeta1.style.transform = "rotateY(180deg)";
            tarjeta2.style.transform = "rotateY(180deg)";
        }

        // Remover el efecto visual después de un corto período
        setTimeout(() => {
            //tarjeta1.style.transform = "rotateY(0deg)"
            //tarjeta2.style.transform = "rotateY(0deg)"

            for (let i = 0; i < tarjetasIguales.length; i++) {
                let tarjeta1 = document.getElementById("tarjeta" + tarjetasIguales[i][0]);
                let tarjeta2 = document.getElementById("tarjeta" + tarjetasIguales[i][1]);
                tarjeta1.style.transform = "rotateY(0deg)";
                tarjeta2.style.transform = "rotateY(0deg)";
            }
        }, 500); // Ajustar el tiempo según sea necesario
    }
}