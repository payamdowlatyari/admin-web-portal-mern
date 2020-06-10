import React, { Component } from 'react';
import './Contact.css';
import Container from 'react-bootstrap/Container';


class Contact extends Component {

    render() {
        return (
            <Container >
                <br></br>
                <h1>Contact Us</h1>
                <hr></hr>
                <div className="contact-form">
                    <div>
                        <form action="#">
                            <label>First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your first name.." />
                            <label>Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            <label>Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email address.." />
                            <label>Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </Container>

        );
    }
}

export default Contact; 