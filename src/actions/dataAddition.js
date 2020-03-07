export function setYear(seller, name, productName, price, color, stock, email ) {
    return {
        type: 'ADD_NEW_DATA',
        payload: arguments,
    }
}
