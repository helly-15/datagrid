import React from 'react';
import './dataGrid.css';
import faker from 'faker';
import sortTable from "../../utils/sortTable";
import arrowUp from './arrowUp.svg';
import arrowDown from './arrowDown.png';
import { FixedSizeList as List } from 'react-window';

const namesOfColumns =['seller','name','product name', 'price', 'color','in stock','email'];
const classesOfColumns =["col-sm-1", "col-sm-2","col-sm-2","col-sm-1","col-sm-2","col-sm-1","col-sm-3"];

function tableWithData (rows, columns){
    let table =[];
    let Row;
    for (let i=0;i<rows;i+=1){
        let children =[];
        const dataInCells = {
            "seller": <img alt ='avatar' src ={faker.internet.avatar()}/>,
            'name': faker.name.firstName(),
            'product name': faker.commerce.productName(),
            'price': faker.commerce.price().slice(0,-3)+'$',
            'color': faker.commerce.color(),
            'in stock':faker.random.boolean()?'yes':"no",
            'email':<a href ="#" > {faker.internet.email()}</a>
        };
        for (let j=0; j<columns; j+=1){
            children.push (<td className={classesOfColumns[j]} key ={i+j}> {dataInCells[namesOfColumns[j]]} </td>)
        }

        table.push (<tr className='row faker-row' key ={i}>{children}</tr> )

    }
    Row = ({ data,index, style }) => {
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

export default function Datagrid (props){
    let toggled =[];
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
                                sortTable(index,0)
                            }
                            else{
                                if (!arrClickedCells){
                                    arrClickedCells=index;
                                    sortTable(index,0)
                                }
                                else{
                                    if(e.target.classList.contains('sortAim')){
                                        e.target.classList.remove('sortAim');
                                    }
                                    else e.target.classList.add('sortAim');
                                    sortTable(index,arrClickedCells)
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
