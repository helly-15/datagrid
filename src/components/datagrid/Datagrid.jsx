import React from 'react';
import './dataGrid.css';
import faker from 'faker';
import sortTable from "../../utils/sortTable";
import arrowUp from './arrowUp.svg';
import arrowDown from './arrowDown.png';

const namesOfColumns =['seller','name','product name', 'price', 'address','in stock','email'];
const classesOfColumns =["col-sm-1", "col-sm-2","col-sm-2","col-sm-1","col-sm-2","col-sm-1","col-sm-3"];

function tableWithData (rows, columns){

    let table =[];
    for (let i=0;i<rows;i+=1){
        let children =[];
        const dataInCells = {
            "seller": <img alt ='avatar' src ={faker.internet.avatar()}/>,
            'name': faker.name.firstName(),
            'product name': faker.commerce.productName(),
            'price': faker.commerce.price().slice(0,-3)+'$',
            'address': faker.address.streetAddress()+' '+faker.address.city()+' '+faker.address.state(),
            'in stock':faker.random.boolean()?'yes':"no",
            'email':<a href ="#" > {faker.internet.email()}</a>
        };
        for (let j=0; j<columns; j+=1){
            children.push (<td className={classesOfColumns[j]} key ={i+j}> {dataInCells[namesOfColumns[j]]} </td>)
        }

        table.push (<tr className='row faker-row' key ={i}>{children}</tr> )
    }
    return table
}


export default function Datagrid (props){
    let toggled =[];
    const {numOfRows, numOfColumns} = props;
    return(
        <div className='table-responsive'>


        <table className="container-fluid table-wrapper table table-hover">
            <thead>
            <tr className="row header-row">
                { namesOfColumns.map((name,index)=>(

                    <th className={classesOfColumns[index]} key={index+name} onClick = {(e)=>{
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

                        sortTable(index)
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
