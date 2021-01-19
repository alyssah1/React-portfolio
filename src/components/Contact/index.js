import React from "react";
import "../../assets/css/style.css";


function Contact () {
    return (
    <>
<div className="container">
    <section className="contact-section">
        <h1 id="contact">Contact</h1>
        <h3 className="number"><i className="fas fa-phone-square"></i>(469)-323-1038</h3>
        <h3 className="location"><i className="fas fa-map-marker-alt"></i>Houston, Texas</h3>
        <hr className="line"></hr>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">First Name</label>
            <input type="firstname" className="form-control" id="exampleFormControlInput1" placeholder="First Name"></input>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Last Name</label>
            <input type="lastname" className="form-control" id="exampleFormControlInput1" placeholder="Last Name"></input>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name@example.com"></input>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="button" className="btn btn-light btn-lg" style={{backgroundColor: "#6897bb"}}>Submit</button>
    </section>
</div>
    </>
    )
}


export default Contact;