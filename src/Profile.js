import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './App.css';


function Profile() {
    const{ register,handleSubmit,formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    console.log(errors);
  return (
    <Container>
    <h4 className='mt-5'>Personal Details:-</h4>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Row>
            <Col lg={6}>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>First Name</label>
                    </Col>
                    <Col lg={5}>
                    <input type="text" name="fname" placehollder="enter the First Name" {...register("fname", { required: "First name is required", pattern: {
                        value: /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
                        message: "Enter the valid name" }})}
                         
                        />
                    {errors.fname && (<small className='text-danger'>{errors.fname.message}</small>)}
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>Date Of Birth</label>
                    </Col>
                    <Col lg={7}>
                    <input type="date" name="date" placehollder="enter the First Name" {...register("date", { required: "Date of Birth is required"})}/> 
                    {errors.date && (<small className='text-danger'>Date of Birth is required</small>)}
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>Nationality</label>
                    </Col>
                    <Col lg={5}>
                       <select name="nationality" {...register("nation", { required: "Nationality is required"})}>
                        <option value="">Select</option>
                        <option value="Indians">Indian</option>
                        <option value="Non-Indians">Non-Indian</option>
                        </select>
                    {errors.nation && (<small className='text-danger'>{errors.nation.message}</small>)}
                

                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>Mobile Number</label>
                    </Col>
                    <Col lg={5}>
                    <input type="text" name="number1" placehollder="enter the First Name" {...register("number", { required: "Mobile number is required", pattern: {
                        value: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/,
                        message: "Enter the Valid Mobile Number",
                    }})}/> 
                    {errors.number && (<small className='text-danger'>{errors.number.message}</small>)}
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>Company Email</label>
                    </Col>
                    <Col lg={5}>
                    <input type="email" name="email1" placehollder="enter the First Name" {...register("cemail", { required: "Company Email is required", pattern:{
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
                        message: "Enter valid Email Address"
                    }})}/> 
                    {errors.cemail && (<small className='text-danger'>{errors.cemail.message}</small>)}
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>Current address</label>
                    </Col>
                    <Col lg={5}>
                    <textarea rows={5} cols={25} name="address1" placeholder="Enter your address" {...register("caddress", { required: "Current Address is required"})}></textarea>
                    {errors.caddress && (<small className='text-danger'>Current Address is required</small>)}
                    </Col>
                </Row>

            </Col>
            <Col lg={6}>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>Last Name</label>
                    </Col>
                    <Col lg={5}>
                    <input type="text" name="lname" placehollder="enter the Last Name" {...register("lname", { required: "Last name is required", pattern: {
                        value: /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
                        message: "Enter the valid name" }})}/> 
                    {errors.lname && (<small className='text-danger'>{errors.lname.message}</small>)}
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>Gender</label>
                    </Col>
                    <Col lg={5}>
                    <select name="gender" {...register("gender", { required: "Gender is required"})}>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select> 
                    {errors.gender && (<small className='text-danger'>{errors.gender.message}</small>)}

                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>Martial Status</label>
                    </Col>
                    <Col lg={5}>
                    <select name="martial" {...register("martial", { required: "Martial Status is required"})}>
                        <option value="">Select</option>
                        <option value="Married">Married</option>
                        <option value="Unmarried">Unmarried</option>
                    </select>
                    {errors.martial && (<small className='text-danger'>{errors.martial.message}</small>)}

                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5}>
                      <label></label>
                    </Col>
                    <Col lg={5}>
                        
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col lg={5}>
                        <label>Personal Email</label>
                    </Col>
                    <Col lg={5}>
                    <input type="email" name="email2" placehollder="enter the Last Name"  {...register("pemail", { required: "Personal Email is required", pattern:{
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
                        message: "Enter valid Email Address"
                    }})}/> 
                    {errors.pemail && (<small className='text-danger'>{errors.pemail.message}</small>)}
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>Permanent address</label>
                    </Col>
                    <Col lg={5}>
                    <textarea rows={5} cols={25} name="address2" placeholder="Enter your address" {...register("paddress", { required: "Permanent Address is required"})}></textarea>
                    {errors.paddress && (<small className='text-danger'>Permanent Address is required</small>)}
                    </Col>
                </Row>
            </Col>
            <Col lg={12}  className='mr-auto mt-4 mb-5'>
                <Button type="save">Save</Button>
            </Col>
        </Row>
        
    </form>    
        </Container>
  );
}

export default Profile;

