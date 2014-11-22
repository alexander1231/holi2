var tabla = []

tabla['140'] = {
	mujer: {
		min: 40.4,
		max: 49.4
	},
	hombre: {
		min: null,
		max: null,
	}
}

tabla['145'] = {
	mujer: {
		min: 42.8,
		max: 52.3
	},
	hombre: {
		min: 46.7,
		max: 57.0
	}
}

tabla['146'] = {
	mujer: {
		min: 42.8,
		max: 52.3
	},
	hombre: {
		min: 46.7,
		max: 57.0
	}
}


var edad = $("input[name=edad]")
var genero = $('input[name=género]')
var talla = $('input[name=talla]')

var form = document.getElementById('form');
var genero = "M"
var talla = "145"

form.addEventListener('submit',function(event){
	event.preventDefault();
	var rango = rangoideal(genero,talla)
	console.log(rango.min, rango.max)
},false)


function rangoideal(genero,talla){
	if (edad.val() > 18) {
		console.log(tabla[talla])


		if (genero == "F") {
			tabla[talla].mujer


			return tabla[talla].mujer
		}
		if (genero == "M") {
			tabla[talla].hombre

			return tabla[talla].hombre
		}
		
	};

}



