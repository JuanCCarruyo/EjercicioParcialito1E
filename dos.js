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
	
	
	let art;
	let i=0;
	let x="si";
	let nom;
	let cat;
	let prec=0;
	let art;
	let cantBeb=0;

	while(x == "si"){ 

		nom = prompt("Ingrese el nombre de un artículo: ");
		cat = prompt("Ingrese su categoria: ")toLowerCase();
		prec = parseInt(prompt("Ingrese su precio: "));

		i = i+1;
		art = nom +" "+cat+" "+prec;

		if (!(cat == "almacen" || cat == "lacteos" || cat == "lácteos" || cat == "limpieza" || cat == "bebidas")){
			cat = prompt("Ingrese una categoria valida: (almacen, lácteos, limpieza o bebidas)")
		}
		else {
			if (prec < 0 || prec > 1000){
				prec = parseInt(prompt("Ingrese un precio valido: (no puede ser menor a $0 ni mayor a $1000)"));
			}
			else {
				prec = precMax > 
				if (cat == "bebidas"){
					cantBeb = cantBeb + 1;
				}
			}
		}




		x = prompt("Quieres introducir otro artículo?").toLowerCase();

	}



	document.write("El artículo con mayor precio es: ");
	document.write("El artículo con mayor precio de la categoría lácteos es: ");
	document.write("La cantidad de artículos ingresados de categoría bebidas es: ");

}