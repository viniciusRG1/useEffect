import React, { useEffect, useState } from 'react'

const List = ({getItem}) => {
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        console.log('buscando itens do BD...')
        setMyItems(getItem)
    },[getItem])

    return (
    <div>
        {myItems && myItems.map((item) => <p key={item}>{item}</p>)}
    </div>
  )
}

export default List