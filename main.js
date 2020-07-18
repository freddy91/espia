"use strict";
//let locations = ["Playa", "Banco", "Hotel", "Rodaje de una película", "Teatro", "Sierra Nevada", "Hospital", "Base militar", "Embajada", "Zoológico", "Estación espacial", "Crucero", "Avión", "Circo", "Comisaría de policía", "Supermercado", "Universidad", "Parque de atracciones", "Carnaval", "Discoteca", "Fiesta de empresa", "Casino", "Restaurante", "Colegio", "Spa", "Batalla campal", "Tren de pasajeros", "Barco pirata", "Submarino", "Gasolinera"];
let spyString = "Eres el espía";

let locations = ["Springfield","Doney", "Casoplon del coletas","Salamanca","Bernabéu","Ikea","Cementerio","Estanco","Muralla","La Cueva","Elefante de Oro","Mirandor de Montepinar","Corazón de Pani","La Marina","Tarragona","Valorio","Polígono de la Hiniesta","Benidorm","Azerbaiyán","Eurovisión","Maquina del tiempo","Sanabria","El Claudio","Cara oculta de la luna","Tienda de zapatos","Playa", "Banco", "Hotel", "Rodaje de una película", "Teatro", "Sierra Nevada", "Hospital", "Base militar", "Embajada", "Zoológico", "Estación espacial", "Crucero", "Avión", "Circo", "Comisaría de policía", "Supermercado", "Universidad", "Parque de atracciones", "Carnaval", "Discoteca", "Fiesta de empresa", "Casino", "Restaurante", "Colegio", "Spa", "Batalla campal", "Tren de pasajeros", "Barco pirata", "Submarino", "Gasolinera"];

let currentLocation = document.getElementById("currentLocation");

function clearCurrentLocation() {
	currentLocation.innerHTML = '';
}

let form = document.querySelector('form');

function revealLocation(event) {
	event.preventDefault();
	
	let myChance = new Chance(form.seed.value.toLowerCase());
	let numEspia = form.espia.value;
	var i;
	var j;
	let espias = [];
	let repe = new Array(numEspia);
	var flagE = 0;
	var cosa = 0;
	let spy;
	
	do{
		cosa = 0;
		for(i=0;i<numEspia;i++){
	
		espias[i] = myChance.integer({min: 1, max: parseInt(form.numPlayers.value)});
		repe[i] = espias[i];
		for(j=0; j<repe.length;j++){
			if(espias[i] == repe[j] && i != j){
				
				cosa++;
			}
			
		}
		
	}
		
	
		
		
		
	}while (cosa != 0);
	
	for( i = 0 ; i< numEspia ; i++){
		if(espias[i] == form.player.value)
			flagE = 1;
	}
	
	if (flagE == 1)
		currentLocation.innerHTML = spyString;
	else
		currentLocation.innerHTML = myChance.pickone(locations);
	
	currentEspia.innerHTML = espias;
	currentContador.innerHTML = cosa;
}

let seed = document.getElementById("seed");

function generateSeed() {
	let myChance = seed.value && new Chance(seed.value.toLowerCase()) || chance;
	seed.value = myChance.word({syllables: 2});
	form.oninput();
}

function selectInput(input) {
	setTimeout(function() {
		try {
			input.setSelectionRange(0, input.value.length);
		}
		catch(e) {
			input.select();
		}
	}, 0);
}


//currentLocation.innerHTML = myChance.pickone(locations);
//currentLocation.innerHTML = spyString;
//let spy = myChance.integer({min: 1, max: parseInt(form.numPlayers.value)});

