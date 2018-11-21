import React , { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { FaPen } from 'react-icons/fa';
class Information extends Component{
    constructor(){
        super()
        this.state={
            edit:false
        }
    }

    onClickEdit = ()=>{
        let { edit } = this.state
        this.setState({ edit:!edit })
    }

    render(){
        let { edit } = this.state;
        return(
            <Row >
                <Col md="12" sm="12">
                    <Row>
                        <Col md="12" sm="12" className="text-center">
                            <Button onClick={ ()=>{ this.onClickEdit(); } } className={edit ? 'btn-black br-0 mt-3' : 'default_button br-0 mt-3' }>Edit Information <FaPen/></Button>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col md="12" sm="2" className="mb-3">
                            <h1>Basic Info</h1>
                        </Col>
                        <Col md="2" sm="12" >
                            <p className="mb-0"><small>Call Out Number</small></p>
                            <input type="text" name="number1" maxlength="3" className="input-width-40 input-back-gray" />
                            <span> - </span>
                            <input type="text" name="number1" maxlength="3" className="input-width-40 input-back-gray" />
                            <span> - </span>
                            <input type="text" name="number1" maxlength="4" className="input-width-48 input-back-gray" />

                        </Col>
                        <Col md="2" sm="12" >
                            <p className="mb-0"><small>Cell Phone Number</small></p>
                            <input type="text" name="number1" maxlength="3" className="input-width-40 input-back-gray" />
                            <span> - </span>
                            <input type="text" name="number1" maxlength="3" className="input-width-40 input-back-gray" />
                            <span> - </span>
                            <input type="text" name="number1" maxlength="4" className="input-width-48 input-back-gray" />
                        </Col>
                        <Col md="3" sm="12" >
                            <p className="mb-0"><small>Emergency Contact Number</small></p>
                            <input type="text" name="number1" maxlength="3" className="input-width-40 input-back-gray" />
                            <span> - </span>
                            <input type="text" name="number1" maxlength="3" className="input-width-40 input-back-gray" />
                            <span> - </span>
                            <input type="text" name="number1" maxlength="4" className="input-width-48 input-back-gray" />
                        </Col>
                        <Col md="2" sm="12" >
                            <p className="mb-0"><small>Crew Management Role</small></p>
                            <input type="text" name="number1" className="input-width-60 input-back-gray" />

                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col md="12" sm="2" className="mb-3">
                            <h1>Crew Info</h1>
                        </Col>
                        <Col md="1" sm="12" >
                            <p className="mb-0"><small>Crew Id</small></p>
                            <input type="text" name="number1" maxlength="5" className="mx-w-100 input-back-gray" />
                        </Col>
                        <Col md="2" sm="12" >
                            <p className="mb-0"><small>Classification</small></p>
                            <input type="text" name="number1" className="mx-w-100 input-back-gray" />
                        </Col>
                        <Col md="3" sm="12" >
                            <p className="mb-0"><small>Vehical</small></p>
                            <input type="text" name="number1" className="mx-w-100 input-back-gray" />
                        </Col>
                        <Col md="1" sm="12" >
                            <p className="mb-0"><small>Tied to</small></p>
                            <input type="text" name="number1" maxlength="5" className="mx-w-100 input-back-gray" />
                        </Col>
                        <Col md="1" sm="12" >
                            <p className="mb-0"><small>Job Code</small></p>
                            <input type="text" name="number1" maxlength="7" className="mx-w-100 input-back-gray" />
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col md="12" sm="2" className="mb-3">
                            <h1>Preferences</h1>
                        </Col>
                        <Col md="1" sm="12" >
                            <p className="font-small mb-0">Prefernce 1</p>
                            <input type="text" name="number1" maxlength="3" className="input-width-40 input-back-gray" />
                        </Col>
                        <Col md="1" sm="12" >
                            <p className="font-small mb-0">Prefernce 2</p>
                            <input type="text" name="number1" maxlength="3" className="input-width-40 input-back-gray" />
                        </Col>
                        <Col md="1" sm="12" >
                            <p className="font-small mb-0">Prefernce 3</p>
                            <input type="text" name="number1" maxlength="3" className="input-width-40 input-back-gray" />
                        </Col>
                        <Col md="1" sm="12" >
                            <p className="font-small mb-0">Prefernce 4</p>
                            <input type="text" name="number1" maxlength="3" className="input-width-40 input-back-gray" />
                        </Col>
                        <Col md="1" sm="12" >
                            <p className="font-small mb-0">Prefernce 5</p>
                            <input type="text" name="number1" maxlength="5" className="input-width-40 input-back-gray" />
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col md="12" sm="2" className="mb-3">
                            <h1>Rankings</h1>
                        </Col>
                        <Col md="2" sm="12" >
                            <p className="font-small mb-0">Overtime Rank</p>
                            <input type="text" name="number1" maxlength="2" className="input-width-40 input-back-gray" />
                        </Col>
                        <Col md="2" sm="12" >
                            <p className="font-small mb-0">Secuturity Date</p>
                            <input type="date" name="number1" className="mx-w-100 input-back-gray" />
                        </Col>
                        <Col md="2" sm="12" >
                            <p className="font-small mb-0">Seniority Ordinal</p>
                            <input type="text" name="number1" maxlength="2" className="input-width-40 input-back-gray" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default Information
