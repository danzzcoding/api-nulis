function create() {
	var text = encodeURIComponent(document.getElementById("text").value);
	document.querySelector('#result').innerHTML = `<img style='max-width: 400px;max-height: 400px;' src='https://api.xteam.xyz/magernulis2?text=${text}&APIKEY=af294af2d7b1fcd0' alt="nulis.png"></img>`;
	}
