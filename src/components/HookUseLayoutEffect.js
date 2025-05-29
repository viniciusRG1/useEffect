import React, { useEffect, useLayoutEffect, useState } from 'react'

const HookUseLayoutEffect = () => {
    const [name, setName] = useState('algum nome')

    useEffect(() => {
        console.log('2')
        setName('mudou de novo');
    }, [])

    useLayoutEffect(() => {
       console.log('1')
       setName('outro nome')
    },[])

    console.log(name)
    
  return (
    <div>
        <h2>HookUseLayoutEffect</h2>
        <p>Nome: {name}</p>
        <hr></hr>
    </div>
  )
}

export default HookUseLayoutEffect