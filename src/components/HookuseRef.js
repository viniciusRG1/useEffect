import React, { useEffect, useRef, useState } from 'react'

const HookuseRef = () => {
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.counter + 1
    })

    const inputRef = useRef()
    const [text, setText]= useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef)
        setText("")
        inputRef.current.focus()
    }


  return (
    <div>
        <h2>useRef</h2>
        <p>componente redenrizou: {numberRef.current} vezes.</p>
        <p>Counter 1:{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>contador A</button>
        <p>Counter 2:{counterB}</p>
        <button onClick={() => setCounterB(counterB + 1)}>contador B</button>
        <p>escreva uma palavra</p>
        <form onSubmit={handleSubmit}>
            <input type='text' ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
            <input type='submit' value='enviar'/>
        </form>
        <hr/>


    </div>
  )
}

export default HookuseRef