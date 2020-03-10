import React, {useState} from 'react';
import './dataGrid.css';
import {sortTableData2} from "../../utils/sortTable";
import arrowUp from './arrowUp.svg';
import arrowDown from './arrowDown.png';
import { FixedSizeList as List } from 'react-window';

const namesOfColumns =['seller','name','product name', 'price', 'color','in stock','email'];
const classesOfColumns =["col-sm-1", "col-sm-2","col-sm-2","col-sm-1","col-sm-2","col-sm-1","col-sm-3"];

//let tableDataVar = null;

function tableWithData (data){
    let tableRealData = data;
    //console.log (Object.keys(data[0]).length)
    let table = [];
    for (let i=0;i<data.length;i+=1){

        let children =[];
        for (let j=0; j<Object.keys(data[0]).length; j+=1){
            children.push (<td className={classesOfColumns[j]} key ={i+j}> {tableRealData[i][namesOfColumns[j]]} </td>)
        }
        table.push (<tr className='row faker-row' key ={i}>{children}</tr> )
    }
    let Row = ({ data,index, style }) => {
        const item = data[index];
        return (
            <div
                style={style}
            >
                {item}
            </div>
        );
    };
    const Example = () => (
        <List
            height={500}
            itemCount={table.length}
            itemData = {table}
            itemSize={150}
            width={'100%'}
        >
            {Row}
        </List>
    );
    return <Example/>
}

function sortTableWrapper(indexOfPreviouslyClicked, data, dir) {
    Array.from (document.getElementsByClassName('arrow')).map((item)=>{
        return  item.classList.toggle('invisible')
    });
    if (indexOfPreviouslyClicked.length === 0) return;
    sortTableData2(indexOfPreviouslyClicked, data, dir)
}

export default function Datagrid (props){
    console.log (props.dir);
    console.log (props.shift);
    let {dir, onSort, data, onShift, shift} = props;
    let toggled =[];
  //  let tableHasChanges = false;
   // const [ClickedCells, setClickedCells]= useState([]);
   // const [TableData, setTableData] = useState(tableHasChanges);
    //const [Dir, setDir] = useState(true);
    // sortTableWrapper(shift,data,dir);

    Array.from (document.getElementsByClassName('arrow')).map((item)=>{
        return  item.classList.toggle('invisible')
    });

    return(
        <div className='table-responsive'>
        <table className="container-fluid table-wrapper table table-hover">
            <thead>
            <tr className="row header-row">
                { namesOfColumns.map((name,index)=>(
                    <th className={classesOfColumns[index]}
                        key={index+name}
                        onClick = {(e)=>{
                            if (!e.shiftKey) {
                                onShift([],[index]);
                                Array.from(document.getElementsByClassName("sortAim")).map((element)=>{
                                    return element.classList.remove('sortAim');
                                });
                                if (toggled.length===0)
                                {
                                    e.target.classList.add('sortAim');
                                    toggled.push(e.target);
                                }
                                else if (e.target !==toggled[0])
                                {
                                    toggled[0].classList.remove('sortAim');
                                    toggled[0]= e.target;
                                    e.target.classList.add('sortAim');
                                }
                                else{
                                    toggled[0].classList.remove('sortAim');
                                    toggled=[];
                                }
                                if (shift.includes(index)) {
                                    onSort(!dir);
                                } else {
                                    onSort(true);
                                }
                              //  setTableData(!TableData);
                            }
                            else{
                                if (shift.length===0){
                                    onShift(shift,[index]);
                                    onSort(!dir);
                                   // setTableData(!TableData);
                                }
                                else{
                                    onShift(shift,[index]);
                                    if(e.target.classList.contains('sortAim')){
                                        e.target.classList.remove('sortAim');
                                    }
                                    else e.target.classList.add('sortAim');
                                   // setTableData(!TableData);
                                }
                            }
                    }}>
                        <img src={arrowDown} alt ='<' className ='arrow invisible'/>
                        {name}
                        <img src={arrowUp} alt ='>' className = 'arrow '/>
                    </th>
                ))}
            </tr>
            </thead>
               <tbody>
                   {tableWithData(data)}
               </tbody>
        </table>
</div>
    )
}
