//Funcion copiada y pegada de intArnet
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//Funciones de cookies (copiadas y pegadas de internet, por supuesto)
function setCookie(cName, cValue, expDays) {
	let date = new Date();
	date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
	const expires = "expires=" + date.toUTCString();
	document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function getCookie(cName) {
	const name = cName + "=";
	const cDecoded = decodeURIComponent(document.cookie); //to be careful
	const cArr = cDecoded .split('; ');
	let res;
	cArr.forEach(val => {
		if (val.indexOf(name) === 0) res = val.substring(name.length);
	})
	return res;
}

function que(){
	console.log("so");
}
var que = "so";

//Un miniscript que cambia el texto en el marquee
function marqueeSetter(){
	var Marquee_Texts;
	switch (idioma){
		case "ingles":
			Marquee_Texts = new Array(
				"ULTRAKILL GOOOOOOOOOD",
				"Trying to get into gamedev again - studying godot! or something i guess . . . ",
				"I dont know what im doing with my life",
				"MUDA MUDA ORA ORA LERO LERO GIORNOS THEME PIANO PIANO YO ANGELO PIZZA MOZZARELLARELLARELLARELLARELLARELLARELLARELLARELLARELLA",
				"Sample Text",
				"Unf ~ Doomguy",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet porttitor magna vitae rhoncus. Donec sed lectus mollis, aliquam erat et, dapibus lacus. Curabitur aliquam sem non posuere commodo. Fusce sodales, dolor ac volutpat vehicula, dolor enim blandit sem, a feugiat magna ex hendrerit nunc. Mauris nisi ligula, ultrices ac aliquet eget, imperdiet sed ipsum. Ut pharetra sodales ante nec.",
				"haha romero is going to make you his b dopefish lives instakill soap shoot at it until it dies u know retro fps memes lol.",
				"Please dont spend 2-ish years making a mod for a game.",
			);
			break;
		case "espanol":
			Marquee_Texts = new Array(
				"ULTRAKILL GOOOOOOOOOD",
				"Tratando de meterme en el gamedev de vuelta - estudiando godot! o algo asi no se . . .",
				"No tengo idea que estoy haciendo con mi vida",
				"MUDA MUDA ORA ORA LERO LERO GIORNOS THEME PIANO PIANO YO ANGELO PIZZA MOZZARELLARELLARELLARELLARELLARELLARELLARELLARELLARELLA",
				"Texto de Ejemplo",
				"Unf ~ Doomguy",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet porttitor magna vitae rhoncus. Donec sed lectus mollis, aliquam erat et, dapibus lacus. Curabitur aliquam sem non posuere commodo. Fusce sodales, dolor ac volutpat vehicula, dolor enim blandit sem, a feugiat magna ex hendrerit nunc. Mauris nisi ligula, ultrices ac aliquet eget, imperdiet sed ipsum. Ut pharetra sodales ante nec.",
				"haha romero is going to make you his b dopefish lives instakill soap shoot at it until it dies u know retro fps memes lol.",
				"Por favor no usen tipo 2 años para hacer un mod para un juego.",
			);
			break;
	}

	var marquee;
	marquee = document.getElementById("Navbar_marquee");
	marquee.innerHTML = Marquee_Texts[getRandomInt(0,Marquee_Texts.length)];
}

//Si la pagina es https://urrova.github.io/ va hacia https://urrova.github.io/index.html
if (window.location.href == "https://urrova.github.io/"){
	window.location.replace("https://urrova.github.io/index.html")
}

//Identifica el idioma de la pagina.
var metas = document.getElementsByTagName("meta");
var idioma;
for (var i = 0; i < metas.length; i++){
	var element = metas[i];
	var meta_tipo = element.getAttribute("name");
	//Si es un meta de idioma, se fija si esta en ingles o español
	if (meta_tipo == "idioma"){
		idioma = element.getAttribute("content");
	}
}

//Carga la barra de navegacion y el footer
//Con zepto por que jquery es pesau y cash no tiene .load
switch (idioma){
	case "ingles":
		$(function() {
			$("#Navbar_loader").load("html_modules/navbar.html");
			$("#Footer_loader").load("html_modules/footer.html");
		});
		break;
	case "espanol":
		$(function() {
			$("#Navbar_loader").load("html_modules/navbar_es.html");
			$("#Footer_loader").load("html_modules/footer_es.html");
		});
		break;
}

///////////////TEXTO GLITCHEADO////////////////////////////////////////////////////////////////
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
setInterval(glitchyText, 100);



window.addEventListener("load",marqueeSetter);
//window.addEventListener("load",build_youtube_loaders);

//console.log("            .--------._\n           (`--'       `-.\n            `.______      `.\n         ___________`__     \\\n      ,-'           `-.\     |\n     //                \\|    |\\\n    (`  .'~~~~~---\\     \\'   | |\n     `-'           )     \   | |\n        ,---------' - -.  `  . '\n      ,'             `%`\\`     |\n     /                      \\  |\n    /     \\-----.         \\    `\n   /|  ,_/      '-._            |\n  (-'  /           /            `     \n  ,`--<           |        \\     \\\n  \\ |  \\         /%%             `\\\n   |/   \\____---'--`%        \\     \\\n   |    '           `               \\\n   |\n    `--.__\n          `---._______\n                      `.\n                        \\             ");
console.log("Puto el que lee + Comiste 👌 + 13 mas me crece + Respiracion automatica desactivada + Parpadeo automatico desactivado + Tragar saliva automatico desactivado + Torsion testicular automatica activada + La mente es el resultado de algo fisiologico que sucede fisicamente dentro de tu cabeza.");