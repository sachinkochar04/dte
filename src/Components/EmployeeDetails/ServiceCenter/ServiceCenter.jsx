import React from 'react'
import { FormGroup , Container, Col, Input, Row, Table } from 'reactstrap';
import { remove } from 'lodash';
import './ServiceCenter.css' ;
import { data } from './../DummyEmployeeDetail' ;


class ServiceCenter extends React.Component {
  constructor(props){
    super(props) ;

    this.state = {
      transferTo : ['State1','State2','State3','State4','State5'],
      UpcomingTransfers : [],
      TransferHistory : []
    }
  }

  componentDidMount(){

    let TransferHistory = [
      {
          "id" : "1",
          "TransferDate" : "August 31st,2017",
          "Transfer" : "Trombley -> Ann Arbor",
          "InitiatedBy" : "Barry Zuckerkorn",
          "CreatedOn" : "August 1st,2017 ",
      },
      {
          "id" : "2",
          "TransferDate" : "July 21st,2017",
          "Transfer" : "Trombley -> Redford",
          "InitiatedBy" : "Barry Zuckerkorn",
          "CreatedOn" : "July 1st,2017 ",
      },
      {
          "id" : "3",
          "TransferDate" : "June 12th,2017",
          "Transfer" : "Redford -> Trombley",
          "InitiatedBy" : "Toney Wonder",
          "CreatedOn" : "June 1st,2017 ",
      }
  ]

  let UpcomingTransfers = [
    {
        "id" : "1",
        "TransferDate" : "September 1st,2017",
        "Transfer" : "Ann Arbor -> Trombley",
        "InitiatedBy" : "Barry Zuckerkorn",
        "CreatedOn" : "August 1st,2017 ",
        "Delete" : "x",
    },
    {
        "id" : "2",
        "TransferDate" : "September 15th,2017",
        "Transfer" : "Trombley -> Ann Arbor",
        "InitiatedBy" : "Barry Zuckerkorn",
        "CreatedOn" : "August 1st,2017 ",
        "Delete" : "x",
    },
    {
        "id" : "3",
        "TransferDate" : "September 30th,2017",
        "Transfer" : "Redford -> Trombley",
        "InitiatedBy" : "Toney Wonder",
        "CreatedOn" : "August 1st,2017 ",
        "Delete" : "x",
    }]
    this.setState({
      UpcomingTransfers, TransferHistory
    })
  }

  delete = (id) =>{
    let { UpcomingTransfers } = this.state
    remove(UpcomingTransfers,((tranfer)=>{
      return tranfer.id === id
    }))
    this.setState({ UpcomingTransfers });
  }


  render(){
    let { UpcomingTransfers, transferTo, TransferHistory } = this.state
    console.log(UpcomingTransfers.length);
    return (
      <Container className="top">

        <Row className="mt-5">
          <Col sm="12" md="12" className="mt-3">
            <h2><p>New Service Center Transfer</p> </h2>
          </Col>
          <Col md="2" sm="12">
          <FormGroup>
          <p className="mb-0"><small>Tranfer to</small></p>
           <Input type="select" name="select" id="exampleSelect">
           { transferTo.map((option,i)=>{
             return(
              <option key={i}>{ option }</option>
             )
           }) }
           </Input>
         </FormGroup>
          </Col>
          <Col md="2" sm="12">
            <FormGroup>
            <p className="mb-0"><small>Tranfer Date</small></p>
             <Input type="date" name="select" id="exampleSelect" />
           </FormGroup>
          </Col>
          <Col md="3" sm="12" >
            <button className="sec" >Create Tranfer</button>
          </Col>
        </Row>
        <Row>
                      <Col md="12" sm="12" className="crw">
                          <h2 className="mb-4">Crew Management Users</h2>
                          <Table striped size="sm">
                              <thead>
                              <tr>
                                  <th className="addEditUserTable_header">TRANSFER DATE</th>
                                  <th className="addEditUserTable_header">TRANSFER</th>
                                  <th className="addEditUserTable_header">INITIATED BY</th>
                                  <th className="addEditUserTable_header">CREDITS ON</th>
                                  <th className="addEditUserTable_header">Delete</th>

                              </tr>

                              </thead>
                                {(UpcomingTransfers && UpcomingTransfers.length > 0) ?
                                  (<tbody>
                                  { UpcomingTransfers.map((transfer,i)=>{
                                    return(
                                      <tr key={i}>
                                        <td>{transfer.TransferDate}</td>
                                        <td>{transfer.Transfer}</td>
                                        <td>{transfer.InitiatedBy}</td>
                                        <td>{transfer.CreatedOn}</td>
                                        <td><span className="dc" color="link" onClick={()=>{this.delete( transfer.id )}}>{transfer.Delete}</span></td>
                                      </tr>
                                    )
                                })}
                                </tbody>
                              ):( <tbody><tr><td></td><td></td>
                                <td className="text-center">No data found.</td><td></td><td></td></tr></tbody>
                              )}
                          </Table>
                      </Col>

                      <Col md="12" sm="12" className="mt-5">
                          <h2 className="mb-4"> Service Center Transfer History</h2>
                          <Table striped size="sm">
                              <thead>
                              <tr>
                                  <th className="addEditUserTable_header">TRANSFER DATE</th>
                                  <th className="addEditUserTable_header">TRANSFER</th>
                                  <th className="addEditUserTable_header">INITIATED BY</th>
                                  <th className="addEditUserTable_header">CREDITS ON</th>
                              </tr>
                              </thead>
                              <tbody>
                                {data && TransferHistory.map((history,i)=>{
                                  return(
                                    <tr key={i}>
                                    <td>{history.TransferDate}</td>
                                    <td>{history.Transfer}</td>
                                    <td>{history.InitiatedBy}</td>
                                    <td>{history.CreatedOn}</td>
                                    </tr>
                                  )
                                })}


                              </tbody>
                          </Table>
                      </Col>
                  </Row>
      </Container>
)
  }
}

export default ServiceCenter
