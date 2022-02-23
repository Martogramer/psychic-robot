// Variables

//string
const producto = 'audifonos con letras agregabas para sumar contenido';
//length para conocer la extencion
console.log(producto, producto.length)

//indexOf retorna la posicion dentro de la cadena
console.log('se encuentra en la posicion', producto.indexOf('con'))

//Include retorna true o false:
console.log('incluye', producto.includes('letras'));


// numeros
const num1=12030;
const num2=1234;

console.log(num1+num2)

//Math
let resultado;
resultado=Math.PI
resultado=Math.round(2.5)
resultado=Math.ceil(2.5) // siempre ahacie arriba
resultado=Math.floor(2.5) // siempre haciea abajo
resultado=Math.sqrt(144) // raiz cuadrada
resultado=Math.abs(-144) // transforma negativo en positivo
resultado=Math.random() // 

console.log(resultado);

// CONCAT
const nombre= 'Martin'
const correo= 'correo@correo.com'
console.table(`Nombre: ${nombre}`)