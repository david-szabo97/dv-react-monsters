import React from 'react'
import { FireIcon, WaterIcon, EarthIcon, AirIcon } from '../Icon'

const elementalIconMapping = {
  fire: FireIcon,
  water: WaterIcon,
  earth: EarthIcon,
  air: AirIcon
}

const ElementalIcon = ({ elemental, ...props }) => {
  const MappedIcon = elementalIconMapping[elemental]
  return <MappedIcon {...props} />
}

export default ElementalIcon