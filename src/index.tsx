import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContextProvider from 'contexts/AuthContext';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import App from './App';
import { store } from './app/store';
import './index.css';
import * as serviceWorker from './serviceWorker';
import JWTManager from './utils/jwt';
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_GRAPHQL_URL,
  credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from JWTManager if it exists
  const token = JWTManager.getToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AuthContextProvider>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </AuthContextProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
