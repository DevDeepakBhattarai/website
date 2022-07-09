import React from 'react'
import Navbar from './components/Navbar'
// import Main from './Main';
import './css/style.css';
import TextArea from './components/TextArea' ;
import Contact from './components/Contact'
import Content from './components/Content'
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