import React from 'react'
import {useState} from "react";

const HookUseState = () => {
    let userName = "vinicius";
    const [name, setName] = useState()

    const changeNames = () => {
        userName = "pedro"
        setName("andré")
    }

    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(age)
    }

    return (
    <div>
        <h2>useState</h2>
        <p>nome:{userName}</p>
        <p>useState:{name}</p>
        <button onClick={changeNames}>trocar nome</button>

        <h2>inputs</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' value={age} onChange={(e) => setAge(e.target.value)}></input>
            <input type='submit' value="enviar"/>
        </form>
        <p>a idade escolhida foi {age}</p>
    </div>
    )
}

export default HookUseState