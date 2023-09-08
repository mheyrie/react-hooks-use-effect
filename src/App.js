import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  // function handleBtn(){
  //   setCount((count) => count + 1 )
  // }
useEffect(() =>{
  console.log("You're Calling me continuously")
})
  useEffect(() => {
    document.title = text;
  }, [text])

  useEffect(() => {
    setTimeout(()=> setCount(0), 10000)
  }, [])

console.log("componet rendering")

  return (
    <>
      <button
      onClick={() => setCount((count) => count + 1)}>I
       have been clicked {count} times</button>
      <input 
      onChange={(e) => setText(e.target.value)}
      type="text" 
      value={text}
      placeholder="Type away..."/>
    </>
)
}

export default App;
