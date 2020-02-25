import React from 'react'
import { ListItem } from '../'
import './List.css'

const List = ({ monsters, onMonsterDelete }) => {
  return (
    <div className="List">
      {monsters.map((monster, index) => (
        <ListItem key={monster.id} index={index} monster={monster} onMonsterDelete={onMonsterDelete} />
      ))}
    </div>
  )
}

export default List