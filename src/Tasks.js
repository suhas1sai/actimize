import {Container} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Uptask  from './Uptask';
import Hours from './Hours';
import { useForm } from 'react-hook-form';


function Tasks() {

  const{ register,handleSubmit,formState: {errors}, reset} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    console.log(errors);
  return (
    <Container>


    <h2>Daily Status:-</h2>
    <h5 className='mt-3'>Status:-</h5>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Row className='mt-2 ms-2'>
      <Col lg={6}>
        <Row>
          <Col lg={5}>
            <label>Task Name :</label>
          </Col>
          <Col lg={5}>
            <input type='text' placeholder="Enter the Task Name" {...register("name", {required: "Task Name is required", pattern: {
                        value: /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
                        message: "Enter the valid Task name" }})}/>
            {errors.name && (<small className='text-danger'>{errors.name.message}</small>)}
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Total Hours :</label>
          </Col>
          <Col lg={5}>
            <input type='number' placeholder="Enter the Total Hours" {...register("total", {required: "Total Hours is required", pattern: {
                        value: /^(0|[1-9][0-9]?|100)$/,
                        message: "Enter the valid hours" }})}/>
            {errors.total && (<small className='text-danger'>{errors.total.message}</small>)}
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Estimated Hours :</label>
          </Col>
          <Col lg={5}>
            <input type='number' placeholder="Enter the Estimated Hours" {...register("estimated", {required: "Total Hours is required", pattern: {
                        value: /^(0|[1-9][0-9]?|100)$/,
                        message: "Enter the valid hours" }})}/>
            {errors.estimated && (<small className='text-danger'>{errors.estimated.message}</small>)}
          </Col>
        </Row>
      </Col>
      <Col lg={12}  className='text-center mt-4 mb-5'>
                <Button type="save">Save</Button>
            </Col>
    </Row>
    </form>
    <h5 className='mt-1'>Update:-</h5>
    <Uptask />
    <h2>Hours Entry:-</h2>
    <h4 className='text-center'>Weekend Hours Report</h4>
    <Hours />
    
    </Container>

  );
}

export default Tasks;