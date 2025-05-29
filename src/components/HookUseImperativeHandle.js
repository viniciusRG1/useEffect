import React, { useImperativeHandle, useRef } from 'react'

import SomeComponent from './SomeComponent'

const HookUseImperativeHandle = () => {
    const inputRef = useRef()

  return (
    <div>
        <h2>HookUseImperativeHandle</h2>
        <SomeComponent ref={inputRef}/>
        <button onClick={() => inputRef.current.validate()}>validar</button>
        <hr></hr>
    </div>
  )
}

export default HookUseImperativeHandle