// lets see DOMContentLoaded

let holeColor = 'red';
let holeControl = new Map();

for (let i = 0; i <= 42; i++) {
  holeControl.set(i, false)
}
// console.log(holeControl);

const columns = (holeLetter) => {
  const holeID = document.getElementById(holeLetter);
  console.log(holeID)
  for (let i = 0; i <= 42; i++) {

    //const element = array[i];
  }
}
columns('A');

const gameboard = document.getElementById('gameboard'); // parent

gameboard.addEventListener('click', (e => {
  const holeNum = e.target.id.substring(0, e.target.id.length - 1);
  const holeLetter = e.target.id.charAt(e.target.id.length - 1)
  console.log(holeNum)
  console.log(holeLetter)
  console.log(e.target.id)

  holeControl.forEach((value, key) => {
    //console.log(`${key}: ${value}`);
    if (!e.target.classList.contains('red') && !e.target.classList.contains('yellow')) {
      if (holeNum && holeColor==='red') {
        e.target.classList.value = `full ${holeColor} not-active`
        holeColor = 'yellow';
      } else {
        e.target.classList.value = `full ${holeColor} not-active`
        holeColor = 'red';
      }
    }
  });
}))

document.querySelector('.restart-btn').addEventListener('click', function() {
  window.location.reload();
  return false;
});

/*
como recoger en un bucle todos los ID de un nodo
1. recoge la conexion de columnas encontrando coincidencia con su clase (A --> A TRAVÉS DE UN BUCLE)
- invierte el array para que los numeros vayan de 36,29,22,15,8,1
2. comprueba si su valor es false (agujero vacio) o true (agujero lleno)
3. si el valor es true, que se rellene el siguiente agujero.
*/