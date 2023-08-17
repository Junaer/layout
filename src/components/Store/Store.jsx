import React from 'react'
import { useState } from 'react';
import IconSwitch from '../IconSwitch/IconSwitch'
import CardsView from '../CardsView/CardsView'
import ListView from '../ListView/ListView';



export default function Store(products) {
  const [icon, setIcon] = useState("view_list");

  return (
    <>
      <div className='store'>
        <IconSwitch icon={icon} onSwitch={(icon) => setIcon(icon)}/>
      </div>
      {icon === "view_list" ? <CardsView cards={products}/> : <ListView cards={products}/>}
    </>
  )
}
