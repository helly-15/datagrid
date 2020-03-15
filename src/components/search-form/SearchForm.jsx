import React from "react";
import './SearchForm.css'
import ColorSelect from "../color-select/colorSelect";

export default function SearchForm(props){
   let {onSearch, onChecked, onColorChange, color, virtualize, onVirtualize, onRowDelete, data} = props;
    let csvContent = "data:text/csv;charset=utf-8,"
        + data.map(e =>
        { let lineOfData ='';
            for (let key in e){
        lineOfData=lineOfData+e[key]+','
    }
            return lineOfData
        }
            ).join("\n");
    let encodedUri = encodeURI(csvContent);
   return(
        <div className="input-group ">
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <input type="checkbox" defaultChecked={virtualize} className='checkbox' aria-label="Checkbox for virtualization" onClick={(e)=>onVirtualize(e.target.checked)} />
                    <div className='check-box'>
                        <span className="h6">
                            Switch virtualization
                        </span>
                    </div>
                </div>
            </div>
            <input type="text" className="form-control input-top" placeholder="Search..." aria-label="Text input with checkbox" onKeyUp={(e)=>onSearch(e.target.value.toUpperCase())}/>
            <ColorSelect className='color-select' onColorChange = {onColorChange} color ={color}/>
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <input type="checkbox" className='checkbox' aria-label="Checkbox for in stock" onClick={(e)=>onChecked(e.target.checked)}/>
                    <div className='check-box'>
                        <span className="h6">
                            Show only available
                        </span>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-danger" onClick={()=>{onRowDelete([])}}>Delete row</button>
            <button type="button" className="btn btn-link" >
                <a href={encodedUri} download='sellers.csv'>
                    Export CSV
                </a>
            </button>
        </div>

)
}

