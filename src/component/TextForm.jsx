import React, { useState } from 'react'
function TextForm({ heading, mode, showAlert }) {
  const update = () => {
    if (Button === "convert uppercase") {
      let newtext = text.toUpperCase();
      setText(newtext);
      setButton("convert lowercase");
      showAlert(":successfully convert to Uppercase", "success");
    }
    else {
      let newtext = text.toLowerCase();
      setText(newtext);
      setButton("convert uppercase");
      showAlert(":successfully convert to lowercase", "success");
    }
  }
  const clearupdate = () => {
    setText("");
    showAlert(":successfully Clear Text", "success");
  }

  const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    showAlert(":successfully make Capital First Char", "success");
  }

  // const handleReplaceClick = () => {
  //   let newText = text.replaceAll(fWord,rWord);
  //   setText(newText);
  // };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    showAlert(": successfully speak Text", "success");
  }
  const replaceupdate = () => {
    let newText = text.replaceAll(text1, text2);
    setText(newText);
    showAlert(": successfully Replace Text", "success");
  }
  const operate = (event) => {
    setText(event.target.value);

  }
  const operate1 = (event) => {
    setText1(event.target.value);
  }
  const operate2 = (event) => {
    setText2(event.target.value);
  }
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  // const [text,setText]=useState("");
  const [Button, setButton] = useState("convert uppercase");
  const handleExtraSpaces = () => {
    let words = text.split(' ');
    let joinedWords = '';
    // console.log(words);
    words.forEach((elem) => {
      if (elem[0] !== undefined) {
        joinedWords += elem + " ";
        // console.log(joinedWords);
      }
    })
    setText(joinedWords);
    showAlert(": successfully Remove Extra Space", "success");
  }
  return (
    <>
      <h2 className="my-2">{heading}</h2>
      {/* <div className={`container bg-${mode} text-${mode}`}> */}
        <div className={`mb-3 my-4`}>
          <textarea className={`form-control bg-${mode} text-${mode === 'dark' ? 'light' : 'dark'} `} value={text} onChange={operate} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
      {/* </div> */}
      <div>
        <button type="button" disabled={text === ""} onClick={update} className="btn btn-success mx-2">{Button}</button>
        <button type="button" disabled={text === ""} onClick={clearupdate} className="btn btn-success mx-3">clear</button>
        {/* <button type="button"disabled={text===""} className="btn btn-success mx-2">Find</button> */}
        {/* <input type="text"disabled={text===""} value={text1} onChange={operate1} className={`find mx-1 bg-${mode} text-${mode==='dark'?'light':'dark'}`} placeholder="find" />
<button type="button"disabled={text===""} onClick={replaceupdate} className="btn btn-success mx-2">Replace</button>
<input type="text"disabled={text===""} value={text2} onChange={operate2} className={ `replace bg-${mode} text-${mode==='dark'?'light':'dark'}` } placeholder="replace"/> */}
        <button type="submit" disabled={text === ""} onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button type="submit" disabled={text === ""} onClick={handleCapitalize} className="btn btn-warning mx-2 my-2">CFL</button>
        <button type="submit" disabled={text === ""} onClick={handleExtraSpaces} className="btn btn-warning mx-2 my-2" role="alert">RES</button>
        <div className="input-group mb-3 ">
          <button disabled={text === ""} className="btn btn-primary " type="button" id="button-addon1">Find</button>
          <input type="text" disabled={text === ""} value={text1} onChange={operate1} className={`find mx-1 bg-${mode} text-${mode === 'dark' ? 'light' : 'dark'}`} placeholder="find" aria-label="Example text with button addon" aria-describedby="button-addon1" />
          <button disabled={text === ""} className="btn btn-primary" type="button" onClick={replaceupdate} id="button-addon1">Replace</button>
          <input type="text" disabled={text === ""} value={text2} onChange={operate2} className={`find mx-1 bg-${mode} text-${mode === 'dark' ? 'light' : 'dark'}`} placeholder="replace" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        </div>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text === "" ? 0 : text.split(" ").length} words and {text.length} character</p>
        <p>{text === "" ? 0 : text.split(" ").length * 0.008} minutes</p>
      </div>
    </>
  )
}

export default TextForm
