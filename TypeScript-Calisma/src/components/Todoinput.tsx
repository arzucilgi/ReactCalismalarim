import React from "react"

//rfce ile bu yapıyı açtım.
interface todoInputProps {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    addFunc: (e: React.FormEvent) => void
}

const Todoinput: React.FC<todoInputProps> = ({ todo, setTodo, addFunc }) => {
    return (
        <form onSubmit={e => addFunc(e)}>
            <input value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder="Todo Ekle" />
            <button type="submit">Ekle</button>
        </form>
    )
}

export default Todoinput