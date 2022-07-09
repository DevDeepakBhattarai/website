import React from 'react'
import Navbar from './Navbar'
// import Main from './Main';
import './style.css';
import TextArea from './TextArea';
import Contact from './Contact'
import Content from './Content'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


export default function App() {
  return (
  <>
    <Router>
    <Navbar/>
    {/* <Main owner="Deepak's"/> */}
      <Routes>
        <Route path='/' element={<TextArea/>}></Route>
      </Routes>
      <Routes>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Routes>
        <Route path='/content' element={<Content/>}></Route>
      </Routes>

    </Router>
    
   </>
  )
}