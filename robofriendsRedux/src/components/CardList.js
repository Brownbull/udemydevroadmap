import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  return (
    <div >
      {
        robots.map((element) => {
          return (
            <Card
              name={element.name}
              email={element.email}
              id={element.id} />
          )
        })
      }
    </div>
  )
} 

export default CardList
