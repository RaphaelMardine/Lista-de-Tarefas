/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react"
import * as C from "./App.styles"
import { AddArea } from "./components/AddArea"
import { ListItem } from "./components/ListItem"
import { Item } from "./types/Item"
function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar o pão na padaria", done: false },
    { id: 2, name: "Comprar um bolo na padaria", done: false },
  ])
  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <AddArea onEnter={handleAddTask}/>
        {list.map((item, index) => (
          <ListItem item={item} key={index} />
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App
