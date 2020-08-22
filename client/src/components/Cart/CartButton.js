import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Button from "../Button/Button"

const GET_CART_TOTAL = gql`
  query getCartTotal {
    cart {
      total
    }
  }
`

const CartButton = ({ onClick }) => (
  <Query query={GET_CART_TOTAL}>
    {({ data, loading, error }) => (
      <Button onClick={onClick}>
        {`Cart (${loading || error ? 0 : data && data.cart.total})`}
      </Button>
    )}
  </Query>
)

export default CartButton
