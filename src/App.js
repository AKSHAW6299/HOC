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
    <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-50 md:w-80 text-center mx-4 my-4 max-w-full">
      <p className="text-2xl font-bold text-blue-600 mb-4">{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
      >
        Increment
      </button>
    </div>
  )
}


export default App