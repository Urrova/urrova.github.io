//Funcion copiada y pegada de intArnet
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//Cuando pueda arreglar esto, APRENDE MODULOS POR FAVOR ESTO SE ESTA VOLVIENDO DEMASIADO GRANDE.
var texts = document.getElementsByClassName("text_glitchy"); //Toma todos los elementos text_glitchy

//Guarda los contenidos originales en un array
var originalGlitchyTextContents = []
for (var i = 0; i < texts.length; i++) {
    originalGlitchyTextContents[i] = texts[i].innerText;
}

//Cada tanto cambia los caracteres
function glitchyText(){
	//Pasa por cada elemento clase text_glitchy
    for (var i = 0; i < texts.length; i++) {
        texts[i].innerText = originalGlitchyTextContents[i]; //Lo pone en su texto original
        var textLenght = texts[i].innerText.length;
		var glitchyLetters = getRandomInt(1,Math.floor(textLenght/5));

		//Buclea 2 o 3 veces para reemplazar 2 o 3 caracteres
        for (var j = 0; j < glitchyLetters; j++) {
			var t = texts[i].innerText.split("");
			var charToReplace = getRandomInt(0, textLenght-1)
			t[charToReplace] = String.fromCharCode(getRandomInt(32,127));
			t = t.join("");
			texts[i].innerText = t;
        }
    }
}
setTimeout(() => {
	setInterval(glitchyText, 100);
}, 500);
