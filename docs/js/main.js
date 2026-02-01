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

//Espera a que un elemento exista
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function getMetaTag(name) {
	var value = null;
	var metas = document.getElementsByTagName("meta");
	for (var i = 0; i < metas.length; i++){
		var element = metas[i];
		var meta_tipo = element.getAttribute("name");
		//Si es un meta de idioma, se fija si esta en ingles o español
		if (meta_tipo == name){
			value = element.getAttribute("content");
		}
	}

	return value;
}

//Un miniscript que cambia el texto en el marquee
function marqueeSetter(){
	var Marquee_Texts = new Array();
	switch (idioma){
		case "english":
			Marquee_Texts = new Array(
				"ULTRAKILL GOOOOOOOOOD",
				"MUDA MUDA ORA ORA LERO LERO GIORNOS THEME PIANO PIANO YO ANGELO PIZZA MOZZARELLARELLARELLARELLARELLARELLARELLARELLARELLARELLA",
				"TERRARIA GODDDDDDDDDD",
				"The Doom era ended; now starts....... i dunno xd",
				"Do pe churo namen o manta dublem. Tis manama boblis. Tis bobles berra berra! Aklaba! Aklaba booptis. Emen ba depra da bapne nada. Oktis. Ba! Puro oktis, eh? Manta wanta wanta chokta ba na zur, wunto arewa bis na challa. Oto vi chur onomen ob wanta manta doblem. Emen ba temprana bapanada oktis. Munta arewa bis na challa. --Zote (Hollow Knight)",
				"fortune | cowsay | lolcat",
				"Overthinking, overanalyzing, separates the body from the mind; -TOOL, Lateralus. (overthinking makes you think not too realistic crap)",
				"... seeing how society fastly turns into Akira: The Handmaid's Clockwork Black Serial Experiments Matrix 1984º Farenheit in the Shell... dont write more scifi, dont give them more ideas.",
				"I will not die until I achieve something. Even though the ideal is high, I never give in. Therefore, I never die with regrets. --Ikaruga (2001) aka the game i'll never beat",
				"What you are staring right now, this moving text also named \"marquee\", isnt anything more than a weapon invented by Microsoft, to defeat Netscape in the navigator wars............",
				"I like bullet hells (suffering and ragequitting)",
			);
			break;
		case "espanol":
			Marquee_Texts = new Array(
				"ULTRAKILL GOOOOOOOOOD",
				"MUDA MUDA ORA ORA LERO LERO GIORNOS THEME PIANO PIANO YO ANGELO PIZZA MOZZARELLARELLARELLARELLARELLARELLARELLARELLARELLARELLA",
				"TERRARIA GODDDDDDDDDD",
				"La era Doom termino; y ahora empieza...... no se xd",
				"Do pe churo namen o manta dublem. Tis manama boblis. Tis bobles berra berra! Aklaba! Aklaba booptis. Emen ba depra da bapne nada. Oktis. Ba! Puro oktis, eh? Manta wanta wanta chokta ba na zur, wunto arewa bis na challa. Oto vi chur onomen ob wanta manta doblem. Emen ba temprana bapanada oktis. Munta arewa bis na challa. --Zote (Hollow Knight)",
				"fortune | cowsay | lolcat",
				"Sobrepensar, sobreanalizar, separa el cuerpo del alma; -TOOL, Lateralus. (Sobrepensar te hace pensar cosas no tan realistas que digamos)",
				"... viendo como la sociedad rapidamente se convierte en Akira: El cuento de La Naranja Black Serial Experiments Matrix 1984º Farenheit in the Shell... no hagan mas ciencia ficcion, no les den mas ideas.",
				"I will not die until I achieve something. Even though the ideal is high, I never give in. Therefore, I never die with regrets. --Ikaruga (2001) aka el juego que nunca me voy a pasar",
				"Lo que estas mirando ahora, este texto moviendose tambien llamado \"marquee\", no es mas que un arma inventada por Microsoft, para ganarle a Netscape en la guerra de los navegadores..............",
				"Me gustan los bullet hells (sufrir y tiltearme)",
			);
			break;
	}

	waitForElm("#Navbar_marquee").then((elm) => {
		var marquee = document.getElementById("Navbar_marquee");
		marquee.innerHTML = Marquee_Texts[getRandomInt(0,Marquee_Texts.length)];
	})
}

function linuxPathSetter() {
	var pagepath = getMetaTag("linuxpath");
	console.log(pagepath)
	waitForElm("#navbar_linuxpath_path").then((elm) => {
		var linuxpath = document.getElementById("navbar_linuxpath_path");
		linuxpath.innerHTML = pagepath;
	})
}

//Identifica el idioma de la pagina.
var idioma = getMetaTag("idioma");

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
setTimeout(() => {
	setInterval(glitchyText, 100);
}, 500);



window.addEventListener("load",marqueeSetter);
window.addEventListener("load",linuxPathSetter);
//window.addEventListener("load",build_youtube_loaders);

console.log("            .--------._\n           (`--'       `-.\n            `.______      `.\n         ___________`__     \\\n      ,-'           `-.\     |\n     //                \\|    |\\\n    (`  .'~~~~~---\\     \\'   | |\n     `-'           )     \   | |\n        ,---------' - -.  `  . '\n      ,'             `%`\\`     |\n     /                      \\  |\n    /     \\-----.         \\    `\n   /|  ,_/      '-._            |\n  (-'  /           /            `     \n  ,`--<           |        \\     \\\n  \\ |  \\         /%%             `\\\n   |/   \\____---'--`%        \\     \\\n   |    '           `               \\\n   |\n    `--.__\n          `---._______\n                      `.\n                        \\             ");
console.log("Puto el que lee + Comiste 👌 + 13 mas me crece + Respiracion automatica desactivada + Parpadeo automatico desactivado + Tragar saliva automatico desactivado + Tu nariz esta entre tus ojos + Torsion testicular automatica activada + Tu ropa te esta tocando + La mente es el resultado de algo fisiologico que sucede fisicamente dentro de tu cabeza + Todo son atomos ordenados de pura casualidad, la vida es una cadena de casualidades y podria tranquilamente no ser asi + estas hecho de atomos de carbono e hidrogeno, cada uno identico al otro.");