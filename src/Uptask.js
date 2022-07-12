import {Container} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


function Uptask() {

  const{ register,handleSubmit,formState: {errors}, reset} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    console.log(errors);
  return (
    <Container>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Row className='mt-2 ms-2'>
      <Col lg={6}>
        <Row>
          <Col lg={5}>
            <label>Task Name :</label>
          </Col>
          <Col lg={5}>
            <input type='text' placeholder="Enter the Task Name" {...register("task", {required: "Task Name is required", pattern: {
                        value: /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
                        message: "Enter the valid Task name" }})}/>
            {errors.task && (<small className='text-danger'>{errors.task.message}</small>)}
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Actual Hours :</label>
          </Col>
          <Col lg={5}>
            <input type='number' placeholder="Enter the Actual Hours" {...register("actual", {required: "Actual Hours is required",  pattern: {
                        value: /^(0|[1-9][0-9]?|100)$/,
                        message: "Enter the valid hours" }})}/>
            {errors.actual && (<small className='text-danger'>{errors.actual.message}</small>)}
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Taken Hours :</label>
          </Col>
          <Col lg={5}>
            <input type='number' placeholder="Enter the Taken Hours" {...register("taken", {required: "Taken Hours is required", pattern: {
                        value: /^(0|[1-9][0-9]?|100)$/,
                        message: "Enter the valid hours" }})}/>
            {errors.taken && (<small className='text-danger'>{errors.taken.message}</small>)}
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