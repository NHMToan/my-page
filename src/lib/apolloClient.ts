import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { IncomingHttpHeaders } from 'http';
import JWTManager from '../utils/jwt';
export function createApolloClient(headers: IncomingHttpHeaders | null = null) {
  const enhancedFetch = (url: RequestInfo, init: RequestInit) => {
    return fetch(url, {
      ...init,
      headers: {
        ...init.headers,
        'Access-Control-Allow-Origin': '*',
        // here we pass the cookie along for each request
        Cookie: headers?.cookie ?? '',
      },
    });
  };
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
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_API_GRAPHQL_URL,
    credentials: 'include',
    fetch: enhancedFetch,
  });
  // const errorLink = onError((errors) => {
  //   if (
  //     errors.graphQLErrors &&
  //     errors.graphQLErrors[0].extensions?.code === 'UNAUTHENTICATED' &&
  //     errors.response
  //   ) {
  //     errors.response.errors = undefined;
  //     document.location.replace('/login');
  //   }
  // });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([httpLink, authLink]),
    cache: new InMemoryCache({
      // typePolicies: {
      //   Query: {
      //     fields: {
      //       posts: {
      //         keyArgs: false,
      //         merge(existing, incoming) {
      //           let posts: Post[] = [];
      //           if (existing && existing.results) {
      //             posts = posts.concat(existing.results);
      //           }
      //           if (incoming && incoming.results) {
      //             posts = posts.concat(incoming.results);
      //           }
      //           return { ...incoming, posts };
      //         },
      //       },
      //     },
      //   },
      // },
    }),
  });
}
