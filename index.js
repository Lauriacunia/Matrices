/**
 * ObtenerNumeroMayor
 * ◇⌒♥⌒♡⌒♥⌒♡⌒♥⌒♡⌒◇
 */

const array2d = [
    [2, 7, 12, 1],
    [8, 23],
    [9, 45, 7],
    [22, 3, 24, 4],
];

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



console.log(obtenerNumeroMayor(array2d))