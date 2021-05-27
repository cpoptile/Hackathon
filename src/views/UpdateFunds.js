import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";



function UpdatePage() {
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
              <h2 className = "total-amount">$700.00</h2>
            </CardBody>
          </Card>
        </Row>
        <button>DEPOSIT</button>
        <button>WITHDRAW</button>
      
    </div>
  </>
  );
}

export default UpdatePage;
