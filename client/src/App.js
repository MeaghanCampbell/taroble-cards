import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// ApolloProvider, is a special type of React component that we'll use to provide data to all of the other components
import { ApolloProvider } from '@apollo/react-hooks';

//  We'll use the ApolloClient to get that data when we're ready to use it.
import ApolloClient from 'apollo-boost';

import Login from "./components/Login";
import SignUp from "./components/SignUP";
import Nav from "./components/Nav";
import Home from "./components/Home";
import CardDetail from "./components/CardDetail";
import Loading from './components/LoadingScreen';
import ReadingMessages from './components/ReadingMessages';
import Dashboard from "./components/Dashboard";

import { useStoreContext } from "./utils/GlobalState"


const client = new ApolloClient({
  request: operation => {
    // retrieve the token from localStorage before each request
    const token = localStorage.getItem('id_token');
    // With this request configuration, we use the .setContext() method to set the HTTP request headers of every
    // request to include the token, whether the request needs it or not. This is fine, because if the request
    // doesn't need the token, our server-side resolver function won't check for it.
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {

  // import the global state and dispatch
	const [state] = useStoreContext();
	// extract currentReading from the state object
	const { currentPage } = state;
	// console log the currentReading data
	console.log(currentPage)

  return (
    <ApolloProvider client={client}>
      <Router>
        
        <Nav />
        <main>      
          { currentPage === 'home' &&  <Home/> }
          { currentPage === 'loading' &&  <Loading/> }
          { currentPage === 'messages' &&  <ReadingMessages/> }
          { currentPage === 'detail' &&  <CardDetail/> }
          { currentPage === 'login' &&  <Login/> }
          { currentPage === 'signUp' &&  <SignUp/> }
          { currentPage === 'dashboard' &&  <Dashboard/> }
        </main>
      </Router>
    </ApolloProvider>
  );
}

export default App;
