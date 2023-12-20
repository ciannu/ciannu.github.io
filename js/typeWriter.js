
let i = 0;
let text1 = "Hola Olivia";
let text2 = "Hoy es Navidad."
let text3 = "---------------El dia que hacemos 3 meses."
let text4 = "------------------------------------------Este regalo me gustaría que lo tuvieras siempre para verlo en un futuro con muchos números ahi arriba"
let text5 = "Te amo mi vida."
let speed = 100;

function typeWriter(text, para){
	if(ok == 5){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
		else if(ok == 2){
			typeWriter(text3, "txt3");
		}
		else if(ok == 3){
			typeWriter(text4, "txt4");

		}
		else if(ok == 4){
			typeWriter(text5, "txt5");
		}
	}, 100);
//};
