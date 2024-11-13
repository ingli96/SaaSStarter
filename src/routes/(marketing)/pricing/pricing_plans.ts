export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["MIT Licence", "Fast Performance", "Stripe Integration"],
  },
  {
    id: "pro",
    name: "pro",
    description:
      "just for test",
    price: "$10",
    priceIntervalName: "per month",
    stripe_price_id: "price_1QKVMNA3KM9m25OLSK6p3bnN",
    stripe_product_id: "prod_RCvCSsBLD2ImT5",
    features: [
      "Everything in Free",
      "Support us with fake money",
      "Test the purchase experience",
    ],
  },
  // {
  //   id: "enterprise",
  //   name: "Enterprise",
  //   description:
  //     "A plan to test the upgrade experience. Try buying this with the test credit card 4242424242424242.",
  //   price: "$15",
  //   priceIntervalName: "per month",
  //   stripe_price_id: "price_1Nkda2HMjzZ8mGZn4sKvbDAV",
  //   stripe_product_id: "prod_OXj20YNpHYOXi7",
  //   features: [
  //     "Everything in Pro",
  //     "Try the 'upgrade plan' UX",
  //     "Still actually free!",
  //   ],
  // },
]
