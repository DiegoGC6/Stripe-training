import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = 'pk_test_51KdGy5GiTjhdtHcVdl7LWLht7QuGw9wgft5A5vTDZKUSBEwq03GUOVcpu3kkQjg5oiPyjm99ylTs1MFCmc6qXWAJ008O0s4SSC'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
            <PaymentForm />
    </Elements>
  )
}

export default StripeContainer