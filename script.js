
const inputText = document.querySelector('#input-texto');
const inputMsg = document.querySelector('#msg');
const btnEncrypt = document.querySelector('#btn-encriptar');
const btnDecrypt = document.querySelector('#btn-desencriptar');
const btnCopy = document.querySelector('#btn-copy');
const copiado = document.querySelector('#texto-copiado');

btnEncrypt.addEventListener('click', encode);
btnDecrypt.addEventListener('click', decode);
btnCopy.addEventListener('click', () => {
    copyText();
   
});


function encode(){
    function encodeText(input){
        let newInput='';
        let vowels = { 'a': 'ai' , 'e': 'enter','i': 'imes','o': 'ober','u': 'ufat'}
        newInput = input.replace(/[aeiou]/g, i => vowels[i]);
        return newInput;
    }
    inputMsg.value= encodeText(inputText.value);
}


function decode(){
    function decodeText(input){
        let newInput='';
        let vowelsEncrypted = { 'ai': 'a' , 'enter':'e','imes': 'i','ober':'o' ,'ufat':'u' }
        newInput = input.replace(/ai|enter|imes|ober|ufat/g, i => vowelsEncrypted[i]);
        return newInput;
    }
    inputMsg.value= decodeText(inputText.value);
}

function copyText () {
    inputMsg.select();
    inputMsg.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputMsg.value);
    copiado.textContent= 'Texto copiado con éxito ! 😉';
    setTimeout(() => {
        copiado.textContent = '';
        window.location.reload();
      }, 1000);
    navigator.reset();

  }

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/









