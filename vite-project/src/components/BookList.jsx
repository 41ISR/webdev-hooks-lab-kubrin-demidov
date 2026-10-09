import { BookItem } from './BookItem'

export const BookList = (props) => {
    return (
<div className="book-list" id="bookList" >
  {props.filterChip ? props.Books
  .filter(el=> !el.done)
  .map((el)=>(
  <BookItem key={el.id} Books={el} setBooks={props.setBooks}></BookItem>))
: props.Books.map((el)=>(<BookItem key={el.id} Books={el} setBooks={props.setBooks}></BookItem>)
  )}
      </div>
    )}