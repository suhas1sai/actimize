import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Work() {
  return (
  	<div className="Workexperience mt-5">
    <br/><br/>
        <h1>Workexperience</h1>
        <br/>
        <Container>
            <Row>
            
                <Col lg={4} className="col">
                    <label>Organisation name:</label>
                    </Col>
                    <Col lg={5}>
                    <input type="text" placehollder="enter the First Name"/>
                    </Col>
                
                
            </Row>
            <Row>
                <Col lg={4} className='mt-2' >
                    <label className='me-3'>Experience in months :</label>
                    </Col>
                    <Col lg={5} className='mt-2'>
                    <input className='me-4' type="date" placehollder="enter the date of birth"/>
                </Col>
                
            </Row>
            <Row>
                <Col lg={4} sm={8} className='mt-2' >
                <label className='me-3'>Joining date :</label>
                    <input className='me-4' type="date" placehollder="Joining date"/>
                
                </Col>
                <Col lg={6} sm={8} className='mt-2'>
                <label className='me-3'>Ending date :</label>
                    <input className='me-4' type="date" placehollder="Joining date"/>
                    
                </Col>
            </Row>
           
            <Row className='text-center mt-4'>
                <span><Button className='me-2 btn-success'>Create</Button>
                <Button>Update</Button></span>
            </Row>
            <Row>



                <fieldset>
                <br />
             
                    <h1>Skills</h1>
                <Row>
                 <Col lg={6} sm={8} className='mt-2'>
                    <label className='me-5'>Select :</label>
                    <select className='me-5'>
                        <option value="none">select</option>
                         <option value="Ror">Ror</option>
                         <option value="React">React</option>
                         <option value="Native">Native</option>

                </select>
                    <i class="fa fa-star" aria-hidden="true" ></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
               </Col>
                    
                    
            </Row>  
            <Row className='text-center mt-4'>
                <span><Button className='me-2 btn-success'>Create</Button>
                <Button>Update</Button></span>
            </Row>
                </fieldset>
            </Row>
        </Container>
    </div>


  );
}

export default Work;