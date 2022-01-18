
const inputText = document.querySelector('#input-texto');
const inputMsg = document.querySelector('#msg');
const btnEncrypt = document.querySelector('#btn-encriptar');
const btnDecrypt = document.querySelector('#btn-desencriptar');


btnEncrypt.addEventListener('click', encode);
btnDecrypt.addEventListener('click', decode);


function encode(){
    function encodeText(input){
        let newInput='';
        let vowels = { 'a': 'ai' , 'e': 'enter','i': 'imes','o': 'ober','u': 'ufat'}
        newInput = input.replace(/[aeiou]/g, i => vowels[i])
        return newInput;
    }
    inputMsg.value= encodeText(inputText.value);
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









