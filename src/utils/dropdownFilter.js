
export default function dropDownFilter(chosenColors, data) {
    if (!chosenColors){ return data};
    if (chosenColors.length===0){
        return data;
    }
    let results = [];
    let colors =[];
    for (let i=0; i<chosenColors.length; i++){
        colors.push(chosenColors[i].value);
    }
    for(let i=0; i<data.length; i++) {
        for(let j=0; j<colors.length;j++) {
            if (data[i].color.toUpperCase() ===colors[j].toUpperCase()){
                results.push (data[i]);
                break;
            }
        }
    }
    if(results.length !==0){
        return results;
    }
    else return data;

}
