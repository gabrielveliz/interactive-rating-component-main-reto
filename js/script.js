let opcionglobal = 0;


function seleccionar(opcion){
	document.getElementById("1").style.backgroundColor= "hsl(213, 19%, 18%)";
	document.getElementById("2").style.backgroundColor= "hsl(213, 19%, 18%)";
	document.getElementById("3").style.backgroundColor= "hsl(213, 19%, 18%)";
	document.getElementById("4").style.backgroundColor= "hsl(213, 19%, 18%)";
	document.getElementById("5").style.backgroundColor= "hsl(213, 19%, 18%)";
	document.getElementById("1").style.color= "hsl(216, 12%, 54%)";
	document.getElementById("2").style.color= "hsl(216, 12%, 54%)";
	document.getElementById("3").style.color= "hsl(216, 12%, 54%)";
	document.getElementById("4").style.color= "hsl(216, 12%, 54%)";
	document.getElementById("5").style.color= "hsl(216, 12%, 54%)";





	document.getElementById(opcion).style.backgroundColor= "hsl(25, 97%, 53%)";
	document.getElementById(opcion).style.color= "hsl(0, 0%, 100%)";

	let numero = parseInt(opcion)


	if (numero+1<=5) {
		document.getElementById(numero+1).style.backgroundColor= "hsl(216, 12%, 54%)";
		document.getElementById(numero+1).style.color= "hsl(0, 0%, 100%)";
	}
	if (numero-1>=1) {
		document.getElementById(numero-1).style.backgroundColor= "hsl(216, 12%, 54%)";
		document.getElementById(numero-1).style.color= "hsl(0, 0%, 100%)";
	}
	opcionglobal = numero;
}
function enviar() {

	if (opcionglobal>0) {
		document.getElementById("elegido").innerHTML="You selected " + opcionglobal + " out of 5 ";

		document.getElementById("contenido1").style.display="none" ;
		document.getElementById("contenido2").style.display= "block";
	}
	else{
		alert("Please select a number, Thank you");
	}

}

