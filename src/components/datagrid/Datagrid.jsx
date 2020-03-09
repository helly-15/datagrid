import React, {useState} from 'react';
import './dataGrid.css';
import faker from 'faker';
import sortTable, {sortTableData} from "../../utils/sortTable";
import arrowUp from './arrowUp.svg';
import arrowDown from './arrowDown.png';
import { FixedSizeList as List } from 'react-window';

const namesOfColumns =['seller','name','product name', 'price', 'color','in stock','email'];
const classesOfColumns =["col-sm-1", "col-sm-2","col-sm-2","col-sm-1","col-sm-2","col-sm-1","col-sm-3"];

let tableDataVar = null;

function tableData (rows){
    if (tableDataVar) return tableDataVar;

    let table =[];
    for (let i=0;i<rows;i+=1){
        const dataInCells = {
            'seller': <img alt ='avatar' src ={faker.internet.avatar()}/>,
            'name': faker.name.firstName(),
            'product name': faker.commerce.productName(),
            'price': faker.commerce.price().slice(0,-3) + '$',
            'color': faker.commerce.color(),
            'in stock':faker.random.boolean()?'yes':"no",
            'email':<a href ="#" > {faker.internet.email()}</a>
        };

        table.push (dataInCells)
    }
    tableDataVar = table;
    return tableDataVar;
}

function tableWithData (rows, columns){
    let tableRealData = tableData(rows, columns);
    let table = [];
    for (let i=0;i<rows;i+=1){
        let children =[];
        for (let j=0; j<columns; j+=1){
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
//TODO this variable should go to Redux state
let arrClickedCells ;

function sortTableWrapper(indexOfColumn, indexOfPreviouslyClicked, dataGrid) {
    Array.from (document.getElementsByClassName('arrow')).map((item)=>{
        return  item.classList.toggle('invisible')
    });
    sortTableData(indexOfColumn,indexOfPreviouslyClicked, tableDataVar, namesOfColumns);
}

export default function Datagrid (props){
    let toggled =[];
    let tableHasChanges = false;
    const [TableData, setTableData] = useState(tableHasChanges);
    const {numOfRows, numOfColumns} = props;
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
                                arrClickedCells = index;
                                Array.from(document.getElementsByClassName("sortAim")).map((element)=>{
                                    return element.classList.remove('sortAim');
                                });
                                if (toggled.length===0){

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
                                    arrClickedCells=false;
                                }
                                sortTableWrapper(index,0)
                                setTableData(!TableData);
                            }
                            else{
                                if (!arrClickedCells){
                                    arrClickedCells=index;
                                    sortTableWrapper(index,0)
                                    setTableData(!TableData);
                                }
                                else{
                                    if(e.target.classList.contains('sortAim')){
                                        e.target.classList.remove('sortAim');
                                    }
                                    else e.target.classList.add('sortAim');
                                    sortTableWrapper(index,arrClickedCells)
                                    setTableData(!TableData);
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
                   {tableWithData(numOfRows,numOfColumns)}
               </tbody>
        </table>
</div>

    )
}
