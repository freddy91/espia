"use strict";
//let locations = ["Playa", "Banco", "Hotel", "Rodaje de una película", "Teatro", "Sierra Nevada", "Hospital", "Base militar", "Embajada", "Zoológico", "Estación espacial", "Crucero", "Avión", "Circo", "Comisaría de policía", "Supermercado", "Universidad", "Parque de atracciones", "Carnaval", "Discoteca", "Fiesta de empresa", "Casino", "Restaurante", "Colegio", "Spa", "Batalla campal", "Tren de pasajeros", "Barco pirata", "Submarino", "Gasolinera"];
let spyString = "Eres el espía";
const db = firebase.firestore();

var prueba = [];

let locations = [];

let error = "Hay igual o más espias que jugadores";

const wordForm = document.getElementById('word-form');
const resetDB = document.getElementById('reset');

const getTasks = () => db.collection('words').get();

window.addEventListener('DOMContentLoaded' , async (e) =>{
	const querySnapshot = await getTasks();
	querySnapshot.forEach(doc =>{
		locations.push(doc.data().word);
	})

	//console.log(locations);
})


wordForm.addEventListener('submit' , async (e) =>{
	e.preventDefault();
	const word = wordForm['word'].value;
	if(word != ""){
		await db.collection('words').doc().set({
			word 
		})
	}

	wordForm.reset();
})

resetDB.addEventListener('submit' , async (e) =>{
	e.preventDefault();
	const pass = resetDB['pass'].value;
	if(pass == "123456789"){
		await db.collection('words').get().then(querySnapshot => {
    		querySnapshot.docs.forEach(snapshot => {
        		snapshot.ref.delete();
    		})
		})	
	}

	resetDB.reset();
	//window.location.reload();
})

//let locations = ["Springfield","Doney", "Casoplon del coletas","Salamanca","Bernabéu","Ikea","Cementerio","Muralla de Zamora","La Cueva","Elefante de Oro","Corazón de Pani","La Marina","Tarragona","Valorio","Polígono de la Hiniesta","Benidorm","URSS","Sanabria","El Claudio","Cara oculta de la luna","Tienda de zapatos","Playa", "Banco", "Hotel", "Rodaje de una película", "Teatro", "Sierra Nevada", "Hospital", "Base militar", "Embajada", "Zoológico", "Estación espacial", "Crucero", "Avión", "Circo", "Comisaría de policía", "Supermercado", "Universidad", "Parque de atracciones", "Carnaval", "Discoteca", "Fiesta de empresa", "Casino", "Restaurante", "Colegio", "Spa", "Batalla campal", "Tren de pasajeros", "Barco pirata", "Submarino", "Gasolinera" , "estanco" , "apartamento" ];

let currentLocation = document.getElementById("currentLocation");

function clearCurrentLocation() {
	currentLocation.innerHTML = '';
	currentEmpezar.innerHTML = '';
}

let form = document.querySelector('form');

function revealLocation(event) {
	event.preventDefault();
	
	let myChance = new Chance(form.seed.value.toLowerCase());
	let numEspia = form.espia.value;
	let numPlay = form.numPlayers.value;
	var i;
	var j;
	let espias = [];
	let repe = new Array(numEspia);
	var flagE = 0;
	var cosa = 0;
	let spy;
	let empezar = myChance.integer({min: 1, max: parseInt(form.numPlayers.value)});;
	
	if(locations.length == 0){
		currentLocation.innerHTML = "No hay ninguna palabra en la base de datos";
	}else if ( numEspia >=  parseInt(form.numPlayers.value) ) {
		currentLocation.innerHTML = error;
	}else{
	
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
	
	if (flagE == 1){
		currentLocation.innerHTML = spyString;
	}else{
		currentLocation.innerHTML = myChance.pickone(locations);
	}
	
	currentEmpezar.innerHTML = empezar;
	
	}
		
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

