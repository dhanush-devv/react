import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  function increment() {
    if(count>=0 && count<20){
    setCount(count+1)
    }
    
  }
  function decrement() {
    if(count>0){
    setCount(count-1)
    }
    
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-700 text-white'>
      <h1>Counter:{count}</h1>
      <button onClick={increment}  className='bg-green-400 rounded p-4 text-white text-2xl hover:text-black cursor-pointer mt-5'>Increment</button>
      <button onClick={decrement} className='bg-red-400 rounded p-3 text-white text-2xl hover:text-black cursor-pointer mt-5'>Decrement</button>
    </div>
  )
}

export default App
