import React, { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReactToPrint } from 'react-to-print';
import Table from 'react-bootstrap/Table';
import { products } from "./db/db.json"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { display } from '@mui/system';
const App = () => {
  let compref = useRef();
  let handleprint = useReactToPrint({
    content: () => compref.current,
    documentTitle: 'emp-data'
  })
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (

    <>
      <p>Hello janii </p>
      <div ref={compref} className="print_class">
      <h1 style={{ color: "gray" ,display:"flex",justifyContent:"End"}}>Packing Slip </h1>
      <h2 style={{ color: "gray" ,display:"flex",justifyContent:"End"}}> {date}</h2>

        <h1 style={{ color: "blue" ,display:"flex"}}>Eut Solution</h1>
        <Row>
        <Col>Address:</Col>
        <Col>Address Wasington DC Address Wasington DC Address Wasington DC Address Wasington DC Address Wasington DC Address Wasington DC</Col>
        <Col>ship To:</Col>
        <Col>Wasington DC</Col>

      </Row>
      <Row>
        <Col>order Date:</Col>
        <Col>2025-11-19</Col>
        <Col>Order #:</Col>
        <Col>SO001362</Col>

      </Row>
      <Row>
        <Col>Address:</Col>
        <Col>Address Wasington DC</Col>
        <Col>ship To:</Col>
        <Col>Wasington DC</Col>

      </Row>
      <Row>
        <Col>Address:</Col>
        <Col>Address Wasington DC</Col>
        <Col>ship To:</Col>
        <Col>Wasington DC</Col>

      </Row>
      <Row>
        <Col>Address:</Col>
        <Col>Address Wasington DC</Col>
        <Col>ship To:</Col>
        <Col>Wasington DC</Col>

      </Row>
      <Row>
        <Col>Address:</Col>
        <Col>Address Wasington DC</Col>
        <Col>ship To:</Col>
        <Col>Wasington DC</Col>

      </Row>
      
        <Table responsive striped bordered hover>
          <thead style={{border:"2px solid black"}}>
            <tr className="bg-primary">

              {["Id","Price","Product","Unit","Order Quantity"].map((item, index) => (
                <th key={index} style={{border:"2px solid black"}}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => <tr key={index}>
              <td>{item.id}</td>
              <td>{item.price}</td>
              <td>{item.id}</td>
              <td>{item.price}</td>
              <td>{item.id}</td>
              

            
              

            </tr>
            )}


          </tbody>
        </Table>
        <Table responsive striped bordered hover >
        {/* <thead>
            <tr style={{display:"flex",justifyContent: "flex-end"}}>

              {["Total"].map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead> */}
          <tbody >
         
            <tr style={{display:"flex",justifyContent: "flex-end"}} >
              {/* <p className="bg-primary" style={{width:"6rem"}} >Total</p> */}
              <td className="bg-primary">Total</td>
            
              <td >{0}</td>
              <td>{0}</td>

            
              

            </tr>
          


          </tbody>
        </Table>
        




      </div>
      <button onClick={handleprint}>Print</button>

    </>
  )
}
export default App;
