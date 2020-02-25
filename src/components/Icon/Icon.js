import React from 'react'
import './Icon.css'
import { ReactComponent as AttackSvg } from '../../assets/icons/attack.svg'
import { ReactComponent as DefenseSvg } from '../../assets/icons/defense.svg'
import { ReactComponent as ArrowLeftSvg } from '../../assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRightSvg } from '../../assets/icons/arrow-right.svg'
import { ReactComponent as FireSvg } from '../../assets/icons/fire.svg'
import { ReactComponent as WaterSvg } from '../../assets/icons/water.svg'
import { ReactComponent as EarthSvg } from '../../assets/icons/earth.svg'
import { ReactComponent as AirSvg } from '../../assets/icons/air.svg'
import { ReactComponent as TrashCanSvg } from '../../assets/icons/trash-can.svg'

const icon = (IconTag) => ({ size = 's', ...props }) => {
  const baseClassName = `Icon Icon--size-${size}`
  const propClassName = props.className ? props.className : ''
  const className = `${baseClassName} ${propClassName}`

  return (
    <div className={className} {...props}>
      <IconTag style={{}} />
    </div>
  )
}

export const AttackIcon = icon(AttackSvg)
export const DefenseIcon = icon(DefenseSvg)
export const ArrowLeftIcon = icon(ArrowLeftSvg)
export const ArrowRightIcon = icon(ArrowRightSvg)
export const FireIcon = icon(FireSvg)
export const WaterIcon = icon(WaterSvg)
export const EarthIcon = icon(EarthSvg)
export const AirIcon = icon(AirSvg)
export const TrashCanIcon = icon(TrashCanSvg)
export const iconHoc = icon
