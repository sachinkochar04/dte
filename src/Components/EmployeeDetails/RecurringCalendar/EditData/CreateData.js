import React,{Component} from 'react'
import Aux from './../../../../Assets/HOC/Aux1'
import { Input,Container, Row, Col, Table, FormGroup} from 'reactstrap';
import { FaCalendar } from 'react-icons/fa';



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
  editSchedule = () => {
    this.setState({editBstate: true })
  }

  cancelSchedule = () => {
    this.props.onClose();
  }

  cancelSchedule = () => {
    this.props.onClose();
  }


  render(){
    console.log("props: ", this.props);

    let {CurrentSchedule} = this.state
  return(
    <Aux>
    <Container>
    <Row className="mt-5">
    <Col md="12" sm="12" className="crw">
      <h4>Upcoming Recurring Schedule 3</h4>
    </Col>
        <Col sm="12" md="2"className="pr-0 cdrA" >

            <p className="mb-0">Schedule Begins</p>
            <input type="date"/>
                </Col>
              <Col className="cdr"><FaCalendar className="mt-4" />
            <div className="con">  <i className="mr-o"><small>This will cause Upcoming Recurring Schedule 2 to end on<strong> Date</strong> </small></i></div>

        </Col>

      </Row>
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
                    <tbody>
                    <tr key={2}>

<td classes="mt-2="center><strong><div className="dv">Availablity</div></strong></td>
<td><FormGroup><Col sm={1}><Input type="select" name="select" id="exampleSelect" className="ipe">

            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input></Col></FormGroup></td>

<td><FormGroup><Col sm={1}><Input type="select" name="select" id="exampleSelect" className="ipe">

                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input></Col></FormGroup></td>

<td><FormGroup><Col sm={1}><Input type="select" name="select" id="exampleSelect" className="ipe">

                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </Input></Col></FormGroup></td>

<td><FormGroup><Col sm={1}><Input type="select" name="select" id="exampleSelect" className="ipe">

                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                        </Input></Col></FormGroup></td>

<td><FormGroup><Col sm={1}><Input type="select" name="select" id="exampleSelect" className="ipe">

                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                  </Input></Col></FormGroup></td>
<td><FormGroup><Col sm={1}><Input type="select" name="select" id="exampleSelect" className="ipe">

                                                              <option>1</option>
                                                              <option>2</option>
                                                              <option>3</option>
                                                              <option>4</option>
                                                              <option>5</option>
                                                            </Input></Col></FormGroup></td>
<td><FormGroup><Col sm={1}><Input type="select" name="select" id="exampleSelect" className="ipe">

                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                      </Input></Col></FormGroup></td>

                    </tr>

                    <tr key={3}>
                    <td classes="mt-2="center><strong><div className="dv">On Off Time</div></strong></td>


                    <td><FormGroup><Col sm={1}><Input type="select" name="select" id="exampleSelect" className="ipe">

                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Input></Col></FormGroup></td>

                    <td><FormGroup><Col sm={1}><Input type="select" name="select" id="exampleSelect" className="ipe">

                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input></Col></FormGroup></td>

                    <td><FormGroup><Col sm={1}><Input type="select" name="select" id="exampleSelect" className="ipe">

                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </Input></Col></FormGroup></td>

                    <td><FormGroup><Col sm={1}><Input type="select" name="select" id="exampleSelect" className="ipe">

                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                        </Input></Col></FormGroup></td>

                    <td><FormGroup><Col sm={1}><Input type="select" name="select" id="exampleSelect" className="ipe">

                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                  </Input></Col></FormGroup></td>
                    <td><FormGroup><Col sm={1}><Input type="select" name="select" id="exampleSelect" className="ipe">

                                                              <option>1</option>
                                                              <option>2</option>
                                                              <option>3</option>
                                                              <option>4</option>
                                                              <option>5</option>
                                                            </Input></Col></FormGroup></td>
                    <td><FormGroup><Col sm={1}><Input type="select" name="select" id="exampleSelect" className="ipe">

                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                      </Input></Col></FormGroup></td>

                    </tr>


                    <tr key={4}>

      <td classes="mt-2="center><strong><div className="dv">Start Time</div></strong></td>
      <td><FormGroup><Col sm={1}><input  name="select" id="exampleSelect" className="ipe1">

          </input></Col></FormGroup></td>

      <td><FormGroup><Col sm={1}><input  name="select" id="exampleSelect" className="ipe1">


                    </input></Col></FormGroup></td>

      <td><FormGroup><Col sm={1}><input  name="select" id="exampleSelect" className="ipe1">


                              </input></Col></FormGroup></td>

      <td><FormGroup><Col sm={1}><input  name="select" id="exampleSelect" className="ipe1">

                                        </input></Col></FormGroup></td>

      <td><FormGroup><Col sm={1}><input  name="select" id="exampleSelect" className="ipe1">


                                                  </input></Col></FormGroup></td>
      <td><FormGroup><Col sm={1}><input  name="select" id="exampleSelect" className="ipe1">


                                                            </input></Col></FormGroup></td>
      <td><FormGroup><Col sm={1}><input  name="select" id="exampleSelect" className="ipe1">


                                                                      </input></Col></FormGroup></td>

                    </tr>

              </tbody>

        </Table>
        </Col >
        </Row>
        <Row >
          <Col className="text-right">
          <button className="eb ebc"   onClick={this.cancelSchedule} > X cancel</button>
            <button className="ebn" onClick={this.editSchedule} >Create Recurring Schedule</button>
          </Col>
        </Row>
          </Container>
    </Aux>
  )}
}

export default Edit1Data ;
