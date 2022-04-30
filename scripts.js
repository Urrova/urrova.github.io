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

//Tiene funciones de cookies, pero no las uso nunca XD

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

function que(){
	console.log("so");
}

function load_youtube_video(caller){
	var loader = caller.parentNode.parentNode;
	var video = loader.getAttribute("video");
	loader.innerHTML = `<iframe width="560" height="315" class="youtube_video" src="${video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}

//Funcion que convierte los divs de clase "youtube_video_insert" en videos de youtube y advertencia
function build_youtube_loaders(){
	var loaders = document.getElementsByClassName("youtube_video_insert");

	for (var i = 0; i < loaders.length; i++){
		var video = loaders[i].getAttribute("video");

		if (idioma == "ingles"){
			loaders[i].innerHTML = `
			<div class="youtube_video_loader" video="${video}">
						<br>
						<h2>WARNING</h2>
						<br>
						<p>This is a video from youtube</p>
						<p>If you load it, you agree to google's <a href="https://policies.google.com/privacy?hl=en-US">privacy policy</a>.</p>
						<p>(AKA, to be tracked by google)</p>
						<a class="button" onclick="load_youtube_video(this)">Load Video</a>
					</div>
			`;
		}
		if (idioma == "espanol"){
			loaders[i].innerHTML = `
			<div class="youtube_video_loader" video="${video}">
						<br>
						<h2>ADVERTENCIA</h2>
						<br>
						<p>Este es un video de youtube</p>
						<p>Si lo cargas, aceptas la <a href="https://policies.google.com/privacy?hl=en-US">politica de privacidad</a> de google.</p>
						<p>(Tambien llamado ser rastreado por google)</p>
						<a class="button" onclick="load_youtube_video(this)">Cargar Video</a>
					</div>
			`;
		}
	}
}

//Un miniscript que cambia el texto en el marquee
function marqueeSetter(){
	var Marquee_Texts;
	switch (idioma){
		case "ingles":
			Marquee_Texts = new Array(
				"XDDDDDDDDDDDDDDDDDDDDDDDDDD",
				"Play ArcadeInvasion NOW, it haves 1 DOWNLOAD PER YEAR!!! xD",
				"LMAO",
				"I say semicolon jokes because im noob and i dont know that the compiler/interpreter says where is it. <b>Its here -> ;</b>",
				"Anybody: Says a curly bracket joke............................................. Python programmers: XD",
				"Thing",
				"Really i need making a NORMAL doom wad someday...",
				"I dont know what im making with my life",
				"I dont know what more i can put on my website... Dah i will add more navbar marquee messages",
				"PLEASE STOP WITH THE JOJO REFERENCE THING PLEASE, YEAH I ALREADY UNDERSTAND THAT MUDA MUDA ORA ORA LERO LERO BUT PLEASE",
				"Sample Text",
				"Unf ~ Doomguy",
				"Yes ~ Quote",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet porttitor magna vitae rhoncus. Donec sed lectus mollis, aliquam erat et, dapibus lacus. Curabitur aliquam sem non posuere commodo. Fusce sodales, dolor ac volutpat vehicula, dolor enim blandit sem, a feugiat magna ex hendrerit nunc. Mauris nisi ligula, ultrices ac aliquet eget, imperdiet sed ipsum. Ut pharetra sodales ante nec.",
			);
			break;
		case "español":
			Marquee_Texts = new Array(
				"XDDDDDDDDDDDDDDDDDDDDDDDDDD",
				"Juguate ArcadeInvasion AHORA, tiene 1 DESCARGA POR AÑO!!! xD",
				"LMAO",
				"Hago chistes sobre el punto y coma por que soy alto manco y no se que el compilador/interpretador dice donde esta. <b>Aca esta -> ;</b>",
				"Alguien: hace un chiste sobre las llaves {}............................................. Programadores de python: XD",
				"Coso",
				"Realmente necesito hacer un wad de doom NORMAL algun dia...",
				"No tengo idea que estoy haciendo con mi vida",
				"No se que mas puedo ponerle a este sitio... Nah voy a ponerle mas mensajes al marquee de la barra de navegacion",
				"POR FAVOR PAREN DE HACER ESO DE LAS REFERENCIAS A JOJOS ME TIENEN HARTO POR FAVOR, SI YA ENTIENDO QUE MUDA MUDA ORA ORA LERO LERO PERO POR FAVOR",
				"Texto de Ejemplo",
				"Unf ~ Doomguy",
				"Yes ~ Quote",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet porttitor magna vitae rhoncus. Donec sed lectus mollis, aliquam erat et, dapibus lacus. Curabitur aliquam sem non posuere commodo. Fusce sodales, dolor ac volutpat vehicula, dolor enim blandit sem, a feugiat magna ex hendrerit nunc. Mauris nisi ligula, ultrices ac aliquet eget, imperdiet sed ipsum. Ut pharetra sodales ante nec.",
			);
	}

	var marquee = document.getElementById("Navbar_marquee");
	marquee.innerHTML = Marquee_Texts[getRandomInt(0,Marquee_Texts.length)];
}

window.addEventListener("load",marqueeSetter);
window.addEventListener("load",build_youtube_loaders);
console.log("            .--------._\n           (`--'       `-.\n            `.______      `.\n         ___________`__     \\\n      ,-'           `-.\     |\n     //                \\|    |\\\n    (`  .'~~~~~---\\     \\'   | |\n     `-'           )     \   | |\n        ,---------' - -.  `  . '\n      ,'             `%`\\`     |\n     /                      \\  |\n    /     \\-----.         \\    `\n   /|  ,_/      '-._            |\n  (-'  /           /            `     \n  ,`--<           |        \\     \\\n  \\ |  \\         /%%             `\\\n   |/   \\____---'--`%        \\     \\\n   |    '           `               \\\n   |\n    `--.__\n          `---._______\n                      `.\n                        \\             ");
console.log("     =====     C O M I S T E     =====     ");
console.log("JaAaAaAAaAaaa te la comiste entera.")