
export default function sortTable(indexOfColumn,indexOfPreviouslyClicked) {

   let switching = true;
   let dir = "asc";
   let shouldSwitch, compared1, compared2, parentCompared1, parentCompared2;
   let switchcount =0;
   let rows = document.getElementsByClassName('faker-row');

   while (switching){
      switching =false;
      let line =0;
      for (let i =0; i<rows.length-1;i+=1) {
         shouldSwitch = false;
         let parentInfo1 = rows[i].children[indexOfPreviouslyClicked];
         let parentInfo2 = rows[i + 1].children[indexOfPreviouslyClicked];
         let info1 = rows[i].children[indexOfColumn];
         let info2 = rows[i + 1].children[indexOfColumn];
         if (parseInt(info1.innerHTML)){
             compared1 = parseInt(info1.innerHTML);
             compared2 = parseInt(info2.innerHTML);
             parentCompared1 =parseInt(parentInfo1.innerHTML);
             parentCompared2=parseInt(parentInfo2.innerHTML);
         }
         else {
             compared1 = info1.innerHTML.toLowerCase();
             compared2 = info2.innerHTML.toLowerCase();
             parentCompared1 =parentInfo1.innerHTML.toLowerCase();
             parentCompared2=parentInfo2.innerHTML.toLowerCase();
         }
         if (!indexOfPreviouslyClicked){
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
         else{
            if (dir==='asc'){
               if (compared1>compared2){
                  if (parentCompared1===parentCompared2){
                     shouldSwitch = true;
                     line = i;
                     break;
                  }
               }
            }
            if (dir==='desc'){
               if (compared1<compared2){
                  if (parentCompared1===parentCompared2){
                     shouldSwitch = true;
                     line = i;
                     break;
                  }
               }
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

export function sortTableData(indexOfColumn,indexOfPreviouslyClicked, tableData, namesOfColumns) {
    const key = namesOfColumns[indexOfColumn];
    tableData.sort((a, b) => a[key].toString().localeCompare(b[key].toString(), undefined, {numeric: true, sensitivity: 'base'}));
}
