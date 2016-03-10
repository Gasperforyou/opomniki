window.addEventListener('load', function() {
	//stran nalozena
	
	
	
	var izvediPrijavo = function(){
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		document.querySelector(".pokrivalo").style.visibility = "hidden";
		
	}
	
	var dodajOpomnik = function(){
		var zadolzitev = document.querySelector("#naziv_opomnika").value;
		var opomnik = document.querySelector("#cas_opomnika").value;
		document.querySelector("#naziv_opomnika").value = "";
		document.querySelector("#cas_opomnika").value = "";
		
		document.querySelector("#opomniki").innerHTML += "<div class='opomnik'><div class='naziv_opomnika'>"+zadolzitev+"</div><div class='cas_opomnika'> Opomnik čez <span class = 'kolo' >"+opomnik+"</span> sekund.</div></div>";
		
		
	}
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
	document.querySelector("#dodajGumb").addEventListener('click', dodajOpomnik);

	
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
			
			if(cas == 0){
				var naziv_opomnika = opomnik.querySelector(".naziv_opomnika").innerHTML;
				alert("Opomniki!\n\nZadolzitev: " + naziv_opomnika+ "je potekla");
				document.querySelector("#opomniki").removeChild(opomnik);
			} else {
				for (i = 0; i < opomniki.length; i++) {
					var opomnik = opomniki[i].querySelector(".kolo");
					opomnik.innerHTML = parseInt(opomnik.innerHTML)-1;
					
				}
			}
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});