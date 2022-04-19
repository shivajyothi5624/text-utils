import React, { useState } from 'react'

export default function Textarea(props) {

  const [text,settext] = useState("")
  const changetext = (e)=>{
    settext(e.target.value);
  }
 const space = " "

  const toUpper = ()=>{
    settext(text.toUpperCase())
    props.showalert("success","converted to upper")
  }

  const toLower = ()=>{
    settext(text.toLowerCase())
    props.showalert("success","converted to lower")

  }

  const cleartext = ()=>
  {
    settext("")
    props.showalert("success","text cleared")

  }

  const textareastyle = {
    backgroundColor : '#2C2D32',
    color:'white'
  }
  const removespace = ()=>
  {
    var text2 = text.trim().split(" ")
    console.log(text2)
    text2 = text2.filter(x =>{
      return x.trim()
    })
    settext(text2.join(" "))
    props.showalert("success","extra spaces are removed")

  }
  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
    <h1 className='my-4'>Textutils</h1>
    <div class="form-floating">

    {
      (props.mode === 'dark')?
    <textarea className='' placeholder="Leave a comment here" value={text} rows="8" cols="160" onChange={changetext} style={textareastyle}></textarea>:
    <textarea className='' placeholder="Leave a comment here" value={text} rows="8" cols="160" onChange={changetext}></textarea>
    }
  </div>
  <div className='container'></div>
  <button type="button" class="btn btn-info my-2" onClick={toUpper}>Upper case</button>
  <button type="button" class="btn btn-info my-2 mx-2" onClick={toLower}>Lower case</button>
  <button type="button" class="btn btn-info my-2 mx-2" onClick={cleartext}>Clear text</button>
  <button type="button" class="btn btn-info my-2 mx-2" onClick={removespace}>Remove space</button>
  <p>No of character: {text.split("").filter(x => space!==x).length}</p>
  {
    (text.length===0)?
    <p>No of words:0</p>:
    <p>No of words: {text.trim().split(" ").length}</p>
  }
    </div>
    </>
  )
}
