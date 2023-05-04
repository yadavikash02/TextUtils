import React, {useState} from 'react'
function TextForm({heading,mode}) {
  const update=()=>{
    if(Button==="convert uppercase"){
      let newtext=text.toUpperCase();
      setText(newtext);
      setButton("convert lowercase");
    }
    else{
      let newtext=text.toLowerCase();
      setText(newtext);
      setButton("convert uppercase");
    }
  }
  const clearupdate=()=>{
    setText("");
  }
 
  const handleCapitalize = () => {
     let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
     setText(newText);
}

  // const handleReplaceClick = () => {
  //   let newText = text.replaceAll(fWord,rWord);
  //   setText(newText);
  // };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const replaceupdate=()=>{
    let newText = text.replaceAll(text1,text2);
    setText(newText);
  }
  const operate=(event)=>{
    setText(event.target.value);
   
  }
  const operate1=(event)=>{
    setText1(event.target.value);
  }
  const operate2=(event)=>{
    setText2(event.target.value);
  }
  const [text,setText]=useState("");
  const [text1,setText1]=useState("");
  const [text2,setText2]=useState("");
  // const [text,setText]=useState("");
  const [Button,setButton]=useState("convert uppercase");
const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        // console.log(words);
        words.forEach((elem)=>{
            if(elem[0] !== undefined){
                joinedWords += elem + " ";
                console.log(joinedWords);
            }
        })
        setText(joinedWords);
    }
  return (
    <>
    <div className={`bg-${mode} text-${mode}`}>
<div className= {`mb-3 my-4`}>
  <label for="exampleFormControlTextarea1" className={`form-label bg-${mode} text-${mode==='dark'?'light':'dark'} `}>{heading}</label>
  <textarea className={`form-control bg-${mode} text-${mode==='dark'?'light':'dark'} `} value={text} onChange={operate} id="exampleFormControlTextarea1"  rows="8"></textarea>
</div>
<button type="button" onClick={update} className="btn btn-success mx-2">{Button}</button>
<button type="button" onClick={clearupdate} className="btn btn-success mx-3">clear</button>
<button type="button" className="btn btn-success mx-2">Find</button>
<input type="text" value={text1} onChange={operate1} className={`find mx-1 bg-${mode} text-${mode==='dark'?'light':'dark'}`} placeholder="find" />
<button type="button" onClick={replaceupdate} className="btn btn-success mx-2">Replace</button>
<input type="text" value={text2} onChange={operate2} className={ `replace bg-${mode} text-${mode==='dark'?'light':'dark'}` } placeholder="replace"/>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
<button type="submit" onClick={handleCapitalize} className="btn btn-warning mx-2 my-2">CFL</button>
<button type="submit" onClick={handleExtraSpaces} className="btn btn-warning mx-2 my-2">RES</button>
    </div>
    <div className="container my-3">
          <h2>Your text summary</h2>
          <p>{text===""?text.split(" ").length-1:text.split(" ").length} words and {text.length} character</p>
          <p>{text.split(" ").length*0.008} minutes</p>
    </div>
    </>
  )
}

export default TextForm
