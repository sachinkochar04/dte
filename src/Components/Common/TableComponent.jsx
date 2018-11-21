import React, { Component } from 'react';
import { Table } from 'reactstrap';

class TableComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let { header, records, editAction, deleteAction } = this.props;
        return(
            <Table>
                <thead> 
                    <tr className="text-left">
                        { (header && header.length > 0) && (
                        
                            header.map((data,i)=>{
                                return(
                                    <th className="addEditUserTable_header">{ data.name }</th>
                                )
                            })
                             
                        )  }
                        { (editAction || deleteAction) && (
                                <th className="addEditUserTable_header">Actions</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                        
                    { records && records.map((record,i) =>{
                        return(
                            < tr key={ i }>
                            { header.map((data, i)=>{
                                console.log('data',data)
                                console.log('records',record)
                                return(
                                        <td className="addEditUserTable_tableCell addEditUserTable_emplyee_id">{ record[data.key] }</td>
                                    )
                                })}
                                { (editAction || deleteAction)  && (
                                    <td className="addEditUserTable_tableCell addEditUserTable_emplyee_id">{ editAction && ( <span>Edit |</span> ) }{ deleteAction && ( <span> Delete</span> ) }</td>
                                ) }
                            </tr>
                            )
                        }) }
                        
                </tbody>
            </Table>
        )
    }

}

export default TableComponent;