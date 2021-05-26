import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// ApolloProvider, is a special type of React component that we'll use to provide data to all of the other components
import { ApolloProvider } from '@apollo/react-hooks';

//  We'll use the ApolloClient to get that data when we're ready to use it.
import ApolloClient from 'apollo-boost';


import Nav from "./components/Nav";
import Main from "./components/Main";
import Dashboard from "./components/Dashboard";
import Shuffle from "./components/Shuffle"

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

let showNav = true;

function App() {

  // import the global state and dispatch
	const [state] = useStoreContext();
	// extract currentReading from the state object
	const { currentPage } = state;
	// console log the currentReading data
	console.log(currentPage)

  if (currentPage === 'loading' || currentPage === 'messages') {
    showNav = false;
  } else {
    showNav = true;
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <Shuffle/> */}
      {showNav &&  <Nav />}
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
