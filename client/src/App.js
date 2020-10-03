import React from 'react';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import {Launches} from './components/Launches'
import {Launch} from './components/Launch'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <div className="container">
        <h1>SpaceX</h1>
      <Switch>
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:flight_number" component={Launch}/>
      </Switch>
      </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
