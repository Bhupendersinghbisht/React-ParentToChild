function Book(props){
    return(
        <li>
            <div>
            <h2> <u>{props.title} </u>By {props.author}</h2>
            
            </div>
        </li>
    )
}

export default Book;