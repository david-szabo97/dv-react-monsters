import React, { useCallback } from 'react'
import { AttackIcon, DefenseIcon, TrashCanIcon } from '../Icon'
import { ElementalIcon } from '../'
import './ListItem.css'

const ListItem = ({ index, monster: { elemental, name, attack, defense }, onMonsterDelete }) => {
  const handleDeleteClick = useCallback(() => {
    onMonsterDelete(index)
  }, [index, onMonsterDelete])

  return (
    <div className="ListItem">
      <div className="ListItem__Elemental">
        <ElementalIcon elemental={elemental} size="xl" />
      </div>

      <div className="ListItem__Data">
        <div className="ListItem__Name">{name}</div>

        <div className="ListItem__Meta">
          <div className="ListItem__Meta__Item"><AttackIcon size="m" /> {attack}</div>
          <div className="ListItem__Meta__Item"><DefenseIcon size="m" /> {defense}</div>
        </div>
      </div>

      <div className="ListItem__Delete">
        <TrashCanIcon size="m" onClick={handleDeleteClick} />
      </div>
    </div>
  )
}

export default ListItem