import React from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { FETCH_AUTHORS_QUERY, FETCH_BOOKS_QUERY, CREATE_BOOK_MUTATION } from '../queries/queries';
import { useForm } from './../util/hooks';
import Input from './Input';
import Select from './Select';

const AddBook = () => {
    const { values, handleChange, handleSubmit } = useForm(createBookCallback, {
        name: '',
        genre: '',
        authorId: ''
    });

    const { loading, data } = useQuery(FETCH_AUTHORS_QUERY);

    const [createBook] = useMutation(CREATE_BOOK_MUTATION, {
        update(proxy, result){
            const data = proxy.readQuery({ query: FETCH_BOOKS_QUERY });
            const newData = [result.data.createBook, data.getAllBooks];
            proxy.writeQuery({ query: FETCH_BOOKS_QUERY, data: { newData } });

            values.name = '';
            values.genre = '';
            values.authorId = '';
        },
        refetchQueries: [{ query: FETCH_BOOKS_QUERY }],
        variables: values
    });

    function createBookCallback() {
        createBook();
    }

    const displayAuthors =  loading ? (
        <option disabled>Loading Authors</option>
    ) : (
            data.getAllAuthors && data.getAllAuthors.map(author => (
                <option key={author.id} value={author.id}>{author.name}</option>
            )
        )
    )

    return (
        <form id="add-book" onSubmit={handleSubmit}>
            <Input
                type="text"
                name="name"
                id="name"
                label="Book name:"
                value={values.name}
                onChange={handleChange}
            />

            <Input
                type="text"
                name="genre"
                id="genre"
                label="Genre:"
                value={values.genre}
                onChange={handleChange}
            />

            <Select
                name="authorId"
                id="authorId"
                label="Author:"
                value={values.authorId}
                onChange={handleChange}
                options={displayAuthors}
            />

            <button type="submit">+</button>
        </form>
    );
}

export default AddBook;