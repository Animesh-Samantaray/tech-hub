import { useState } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service';
import Slider from './components/Slider';
function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='overflow-x-hidden bg-white text-[#333333]'>
     {/* <Navbar /> */}
     <Hero />
     <Service></Service>
    </main>

  )
}

export default App
