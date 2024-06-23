
import React ,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    
   let newtext=text.toUpperCase();
   setText(newtext);
   props.ShowAlert("converted to upper case!","success");
  }
 
    const handleLoClick = ()=>{
      
  let newtext=text.toLowerCase();
   setText(newtext);
   props.ShowAlert("converted to lower case!","success");
  }

  const handleonchange = (event)=>{
    setText(event.target.value);

  }

 const handleclearClick = ()=>{
      
  let newtext=("");
   setText(newtext);
   props.ShowAlert("text cleared!","success");
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.ShowAlert("text copied to clipboard","success");
  }


  const handleExtraSpaces = ()=>{
      
    let newtext = text.split(/[ ] +/);
     setText(newtext.join(" "));
     props.ShowAlert("Extra spaces removed!","success");

    }
  


  const [text, setText] = useState('');
  //setText("new text");//correct way
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#698fca':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-4"  onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-3 my-4"  onClick={handleLoClick}>convert to Lowercase</button>
        <button className="btn btn-primary mx-3 my-4"  onClick={handleclearClick}>clear text</button>
        <button className="btn btn-primary mx-3 my-4"  onClick={handleCopy}>copy</button>
        <button className="btn btn-primary mx-3 my-4"  onClick={handleExtraSpaces}>Remove Extra Space</button>
        
        
    </div>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
     <h1>your text summary</h1>
     <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
     <p>{text.split(" ").filter((element)=>{return element.length!==0}).length*0.008} Minutes read</p>
     <h2>preview</h2>
     {text.length>0?text:"Enter something to preview!"}
    </div>
    </>
  )
}
