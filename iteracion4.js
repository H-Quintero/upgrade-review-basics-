//Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto 
//y devuelve la posición del array cuando el valor del array sea igual al valor del texto 
//que enviaste como parametro. 
//Haz varios ejemplos y compruebalos.

const lista = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
const texto = 'Salamandra'


const findArrayIndex = (list, text) => {
 
   const index = list.findIndex(word => word === text)
   return index
}

let position = findArrayIndex(lista, texto)
console.log(position)

