import React from 'react';
import './dataGrid.css';
import faker from 'faker';
import sortTable from "../../utils/sortTable";
import arrowUp from './arrowUp.svg';
import arrowDown from './arrowDown.png';

const namesOfColumns =['seller','name','product name', 'price', 'address','available from','email'];
const classesOfColumns =["col-sm-1", "col-sm-2","col-sm-2","col-sm-1","col-sm-2","col-sm-1","col-sm-3"];

function tableWithData (rows, columns){

    let table =[];
    for (let i=0;i<rows;i+=1){
        let children =[];
        const dataInCells = {
            "seller": <img alt ='avatar' src ={faker.internet.avatar()}/>,
            'name': faker.name.firstName(),
            'product name': faker.commerce.productName(),
            'price': faker.commerce.price().slice(0,-3)+"$",
            'address': faker.address.streetAddress()+' '+faker.address.city()+' '+faker.address.state(),
            'available from':faker.date.month(),
            'email':<a href ="" > {faker.internet.email()}</a>
        };
        for (let j=0; j<columns; j+=1){
            children.push (<div className={classesOfColumns[j]} key ={i+j}> {dataInCells[namesOfColumns[j]]} </div>)
        }

        table.push (<div className='row faker-row' key ={i}> {children}</div> )
    }
    return table
}


export default function Datagrid (props){

    const {numOfRows, numOfColumns} = props;
    return(
        <div className="container-fluid table-wrapper">
            <>
                <div className="row header-row">
                    { namesOfColumns.map((name,index)=>(
                        <>
                        <div className={classesOfColumns[index]} key={index+name} onClick = {()=>sortTable(index)}>
                            <img src={arrowDown} className ='arrow invisible'/>
                            {name}
                            <img src={arrowUp} className = 'arrow '/>

                        </div>


                        </>
                    ))}
                </div>
                {tableWithData(numOfRows,numOfColumns)}
            </>


        </div>


    )
}
