/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar()
{
	
	//let i=0;
	let x="si";
	let nom;
	let cat;
	let prec=0;
	let max=0
	let txtmax;
	let txtmaxlac;
	let cantBeb=0;

	while(x == "si"){ 

		nom = prompt("Ingrese el nombre de un artículo: ");
		cat = prompt("Ingrese su categoria: ").toLowerCase();
		prec = parseInt(prompt("Ingrese su precio: "));

		//i = i+1;

		if (!(cat == "almacen" || cat == "lacteos" || cat == "lácteos" || cat == "limpieza" || cat == "bebidas")){
			alert("Debe ingresar una categoria valida: (almacen, lácteos, limpieza o bebidas)");
		}
		else {
			if (prec >= 0 && prec <= 1000){
				if (prec > max) {
					max = prec;
					txtmax = "El artículo con mayor precio es: "+nom;
					if (cat == "lacteos" || cat == "lácteos"){
						txtmaxlac = "El artículo con mayor precio de la categoría lácteos es: "+nom;
					}
				}
				else {
				alert("Debe ingresar un precio valido: (no puede ser menor a $0 ni mayor a $1000)");
			}
			if (cat == "bebidas"){
				cantBeb = cantBeb + 1;
			}
			}
		}

		x = prompt("Quieres introducir otro artículo?").toLowerCase();

	}

	document.write(txtmax+"<br>");
	document.write(txtmaxlac+"<br>");
	document.write("La cantidad de artículos ingresados de categoría bebidas es: "+cantBeb);

}