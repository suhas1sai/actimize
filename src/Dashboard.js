import {Container} from 'react-bootstrap';
// import Card from './Card';
import { form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function Dashboard() {

    const{ register,handleSubmit,formState: {errors}, reset} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    console.log(errors);
  return (
    <Container>
    {/* <Card /> */}

    <h1>Profile</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Row>
            <Col lg={6}>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>Firstname</label>
                    </Col>
                    <Col lg={5}>
                    <input type="text" name="fname"  placehollder="enter the First Name" {...register("fname", { required: "First name is required",pattern: {
                            value: /^[A-Z][a-z]+$/,
                            message: "Enter valid name"}})}/> 
                    {errors.fname && (<small className='text-danger'>First name is required</small>)}
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>Date Of Birth</label>
                    </Col>
                    <Col lg={5}>
                    <input type="date" name="date" placehollder="enter the First Name" {...register("date", { required: "Date of Birth is required"})}/> 
                    {errors.date && (<small className='text-danger'>Date of Birth is required</small>)}
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>Nationality</label>
                    </Col>
                    <Col lg={5}>
                       <select name="nationality">
                        <option value="none">Select</option>
                        <option value="Indian">Indian</option>
                        <option value="Non-Indian">Non-Indian</option>
                        </select>
                    {/* <small className='text-danger'>Selection is required</small> */}

                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>Mobile Number</label>
                    </Col>
                    <Col lg={5}>
                    <input type="number" name="number1" placehollder="enter the First Name" {...register("number", { required: "mobile number is required", pattern: {
                        value: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/,
                        message: "only numbers are allowed",
                    }})}/> 
                    {errors.number && (<small className='text-danger'>Mobile Number is required</small>)}
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>Company Email</label>
                    </Col>
                    <Col lg={5}>
                    <input type="email" name="email1" placehollder="enter the First Name" {...register("cemail", { required: "Company Email is required"})}/> 
                    {errors.cemail && (<small className='text-danger'>Company Email is required</small>)}
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
                        <label>Lastname</label>
                    </Col>
                    <Col lg={5}>
                    <input type="text" name="lname" placehollder="enter the Last Name" {...register("lname", { required: "Last name is required"})}/> 
                    {errors.lname && (<small className='text-danger'>Last Name is required</small>)}
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>Gender</label>
                    </Col>
                    <Col lg={5}>
                    <select name="gender">
                        <option value="none">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select> 
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>Martial Status</label>
                    </Col>
                    <Col lg={5}>
                    <select name="martial">
                        <option value="none">Select</option>
                        <option value="Married">Married</option>
                        <option value="Unmarried">Unmarried</option>
                    </select>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col lg={5}>
                      
                    </Col>
                    <Col lg={5}>

                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5}>
                        <label>Personal Email</label>
                    </Col>
                    <Col lg={5}>
                    <input type="email" name="email2" placehollder="enter the Last Name"  {...register("pemail", { required: "Personal Email is required"})}/> 
                    {errors.pemail && (<small className='text-danger'>Personal Email is required</small>)}
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
            <Col lg={12}  className='text-center mt-4 mb-5'>
                <Button type="save">Save</Button>
            </Col>
        </Row>
    </form>
    
    </Container>

  );
}

export default Dashboard;