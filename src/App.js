import NavBar from './navigation/NavBar.js'
import "bootstrap/dist/css/bootstrap.min.css";
import Data from './Pages/Data.js'
import Form from './Pages/Form.js'
import Home from './Pages/Home.js'
import {Route, Routes} from "react-router-dom"

function App() {

   
      return(
        <>
     <NavBar/>
     <div className="container">
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/home" element= {<Data/>} />
        <Route path="/form" element= {<Form/>} />
      
      </Routes>
     </div>
   
     </>
  )
}

export default App;
