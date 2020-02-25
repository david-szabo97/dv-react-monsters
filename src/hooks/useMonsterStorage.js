import { useRef, useState, useCallback } from "react"

const useMonsterStorage = (initialMonsters = []) => {
  const initialized = useRef(false)
  const nextMonsterId = useRef(1)
  const [monsters, setMonsters] = useState([])

  const addMonster = useCallback((data) => {
    setMonsters((prevMonsters) => {
      const newMonster = {
        id: nextMonsterId.current++,
        ...data
      }

      return [newMonster, ...prevMonsters]
    })
  }, [])

  const deleteMonster = useCallback((index) => {
    setMonsters((prevMonsters) => {
      const newMonsters = [...prevMonsters]
      newMonsters.splice(index, 1)
      return newMonsters
    })
  }, [])

  if (!initialized.current) {
    initialMonsters.forEach(addMonster)
    initialized.current = true
  }

  return { monsters, addMonster, deleteMonster }
}

export default useMonsterStorage
