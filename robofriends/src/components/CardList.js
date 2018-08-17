import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  console.log('CardList')
  return (
    <div >
      {
        robots.map((element, i) => {
          return (
            <Card
              name={element.name}
              email={element.email}
              key={i}
              id={element.id} />
          )
        })
      }
    </div>
  )
} 

export default CardList
