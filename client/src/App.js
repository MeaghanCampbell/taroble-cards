import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// ApolloProvider, is a special type of React component that we'll use to provide data to all of the other components
import { ApolloProvider } from '@apollo/react-hooks';

//  We'll use the ApolloClient to get that data when we're ready to use it.
import ApolloClient from 'apollo-boost';


import Login from "./components/Login";
import SignUp from "./components/SignUP";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import CardDetail from "./components/CardDetail";
import Loading from './components/LoadingScreen';




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

  window.VANTA.FOG({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0x666666,
    midtoneColor: 0x0,
    lowlightColor: 0x0,
    baseColor: 0x0,
    blurFactor: 0.45,
    speed: 0.60
  })

  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <main className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/card-detail" component={CardDetail} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </main>
        <Loading/>
      </Router>

    </ApolloProvider>
  );
}

export default App;
