import React, {useState} from 'react'

export default function Textform1(props) {
  
    const handleonchange = (event)=>{
        console.log("hlo");
        setText(event.target.value)
    }
    const[text , setText] = useState("enter the text here");
    const handleuptoclick = ()=> {
        console.log("text wil bw clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("converted to uppercase", 'success');
    }
    const handleloclick= ()=>{
      console.log("hlo2" + text);
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showalert("converted to lowercase", 'success')
    }
    const handleCopy=()=>{
      console.log("hlo2");
      var text = document.getElementById('mybox');
      text.select();
      navigator.clipboard.writeText(text.value);

    }
    const handleClearclick=()=>{
      console.log("hlo3" + text);
      let newtext2 = '';
      setText(newtext2)

    }
    const handleextraspace=()=>{
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "))
    }
    // const[text , setText] = useState("enter the text here");

    // let newtext = text.toUpperCase();
    // setText(newtext);

    // setText("enter the text 2 in match");

  return (
    <>
    <div className="container" style = {{color : props.mode ==='dark'? 'white' :'#042743'}} >
        <h1>{props.about}</h1>
        <div className="mb-3">
        {/* <label for="mybox" class="form-label">Password</label> */}
        <textarea className="form-control" value = {text} onChange={handleonchange} style = {{backgroundColor: props.mode=== 'dark' ? '#13466e' : 'white' , color: props.mode ==='dark'? 'white':'#)42743'}} id="mybox" rows="6"></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={handleuptoclick}>convert to upppercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleloclick}>convert to lowwercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleClearclick}>clear text</button>
        <button className='btn btn-primary mx-1 my-1'id='myBox' onClick={handleCopy}>copytext</button>
        <button className='btn btn-primary mx-1 my-1'id='myBox' onClick={handleextraspace}>Remove extraspace</button>
        </div>
      
    <div className="container my-3" style={{color:props.mode ==='dark'?'white': '#042743'}}>
      <h1>your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} chracters</p>
      <p>{0.008* text.split(" ").length}minutes read</p>
      <h3>preview</h3>
      <p>{text.length>0 ? text:'enter the text hererwelktrl;hkeo'}</p>
    </div>
    </>
  )
}
