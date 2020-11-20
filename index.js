
const array2d = [
    [2, 7, 12, 1],
    [8, 23],
    [9, 45, 7],
    [22, 3, 24, 4],
];

const arrayParaSumar = [
    [4, 5],
    [2, 7, 1],
    [8, 10],
  ];

const matrizCuadrada = [
    [4, 5, 9],
    [2, 7, 1],
    [8, 10, 5],
  ]

const matrizNoCuadrada = [
    [4, 5],
    [2, 7, 1],
    [8, 10],
  ]

const items = ['🍉', '🍐', '🍌', '🍇', '🍎', '🍊', '🍉', 
  '🍏', '🍑', '🍒', '🥝', '🍋', '🍓', '🍍', '🥥']

  
const obtenerNumeroAlAzar = (array) => {
    return Math.floor((Math.random() * array.length))
  }

const obtenerItemAlAzar = (array) => {
    return array[obtenerNumeroAlAzar(array)]
}

const obtenerNumeroMayor = (matriz) => {
    let nroMayor = ""
    for (let i = 0; i < matriz.length; i++) {
           for (let j = 0; j < matriz[i].length; j++) {
               console.log(matriz[i][j])
               console.log(matriz[i][j] > nroMayor)
                if(matriz[i][j] > nroMayor){
                nroMayor = matriz[i][j]
                }
           }
       
    }
    console.log(nroMayor)
    return nroMayor
}

//console.log(obtenerNumeroMayor(array2d))

const sumar = (matriz) => {
    let suma = 0
    for (let i = 0; i < matriz.length; i++) {
           for (let j = 0; j < matriz[i].length; j++) {             
                suma += matriz[i][j]
           }      
    }   
    return suma

}


//console.log(sumar(arrayParaSumar))


const esMatrizCuadrada = (matriz) => {
    // Si una fila no tiene la misma
    //longitud que el array --> no es cuadrada
    for (let i = 0; i < matriz.length; i++) { //recorro filas
    
        if(matriz.length !== matriz[i].length){
            return false  // cierra la iteracion
        }
     return true
    }
}

//console.log(esMatrizCuadrada(matrizCuadrada))

//console.log(esMatrizCuadrada(matrizNoCuadrada))

const generarGrilla = (filas, columnas, array) => {
    const grilla = []
    for (let i = 0; i < filas; i++) {
      grilla[i] = []
      for (let j = 0; j < columnas; j++) {
        grilla[i][j] = obtenerItemAlAzar(array)
      }
    }
    return grilla
  }

//console.log(generarGrilla(2, 3, items))


const generarMatrizEscalonada = (filas, item) => {

    let matrizEscalonada = []

    for (let i = 0; i < filas ; i++) {   
        matrizEscalonada[i] = []  // creo array dentro de la fila 
        console.log(`estas en la fila ${i}`)
        for (let j = 0; j < matrizEscalonada.length ; j++) {  
            matrizEscalonada[i].length = j + 1
            matrizEscalonada[i][j] = item          
        }      
    }   
    return matrizEscalonada
}
//console.log(generarMatrizEscalonada(5, "0"))