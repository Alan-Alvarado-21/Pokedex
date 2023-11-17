fetch('https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json')
.then(response => response.json())
.then(data => mostrarData(data))
.catch(error => console.log(error));