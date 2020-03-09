export function sortTableData2(indexesOfColumn, tableData, namesOfColumns, dir) {
    const keys = indexesOfColumn.map(index => namesOfColumns[index]);

    let sorting = ()=> tableData.sort((a, b) => {
        const compare = (key) => {
            return a[key].toString().localeCompare(b[key].toString(), undefined, {numeric: true, sensitivity: 'base'})
        };

        for (let i = 0; i < keys.length; i++) {
            let result = compare(keys[i]);
            if (result !== 0) return result;
        }
        return 0;
    });
    if (dir===true){
        sorting();
    }
    if(dir===false){
        sorting().reverse();
    }
}
