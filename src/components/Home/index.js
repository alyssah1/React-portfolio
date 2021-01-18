import React from "react";
import resume from "../../images/Resume.pdf";
import "../../assets/css/style.css";

function Home() {
    return (
        <>
            <div className="text-left home justify-content-center">
                <div className="container-fluid ">
                    <h3 className="header-name ml-5" >Hello,</h3>
                    <h3 className="header-name ml-5 ">My name is Alyssa Hollowell</h3>
                    <p className="header-description ml-5">And I'm a Full Stack Web Developer</p>
                    <div className="mb-3 mt-5 ml-5">

                        <a href="https://github.com/alyssah1" className="btn icons" title="Github" target="_blank" rel="noopener noreferrer"
                            style={{ fontSize: 35, color: 'black', marginRight: 10 }}><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/alyssa-hollowell-86b240192/" className="btn icons" title="Linkedin"
                            target="_blank" rel="noopener noreferrer" style={{ fontSize: 35, color: 'black', marginRight: 10 }}><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:alyssa.hollowell2@gmail.com" className="btn icons" title="Email" target="_blank" rel="noopener noreferrer"
                            style={{ fontSize: 35, color: 'black', marginRight: 10 }}><i className="fas fa-envelope"></i></a>
                        <a href={resume} className="btn  icons" title="Resume" target="_blank" rel="noopener noreferrer"
                            style={{ fontSize: 35, color: 'black' }}><i className="fas fa-file-pdf"></i></a>

                    </div>
                </div>
            </div>
        </>
    )






}

export default Home;