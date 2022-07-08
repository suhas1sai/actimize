import {Container} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function Uptask() {
  return (
    <Container>
    <form>
    <Row className='mt-2 ms-2'>
      <Col lg={6}>
        <Row>
          <Col lg={5}>
            <label>Task Name :</label>
          </Col>
          <Col lg={5}>
            <input type='text' placeholder="Enter the Task Name"/>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Actual Hours :</label>
          </Col>
          <Col lg={5}>
            <input type='number' placeholder="Enter the Actual Hours"/>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Estimated Hours :</label>
          </Col>
          <Col lg={5}>
            <input type='number' placeholder="Enter the Estimated Hours"/>
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

export default Uptask;