export default function filterAvailability() {
    let checkBox = document.getElementsByClassName("checkbox")[0];
    let table = document.getElementsByClassName("table-wrapper")[0];
    let tr = table.getElementsByTagName("tr");

    if (checkBox.checked === true){
        for (let i = 1; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td")[5];
                if (td.innerText==='yes') {
                    tr[i].style.display = "";
                }
                     else {
                    tr[i].style.display = "none";
                }
        }
    }
    else {
        for (let i = 1; i < tr.length; i++) {
                tr[i].style.display = "";
            }
        }
}

export function filterData(isChecked, data) {
    return data.filter(row=>{
        return row['in stock'] === 'yes' && isChecked === true|| isChecked===false;
        }
    );
}
