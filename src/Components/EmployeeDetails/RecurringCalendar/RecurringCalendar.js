import React,{Component} from 'react'
import {Container, Row, Col, Table } from 'reactstrap';
import { FaPen, FaArrowRight } from 'react-icons/fa';
import {remove} from "lodash"
import Backdrop from './../../../Assets/UI/Backdrop' ;
import Aux from './../../../Assets/HOC/Aux1'

class RecurringCalendar extends Component{
  constructor(props){
    super() ;
    this.state = {
      CurrentSchedule : [] ,
      UpcomingSchedule1 : [],
      UpcomingSchedule2 : [],
      PreviousSchedule1 : [],
      PreviousSchedule2 :[],
      editBstate : false,
      createBstate:false

    }
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

  let UpcomingSchedule1 = [
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
  let UpcomingSchedule2 = [
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
  let PreviousSchedule1 =  [
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
  let PreviousSchedule2 =  [
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
    CurrentSchedule ,UpcomingSchedule1 ,UpcomingSchedule2,PreviousSchedule1,PreviousSchedule2
  })
  }

        createSchedule=()=>{
          this.setState({createBstate: true})
        }

        editSchedule=()=>{
          this.setState({editBstate: true})
        }

        closeEditSchedule=()=>{
          this.setState({editBstate: false ,createBstate:false})
        }


  render(){
    let {CurrentSchedule, UpcomingSchedule1,UpcomingSchedule2,PreviousSchedule1,PreviousSchedule2,editBstate, createBstate} = this.state
    return(<>
          {((editBstate) ||(createBstate))?
            (<Aux>
            <Backdrop  showE={this.state.editBstate} showC={this.state.createBstate} CurrentSchedule={CurrentSchedule}
            onClose={ this.closeEditSchedule } />
            <Container className="top">
              <Row className="mt-5">
              <Col md="12" sm="12" className="crw">
                <h1>Current Recurring Schedules</h1>
              </Col>
                  <Col sm="12" md="2"className="pr-0 fr" >
                      <p class="mb-0">Schedule Begins</p>
                            <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
                          </Col>
                          <Col sm="12" md="1"><Col className="ar"><FaArrowRight className="mt-4" /></Col></Col>
                          <Col sm="12" md="2" className="fm">
                        <p class="mb-0" >Schedule End</p>
                    <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
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
                        <button className="eb" onClick={this.editSchedule } >   Edit Schedule</button>
                      </Col>
                    </Row>
                      <button className="cr" onClick={this.createSchedule}>+ Create New Recurring Schedule</button>
                      <Row className="mt-5">
                        <Col md="12" sm="12" className="crw">
                          <h1>Upcomming Recurring Schedules</h1>
                        </Col>
                          <Col className="mt-5">
                          <h5>Upcomming Recurring Schedules 1</h5>
                          </Col>
                          <Col sm="12" md="2"className="pr-0 bv">
                            <p class="mb-0">Schedule Begins</p>
                            <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
                          </Col>
                          <Col sm="12" md="1"><Col className="ar1 bv"><FaArrowRight className="mt-4" /></Col></Col>
                          <Col sm="12" md="2 bv">
                            <p class="mb-0">Schedule Ends</p>
                            <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
                          </Col>

                        <Col md="12" sm="12" className="crw">
                            <Table striped size="sm">
                                <thead>
                                <tr>
                                    <th className="UpcomingSchedule1"></th>
                                    <th className="UpcomingSchedule1"><strong>Mondays</strong></th>
                                    <th className="UpcomingSchedule1"><strong>Tuesdays</strong></th>
                                    <th className="UpcomingSchedule1"><strong>Wednesdays</strong></th>
                                    <th className="UpcomingSchedule1"><strong>Thursdays</strong></th>
                                    <th className="UpcomingSchedule1"><strong>Fridays</strong></th>
                                    <th className="UpcomingSchedule1"><strong>Saturdays</strong></th>
                                    <th className="UpcomingSchedule1"><strong>Sundays</strong></th>


                                </tr>

                                </thead>
                                  {(UpcomingSchedule1 && UpcomingSchedule1.length > 0) ?
                                    (<tbody>
                                    { UpcomingSchedule1.map((upcoming,i)=>{
                                      return(
                                        <tr key={i}>
                                          <td><strong>{upcoming.TransferDate}</strong></td>
                                          <td>{upcoming.Mondays}</td>
                                          <td>{upcoming.Tuesdays}</td>
                                          <td>{upcoming.Wednesdays}</td>
                                          <td>{upcoming.Thursdays}</td>
                                          <td>{upcoming.Fridays}</td>
                                          <td>{upcoming.Saturdays}</td>
                                          <td>{upcoming.Sundays}</td>
                                          <td><span className="dc" color="link" onClick={()=>{this.delete( upcoming.id )}}>{upcoming.Delete}</span></td>
                                        </tr>
                                      )
                                  })}
                                  </tbody>
                                ):(<tr><td></td><td></td>
                                  <div className="text-center">No data found.</div></tr>
                                )}
                            </Table>
                        </Col>
                        </Row>


                        <Row>

                          <Col className="text-right">
                            <button className="ebl" onClick={this.editSchedule1}><FaPen /> Edit Schedule</button>
                            <button className="eb1 ml-4" onClick={this.deleteSchedule1}>X Delete This Schedule</button>
                          </Col>
                        </Row>

                        <Row className="mt-5">
                        <Col className="mt-5">
                        <h5>Upcomming Recurring Schedules 2</h5>
                        </Col>
                        <Col sm="12" md="2"className="pr-0 bv">
                          <p class="mb-0">Schedule Begins</p>
                          <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
                        </Col>
                        <Col sm="12" md="1"><Col className="ar bv ar2"><FaArrowRight className="mt-4" /></Col></Col>
                        <Col sm="12" md="2" className="bv">
                          <p class="mb-0">Schedule Ends</p>
                          <input type="date" name="schedule_began" className="mx-w-100 bc-lg" placeholder="" />
                        </Col>
                              <Col md="12" sm="12" className="crw">
                                  <Table striped size="sm">
                                      <thead>
                                      <tr>
                                      <th className="UpcomingSchedule2"></th>
                                      <th className="UpcomingSchedule2"><strong>Mondays</strong></th>
                                      <th className="UpcomingSchedule2"><strong>Tuesdays</strong></th>
                                      <th className="UpcomingSchedule2"><strong>Wednesdays</strong></th>
                                      <th className="UpcomingSchedule2"><strong>Thursdays</strong></th>
                                      <th className="UpcomingSchedule2"><strong>Fridays</strong></th>
                                      <th className="UpcomingSchedule2"><strong>Saturdays</strong></th>
                                      <th className="UpcomingSchedule2"><strong>Sundays</strong></th>


                                      </tr>

                                      </thead>
                                        {(UpcomingSchedule2 && UpcomingSchedule2.length > 0) ?
                                          (<tbody>
                                          { UpcomingSchedule2.map((upcoming,i)=>{
                                            return(
                                              <tr key={i}>
                                                <td><strong>{upcoming.TransferDate}</strong></td>
                                                <td>{upcoming.Mondays}</td>
                                                <td>{upcoming.Tuesdays}</td>
                                                <td>{upcoming.Wednesdays}</td>
                                                <td>{upcoming.Thursdays}</td>
                                                <td>{upcoming.Fridays}</td>
                                                <td>{upcoming.Saturdays}</td>
                                                <td>{upcoming.Sundays}</td>
                                                <td><span className="dc" color="link" onClick={()=>{this.delete( upcoming.id )}}>{upcoming.Delete}</span></td>
                                              </tr>
                                            )
                                        })}
                                        </tbody>
                                      ):(<tr><td></td><td></td>
                                        <div className="text-center">No data found.</div></tr>
                                      )}
                                  </Table>
                              </Col>
                              </Row>


                              <Row>
                                <Col className="text-right">
                                  <button className="eb" onClick={this.editSchedule2}><FaPen /> Edit Schedule</button>
                                  <button className="eb1 ml-4" onClick={this.deleteSchedule2}>X Delete This Schedule</button>
                                </Col>
                              </Row>


                              <hr className="hr mt-5"/>


                              <Row className="mt-5">
                                <Col md="12" sm="12" className="crw">
                                  <h1>Previous Recurring Schedules</h1>
                                </Col>
                                    <Col className="mt-5">
                                      <Row>
                                        <Col sm="12" md="7">
                                          <h5 className="mt-5">Previous Recurring Schedules 1</h5>
                                        </Col>
                                        <Col sm="12" md="2"className="pr-0 bv">
                                          <p class="mb-0">Schedule Begins</p>
                                          <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
                                        </Col>
                                        <Col sm="12" md="1"><Col className="ar bv ar2"><FaArrowRight className="mt-4" /></Col></Col>
                                        <Col sm="12" md="2" className="bv">
                                          <p class="mb-0">Schedule Ends</p>
                                          <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col md="12" sm="12" className="crw">
                                        <Table striped size="sm">
                                            <thead>
                                            <tr>
                                            <th className="PreviousSchedule1"></th>
                                            <th className="PreviousSchedule1"><strong>Mondays</strong></th>
                                            <th className="PreviousSchedule1"><strong>Tuesdays</strong></th>
                                            <th className="PreviousSchedule1"><strong>Wednesdays</strong></th>
                                            <th className="PreviousSchedule1"><strong>Thursdays</strong></th>
                                            <th className="PreviousSchedule1"><strong>Fridays</strong></th>
                                            <th className="PreviousSchedule1"><strong>Saturdays</strong></th>
                                            <th className="PreviousSchedule1"><strong>Sundays</strong></th>

                                            </tr>

                                            </thead>
                                              {(PreviousSchedule1 && PreviousSchedule1.length > 0) ?
                                                (<tbody>
                                                { PreviousSchedule1.map((previous,i)=>{
                                                  return(
                                                    <tr key={i}>
                                                      <td><strong>{previous.TransferDate}</strong></td>
                                                      <td>{previous.Mondays}</td>
                                                      <td>{previous.Tuesdays}</td>
                                                      <td>{previous.Wednesdays}</td>
                                                      <td>{previous.Thursdays}</td>
                                                      <td>{previous.Fridays}</td>
                                                      <td>{previous.Saturdays}</td>
                                                      <td>{previous.Sundays}</td>
                                                      <td><span className="dc" color="link" onClick={()=>{this.delete( previous.id )}}>{previous.Delete}</span></td>
                                                    </tr>
                                                  )
                                              })}
                                              </tbody>
                                            ):(<tr><td></td><td></td>
                                              <div className="text-center">No data found.</div></tr>
                                            )}
                                        </Table>
                                    </Col>
                                    </Row>



                                    <Row className="mt-5">
                                    <Col className="mt-5">
                                    <h5>Upcomming Recurring Schedules 2</h5>
                                    </Col>
                                    <Col sm="12" md="2"className="pr-0 bv">
                                      <p class="mb-0">Schedule Begins</p>
                                      <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
                                    </Col>
                                    <Col sm="12" md="1"><Col className="ar bv ar2"><FaArrowRight className="mt-4" /></Col></Col>
                                    <Col sm="12" md="2" className="bv">
                                      <p class="mb-0">Schedule Ends</p>
                                      <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
                                    </Col>
                                          <Col md="12" sm="12" className="crw">
                                              <Table striped size="sm">
                                                  <thead>
                                                  <tr>
                                                  <th className="PreviousSchedule2"></th>
                                                  <th className="PreviousSchedule2"><strong>Mondays</strong></th>
                                                  <th className="PreviousSchedule2"><strong>Tuesdays</strong></th>
                                                  <th className="PreviousSchedule2"><strong>Wednesdays</strong></th>
                                                  <th className="PreviousSchedule2"><strong>Thursdays</strong></th>
                                                  <th className="PreviousSchedule2"><strong>Fridays</strong></th>
                                                  <th className="PreviousSchedule2"><strong>Saturdays</strong></th>
                                                  <th className="PreviousSchedule2"><strong>Sundays</strong></th>


                                                  </tr>


                                                  </thead>
                                                    {(PreviousSchedule2 && PreviousSchedule2.length > 0) ?
                                                      (<tbody>
                                                      { PreviousSchedule2.map((previous,i)=>{
                                                        return(
                                                          <tr key={i}>
                                                            <td><strong>{previous.TransferDate}</strong></td>
                                                            <td>{previous.Mondays}</td>
                                                            <td>{previous.Tuesdays}</td>
                                                            <td>{previous.Wednesdays}</td>
                                                            <td>{previous.Thursdays}</td>
                                                            <td>{previous.Fridays}</td>
                                                            <td>{previous.Saturdays}</td>
                                                            <td>{previous.Sundays}</td>
                                                            <td><span className="dc" color="link" onClick={()=>{this.delete( previous.id )}}>{previous.Delete}</span></td>
                                                          </tr>
                                                        )
                                                    })}
                                                    </tbody>
                                                  ):(<tr><td></td><td></td>
                                                    <div className="text-center">No data found.</div></tr>
                                                  )}
                                              </Table>
                                          </Col>
                                          </Row>
                                          <Row>

                                          </Row>
                    </Container>
          </Aux>):(<Aux>
            <Container className="top">
              <Row className="mt-5">
              <Col md="12" sm="12" className="crw">
                <h1>Current Recurring Schedules</h1>
              </Col>
                  <Col sm="12" md="2"className="pr-0 fr" >
                      <p class="mb-0">Schedule Begins</p>
                            <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
                          </Col>
                          <Col sm="12" md="1"><Col className="ar"><FaArrowRight className="mt-4" /></Col></Col>
                          <Col sm="12" md="2" className="fm">
                        <p class="mb-0" >Schedule End</p>
                    <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
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
                        <button className="eb" onClick={this.editSchedule} ><FaPen />    Edit Schedule</button>
                      </Col>
                    </Row>
                      <button type="date" className="cr" color="Link" onClick={this.createSchedule}>+ Create New Recurring Schedule</button>
                      <Row className="mt-5">
                        <Col md="12" sm="12" className="crw">
                          <h1>Upcomming Recurring Schedules</h1>
                        </Col>
                          <Col className="mt-5">
                          <h5>Upcomming Recurring Schedules 1</h5>
                          </Col>
                          <Col sm="12" md="2"className="pr-0 bv">
                            <p class="mb-0">Schedule Begins</p>
                            <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
                          </Col>
                          <Col sm="12" md="1"><Col className="ar1 bv"><FaArrowRight className="mt-4" /></Col></Col>
                          <Col sm="12" md="2 bv">
                            <p class="mb-0">Schedule Ends</p>
                            <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
                          </Col>

                        <Col md="12" sm="12" className="crw">
                            <Table striped size="sm">
                                <thead>
                                <tr>
                                    <th className="UpcomingSchedule1"></th>
                                    <th className="UpcomingSchedule1"><strong>Mondays</strong></th>
                                    <th className="UpcomingSchedule1"><strong>Tuesdays</strong></th>
                                    <th className="UpcomingSchedule1"><strong>Wednesdays</strong></th>
                                    <th className="UpcomingSchedule1"><strong>Thursdays</strong></th>
                                    <th className="UpcomingSchedule1"><strong>Fridays</strong></th>
                                    <th className="UpcomingSchedule1"><strong>Saturdays</strong></th>
                                    <th className="UpcomingSchedule1"><strong>Sundays</strong></th>


                                </tr>

                                </thead>
                                  {(UpcomingSchedule1 && UpcomingSchedule1.length > 0) ?
                                    (<tbody>
                                    { UpcomingSchedule1.map((upcoming,i)=>{
                                      return(
                                        <tr key={i}>
                                          <td><strong>{upcoming.TransferDate}</strong></td>
                                          <td>{upcoming.Mondays}</td>
                                          <td>{upcoming.Tuesdays}</td>
                                          <td>{upcoming.Wednesdays}</td>
                                          <td>{upcoming.Thursdays}</td>
                                          <td>{upcoming.Fridays}</td>
                                          <td>{upcoming.Saturdays}</td>
                                          <td>{upcoming.Sundays}</td>
                                          <td><span className="dc" color="link" onClick={()=>{this.delete( upcoming.id )}}>{upcoming.Delete}</span></td>
                                        </tr>
                                      )
                                  })}
                                  </tbody>
                                ):(<tr><td></td><td></td>
                                  <div className="text-center">No data found.</div></tr>
                                )}
                            </Table>
                        </Col>
                        </Row>


                        <Row>

                          <Col className="text-right">
                            <button className="eb" onClick={this.editSchedule1}><FaPen /> Edit Schedule</button>
                            <button className="eb1 ml-4" onClick={this.deleteSchedule1}>X Delete This Schedule</button>
                          </Col>
                        </Row>

                        <Row className="mt-5">
                        <Col className="mt-5">
                        <h5>Upcomming Recurring Schedules 2</h5>
                        </Col>
                        <Col sm="12" md="2"className="pr-0 bv">
                          <p class="mb-0">Schedule Begins</p>
                          <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
                        </Col>
                        <Col sm="12" md="1"><Col className="ar bv ar2"><FaArrowRight className="mt-4" /></Col></Col>
                        <Col sm="12" md="2" className="bv">
                          <p class="mb-0">Schedule Ends</p>
                          <input type="date" name="schedule_began" className="mx-w-100 bc-lg" placeholder="" />
                        </Col>
                              <Col md="12" sm="12" className="crw">
                                  <Table striped size="sm">
                                      <thead>
                                      <tr>
                                      <th className="UpcomingSchedule2"></th>
                                      <th className="UpcomingSchedule2"><strong>Mondays</strong></th>
                                      <th className="UpcomingSchedule2"><strong>Tuesdays</strong></th>
                                      <th className="UpcomingSchedule2"><strong>Wednesdays</strong></th>
                                      <th className="UpcomingSchedule2"><strong>Thursdays</strong></th>
                                      <th className="UpcomingSchedule2"><strong>Fridays</strong></th>
                                      <th className="UpcomingSchedule2"><strong>Saturdays</strong></th>
                                      <th className="UpcomingSchedule2"><strong>Sundays</strong></th>


                                      </tr>

                                      </thead>
                                        {(UpcomingSchedule2 && UpcomingSchedule2.length > 0) ?
                                          (<tbody>
                                          { UpcomingSchedule2.map((upcoming,i)=>{
                                            return(
                                              <tr key={i}>
                                                <td><strong>{upcoming.TransferDate}</strong></td>
                                                <td>{upcoming.Mondays}</td>
                                                <td>{upcoming.Tuesdays}</td>
                                                <td>{upcoming.Wednesdays}</td>
                                                <td>{upcoming.Thursdays}</td>
                                                <td>{upcoming.Fridays}</td>
                                                <td>{upcoming.Saturdays}</td>
                                                <td>{upcoming.Sundays}</td>
                                                <td><span className="dc" color="link" onClick={()=>{this.delete( upcoming.id )}}>{upcoming.Delete}</span></td>
                                              </tr>
                                            )
                                        })}
                                        </tbody>
                                      ):(<tr><td></td><td></td>
                                        <div className="text-center">No data found.</div></tr>
                                      )}
                                  </Table>
                              </Col>
                              </Row>


                              <Row>
                                <Col className="text-right">
                                  <button className="eb" onClick={this.editSchedule2}><FaPen /> Edit Schedule</button>
                                  <button className="eb1 ml-4" onClick={this.deleteSchedule2}>X Delete This Schedule</button>
                                </Col>
                              </Row>


                              <hr className="hr mt-5"/>


                              <Row className="mt-5">
                                <Col md="12" sm="12" className="crw">
                                  <h1>Previous Recurring Schedules</h1>
                                </Col>
                                    <Col className="mt-5">
                                      <Row>
                                        <Col sm="12" md="7">
                                          <h5 className="mt-5">Previous Recurring Schedules 1</h5>
                                        </Col>
                                        <Col sm="12" md="2"className="pr-0 bv">
                                          <p class="mb-0">Schedule Begins</p>
                                          <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
                                        </Col>
                                        <Col sm="12" md="1"><Col className="ar bv ar2"><FaArrowRight className="mt-4" /></Col></Col>
                                        <Col sm="12" md="2" className="bv">
                                          <p class="mb-0">Schedule Ends</p>
                                          <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col md="12" sm="12" className="crw">
                                        <Table striped size="sm">
                                            <thead>
                                            <tr>
                                            <th className="PreviousSchedule1"></th>
                                            <th className="PreviousSchedule1"><strong>Mondays</strong></th>
                                            <th className="PreviousSchedule1"><strong>Tuesdays</strong></th>
                                            <th className="PreviousSchedule1"><strong>Wednesdays</strong></th>
                                            <th className="PreviousSchedule1"><strong>Thursdays</strong></th>
                                            <th className="PreviousSchedule1"><strong>Fridays</strong></th>
                                            <th className="PreviousSchedule1"><strong>Saturdays</strong></th>
                                            <th className="PreviousSchedule1"><strong>Sundays</strong></th>

                                            </tr>

                                            </thead>
                                              {(PreviousSchedule1 && PreviousSchedule1.length > 0) ?
                                                (<tbody>
                                                { PreviousSchedule1.map((previous,i)=>{
                                                  return(
                                                    <tr key={i}>
                                                      <td><strong>{previous.TransferDate}</strong></td>
                                                      <td>{previous.Mondays}</td>
                                                      <td>{previous.Tuesdays}</td>
                                                      <td>{previous.Wednesdays}</td>
                                                      <td>{previous.Thursdays}</td>
                                                      <td>{previous.Fridays}</td>
                                                      <td>{previous.Saturdays}</td>
                                                      <td>{previous.Sundays}</td>
                                                      <td><span className="dc" color="link" onClick={()=>{this.delete( previous.id )}}>{previous.Delete}</span></td>
                                                    </tr>
                                                  )
                                              })}
                                              </tbody>
                                            ):(<tr><td></td><td></td>
                                              <div className="text-center">No data found.</div></tr>
                                            )}
                                        </Table>
                                    </Col>
                                    </Row>



                                    <Row className="mt-5">
                                    <Col className="mt-5">
                                    <h5>Upcomming Recurring Schedules 2</h5>
                                    </Col>
                                    <Col sm="12" md="2"className="pr-0 bv">
                                      <p class="mb-0">Schedule Begins</p>
                                      <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
                                    </Col>
                                    <Col sm="12" md="1"><Col className="ar bv ar2"><FaArrowRight className="mt-4" /></Col></Col>
                                    <Col sm="12" md="2" className="bv">
                                      <p class="mb-0">Schedule Ends</p>
                                      <input type="date" name="schedule_began" className="mx-w-100 bc-lg"  />
                                    </Col>
                                          <Col md="12" sm="12" className="crw">
                                              <Table striped size="sm">
                                                  <thead>
                                                  <tr>
                                                  <th className="PreviousSchedule2"></th>
                                                  <th className="PreviousSchedule2"><strong>Mondays</strong></th>
                                                  <th className="PreviousSchedule2"><strong>Tuesdays</strong></th>
                                                  <th className="PreviousSchedule2"><strong>Wednesdays</strong></th>
                                                  <th className="PreviousSchedule2"><strong>Thursdays</strong></th>
                                                  <th className="PreviousSchedule2"><strong>Fridays</strong></th>
                                                  <th className="PreviousSchedule2"><strong>Saturdays</strong></th>
                                                  <th className="PreviousSchedule2"><strong>Sundays</strong></th>


                                                  </tr>


                                                  </thead>
                                                    {(PreviousSchedule2 && PreviousSchedule2.length > 0) ?
                                                      (<tbody>
                                                      { PreviousSchedule2.map((previous,i)=>{
                                                        return(
                                                          <tr key={i}>
                                                            <td><strong>{previous.TransferDate}</strong></td>
                                                            <td>{previous.Mondays}</td>
                                                            <td>{previous.Tuesdays}</td>
                                                            <td>{previous.Wednesdays}</td>
                                                            <td>{previous.Thursdays}</td>
                                                            <td>{previous.Fridays}</td>
                                                            <td>{previous.Saturdays}</td>
                                                            <td>{previous.Sundays}</td>
                                                            <td><span className="dc" color="link" onClick={()=>{this.delete( previous.id )}}>{previous.Delete}</span></td>
                                                          </tr>
                                                        )
                                                    })}
                                                    </tbody>
                                                  ):(<tr><td></td><td></td>
                                                    <div className="text-center">No data found.</div></tr>
                                                  )}
                                              </Table>
                                          </Col>
                                          </Row>
                                          <Row>

                                          </Row>
                    </Container>
                    </Aux>)}
                    </>

    )
  }
}

export default RecurringCalendar
