import faker from "faker";
import React from "react";

function tableData (rows){

    let table =[];
    for (let i=0;i< localStorage.length;i++){

        if (localStorage.hasOwnProperty(i)){
            table.push (JSON.parse(window.localStorage.getItem(i)))
            //console.log (key);
        }
    }
    if (table.length !==0) {
        return table;
    }

    for (let i=0;i<rows;i+=1){
        const dataInCells = {
            'id': i.toString(),
            'seller': <img alt ='avatar' src ={faker.internet.avatar()}/>,
            'name': faker.name.firstName(),
            'product name': faker.commerce.productName(),
            'price': faker.commerce.price().slice(0,-3) + '$',
            'color': faker.commerce.color(),
            'in stock':faker.random.boolean()?'yes':"no",
            'email':<a href ="#" > {faker.internet.email()}</a>
        };

        table.push (dataInCells)
    }
    return table;
}
export function dataReducer(state = tableData(1000)) {
    return state
}
