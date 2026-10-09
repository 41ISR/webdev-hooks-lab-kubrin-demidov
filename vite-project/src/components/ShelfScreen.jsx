import { useState, useEffect } from "react"
import { BookForm } from './BookForm'
import { FilterChip } from './FilterChip'
import { BookList } from './BookList'
import { nanoid } from "nanoid"

export const Screen = () => {
  const [filterChip, setfilterChip] = useState(false)
  const [Bookname, setBookname] = useState('')
  const [Books, setBooks] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (Bookname.trim() === '') return
    const newBook = {
      name: Bookname.trim(),
      done: false,
      id: nanoid()
    }
    setBooks(o => [...o, newBook])
    setBookname('')

  }


  return (
    <section className="screen active" id="screen-shelf">
      <p className="greeting">Добрый вечер</p>
      <BookForm handleSubmit={handleSubmit} Bookname={Bookname} setBookname={setBookname} />
      <div className="list-toolbar">
        <span className="toolbar-title">Книги</span>
        <FilterChip setfilterChip={setfilterChip}/>
      </div>
      <BookList Books={Books} setBooks={setBooks} filterChip={filterChip}/>
    </section>
  )
}