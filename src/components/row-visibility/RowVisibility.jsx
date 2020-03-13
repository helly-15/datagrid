import React from "react";
import './RowVisibility.css'
const classesOfColumns =["col-sm-1", "col-sm-1", "col-sm-2","col-sm-2","col-sm-1","col-sm-2","col-sm-1","col-sm-2"];

export default function RowVisibility(props) {
    let {onHideColumn, hiddenColumn} = props;
    let isChecked =(index)=>{
        return !hiddenColumn.includes(index)
    }
    return(
        <table className="container-fluid row-visibility-container">
            <thead >
            <tr className="row header-row">
                { classesOfColumns.map (
                    (name, index) => (
                        <th className={
                            hiddenColumn.includes(index)?'hidden': classesOfColumns[index]}
                            key={index + name}>
                            <input type="checkbox" checked={isChecked(index)} className='checkbox' aria-label="Checkbox for column" onClick={(e)=>{

                                if (hiddenColumn.includes(index)){
                                    for( let i = 0; i < hiddenColumn.length; i++){
                                        if ( hiddenColumn[i] === index) { hiddenColumn.splice(i, 1);
                                        }}
                                    onHideColumn(hiddenColumn)
                                }
                                else onHideColumn(hiddenColumn.concat(index))}} />
                        </th>

                    )
                ) }


            </tr>

            </thead>
        </table>
    )

}
