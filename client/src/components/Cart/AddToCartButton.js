import React from "react"
import { Mutation } from "react-apollo"
import Button from "../Button/Button"
import { ADD_TO_CART, GET_CART, GET_CART_TOTAL } from "../../constans"

const AddToCardButton = ({ productId }) => (
  <Mutation
    mutation={ADD_TO_CART}
    refetchQueries={[{ query: GET_CART }, { query: GET_CART_TOTAL }]}
  >
    {(addToCard) => (
      <Button
        onClick={() =>
          addToCard({
            variables: {
              productId,
            },
          })
        }
      >
        {`+ Add to cart`}
      </Button>
    )}
  </Mutation>
)

export default AddToCardButton
