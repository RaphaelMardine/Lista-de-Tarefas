/* eslint-disable react/react-in-jsx-scope */
import { Container } from "./styles"
import { Item } from "../../types/Item"
import { useState } from "react"

type Props = {
  item: Item
}

export const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done)
//quando clicar dentro do componente modificar lá fora, done de true pra false false pra true 
// da pra guardar essas informações em cache? tentar !   
return (
    <Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>
    </Container>
  )
}
