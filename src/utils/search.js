
export function searchMatches(value, data) {
    let results = [];
      for(let i=0; i<data.length; i++) {
         // console.log (data[i])
        for(let key in data[i]) {
           // console.log (key!=='seller')
            if (key!=='seller'&&key!=='email'){
                //console.log (data[i][key])
                if(data[i][key].toUpperCase().indexOf(value.toUpperCase())!==-1) {
                    results.push(data[i]);
                    break;
                }
            }


        }
    }
      if (results.length !==0){
          return results;
      }
      else return data;
}
