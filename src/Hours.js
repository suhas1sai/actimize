import {Container} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function Hours() {
  return (
    <Container>
    <form>
    <Row className='mt-4 ms-2'>
      <Col lg={8}>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Task Name :</label>
          </Col>
          <Col lg={5}>
            <input type='text' placeholder="Task Name"/>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Date :</label>
          </Col>
          <Col lg={5}>
            <input type='date' placeholder="Issue Date"/>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Hours :</label>
          </Col>
          <Col lg={5}>
            <input type='number' placeholder="Hours Taken"/>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Status :</label>
          </Col>
          <Col lg={5}>
            <select >
                <option value="none">Select</option>
                <option value="Completed">Completed</option>
                <option value="InCompleted">In Completed</option>
                <option value="InProgress">In Progress</option>
            </select>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Status(Approved by HR) :</label>
          </Col>
          <Col lg={5}>
            <input type='text' placeholder="HR Decision"/>
          </Col>
        </Row>
      </Col>
      <Col lg={12}  className='text-center mt-4 mb-5'>
                <Button type="save">Save</Button>
            </Col>
    </Row>
    </form>
    
    
    </Container>

  );
}

export default Hours;