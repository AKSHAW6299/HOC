import React, { useState } from 'react'
import Hoc from './commonComponents/Hoc'


function App() {
  return (
    <div>
      {/* We are passing the Counter component as an argument to Hoc! */}
      <Hoc com={Counter} />
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}


export default App