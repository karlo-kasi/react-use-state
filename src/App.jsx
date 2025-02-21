import { useState } from 'react'
import './App.css'
import Header from "../src/assets/components/Header"
import Main from "../src/assets/components/Main"
import "bootstrap/dist/css/bootstrap-grid.min.css"; // Solo il Grid System di Bootstrap
import "bootstrap/dist/css/bootstrap-utilities.min.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
