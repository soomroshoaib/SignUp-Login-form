// import Mein from "./component/Home/Mein";
import Nav from './component/Home/Folder/Nav'
import "./index.css";
import {Routes, Route} from 'react-router-dom'
import Home  from './component/Home/Folder/Home';
import About from './component/Home/Folder/About';
import Contact from './component/Home/Folder/Contact'
import Signup from './component/Home/Folder/Signup';
import Login from './component/Home/Folder/Login';

function App() {
  return (
    <div className="mein">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />

      </Routes>

      
    </div>
  )
}

export default App;
