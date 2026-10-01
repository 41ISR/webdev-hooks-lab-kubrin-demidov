import { BookForm } from './BookForm'
import { FilterChip } from './FilterChip'
import { BookList } from './BookList'

export const Screen = () => {
    return (
    <section className="screen active" id="screen-shelf">
      <p className="greeting">Добрый вечер</p>
      <BookForm />
      <div className="list-toolbar">
        <span className="toolbar-title">Книги</span>
      <FilterChip />
      </div>
      <BookList />
    </section>
      )
      }