document.getElementById("btncopy").style.visibility = "hidden";
const palabras = new Map([
    ["ai", "a"],
    ["enter", "e"],
    ["imes", "i"],
    ["ober", "o"],
    ["ufat", "u"],
]);

function encryptText() {
    text = document.getElementsByTagName('input')[0].value;
    arrayText = text.split("");
    newText = ''
    for (let i = 0; i < arrayText.length; i++) {
        replaceArray(i, arrayText[i]);
    }

    for (let i = 0; i < arrayText.length; i++) {
        newText = newText + arrayText[i];
    }

    textTransformed = document.getElementsByTagName('p')[1].innerHTML = newText;
    if (textTransformed.length > 0) {
        document.getElementById("btncopy").style.visibility = "visible";
        document.getElementsByTagName('h3')[0].innerHTML = "Encriptado";
    } else {
        document.getElementById("btncopy").style.visibility = "hidden";
        document.getElementsByTagName('h3')[0].innerHTML = "No se encontro nada";
    }
}

function replaceArray(index, letra) {
    if (letra === 'a') {
        arrayText[index] = "ai";
    }
    if (letra === 'e') {
        arrayText[index] = "enter";
    }
    if (letra === 'i') {
        arrayText[index] = "imes";
    }
    if (letra === 'o') {
        arrayText[index] = "ober";
    }
    if (letra === 'u') {
        arrayText[index] = "ufat";
    }
}

function desEncryptText() {
    text = document.getElementsByTagName('input')[0].value;
    palabras.forEach(function (value, key) {
        text = text.replaceAll(key, value);
    })
    document.getElementsByTagName('p')[1].innerHTML = text;

    if (text.length > 0) {
        document.getElementById("btncopy").style.visibility = "visible";
        document.getElementsByTagName('h3')[0].innerHTML = "Desencriptado";
    }
    else {
        document.getElementById("btncopy").style.visibility = "hidden";
        document.getElementsByTagName('h3')[0].innerHTML = "No se encontro nada";
    }
}


function copy() {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementsByTagName('p')[1].innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}