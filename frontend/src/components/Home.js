import React from 'react'
import './styles/Home.css'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "../App.css";

export default function Home() {

    const promise = loadStripe("pk_test_51Hj18ZKqS56uvZe83wuhJjH6JFhxzj139IXZQAFhBT3NNzhJir4vntXcjEOha7Gw4JK6QQzD2Y2BEI4CFycD3LoW00GYaFr3so")

    return (
        <div className='home'>
            <h1 className='homeTitle'>This is my home page!</h1>
            <h3>1. axios.get /products</h3>
            <h3>2. axios.get /authors</h3>
            <h3>3. axios.get /actors</h3>
            <h3>2. axios.get /movies</h3>
            <h3>3. axios.get /populatedMovies</h3>
            <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
        </div>
    )
}
