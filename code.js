let holeColor = 'red';
let holeControl = new Map();

for (let i = 0; i <= 42; i++) {
  holeControl.set(i, false)
}
// console.log(holeControl);

const gameboard = document.getElementById('gameboard'); // parent

gameboard.addEventListener('click', (e => {
  const holeNum = e.target.id;
  // console.log(holeNum)

  // holeControl.forEach((value, key) => {
    // console.log(`${key}: ${value}`);
    if (!e.target.classList.contains('red') && !e.target.classList.contains('yellow')) {
      if (holeNum && holeColor==='red') {
        e.target.classList.value = `full ${holeColor} not-active`
        holeColor = 'yellow';
      } else {
        e.target.classList.value = `full ${holeColor} not-active`
        holeColor = 'red';
      }
    }
  // });
}))