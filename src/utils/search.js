
export function searchMatches(value, data) {
    let results = [];
      for(let i=0; i<data.length; i++) {
        for(let key in data[i]) {
            if (key!=='seller'&&key!=='email'){
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
