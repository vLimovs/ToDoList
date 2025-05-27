import i18next, { reloadResources } from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        lng: 'ru',
        resources: {
            ru:{
                translation: {
                    Zametki: "Заметки",
                    Search: "Поиск...",
                    AllNotes: "Все заметки",
                    NotesExceed: "Нет заметок",
                    FindNotes: "Найдено заметок ",
                    NothingFounds: "Ничего не найдено",
                    Grid: "Сетка",
                    List: "Список",
                    Edit: "Редактировать",
                    Del: "удалить",
                    AddNote: "Добавить заметку",
                    Cancel: "Отмена",
                    Add: "Добавить",
                    EditNote: "Изменить заметку",
                    Change: "Изменить",
                    Title: "Заголовок",
                    Content: "Содержимое",
                }
            },
            uz:{
                translation: {
                    Zametki: "Eslatmalar",
                    Search: "Qidirish...",
                    AllNotes: "Barcha eslatmalar",
                    NotesExceed: "Eslatmalar yo’q",
                    FindNotes: "Eslatmalar topildi ",
                    NothingFounds: "Hech narsa topilmadi...",
                    Grid: "Setka",
                    List: "Ro’yxat",
                    Edit: "O’ZGARTIRISH",
                    Del: "o’chirish",
                    AddNote: "Eslatma qo’shish",
                    Cancel: "Bekor qilish",
                    Add: "Qo’shish",
                    EditNote: "Elsatmani tahrirlash",
                    Change: "O’ZGARTIRISH",
                    Title: "Nom",
                    Content: "Mazmun",
                }
            }
        }
    })