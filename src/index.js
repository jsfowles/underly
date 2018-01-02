import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory/lib';


const client = new ApolloClient({
  link: new HttpLink('https://api.graph.cool/simple/v1/cjbxtfnor31fl0121poh8lpqb'),
  cache: new InMemoryCache(),
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
