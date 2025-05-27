import { useContext, useEffect, useRef, useState } from "react"
import { TodoContext } from "../context/context"
import i18next from "i18next"

const Header = () => {
    const { searchNotesHandler:searchNotes, t } = useContext(TodoContext)
    const [search, setSearch] = useState(false)
    const [text, setText] = useState('')
    const reset = () => {
        setSearch(false)
        setText('')
    }
    const isMounted = useRef(false)
    useEffect(() => {
        if (isMounted.current) {
            searchNotes(text)
        }
        isMounted.current = true
    }, [text])


    const [lang, setLang] = useState(false)
    const changeLang = () => {
        if(localStorage.i18nextLng !== 'uz') i18next.changeLanguage('uz')
        else i18next.changeLanguage('ru')
    }

    return (
        <header className='header'>
            {search ? (
                <nav className="header__nav search">
                    <button onClick={() => reset()} ><img src="/back.svg" alt="" /></button>
                    <input
                        type="text"
                        placeholder={t('Search')}
                        autoFocus
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button onClick={() => setText('')}><img src="/clear.svg" alt="" /></button>
                </nav>
            ) : (
                <nav className="header__nav">
                    <button className="header__nav-lang" onClick={() => changeLang()}>
                        {localStorage.i18nextLng === 'ru' ? 'RU' : 'UZ'}
                    </button>
                    <h1 className="header__nav-title">{t('Zametki')}</h1>
                    <button onClick={() => setSearch(true)} className="header__nav-search"><img src="/search.svg" alt="" /></button>
                </nav>
            )}
        </header>
    )
}

export default Header