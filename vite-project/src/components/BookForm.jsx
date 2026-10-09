import { Input } from './Input'
import { Button } from './Button'

export const BookForm = (props) => {
  return (
    <form className="add-book-row" onSubmit={props.handleSubmit}>
      <Input value={props.Bookname} onChange={(e) => props.setBookname(e.target.value)} placeholder="Add a book and press Enter..." />
      <Button>Add</Button>
    </form>
  )
}
