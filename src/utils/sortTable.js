
export default function sortTable(indexOfColumn) {
   Array.from (document.getElementsByClassName('arrow')).map((item)=>{
      item.classList.toggle('invisible')
   });

   const table = document.getElementsByClassName("table-wrapper")[0];
   let switching = true;
   let dir = "asc";
   let shouldSwitch;
   let switchcount =0;
   let rows = document.getElementsByClassName('faker-row');

   while (switching){
      console.log (dir)
      switching =false;
      let line =0;
      for (let i =0; i<rows.length-1;i+=1) {
         shouldSwitch = false;
         let info1 = rows[i].children[indexOfColumn];
         let info2 = rows[i + 1].children[indexOfColumn];
         if (dir === "asc") {
            //console.log (info1.innerHTML.toLowerCase());
            if (info1.innerHTML.toLowerCase() > info2.innerHTML.toLowerCase()) {
               // console.log ('switch');
               shouldSwitch = true;
               line = i;
                break;
            }
         } else if (dir === "desc") {
            if (info1.innerHTML.toLowerCase() < info2.innerHTML.toLowerCase()) {
               shouldSwitch = true;
               line = i;
                break;
            }
         }
      }
         if (shouldSwitch){
            rows[line].parentNode.insertBefore(rows[line + 1], rows[line]);
            switching = true;
            switchcount ++;
         }
         else {
            if ( switchcount ===0 && dir ==='asc'){
               dir = "desc";
               switching = true;
            }


         }

   }
}
