import React from 'react';
import './dataGrid.css';
import faker from 'faker';

function tableWithData (rows){
    let table =[];
    for (let i=0;i<rows;i+=1){
        let children =[];
            children.push (<div className="col-sm" > <img src ={faker.internet.avatar()}/> </div>)
            children.push (<div className="col-sm" > {faker.name.firstName()} </div>)
            children.push (<div className="col-sm" > {faker.commerce.productName()} </div>)
            children.push (<div className="col-sm" > {faker.commerce.price()} </div>)
            children.push (<div className="col-sm" > {`${faker.address.streetAddress()}+/n+${faker.address.city()}+/n + ${faker.address.state()}`} </div>)
            children.push (<div className="col-sm" > {faker.commerce.productMaterial()} </div>)
            children.push (<div className="col-sm" > <a href ={faker.internet.email()}/> </div>)
        table.push (<div className='row' key ={i}> {children}</div> )
    }
    return table
}


export default function Datagrid (props){
    const namesOfColumns =['Avatar','Name','Product name', 'Price', 'Product adjective','Product material','e-mail'];
    const {numOfRows, numOfColumns} = props;
    return(
        <div className="container-fluid">
            <>

                <div className="row header-row">
                    { namesOfColumns.map((name,index)=>(
                        <div className="col-sm" key={index+name}>
                            {name}
                        </div>
                    ))}
                </div>
                {tableWithData(numOfRows,numOfColumns)}
            </>


        </div>


    )
}
