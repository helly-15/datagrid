import faker from "faker";
import React from "react";

const initialState = {
    'seller': <img alt ='avatar' src ={faker.internet.avatar()}/>,
    'name': faker.name.firstName(),
    'product name': faker.commerce.productName(),
    'price': faker.commerce.price().slice(0,-3)+'$',
    'color': faker.commerce.color(),
    'in stock':faker.random.boolean()?'yes':"no",
    'email':<a href ="#" > {faker.internet.email()}</a>
};
export function dataReducer(state = initialState) {
    return state
}
