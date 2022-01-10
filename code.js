/*
7 x 6 - 42
Jugador vs Jugador
*/

let holeColor = 'red';
const gameboard = document.getElementById('gameboard'); // parent

gameboard.addEventListener('click', (e => {
  const num = e.target.id.split("x");
  console.log(e)
  console.log(num[1])
  if (num[1] && holeColor==='red') {
    e.target.classList.value = `full ${holeColor}`
    holeColor = 'yellow';
  } else {
    e.target.classList.value = `full ${holeColor}`
    holeColor = 'red';
  }
}))

/*let fillGame = new Array()
for (i=1; i <= 42; i++) {
  fillGame.push({i : false})
}
console.log(fillGame)*/

let map = new Map();

for (let i = 0; i <= 42; i++) {
  map.set(i, false)
}
console.log(map);
