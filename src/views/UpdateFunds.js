import React, {useState} from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  FormGroup,
  Form,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";


function UpdatePage() {
    const [balance, setBalance] = useState("700");
    const [amount, setAmount] = useState("");
    const [display, setDisplay] = useState(false);
    const [total, setTotal] = useState(balance + amount);

    // const customData = require('./customData.json');

    function addFunds(e){
        e.preventDefault()
        //setTotal(balance + amount)
        setTotal(parseFloat(balance) + parseFloat(amount))
        setBalance(parseFloat(total))
    }
    
    function subtractFunds(e){
        e.preventDefault()
        //setTotal(balance - (-1*amount))
        setTotal(parseFloat(balance) + (-1*parseFloat(amount)))
        setBalance(parseFloat(total))
    }

  return (
    <>
    <PanelHeader size="sm" />
    <div className="content">
        <Row>
          <Card>
            <CardHeader>
              <h1 className = "total-label"> Current Balance </h1>
            </CardHeader>
            <CardBody>
              <h2 className = "total-amount">${balance}</h2>
            </CardBody>
          </Card>
        </Row>
        <Row>
            <Col className="pl-1" md="4">
                <FormGroup>
                    <label>Enter Amount</label>
                    <Input placeholder="$0.00" type="number" value = {amount} onClick ={() => setDisplay(!display)} onChange={e => setAmount(e.target.value)} required />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs = {6} md = {6} >
                {/* <Card> */}
                <Button color="info" type="button" onClick ={addFunds} >DEPOSIT</Button>
                {/* </Card> */}
            </Col>
            <Col xs = {6 } md = {6}>
                {/* <Card> */}
                    <Button color="info" type="button" onClick ={subtractFunds} >WITHDRAW</Button>
                {/* </Card> */}
            </Col>
        </Row>      
    </div>
  </>
  );
}

export default UpdatePage;
