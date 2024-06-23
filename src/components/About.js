

import React, { useState } from 'react'
export default function About(props) {


  let myStyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'black':'white',
    border:'1.5px solid',
    borderColor:props.mode==='dark'?'white':'black',
  }

  // const [myStyle, setMyStyle] = useState({
  //   color:'black',
  //   backgroundColor:'white'
  // });

  // const [btntext, setbtntext] = useState("Enable Dark Mode");

  
//  const toggleStyle =  ()=>{
//   if(myStyle.color === 'black'){
//     setMyStyle({
//       color:'white',
//       backgroundColor:'black'
//     })
//     setbtntext("Enable Light Mode");
//   }
//     else{
//       setMyStyle({
//       color:'black',
//       backgroundColor:'white',
//       border:'2px solid white'
//     })
      
//     setbtntext("Enable Dark Mode");
    
//   }

 
 
  return (
    <div className='container' style={myStyle}>
      <h1 my-3>About Us</h1>
      <div className="accordion" id="accordionExample" style= {myStyle}>
  <div className="accordion-item" >
    <h2 className="accordion-header"  id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong> Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby='headingOne' data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Textutils gives you a way to analyze your text quickly and efficiently.Be it a word count ,character count ,etc  
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id='headingTwo'>
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Free To Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" area-aria-labelledby='headingTwo' data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Textutils is a free character counter tool that provides instant character count & word count statistics for a given text.Textutils reports number of words and characters.Thus it is suitable for writing text with word/character limit  
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id='headingThree' >
      <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" area-aria-labelledby='headingThree' data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This software works on any browser such as chrome ,Firefox,Internet Explorer ,Safari,Opera.It suits for counting characters or words for facebook ,blogs,books ,excel ,woed documents,etc.
      </div>
    </div>
  </div>
</div>
<div className ='container my-4'>

{/* <button type="button" my-3  onClick={toggleStyle} className="btn btn-primary" >{btntext}</button> */}
 </div>
    </div>
  )
}

