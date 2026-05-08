function randRemove(maxRand, className) {
    var rand10elements = document.getElementsByClassName(className)
    for (let item of rand10elements){
        if (getRandomInt(0,maxRand-1) == 1) {
            item.classList.remove(className)
        }
    }
}

function random_chance() {
    randRemove(10,"random-10");
    randRemove(5,"random-20");
    randRemove(4,"random-25");
}

//Funcion copiada y pegada de intArnet
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

window.addEventListener("load",random_chance);