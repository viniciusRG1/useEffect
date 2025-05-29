import React, { useState } from 'react'
import { useEffect } from 'react'

const HookUserEffect = () => {
    useEffect(()=>{
        console.log('em execução')
    });

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    useEffect(()=>{
        console.log('apenas uma tentativa')
    },[])
    

    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(()=>{
        if(anotherNumber > 0){
            console.log("sou executado quando a função ativa")
        }
    }, [anotherNumber])

   /* useEffect(()=>{
        const timer = setTimeout(()=>{
            console.log('timeout');
            setAnotherNumber(anotherNumber + 1);
        }, 2000);

        return () => clearTimeout(timer)
    }, [anotherNumber]);
    */

  return (
    <div>
        <hr></hr>
        <h2>useEffect</h2>
        <p>number {number}</p>
        <button onClick={changeSomething}>add 1</button>
        <p>another number:{anotherNumber}</p>
        <button onClick={()=>setAnotherNumber(anotherNumber + 1)}>mudar anotherNumber</button>
    </div>
  )
}

export default HookUserEffect