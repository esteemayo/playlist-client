import React from 'react';
import { useQuery } from '@apollo/client';

import { FETCH_BOOK_QUERY } from './../queries/queries';

const BookDetails = ({ bookId }) => {
    const { data } = useQuery(FETCH_BOOK_QUERY, {
        variables: {
            id: bookId
        }
    });

    let displayBookDetails;

    if (data && data.getBook === null) {
        displayBookDetails = <div>No book selected...</div>
    } else if (data && data.getBook) {
        return (
            displayBookDetails = (
                <div id="book-details">
                    <h2>{data.getBook.name}</h2>
                    <p>{data.getBook.genre}</p>
                    <p>{data.getBook.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {data.getBook.author.books.map(item => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            )
        )
    }

    return (
        <div id="book-details">
            <p>Output book details here</p>
            {displayBookDetails}
        </div>
    );
}

export default BookDetails;