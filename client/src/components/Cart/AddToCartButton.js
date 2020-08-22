import React from "react"
import { Mutation } from "react-apollo"
import Button from "../Button/Button"
import { ADD_TO_CART } from "../../constans"

const AddToCardButton = ({ productId }) => (
  <Mutation mutation={ADD_TO_CART}>
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
