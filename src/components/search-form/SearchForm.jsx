import React from "react";
import './SearchForm.css'
import filterAvailability from "../../utils/filterAvailability";
import search from "../../utils/search";
import ColorSelect from "../color-select/colorSelect";

export default function SearchForm(props){
   let {onSearch, onChecked} = props;
    return(
        <div className="input-group ">
            <input type="text" className="form-control input-top" placeholder="Search..." aria-label="Text input with checkbox" onKeyUp={(e)=>onSearch(e.target.value.toUpperCase())}/>
            <ColorSelect className='color-select'/>
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

        </div>

)
}

