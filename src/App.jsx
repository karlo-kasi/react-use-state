import './App.css'
import Header from "../src/assets/components/Header"
import Main from "../src/assets/components/Main"
import "bootstrap/dist/css/bootstrap-grid.min.css"; 
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import languages from "../src/assets/data/languages"

function App() {

  return (
    <>
      <Header />
      <Main languages={languages}/>
    </>
  )
}

export default App
