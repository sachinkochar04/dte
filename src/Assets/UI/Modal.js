import React,{Component} from 'react'
import { Container } from 'reactstrap';
import Aux from '../HOC/Aux1'
import EditData from './../../Components/EmployeeDetails/RecurringCalendar/EditData/EditData'
import CreateData from './../../Components/EmployeeDetails/RecurringCalendar/EditData/CreateData'


class Modal extends Component {
  render(){
    let modal = null
    let {showC,showE} = this.props;
    if(showE){
      modal = <EditData { ...this.props }/>
    }
    else if (showC){
      modal = <CreateData {...this.props}/>
    }
    else {
      modal = null
    }
    return(
      <Aux>

            <div className="Modal" style={{
              transform: (this.props.showE || this.props.showC) ? 'translateY(0)' : 'translateY(-100vh)',
              opacity: (this.props.showE || this.props.showC) ?  '1' : '0'
            }}>
              {modal}
              </div>
          
        </Aux>
    )
  }
}

export default Modal
