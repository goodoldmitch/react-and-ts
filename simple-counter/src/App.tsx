import { useState } from 'react'

function App() {
  const [count , setCount] = useState(0);

  function decriment(){
    setCount(count - 1);
  }
  
  function incriment(){
    setCount(count + 1);
  }

  function reset(){
    setCount(0)
  }

  return (
    <main>
      <h1>Counter</h1>
      <div className="count-value">{ count }</div>
      <div className="button-block">
        <button className="decriment" onClick={decriment}>-</button>
        <button className="reset" onClick={reset}>reset</button>
        <button className="incriment" onClick={incriment}>+</button>
      </div>
    </main>
  )
}

export default App
