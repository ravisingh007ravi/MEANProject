import {useState} from 'react'
import './style.css'

const Index = (props) => {

  const changetext= (e)=>{
    console.log("object"); 
      setText(e.target.value)
    
  }

  const clickbtn= ()=>{
    let change=text.toUpperCase();
    setText(change)
  }

  const clickbtnLower = ()=>{
    let change =text.toLocaleLowerCase();
    setText(change);
  }

  const [text,setText] =useState(' ');

  return (
    <div className='mainArea'>
      <h1 className='heading'>{props.heading}</h1>
      <div className='char'>Number of Character =&nbsp;{text.split(' ').length-1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Number of world =&nbsp;{text.length}
      </div>
      <div>
      <textarea className="formControl" placeholder='Enter the message....' value={text} onChange={changetext} cols="30" rows="10"></textarea>    
      </div>
      <button className="btnControll" onClick={clickbtn}>Convort to Upper Case</button>
      <button className="btnControll" onClick={clickbtnLower}>Convort to Lower Case</button>
      
      </div>
  )
}

export default Index

