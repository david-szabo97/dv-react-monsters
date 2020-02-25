import React, { useCallback, useState } from 'react'
import './ElementalChooser.css'
import { ArrowLeftIcon, ArrowRightIcon } from '../Icon'
import { ElementalIcon } from '../'
import { useDidUpdate } from '../../hooks'

const elementals = ['fire', 'water', 'earth', 'air']

const ElementalChooser = ({ name = '', value = 0, onChange = () => {} }) => {
  const [currentIndex, setCurrentIndex] = useState(value)

  const notifyOnChange = useCallback((index) => {
    onChange({
      target: {
        name,
        value: elementals[index]
      }
    })
  }, [ name, onChange ])

  useDidUpdate(() => {
    notifyOnChange(currentIndex)
  }, [notifyOnChange, currentIndex])

  const handlePreviousClick = useCallback(() => {
    setCurrentIndex(currentIndex => currentIndex === 0 ? elementals.length - 1 : (currentIndex - 1) % elementals.length)
  }, [])

  const handleNextClick = useCallback(() => {
    setCurrentIndex(currentIndex => (currentIndex + 1) % elementals.length)
  }, [])

  return (
    <div className="ElementalChooser">
      <ArrowLeftIcon data-testid="left" size="l" onClick={handlePreviousClick} />
      <ElementalIcon data-testid="icon" elemental={elementals[currentIndex]} size="xl" />
      <ArrowRightIcon data-testid="right" size="l" onClick={handleNextClick} />
    </div>
  )
}

export default ElementalChooser
export { elementals }