import React from 'react'
import { List, Search, Form, Logo, Footer } from '../'
import './App.css'
import { useMonsterStorage, useFilteredMonsters } from '../../hooks'
import initialMonsters from '../../data/monsters'

const App = () => {
  const { monsters, addMonster, deleteMonster } = useMonsterStorage(initialMonsters)
  const { filteredMonsters, setFilter } = useFilteredMonsters(monsters)

  return (
    <div className="App">
      <Logo />
      <h1>React Monsters</h1>

      <h2>Create Monster</h2>
      <Form onMonsterCreate={addMonster} />

      <h2>Monsters</h2>
      <Search onSearchChange={setFilter} />
      <List onMonsterDelete={deleteMonster} monsters={filteredMonsters} />

      <Footer />
    </div>
  )
}

export default App
