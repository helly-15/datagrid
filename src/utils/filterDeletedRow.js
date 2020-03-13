export function filterDeletedRow(deletedRowNumbers, data) {
   return  data.filter(row=>{
       for (let i=0;i<deletedRowNumbers.length;i++){
           if(deletedRowNumbers[i]===row['id']){
               return false;
               break;
           }
       }
       return true;
       }
    );
}
