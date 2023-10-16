import { useState } from 'react'
import './App.css'
import { Cell } from './components/cell';
import { Reset } from './components/reset';
function App() {

  const [xIsNext, setXIsNext] = useState(true);
  const [array, setArray] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (i: number) => {
    const newArray = array.slice();

    if (xIsNext) {
      newArray[i] = "X";
    } else {
      newArray[i] = "O";
    }
    setArray(newArray);
    setXIsNext(!xIsNext)

    // result
    const result = conditionWin(newArray);
    if (result) {
      setWinner(result);
    }
  }


  const conditionWin = (cells: (string | null)[]) => {
    const row = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [2, 5, 8],
      [1, 4, 7],
      [2, 4, 6]
    ];
    for (let i = 0; i < row.length; i++) {
      const [a, b, c] = row[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  }

  let showResult;
  if (winner) {
    showResult = `Winner: ${winner}`;
  } else {
    showResult = `Player ${xIsNext ? 'X' : 'O'}'s turn`;
  }


  // Reset
  const handleRemoveClick = () => {
    setArray(Array(9).fill(null))
    setWinner(null);
  }
  return (
    <>
      <main className="background">
        <section className="title">
          <h1>Tic Tac Toe</h1>
        </section>
        <section className="display">
          {showResult}
        </section>
        <section className="container">
          {array.map((items, index) => (
            <Cell
              classes='tile'
              key={index}
              values={items}
              onClick={() => {handleClick(index)}}
            />
          ))}

        </section>
        <section className="display announcer hide"></section>
        <section className="controls">
          <Reset id='reset' label='reset' onClick={() => {
            handleRemoveClick()
          }} />
        </section>
      </main>
    </>
  )
}

export default App

