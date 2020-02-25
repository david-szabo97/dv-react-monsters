import { useState, useMemo } from "react"

const useFilteredMonsters = (monsters) => {
  const [filter, setFilter] = useState('')

  const filteredMonsters = useMemo(() => {
    if (filter === '') {
      return monsters
    }

    return monsters.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
  }, [filter, monsters])

  return { filteredMonsters, setFilter }
}

export default useFilteredMonsters