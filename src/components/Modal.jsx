import { useContext, useState } from "react"
import { v4 } from "uuid"
import { TodoContext } from "../context/context"

const Modal = ({ closeModal, addOrChangeNote, isEdit, editNote }) => {
    const {t} = useContext(TodoContext)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const addOrChange = () => {
        const note = {
            id: editNote?.id ?? v4(),
            title: title,
            text: text,
            date: new Date().toLocaleDateString()
        }
        addOrChangeNote(note)
        closeModal()
    }

    return (
        <div className="modal" onClick={() => closeModal()}>
            <div className="modal__block" onClick={(event) => event.stopPropagation()}>
                <h2>{!isEdit ? t('AddNote') : t('EditNote')}</h2>
                <div className="modal__block-inputs">
                    <label>
                        <input
                            type="text"
                            placeholder={t('Title')}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <span>{t('Title')}</span>
                    </label>
                    <label>
                        <input
                            type="text"
                            placeholder={t('Content')}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <span>{t('Content')}</span>
                    </label>
                </div>
                <div className="modal__block-btns">
                    <button className="red" onClick={() => closeModal()}>{t('Cancel')}</button>
                    <button disabled={text && title ? false : true} className="purple" onClick={() => addOrChange()}>{!isEdit ? t('Add') : t('Edit')}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal