import { useState } from 'react'
import './App.css'
import Background from './Components/Background'

function App() {
  const [color, setcolor] = useState('blue')

 
  // color-object--
  const customColor = {

    purple: { backgroundColor: 'purple' },
    green: { backgroundColor: 'green' },
    red: { backgroundColor: 'red' },
    blue: { backgroundColor: 'blue' },
    pink: { backgroundColor: 'pink' },
    yellow: { backgroundColor: 'yellow' }
  }
  return (
    <div className='App' style={{ backgroundColor: color }}>

      <div className='buttons'>
        <button style={customColor.purple} className='button'
        onClick={()=> setcolor('purple')}>Purple</button>
        <button style={customColor.green} className='button' onClick={()=> setcolor('green')}>Green</button>
        <button style={customColor.blue} className='button'onClick={()=> setcolor('blue')}>Blue</button>
        <button style={customColor.red} className='button'onClick={()=> setcolor('red')}>Red</button>
        <button style={customColor.pink} className='button'onClick={()=> setcolor('pink')}>Pink</button>
        <button style={customColor.yellow} className='button'onClick={()=> setcolor('yellow')}>Yellow</button>


      </div>
    </div>
  )
}

export default App
