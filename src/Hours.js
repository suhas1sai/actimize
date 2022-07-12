import {Container} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


function Hours() {

  const{ register,handleSubmit,formState: {errors}, reset} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    console.log(errors);
  return (
    <Container>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Row className='mt-4 ms-2'>
      <Col lg={8}>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Task Name :</label>
          </Col>
          <Col lg={5}>
            <input type='text' placeholder="Task Name" {...register("name", {required: "Task Name is required"})}/>
            {errors.name && (<small className='text-danger'>{errors.name.message}</small>)}
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Date :</label>
          </Col>
          <Col lg={5}>
            <input type='date' placeholder="Issue Date" {...register("date", { required: "Issue Date is required"})}/> 
                    {errors.date && (<small className='text-danger'>{errors.date.message}</small>)}
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Hours :</label>
          </Col>
          <Col lg={5}>
            <input type='number' placeholder="Hours Taken" {...register("hours", {required: "Taken Hours is required"})}/>
            {errors.hours && (<small className='text-danger'>{errors.hours.message}</small>)}
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col lg={5}>
            <label>Status :</label>
          </Col>
          <Col lg={5}>
            <select {...register("status", { required: "Task Status is required"})}>
                <option value="">Select</option>
                <option value="Completed">Completed</option>
                <option value="InCompleted">In Completed</option>
                <option value="InProgress">In Progress</option>
            </select>
            {errors.status && (<small className='text-danger'>{errors.status.message}</small>)}
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