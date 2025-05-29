import React, { useEffect, useMemo, useState } from 'react'

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)

    const numerosEspeciais = useMemo(() => {
        return['0', '100', '200']
    }, [])

    useEffect(() => {
        console.log('numeros especiais numbers foi atualizado')
    },[numerosEspeciais])

  return (
    <div>
        <h2>
            useMemo
        </h2>
        <input type='text' onChange={(e) => setNumber(e.target.value)}></input>
        {numerosEspeciais.includes(number) ? <p>Acertou o número</p> : <p>errou</p>}
        <hr></hr>
    </div>
  )
}

export default HookUseMemo