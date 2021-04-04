import { gql } from '@apollo/client';

export const FETCH_BOOKS_QUERY = gql`
    {
        getAllBooks{
            id
            name
        }
    }
`;

export const FETCH_AUTHORS_QUERY = gql`
    {
        getAllAuthors {
            id
            name
            age
        }
    }
`;

export const FETCH_BOOK_QUERY = gql`
    query getBook($id: ID){
        getBook(id: $id){
            id
            name
            genre
            author{
                id
                name
                age
                books{
                    id
                    name
                }
            }
        }
    }
`;

export const CREATE_BOOK_MUTATION = gql`
    mutation createBook($name: String! $genre: String! $authorId: ID!){
        createBook(name: $name genre: $genre authorId: $authorId){
            id
            name
            genre
        }
    }
`;