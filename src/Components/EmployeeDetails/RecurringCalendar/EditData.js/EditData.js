import React,{Component} from 'react'
import Aux from './../../../../Assets/HOC/Aux1'
import { TabContent, TabPane, Nav, NavItem, NavLink,Form, Input,Button ,Container, Row, Col, Table } from 'reactstrap';
import { FaPen, FaArrowRight } from 'react-icons/fa';



class Edit1Data extends Component{
  state = {
    CurrentSchedule:[],
    editBstate : true ,
  }

  componentDidMount(){
    let CurrentSchedule = [
      {
          "id" : "1",
          "TransferDate" : "Availablity",
          "Mondays" : "  00",
          "Tuesdays" : "00",
          "Wednesdays" : "00 ",
          "Thursdays" : "00 ",
          "Fridays" : "00",
          "Saturdays" : "00",
          "Sundays" : "00",

      },
      {
          "id" : "2",
          "TransferDate" : "Off On Time",
          "Mondays" :  "  No",
          "Tuesdays" : "No",
          "Wednesdays" : "No",
          "Thursdays" : "No",
          "Fridays" : "No",
          "Saturdays" : "No",
          "Sundays" : "No",

      },
      {
          "id" : "3",
          "TransferDate" : "Start Time",
          "Mondays" : "  1000",
          "Tuesdays" : "1000",
          "Wednesdays" : "1000",
          "Thursdays" : "1000",
          "Fridays" : "1000",
          "Saturdays" : "1000",
          "Sundays" : "1000",

      }
  ]
  this.setState({
    CurrentSchedule
  })
}
  editSchedule=()=>{

    const eButton = this.state.editBstate ;
    this.setState({editBstate:!(eButton)})
    console.log('Add new entry to the log '+eButton);
  }

  cancelSchedule = ()=>{
    const eButton = this.state.editBstate ;
    this.setState({editBstate:!(eButton)})

  }


  render(){
    console.log(this.props.pro);

    let {CurrentSchedule} = this.state
  return(
    <Aux>
    <Container>
    <Row>
    <Col md="12" sm="12" className="crw">
        <Table striped size="sm">
            <thead>
            <tr>
                <th className="CurrentSchedule"></th>
                <th className="CurrentSchedule">Mondays</th>
                <th className="CurrentSchedule">Tuesdays</th>
                <th className="CurrentSchedule">Wednesdays</th>
                <th className="CurrentSchedule">Thursdays</th>
                <th className="CurrentSchedule">Fridays</th>
                <th className="CurrentSchedule">Saturdays</th>
                <th className="CurrentSchedule">Sundays</th>

            </tr>

            </thead>
              {(CurrentSchedule && CurrentSchedule.length > 0) ?
                (<tbody>
                { CurrentSchedule.map((current,i)=>{
                  return(
                    <tr key={i}>
                      <td><strong>{current.TransferDate}</strong></td>
                      <td>{current.Mondays}</td>
                      <td>{current.Tuesdays}</td>
                      <td>{current.Wednesdays}</td>
                      <td>{current.Thursdays}</td>
                      <td>{current.Fridays}</td>
                      <td>{current.Saturdays}</td>
                      <td>{current.Sundays}</td>

                    </tr>
                  )
              })}
              </tbody>
            ):(<></>
            )}
        </Table>
        </Col >
        </Row>
        <Row >
          <Col className="text-right">
          <button className="eb ebc"   onClick={this.cancelSchedule} > X cancel</button>
            <button className="ebn" onClick={this.editSchedule} ><FaPen />Create Recurring Schedule</button>
          </Col>
        </Row>
          </Container>
    </Aux>
  )}
}

export default Edit1Data ;
