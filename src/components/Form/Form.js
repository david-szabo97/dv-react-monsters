import React, { useCallback, useState } from 'react'
import { AttackIcon, DefenseIcon } from '../Icon'
import { ElementalChooser } from '../'
import './Form.css'

const initialDataState = { name: '', attack: 0, defense: 0, elemental: 'fire' }

const Form = ({ onMonsterCreate }) => {
  const [data, setData] = useState(initialDataState)

  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    onMonsterCreate({
      name: data.name.trim(),
      attack: Number(data.attack),
      defense: Number(data.defense),
      elemental: data.elemental
    })

    setData(initialDataState)
  }, [data, onMonsterCreate])

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setData(prevData => ({ ...prevData, [name]: value }))
  }, [])

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <div className="Form__Row">
          <ElementalChooser name="elemental" onChange={handleChange} />
        </div>

        <div className="Form__Row">
          <input type="text" name="name" value={data.name} onChange={handleChange} required />
        </div>

        <div className="Form__Row">
          <AttackIcon size="m" /><input type="number" name="attack" value={data.attack} min={1} max={99} onChange={handleChange} required />
          <DefenseIcon size="m" /><input type="number" name="defense" value={data.defense} min={1} max={99} onChange={handleChange} required />
        </div>

        <div className="Form__Row">
          <input type="submit" value="Add" />
        </div>
      </form>
    </div>
  )
}

export default Form