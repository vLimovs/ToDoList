import { useEffect, useState } from 'react'
import Header from './components/Header'
import Notes from './components/Notes'
import Modal from './components/Modal'
import { TodoContext } from './context/context'
import { useTranslation } from 'react-i18next'
// props - реквизиты
// props drilling 
const App = () => {
    const { t } = useTranslation()
    const setLS = () => localStorage.notes = JSON.stringify(notes)
    const getLS = () => localStorage.notes ? JSON.parse(localStorage.notes) : []
    const [notes, setNotes] = useState(getLS)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => {
        setLS()
    }, [notes])


    const openModalHandler = () => {
        setIsModalOpen(true)
        setIsEdit(false)
    }

    const closeModalHandler = () => {
        setIsModalOpen(false)
        setIsEdit(false)
    }

    const addOrChangeNoteHandler = (note) => {
        if (editNote?.id) {
            const updatedNotes = notes.map(item => {
                if (item.id === note.id) {
                    return note
                }
                return item
            })
            setNotes(updatedNotes)
        } else setNotes([...notes, note])
        setIsEdit(false)
        setEditNote(null)
    }

    const [editNote, setEditNote] = useState(null)
    const editNoteHandler = (note) => {
        setEditNote(note);
        setIsModalOpen(true)
        setIsEdit(true)
    }

    const deleteNoteHandler = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    const [searchValue, setSearchValue] = useState('')
    const searchNotesHandler = (title) => {
        setSearchValue(title)
    }

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchValue.toLowerCase())
    )

    return (
        <TodoContext.Provider
            value={{
                searchNotesHandler,
                editNoteHandler,
                deleteNoteHandler,
                closeModalHandler,
                addOrChangeNoteHandler,
                t
            }}
        >
            <Header searchNotes={searchNotesHandler} />
            <Notes notes={filteredNotes} search={searchValue} />
            {
                isModalOpen && <Modal
                    closeModal={closeModalHandler}
                    addOrChangeNote={addOrChangeNoteHandler}
                    isEdit={isEdit}
                    editNote={editNote}
                />
            }
            <button className="add-note" onClick={() => openModalHandler()}>
                <img src="/edit.svg" alt="" />
            </button>
        </TodoContext.Provider>
    )
}

export default App