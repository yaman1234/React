import React, {useState} from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    
    const [Text, setText] = useState('Enter the text here');

    const handleUpClick = ()=>{
        let newText = Text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
        let newText = Text.toLowerCase();
        // console.log("Lower case button was clicked");
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }


  return (
    <div>
      <h1 className="my-3">{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" id="Textarea" onChange={handleOnChange} value={Text} rows="5"  ></textarea>
      </div>
      <button className="btn btn-primary m-2" onClick={handleUpClick}> convert to uppercase</button>
      <button className="btn btn-primary m-2" onClick = {handleLowClick}> convert to lowercase</button>
    </div>
  );
}
