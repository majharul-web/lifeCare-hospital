import React from 'react';
import { Card } from 'react-bootstrap';

const Doctor = (props) => {
    
    const { doctor, designation, image } = props.doctor;
    return (
        //team member card
        <div className='col-md-4 col-sm-6 my-3'>
            <Card>
                <Card.Img variant='top' src={image} style={{ height: "300px", width: "100%" }} />
                <Card.Body style={{ backgroundColor: "#FFFAEE" }}>
                    <h4>
                        <span className='text-primary'>{doctor}</span>{" "}
                    </h4>
                    <p className='fw-bold'>{designation}</p>
                </Card.Body>
            </Card>

        </div >
    );
};

export default Doctor;