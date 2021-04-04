import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import BookDetails from './BookDetails';
import { FETCH_BOOKS_QUERY } from '../queries/queries';

const BookList = () => {
    const [selected, setSelected] = useState(null);

    const { loading, data } = useQuery(FETCH_BOOKS_QUERY);

    return (
        <div>
            { loading ? (
                <p style={{ textAlign: 'center', marginBottom: 20 }}>Loading books...</p>
            ) : (
                <ul id="book-list">
                    {
                        data.getAllBooks && data.getAllBooks.map(book => (
                            <li key={book.id} onClick={e => setSelected(book.id)}>{book.name}</li>
                        ))
                    }
                </ul>
            )}
            <BookDetails bookId={selected}/>
        </div>
    );
}

export default BookList;