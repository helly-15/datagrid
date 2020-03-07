export default function dropDownFilter(stateOfComponent) {
    //let dropdown= document.getElementsByClassName("checkbox")[0];
    let table = document.getElementsByClassName("table-wrapper")[0];
    let tr = table.getElementsByTagName("tr");

    if (stateOfComponent){
        for (let i = 1; i < tr.length; i++) {
            tr[i].style.display = "";
        }
        for (let i = 1; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td")[4];
            let counterOfmatches =0;
            stateOfComponent.map ((object)=>{
                if (td.innerText===object.value) {
                    //tr[i].style.display = "";
                    counterOfmatches++;
                }

            });
            if (counterOfmatches===0){
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
