import React from "react";
import "../../assets/css/style.css";


function Contact () {
    return (
    <>
<div className="container">
    <section className="contact-section">
        <h1 id="contact">Contact</h1>
        <hr className="line"></hr>
            <div className="row btn-group rounded" style={{padding: "60px", display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>   
                    <button className="button"><a href="mailto:alyssa.hollowell2@gmail.com" rel="noopener noreferrer" target="_blank"><i className="fas fa-envelope-square fa-7x"></i><h4>Email</h4><h6>alyssa.hollowell2<br></br>@gmail.com</h6></a></button>
                    <button className="button"><a href="https://github.com/alyssah1" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square fa-7x"></i><h4>GitHub</h4></a></button>
                    <button className="button"><a href="https://www.linkedin.com/in/alyssa-hollowell/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin fa-7x"></i><h4>LinkedIn</h4></a></button>
                    <button className="button"><i className="fas fa-phone-square fa-7x"></i><h5>(469)-323-1038</h5></button>
            </div>
    </section>
</div>
    </>
    )
}


export default Contact;