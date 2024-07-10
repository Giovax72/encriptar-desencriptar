function encripte__el__texto() {

const inputText = document.getElementById('inputText').value;
    let encripteTexto = inputText.replace(/e/g, 'enter')
                                 .replace(/i/g, 'imes')
                                 .replace(/a/g, 'ai')
                                 .replace(/o/g, 'ober')
                                 .replace(/u/g, 'ufat')

document.getElementById('outputText').value = encripteTexto;

 }

function desencripte__el__texto() {
    const inputText = document.getElementById('inputText').value;
    let desencripteTexto = inputText.replace(/enter/g, 'e')
                                    .replace(/imes/g, 'i')
                                    .replace(/ai/g, 'a')        
                                    .replace(/ober/g, 'o')
                                    .replace(/ufat/g, 'u')
document.getElementById('outputText').value = desencripteTexto; 

}

