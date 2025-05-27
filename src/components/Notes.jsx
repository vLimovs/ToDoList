import listIcon from '/list.svg'
import gridIcon from '/grid.svg'
import { useContext, useState } from 'react'
import NotesItem from './NotesItem'
import { TodoContext } from '../context/context'

const Notes = ({ notes, search }) => {
    const {t} = useContext(TodoContext)
    const [isList, setIsList] = useState(!false)
    const multiTitle = () => {
        if (notes.length && !search) return `${t('AllNotes')} (${notes.length})`
        else if(notes.length && search) return `${t('FindNotes')} (${notes.length})`
        else if(!notes.length && search) return t('NothingFounds')
        else return t('NotesExceed')
    }
    return (
        <div className="container notes">
            <div className="notes__top">
                <h2>{multiTitle()}</h2>
                <button onClick={() => setIsList(!isList)}>
                    <img src={!isList ? listIcon : gridIcon} alt="" />
                    {!isList ? t('List') : t('Grid')}
                </button>
            </div>
            <div className={`notes__list ${!isList ? 'list' : ''}`}>
                {notes.map((note) => (
                    <NotesItem note={note} key={note.id} />
                ))}
            </div>
        </div>
    )
}

export default Notes