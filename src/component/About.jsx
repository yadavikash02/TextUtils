import React,{useState} from 'react'

function About({heading,mode}) {
    // const [Button,setButton]=useState("Enable Dark Mode");
    // const [Enable,setEnable]=useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
    // const Dark=()=>{
    //     if(Button==="Enable Dark Mode"){
    //         setEnable({
    //             color: 'white',
    //             backgroundColor: 'black',
    //         })
    //         setButton("Enable Light Mode");
    //     }
    //     else{
    //         setEnable({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setButton("Enable Dark Mode");
    //     }
    // }
  return (
    <div className={`container bg-${mode} text-${mode==='dark'?'light':'dark'}`} >
        <h1>{heading}</h1>
        <div className= {`accordion bg-${mode} text-${mode==='dark'?'light':'dark'}`}  id="accordionExample">
  <div className={`accordion-item bg-${mode} text-${mode==='dark'?'light':'dark'}`} >
    <h2 className={`accordion-header bg-${mode} text-${mode==='dark'?'light':'dark'}`}>
      <button className={`accordion-button bg-${mode} text-${mode==='dark'?'light':'dark'}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className={`accordion-collapse collapse show bg-${mode} text-${mode==='dark'?'light':'dark'}`}data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${mode} text-${mode==='dark'?'light':'dark'}` }>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className={`accordion-item bg-${mode} text-${mode==='dark'?'light':'dark'}`}>
    <h2 className={`accordion-header bg-${mode} text-${mode==='dark'?'light':'dark'}`}>
      <button className={`accordion-button collapsed bg-${mode} text-${mode==='dark'?'light':'dark'}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className={`accordion-collapse collapse bg-${mode} text-${mode==='dark'?'light':'dark'}`} data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${mode} text-${mode==='dark'?'light':'dark'}`}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className={`accordion-item bg-${mode} text-${mode==='dark'?'light':'dark'}`}>
    <h2 className={`accordion-header bg-${mode} text-${mode==='dark'?'light':'dark'}`}>
      <button  className={`accordion-button collapsed bg-${mode} text-${mode==='dark'?'light':'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className={`accordion-collapse collapse`} data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${mode} text-${mode==='dark'?'light':'dark'}`}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
      {/* <div> */}
      {/* <button type="button" className="btn btn-success my-3"></button> */}
      {/* </div> */}
    </div>
  )
}

export default About
