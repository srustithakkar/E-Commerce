const InitialValues = {
  products: [{
      productId: "mss",
      productName: "Managed Security Services",
      price: 2549.99
    },
    {
      productId: "e&i",
      productName: "Engineering & integration",
      price: 1025.50
    },
    {
      productId: "training",
      productName: "Training",
      price: 100
    },
  ]
}

export default function productRenderer(state = InitialValues, action) {

  switch (action.type) {

    default:
      return state
  }
}