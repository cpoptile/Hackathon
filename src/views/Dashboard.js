/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState} from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart,
} from "variables/charts.js";

function Dashboard() {
  const [balance, setBalance] = useState("0")
  const [amount, setAmount] = useState("")
  const [display, setDisplay] = useState(false);


  return (
    <>
      {/* <Row>
          <Card>
            <CardHeader>
              <h1 className = "total-label"> Current Balance </h1>
            </CardHeader>
            <CardBody>
              <h2 className = "total-amount">$700.00</h2>
            </CardBody>
          </Card>
        </Row> */}

      {/*THE TOP DARK GREY HEADER */}
      <PanelHeader
        size="lg"
        content={
        //   <div>
        //   <Row>
        //   {/* THE CARD DISPLAYING CURRENT BALANCE  */}
        <Row>
        <Col xs = {1}></Col>
        <Col>
          <Card>
            <Row>
            <Col>
            <CardHeader>
              <h1 className = "total-label"> Current Balance </h1>
            </CardHeader>
            <CardBody>
              <h2 className = "total-amount">$700.00</h2>
            </CardBody>
            </Col>
            <Col xs = {4} md = {3}>
              {/*
                {/* THE PROGRESS BAR */}
                <CircularProgressbar
                    value={90}
                    text={`${900}`}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: 0.25,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: 'butt',

                      // Text size
                      textSize: '16px',

                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 0.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgba(62, 152, 199, ${90 / 100})`,
                      textColor: '#f88',
                      trailColor: '#d6d6d6',
                      backgroundColor: '#3e98c7',
                    })}
                  />
            </Col>
            </Row>
          </Card>
        </Col>
        <Col xs = {1}></Col>

        </Row>
        //   <Line
        //     data={dashboardPanelChart.data}
        //     options={dashboardPanelChart.options}
        //   />
        //   </div>
        }
      />
      <div className="content">
        <Row>
          <Col>
          <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Point Standing</h5>
                <CardTitle tag="h4">Point history</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                <Line
                    data={dashboardPanelChart.data}
                    options={dashboardPanelChart.options}
                  />
                </div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69" /> Just
                  Updated
                </div>
              </CardFooter>
            </Card>
            </Col>
        </Row>
        {/* <Row>
          <Card>
            <CardHeader>
              <h1 className = "total-label"> Current Balance </h1>
            </CardHeader>
            <CardBody>
              <h2 className = "total-amount">$700.00</h2>
            </CardBody>
          </Card>
        </Row> */}
        <Row>
          {/* <Col xs={12} md={4}> */}
            {/* <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Global Sales</h5>
                <CardTitle tag="h4">Shipped Products</CardTitle>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-round btn-outline-default btn-icon"
                    color="default"
                  >
                    <i className="now-ui-icons loader_gear" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem className="text-danger">
                      Remove data
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={dashboardShippedProductsChart.data}
                    options={dashboardShippedProductsChart.options}
                  />
                </div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69" /> Just
                  Updated
                </div>
              </CardFooter>
            </Card>
          </Col> */}
          {/* <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">2021 Sales</h5>
                <CardTitle tag="h4">All products</CardTitle>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-round btn-outline-default btn-icon"
                    color="default"
                  >
                    <i className="now-ui-icons loader_gear" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem className="text-danger">
                      Remove data
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={dashboardAllProductsChart.data}
                    options={dashboardAllProductsChart.options}
                  />
                </div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69" /> Just
                  Updated
                </div>
              </CardFooter>
            </Card>
          </Col> */}
          {/* NEEDED TO CENTER THE PROGRESS BAR*/}
          <Col xs = {3} md = {4}></Col>
          <Col xs = {6} md = {4} align = "center">
            
          </Col>
          <Col md = {4}></Col>
          {/* <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Email Statistics</h5>
                <CardTitle tag="h4">24 Hours Performance</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                  />
                </div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons ui-2_time-alarm" /> Last 7 days
                </div>
              </CardFooter>
            </Card>
          </Col> */}
        </Row>
        <Row>
          {/* <Col xs={12} md={6}>
            <Card className="card-tasks">
              <CardHeader>
                <h5 className="card-category">Backend Development</h5>
                <CardTitle tag="h4">Tasks</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultChecked type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          Sign contract for "What are conference organizers
                          afraid of?"
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip731609871"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip731609871"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip923217206"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip923217206"
                          >
                            Remove
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          Lines From Great Russian Literature? Or E-mails From
                          My Boss?
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip907509347"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip907509347"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip496353037"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip496353037"
                          >
                            Remove
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultChecked type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          Flooded: One year later, assessing what was lost and
                          what was found when a ravaging rain swept through
                          metro Detroit
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip326247652"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip326247652"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip389516969"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip389516969"
                          >
                            Remove
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="now-ui-icons loader_refresh spin" /> Updated 3
                  minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col> */}
          <Col></Col>
          <Col xs={12} md={12} >
            <Card>
              <CardHeader>
                <h5 className="card-category">Transcation History</h5>
                <CardTitle tag="h4">Recent Transactions</CardTitle>
              </CardHeader>
              <CardBody>
                {/* THE TRANSACTION TABLE */}
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Transaction</th>
                      <th className="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>05/28/21</td>
                      <td>00:00:00</td>
                      <td>+$10.00</td>
                      <td className="text-right">$21.00</td>
                    </tr>
                    <tr>
                      <td>05/27/21</td>
                      <td>14:03:02</td>
                      <td>-$13.00</td>
                      <td className="text-right">$11.00</td>
                    </tr>
                    <tr>
                      <td>05/27/21</td>
                      <td>10:05:08</td>
                      <td>-$4.00</td>
                      <td className="text-right">$24.00</td>
                    </tr>
                    <tr>
                      <td>05/27/21</td>
                      <td>09:59:59</td>
                      <td>+$20.00</td>
                      <td className="text-right">$28.00</td>
                    </tr>
                    <tr>
                      <td>05/26/21</td>
                      <td>17:38:39</td>
                      <td>-$7.00</td>
                      <td className="text-right">$8.00</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
