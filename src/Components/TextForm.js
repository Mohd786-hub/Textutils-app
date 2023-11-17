import React, {useState} from 'react';

 function TextForm(props) {

    const handleUppercase =() => {
        //console.log('uppercase was clicked ' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase!','success')
    }

    const handleonChange =(event) => {
        //console.log('handle onChange works');
        setText(event.target.value);
    }

    const handleLowercase =() => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase!','success')
    }

    const handleClearcase =() => {
        let newText = "";
        setText(newText);
        props.showAlert('Text Cleared!','success')
    }

    const handleCopy =() =>
    {
         var text = document.getElementById('myBox');
         text.select();
         navigator.clipboard.writeText(text.value)
         props.showAlert('Copied to Clipboard!','success')

    }

    const handleExtraSpace = () =>
    {
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert('Extra Spaces Removed!','success')
    }
    const [text, setText] = useState('');

  return (
<>

    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
       <h2>{props.heading}</h2>
       <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
    </div>

    <button className="btn btn-primary" onClick={handleUppercase} >Convert to Uppercase</button>
    <button className="btn btn-secondary mx-3" onClick={handleLowercase} >Convert to Lowercase</button>
    <button className="btn btn-danger" onClick={handleClearcase} >Clear Text</button>
    <button className="btn btn-success mx-3" onClick={handleCopy} >Copy Text</button>
    <button className="btn btn-primary" onClick={handleExtraSpace} >Remove Extra Spaces</button>

    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading2}</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters.</p>
        <p>Takes {0.008 * text.split(" ").length} Minutes to Read.</p>
        <h2>{props.heading3}</h2>
        <p>{text.length>0?text:'Enter something in the Textbox above to preview it here'}</p>


    </div>

      
</>
  );
}

export default TextForm;
