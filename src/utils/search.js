export default function search(){
    let input, filter, table, txtValue;
    input = document.getElementsByClassName("input-top")[0];
    //console.log (input.value.toUpperCase())
    filter = input.value.toUpperCase();
    table = document.getElementsByClassName("table-wrapper")[0];
    let tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td");
        for (let j =0; j < td.length; j++){

            if (td[j]) {

                txtValue = td[j].textContent || td[j].innerText;
                // console.log (txtValue.toUpperCase());
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}
