import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpclick =() =>{
      console.log("This is text" + text);
      let newText=text.toUpperCase()
    setText(newText)
    props.showAlert("Convert to UpperCase","Success");

    }
    const handleLowerclick =() =>{
      let newText=text.toLowerCase()
    setText(newText)
    props.showAlert("Convert to LowerCase","Success");

    }
    const handlerOnChange =(event) =>{
        // console.log("This is text"); 
        setText(event.target.value); // text=value
      }
    const [text, setText] = useState("Type Text here")
  return (
    <>
<div className='container'>
   <div className="mb-3">
        <h1>{props.heading}</h1>
         <textarea className="form-control" id="textArea" value={text} rows="5" onChange={handlerOnChange}></textarea>
   </div>
        <button className="btn btn-primary" onClick={handleUpclick}>Convert to UPPER case</button>
        <button className="btn btn-primary mx-4" onClick={handleLowerclick}>Convert to lower case</button>
  </div><br />
  <div className="container">
    <h3>Text Summery</h3>
    <p>{text.split(" ").length} words, {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length}Minute Read</p>
    <h4>Preview</h4>
    <p>{text}</p>
  </div>
  </>
  )
}
