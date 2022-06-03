
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

var inputTexto = document.querySelector("#input-texto");
var input2 = document.querySelector("#btn-encriptar");
var input3 = document.querySelector("#btn-desencriptar");
var inputTexto2 = document.querySelector("#msg");


const keys = ['ai','enter','imes','ober','ufat'];
const charts = ['a','e','i','o','u']; 

/*esta funcion sirve para validar un input en html para que solo pueda
admitir en este caso letras pero se puede modificar para que solo admita 
el caracter que uno desee*/
function soloLetras(event){

    var key = event.keyCode || e.which;
    var teclado = String.fromCharCode(key).toLowerCase();
    var letras = " abcdefghijklmnñopqrstuvwxyz";
    var especiales = "8-37-38-46";
    var tecladoEspecial = false;

    for(var i in especiales){
        if(key == especiales[i]) tecladoEspecial = true; break;
    }

    if(letras.indexOf(teclado) == -1 && !tecladoEspecial) return false;
}

function mostrarResultado(result){

    var mostrar = result;
    document.querySelector("#msg").value = mostrar;    
    inputTexto.value = "";
}

function encriptar(){
    var result = "";
    var found = true;   
    var cadena = inputTexto.value;
    for(var i = 0; i < cadena.length; i++){        

        for(var j = 0; j < charts.length; j++){           

            if(cadena[i] == charts[j]){
                
                if(result == "") result = keys[j];                
                else result = result + keys[j];
                found = true;
                break;                
            }
            found = false;
        }
        
        if(found == false) result = result + cadena[i];
    }
    mostrarResultado(result);
}

function desencriptar(){
    var result = "";
    var string = inputTexto.value;
    var i = 0;
    
    while(i < 5){
        var found = false;
        if(string.indexOf(keys[i]) != -1){

            result = string.replace(keys[i], charts[i]);
            string = result;
            i = 0;
            found = true;            
        }
        i++;
    }
    mostrarResultado(result);
}

function copy() {
    var copyText = document.querySelector("#msg");
    navigator.clipboard.writeText(copyText.value);
    copyText.value = "";
}


inputTexto.focus();
var button1 = document.querySelector("#btn-encriptar");
var button2 = document.querySelector("#btn-desencriptar");
var btnCopy = document.querySelector("#btn-copy");
button1.onclick = encriptar;
button2.onclick = desencriptar;
btnCopy.onclick = copy;
// btnCopy.addEventListener('click', function(){

//     inputTexto2.focus();
//     document.execCommand('selectAll');
//     document.execCommand('copy');
//     inputTexto.value = "";
//      esta es una antigua forma de copiar

// });