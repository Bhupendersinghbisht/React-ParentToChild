import Book from './Book'

function BookList(){
    const list=[
        {title:'KarmYog',author:'Swami Vivekananda'},            
        {title:'Godan',author:'Premchand'},
        {title:'Train to Pakistan',author:'Khuswant Singh'},
        {title:'Devdas',author:'Sarat Chandra Chattopadhyay'}
    ]
    return(
        <div>
        <ul>
            {list.map((book,i) =>
                <Book title={book.title} author={book.author} key={i} />
            )}
        </ul>
        </div>
    )
}

export default BookList;