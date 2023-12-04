const ejercicio1 = () => {
    let inputContenedor = document.querySelector('.form-e1');
    let input = document.querySelector('#input-e1');
    let botonComenzar = document.querySelector('#btn-comenzar-e1');
    let botonRendirse = document.querySelector('#btn-rendirse-e1');
    let mensajeFelicidades = document.querySelector('#mensajeFelicidades');
    let numerosIngresadosElemento = document.querySelector('#numerosIngresados');
    let numeroX = document.querySelector('#numeroX');
    let contenidoBoton = botonComenzar.innerText;
    let numeros = [];
    let numeroAdivinar;
    let numerosIngresados = [];
    if (contenidoBoton === "Comenzar") {
        numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        numeroAdivinar = Math.floor(Math.random() * 10) + 1;
        botonRendirse.style.display = "block";
        inputContenedor.style.display = "block";
        botonComenzar.innerHTML = "Enviar";
        console.log(numeroAdivinar);
    } else if (contenidoBoton === "Enviar") {
        let valorInput = input.value;
        console.log(valorInput);
        let numeroIngresado = parseInt(valorInput, 10);

        if (numerosIngresados.includes(numeroIngresado)) {
            mensajeFelicidades.innerHTML = "Ya has ingresado este número";
        } else {
            // Verificar si el número está presente en el array numeros
            if (!numeros.includes(numeroIngresado)) {
                // Mover el número a numerosIngresados
                numerosIngresados.push(numeroIngresado);
                // Eliminar el número del array numeros
                numeros = numeros.filter(num => num !== numeroIngresado);

                if (numeroIngresado === numeroAdivinar) {
                    mensajeFelicidades.innerHTML = "¡Felicidades, has ganado!";
                    numeroX.innerHTML = numeroAdivinar;
                    botonComenzar.innerHTML = "Volver a Jugar";
                    numerosIngresadosElemento.innerHTML = numerosIngresados.join(" - ");
                    input.value = '';
                } else if (numeroIngresado > numeroAdivinar) {
                    mensajeFelicidades.innerHTML = `El ${numeroIngresado} es mayor al número X.`;
                    numerosIngresadosElemento.innerHTML = numerosIngresados.join(" - ");
                    input.value = '';
                } else {
                    mensajeFelicidades.innerHTML = `El ${numeroIngresado} es menor al número X.`;
                    numerosIngresadosElemento.innerHTML = numerosIngresados.join(" - ");
                    input.value = '';
                }
            } else {
                mensajeFelicidades.innerHTML = "Número no válido. Ingresa un número del 1 al 10.";
            }
        }
    } else {
        botonRendirse.style.display = "none";
        inputContenedor.style.display = "none";
        botonComenzar.innerHTML = "Comenzar";
        mensajeFelicidades.innerHTML = '';
        numeroX.innerHTML = "X";
    }
}

document.getElementById('btn-comenzar-e1').addEventListener('click', ejercicio1);

/*const ejercicio1=()=>{
    let inputContenedor=document.querySelector('.form-e1');
    let input=document.querySelector('#input-e1');
    let botonComenzar=document.querySelector('#btn-comenzar-e1');
    let botonRendirse=document.querySelector('#btn-rendirse-e1');
    let mensajeFelicidades=document.querySelector('#mensajeFelicidades');
    let numerosIngresadosElemento=document.querySelector('#numerosIngresados');
    let numeroX=document.querySelector('#numeroX');
    let contenidoBoton=botonComenzar.innerText;
    let numeros=[];
    let numeroAdivinar;
    let numerosIngresados=[];
    if(contenidoBoton==="Comenzar"){
        numeros=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        numeroAdivinar=Math.floor(Math.random() * 10) + 1;
        botonRendirse.style.display="block";
        inputContenedor.style.display="block";
        botonComenzar.innerHTML="Enviar";
        console.log(numeroAdivinar);
    }
    else if(contenidoBoton==="Enviar"){
        let valorInput=input.value;
        console.log(valorInput);
        let numeroIngresado=parseInt(valorInput, 10);
        if(numerosIngresados.indexOf(numeroIngresado)!==-1){
            mensajeFelicidades.innerHTML="Ya has ingresado este número";
        }
        else{
            let indice=numeros.indexOf(numeroIngresado);
            let numeroAGuardar=numeros.splice(indice, 1)[0];
            numerosIngresados.push(numeroAGuardar);
            if(numeroIngresado===numeroAdivinar){
                mensajeFelicidades.innerHTML="Felicidades has ganado";
                numeroX.innerHTML=numeroAdivinar;
                botonComenzar.innerHTML="Volver a Jugar";
                numerosIngresadosElemento.innerHTML=numerosIngresados.join(" - ");
                input.value='';
            }
            else if(numeroIngresado>numeroAdivinar){
                mensajeFelicidades.innerHTML=`El ${numeroIngresado} es mayor al numero X.`;
                numerosIngresadosElemento.innerHTML=numerosIngresados.join(" - ");
                input.value='';
            }
            else{
                mensajeFelicidades.innerHTML=`El ${numeroIngresado} es menor al numero X.`;
                numerosIngresadosElemento.innerHTML=numerosIngresados.join(" - ");
                input.value='';
            }
        }
    }else{
        botonRendirse.style.display="none";
        inputContenedor.style.display="none";
        botonComenzar.innerHTML="Comenzar";
        mensajeFelicidades.innerHTML='';
        numeroX.innerHTML="X";
    }
}

document.getElementById('btn-comenzar-e1').addEventListener('click', ejercicio1);*/