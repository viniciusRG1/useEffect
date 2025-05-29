import React, { useContext } from 'react'
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUserEffect from '../components/HookUserEffect'
import {SomeContext } from '../components/HookUseContext'
import HookuseRef from '../components/HookuseRef'
import HookUseCallBack from '../components/HookUseCallBack'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import HookCustom from '../components/HookCustom'

const Home = () => {
  const {contextValue} = useContext(SomeContext)
  return (
    <div>
        <HookUseState />
        <HookUseReducer />
        <HookUserEffect />
        <h2>useContext</h2>
        <p>valor do context: {contextValue}</p>
        <hr></hr>
        <HookuseRef />
        <HookUseCallBack/>
        <HookUseMemo/>
        <HookUseLayoutEffect/>
        <HookUseImperativeHandle/>
        <HookCustom/>
    </div>
  )
}

export default Home