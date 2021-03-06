import { useState } from "react"
import { Container } from "./styles"

type Props = {
    onEnter: (taskName: string) => void
}
export const AddArea = ({onEnter}: Props) => {
  const [inputText, setInputText] = useState("")

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
        onEnter(inputText)
    }
  }
  return (
    <Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      ></input>
    </Container>
  )
}
