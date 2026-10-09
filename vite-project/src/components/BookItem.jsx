export const BookItem = (props) => {
      const handleDone = () => {
        props.setBooks(o => o.map(t => t.id === props.Books.id ? { ...t, done: !t.done } : t))
    }
        const handleDelete = () => {
        props.setBooks(o => o.filter(t => t.id !== props.Books.id))
    }
return (

<div className="book-row" data-id={1}>
          <div className="book-cover" style={{ background: "#4f6b52" }}>
            К
          </div>
          <div className="book-info">
            <p className="book-title done">{props.Books.name}</p>
            <div className="book-author">Кадзуо Исигуро</div>
          </div>
          <div className={`read-check${props.Books.done ? " checked": ""}`} onClick={handleDone} data-role="toggle">
            <span className="check-circle">✓</span>
            <span className="read-label">Прочитано</span>
          </div>
          <button
            className="delete-btn"
            data-role="delete"
            title="Убрать с полки" onClick={handleDelete}
          >
            ✕
          </button>
        </div>
)}