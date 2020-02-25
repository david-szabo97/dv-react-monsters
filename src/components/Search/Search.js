import React, { useCallback } from 'react'
import './Search.css'

const Search = ({ onSearchChange }) => {
  const handleChange = useCallback((e) => {
    onSearchChange(e.target.value)
  }, [onSearchChange])

  return (
    <div className="Search">
      <input id="search" type="text" placeholder="Search..." onChange={handleChange} />
    </div>
  )
}

export default Search