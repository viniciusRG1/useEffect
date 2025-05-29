import React, { useCallback, useState } from 'react'

import List from "./List"

const HookUseCallBack = () => {

    const [counter,setCounter] = useState(0)

    const getItemsFromDatabase = useCallback(() => {
        return['a','b','c']
    },[])

    return (
        <div>
            <h2>HookUseCallBack</h2>
            <List getItem={getItemsFromDatabase()}/>
            <button onClick={() => setCounter(counter + 1)}>alterar</button>
            <p>{counter}</p>
            <hr></hr>
        </div>
    )
}

export default HookUseCallBack