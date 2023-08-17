import React from 'react'
import ShopCard from '../ShopCard/ShopCard';

export default function CardsView(cards) {
  cards = cards.cards.products
  return (
    <div className='cards'>
      {cards.map((card, index) => <ShopCard key={index} card={cards[index]}/>)}
    </div>
  )
}
