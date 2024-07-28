import { useState } from 'react'
import './App.css'
import { Button } from 'flowbite-react'
import ProductCard from './components/ProductCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div>
      <Button>Click me</Button>
    </div>
    </>
  )
}

export default App
