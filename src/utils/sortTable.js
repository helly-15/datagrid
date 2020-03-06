
export default function sortTable(indexOfColumn) {
   Array.from (document.getElementsByClassName('arrow')).map((item)=>{
    return  item.classList.toggle('invisible')
   });
   let switching = true;
   let dir = "asc";
   let shouldSwitch, compared1, compared2;
   let switchcount =0;
   let rows = document.getElementsByClassName('faker-row');

   while (switching){
      switching =false;
      let line =0;
      for (let i =0; i<rows.length-1;i+=1) {
         shouldSwitch = false;
         let info1 = rows[i].children[indexOfColumn];
         let info2 = rows[i + 1].children[indexOfColumn];
         //console.log (info1.innerHTML.slice(-2))
         if (parseInt(info1.innerHTML)){

             compared1 = parseInt(info1.innerHTML);
             compared2 = parseInt(info2.innerHTML);
             //console.log(compared1);
         }
         else {
             compared1 = info1.innerHTML.toLowerCase();
             compared2 = info2.innerHTML.toLowerCase();
         }

         if (dir === "asc") {
            if (compared1 > compared2) {
               shouldSwitch = true;
               line = i;
                break;
            }
         } else if (dir === "desc") {
            if (compared1 < compared2) {
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
