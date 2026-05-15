import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
   <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='bg-green-400 p-4 text-black rounded-2xl'>Tailwind Test</h1>
      <Card name="Dhanush"/>
   </div>
  )
}

export default App
