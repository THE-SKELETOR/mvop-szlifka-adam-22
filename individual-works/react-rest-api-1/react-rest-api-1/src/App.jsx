import { useState } from 'react'
import ButtonClick from './request.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div>
          <ButtonClick/>
        </div>
    </div>
  )
}

export default App
