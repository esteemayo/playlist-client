import ApolloProvider from './Apolloprovider';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import Footer from './components/Footer';

function App() {
  return (
    <ApolloProvider>
      <div id="main">
        <h1>My Reading List</h1>
        <BookList />
        <AddBook />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
