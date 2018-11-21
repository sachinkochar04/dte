import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import TableComponent from '../Common/TableComponent.jsx'
class ManageAvailabilityCodes extends Component{
    constructor(props){
        super(props);
        this.state={
            code:'',
            records:[],
            header:[]
        }

    }

    componentDidMount(){
        let header = [
            {
                name:'Availability Code',
                key : 'code'
            },
            {
                name:'Description',
                key : 'description'
            },

        ]
        let dummyRecords = [
            {
                code:'8',
                description:'OffDay',
            },
            {
                code:'9',
                description:'OffDay',
            },
            
        ];
        this.setState({ records: dummyRecords, header })
    }

    render(){
        let { code, header, records } = this.state;
        return(
            <Container>
                <Row>
                    <Col sm="12" md="12" className="text-center bb-2 p-4 mb-3">
                        <h1>Manage Availability Codes</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md="12" className="p-4">
                        <h1>Add New Code</h1>
                    </Col>
                    <Col sm="12" md="1">
                        <p className="font-small">Code</p>
                        <input name="code" type="text" value={ code } className="mx-w-100 p-2"/>
                    </Col>
                    <Col sm="12" md="3" className="pt-2">
                        <input name="code" type="text" value={ code } className="w-100 mt-4 p-2" placeholder="Description"/>
                    </Col>
                    <Col sm="12" md="2" className="pt-2">
                        <button name="code" type="text" value={ code } className="mx-w-100 btn-black mt-4">Add Code</button>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md="12" className="mb-3 mt-4">
                        <TableComponent header={ header } records={ records } editAction deleteAction />
                    </Col>
                </Row>
            </Container>
        )
    }
} 

export default ManageAvailabilityCodes;