import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Route, Switch, Redirect } from "react-router-dom"
import Header from "./Header/Header"
import Products from "./Products/Products"
import Cart from "./Cart/Cart"
import Login from "./Checkout/Login"
import Checkout from "./Checkout/Checkout"

import ApolloClient from "apollo-boost"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloProvider } from "react-apollo"

const isAuthenticated = sessionStorage.getItem("token")

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
  resolvers: {},
  typeDefs: `
    extend type Query {
      limit: Int!
    } 
  `,
})

cache.writeData({
  data: {
    limit: 5,
  },
})

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const AppWrapper = styled.div`
  text-align: center;
`

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route
          path="/checkout"
          render={(props) =>
            isAuthenticated() 
              ? <Checkout /> 
              : <Redirect to="/login" />
          }
        />
        <Route path="/login" component={Login} />
      </Switch>
    </AppWrapper>
  </ApolloProvider>
)

export default App
