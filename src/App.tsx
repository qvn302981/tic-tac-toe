import { useState } from 'react'
import './App.css'
import { Cell } from './assets/components/cell'
import { Reset } from './assets/components/reset'
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
          <Cell classes='tile' values={array[0]} onClick={() => {
            handleClick(0)
          }} />
          <Cell classes='tile' values={array[1]} onClick={() => {
            handleClick(1)
          }} />
          <Cell classes='tile' values={array[2]} onClick={() => {
            handleClick(2)
          }} />
          <Cell classes='tile' values={array[3]} onClick={() => {
            handleClick(3)
          }} />
          <Cell classes='tile' values={array[4]} onClick={() => {
            handleClick(4)
          }} />
          <Cell classes='tile' values={array[5]} onClick={() => {
            handleClick(5)
          }} />
          <Cell classes='tile' values={array[6]} onClick={() => {
            handleClick(6)
          }} />
          <Cell classes='tile' values={array[7]} onClick={() => {
            handleClick(7)
          }} />
          <Cell classes='tile' values={array[8]} onClick={() => {
            handleClick(8)
          }} />

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

