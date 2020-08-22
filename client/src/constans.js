import gql from "graphql-tag"

export const ADD_TO_CART = gql`
  mutation addToCard($productId: Int!) {
    addToCard(input: { productId: $productId }) {
      total
    }
  }
`

export const GET_CART_TOTAL = gql`
  query getCartTotal {
    cart {
      total
    }
  }
`

export const GET_CART = gql`
  query getCart {
    cart {
      total
      products {
        id
        title
        thumbnail
      }
    }
  }
`
