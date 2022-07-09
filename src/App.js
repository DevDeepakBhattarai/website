import React from 'react'
import Navbar from './Navbar'
// import Main from './Main';
import './style.css';
import TextArea from './TextArea';
import Contact from './Contact'
import Content from './Content'
import {HashRouter as Router,Routes,Route} from 'react-router-dom';


export default function App() {
  return (
  <>
    <Router>
    <Navbar/>
    {/* <Main owner="Deepak's"/> */}
      <Routes>
        <Route path='/' element={<TextArea/>}/>
      </Routes>
      <Routes>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Routes>
        <Route path='/content' element={<Content/>}/>
      </Routes>

    </Router>
    
   </>
  )
}