let productos = ["tomate", "Arroz", "Filtro Aceite"]
//Sirve para agregar un elemento al final
productos.push ("Fideos")
//Tamaño del arreglo
productos.length()
//mostrarlo en la consola el tamaño del arreglo
console.log (productos.length)
//modificar el primer lugar del arreglo
productos[0]= "Naranjas"
//Añade un elemento al final 
productos [productos.length]= "Monitor"
//Acedemos al ultimo y lo modificamos, en este caso fideos
productos[productos.length -1]= "Zapatillas"
//Agregar un elemento al principio
productos.unshift("Un producto")
// Mostrar todos los elementos de la consola