import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Myproject() {
  return (
   
//     
  	<div className="Myproject">
        <h1 className='mt-4'>Myproject</h1>
        <Container>
    <form >
    <Row className='mt-5 ms-2'>
      <Col lg={6}>
        <Row>
          <Col lg={5}>
            <label>Name Of The Project :</label>
          </Col>
          <Col lg={5}>
            <input type='text' placeholder="Enter the Task Name" />
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Initiate Date :</label>
          </Col>
          <Col lg={5}>
            <input type='date' placeholder="Project Initiated date" />
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Finish Date :</label>
          </Col>
          <Col lg={5}>
            <input type='date' placeholder="Project Finishing date" />
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Members :</label>
          </Col>
          <Col lg={5}>
            <input type='number' placeholder="No. of Members" />
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Assigned By :</label>
          </Col>
          <Col lg={5}>
            <input type='text' placeholder="Assigned By" />
          </Col>
        </Row>
      </Col>
      <Row className='mt-5 text-center'>
          <Col lg={12}>
            <span>
              <Button className='me-3'>Completed</Button>
              <Button variant="danger" icon="columns">In Completed</Button>{' '}
              <Button variant="warning" className='ms-4'>In Progress</Button>{' '}
            </span>
          </Col>
        </Row>
    </Row>
    </form>
    
    
    </Container>
    </div>
  );
}

export default Myproject;
