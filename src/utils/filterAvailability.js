
export function filterData(isChecked, data) {
    return data.filter(row=>{
        return row['in stock'] === 'yes' && isChecked === true|| isChecked===false;
        }
    );
}
