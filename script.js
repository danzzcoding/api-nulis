function create() {
	var text = encodeURIComponent(document.getElementById("text").value);
	document.querySelector('#result').innerHTML = `<img style='max-width: 400px;max-height: 400px;' src='https://danzzapi.xyz/api/maker/nulis?text=${text}&apikey=danzz' alt="nulis.png"></img>`;
	}
