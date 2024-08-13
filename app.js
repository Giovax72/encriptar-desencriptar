const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


//la letra "e" es concvertida para "enter"
//la letra "i" es concvertida para "imes"
//la letra "a" es concvertida para "ai"
//la letra "o" es concvertida para "ober"
//la letra "u" es concvertida para "ufat"

//despues de hacer todo lo de las lineas 14 al 31 ahora creamos los eventos de los botones con 
//function
//luego creamos una const asi:y recibe la funcion encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

// creamos esta matriz para crear todas las llaves de ncriptacion creamos let matrizCodigo
function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u", "ufat"]];
    
    //stringEncriptado se va llamar a si mismo y coloco .TOLOWERCASE que es 
    //para convertir las letras a minusculas
    stringEncriptada = stringEncriptada.toLowerCase()

    //NOTA: para rrecorrer toda la matriz debo colocar FOR Con lo siguiente con la letra i y los siguientes
    //parametros i inicio con 0 luego, i < matrizCodigo, i incrementar con ++
    for(let i = 0; i < matrizCodigo.length; i++){
    //necesito crear la condocoon con if y verificar las llaves con i y 0    
        if(stringEncriptada.includes(matrizCodigo[i][0])){
    //ahora reemplazamos las vocales por las letras de encriptacion asi:        
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada
} 

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u", "ufat"]];
    
    stringDesencriptada = stringDesencriptada.toLowerCase()

       for(let i = 0; i < matrizCodigo.length; i++){
          if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }
    }
    return stringDesencriptada
}

/*
function encriptar () {

const inputText = document.getElementById('inputText').value;
    let encripteTexto = inputText.replace(/e/g, 'enter')
                                 .replace(/i/g, 'imes')
                                 .replace(/a/g, 'ai')
                                 .replace(/o/g, 'ober')
                                 .replace(/u/g, 'ufat')

document.getElementById('outputText').value = encripteTexto;

 }

function desencriptar() {
    const inputText = document.getElementById('inputText').value;
    let desencripteTexto = inputText.replace(/enter/g, 'e')
                                    .replace(/imes/g, 'i')
                                    .replace(/ai/g, 'a')        
                                    .replace(/ober/g, 'o')
                                    .replace(/ufat/g, 'u')
document.getElementById('outputText').value = desencripteTexto; 

}

function copiar() {
    let texto = document.querySelector('#outputText').innerHTML
       texto.select();
    alert('texto se ha copeado'); 
    
} */