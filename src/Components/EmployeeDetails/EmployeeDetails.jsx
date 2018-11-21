import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ServiceCenter from './ServiceCenter/ServiceCenter.jsx';
import RecurringCalendar from './RecurringCalendar/RecurringCalendar';
import Information from './Information/Information.jsx'


import './EmployeeDetails.css';
export default class EmployeeDetails extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <Container className="mt-4">
      <Row className="mb-3">
          <Col md="12" sm="12">
            <h6 className="text-center"><strong><small> EMPLOYEE DETAIL</small></strong></h6>
            <h1 className="text-center">Bob Smith</h1>
          </Col>
      </Row>
        <Row className="bb-1 su">
          <Col md="12" sm="12" className="top-c">
            <Nav tabs className="ma mw-90 bb-0 tab-links">
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Information
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Daily Calendar
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  Recurring Calendar
                </NavLink>
              </NavItem>
              <NavItem className="br-1">
                <NavLink
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}
                >
                  Service Center Transfer
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
              <Information />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
              <RecurringCalendar />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
               <ServiceCenter />
              </Col>
            </Row>
          </TabPane>
        </TabContent>

      </Container>

    );
  }
}
