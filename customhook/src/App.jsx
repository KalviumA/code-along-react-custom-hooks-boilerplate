import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useStorage from './useStorage'

function App() {
  const [content, setcontent] = useStorage('content','')
console.log(content)
  return (
    <>
<input type="text" onChange={e=>setcontent(e.target.value)} />
    </>
  )
}

export default App
