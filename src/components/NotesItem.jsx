import { useContext} from "react"
import { TodoContext } from "../context/context"

const NotesItem = ({ note }) => {
    const {editNoteHandler:edit, deleteNoteHandler:remove, t} = useContext(TodoContext)
    return (
        <div className="notes__item">
            <div className="notes__item-top">
                <h2>{note.title}</h2>
                <span>{note.date}</span>
            </div>
            <p>{note.text}</p>
            <div className="notes__item-btns">
                <button className="purple" onClick={() => edit(note)}>
                    <img src="/edit.svg" alt="" />
                    {t('Edit')}
                </button>
                <button className="red" onClick={() => remove(note.id)}>
                    <img src="/del.svg" alt="" />
                    {t('Del')}
                </button>
            </div>
        </div>
    )
}

export default NotesItem