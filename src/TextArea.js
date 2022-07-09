import React, { useState } from 'react'
import "./style.css";

export default function TextArea() {
  const [text, setText] = useState("");
  const upperCaseHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const lowerCaseHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const copyHandler = () => {
    const text=document.querySelector('textarea');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const spaceHandler = () => {
    let newTextArray = text.split(/ +/);
    let newText=newTextArray.join(" ");
    setText(newText);
    
  }
  const clearHandler=()=>{
    setText("");
  }

  const changeHandler = (e) => {
    setText(e.target.value);
    
  }
  const camelCaseHandler=()=>{
    if(text.split(/ +/).length<=1){
      console.log("Its already in camel Case");
      return;
    }
   
    let newString=text.toLowerCase();
    let newTextArray=newString.split(/ +/);
    let camelCase=newTextArray[0];
    for (let index = 1; index < newTextArray.length; index++) {
      camelCase+= newTextArray[index].charAt(0).toUpperCase()+ newTextArray[index].slice(1);
    }
    setText(camelCase);
}
const wordCounter=()=>{
  if(document.querySelector('.box').value===""){
    return 0;
  }
 else return text.split(' ').length; 
}

  return (
    <>
    <div className="container">
   <div className='textArea'>
      <h1>Text Modification Tool</h1>
      <textarea className='box' value={text} placeholder='Enter Your Text Here' name="text" onChange={changeHandler} ></textarea>
      <div className='btn-grid'>
      <button onClick={upperCaseHandler}>UpperCase</button>
      <button onClick={lowerCaseHandler}>LowerCase</button>
      <button onClick={copyHandler}>Copy</button>
      <button onClick={spaceHandler}>Remove Spaces</button>
      <button onClick={clearHandler}>Clear</button>
      <button onClick={camelCaseHandler}>CamelCase</button>
      </div>
      <h2>Your Text Summary</h2>
    <h3 className='counter'>{ text!=="" ? text.trim().split(' ').length : 0} words and  {text.length} character</h3>
    </div>
    </div>
    </>
  )
}
