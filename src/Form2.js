import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function Form2() {
    const{ register,handleSubmit,formState: {errors}, reset} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    console.log(errors);
  return (
    <Container>
       <Row>
        <fieldset>
            <legend className='mt-4'>Person 2</legend>  
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col lg={6}>
                            <Row>
                                <Col lg={5}>
                                    <label>Name :</label>
                                </Col>
                                <Col lg={5}>
                                    <input type="text" placehollder="enter the First Name" {...register("name1", { required: "First name is required", pattern: {
                        value: /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
                        message: "Enter the valid name" }})}/> 
                                    {errors.name1 && (<small className='text-danger'>{errors.name1.message}</small>)}
                                </Col>
                                <Col lg={5} className="mt-2">
                                    <label>Relationship :</label>
                                </Col>
                                <Col lg={5} className="mt-2">
                                    <select {...register("relation", {required: "Relationship is required"})}>
                                        <option value="">Select</option>
                                        <option value="Mother">Mother</option>
                                        <option value="Father">Father</option>
                                        <option value="Brother">Brother</option>
                                        <option value="Sister">Sister</option>
                                        <option value="Husband">Huusband</option>
                                        <option value="Cousin">Cousin</option>
                                        <option value="Others">Others</option>
                                    </select> 
                                    {errors.relation && (<small className='text-danger'>{errors.relation.message}</small>)}
                                </Col>
                            </Row> 
                        </Col>
                        <Col lg={5}>
                            <Row>
                                <Col lg={5}>
                                    <label>Mobile Number</label>
                                </Col>
                                <Col lg={5}>
                                    <input type="text" placehollder="enter the First Name" {...register("number1", { required: "Mobile number is required", pattern: {
                                        value: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/,
                                        message: "Enter the Valid Mobile Number",
                                    }})}/> 
                                    {errors.number1 && (<small className='text-danger'>{errors.number1.message}</small>)}
                                </Col>
                                <Col lg={5} className="mt-2">
                                    <label>Address :</label>
                                </Col>
                                <Col lg={5} className="mt-2">
                                    <textarea rows={5} cols={25} name="address2" placeholder="Enter your address" {...register("address1", { required: "Permanent Address is required"})}></textarea>
                                    {errors.address1 && (<small className='text-danger'>Permanent Address is required</small>)}
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={12}  className='text-center mt-4 mb-5'>
                            <Button type="submit">Save</Button>
                        </Col>
                
                    </Row>  
                </form>
        </fieldset>
        </Row>  
    </Container>
  );
}

export default Form2;
