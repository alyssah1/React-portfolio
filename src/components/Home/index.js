import React from "react";
import resume from "../../images/Resume.pdf";
import "../../assets/css/style.css";

function Home() {
    return (
        <>
            <div className="text-left homepage justify-content-center">
                <div className="container-fluid ">
                    <h3 className="header-name ml-5" >Hello,</h3>
                    <h3 className="header-name ml-5 ">My name is Alyssa Hollowell</h3>
                    <p className="header-bottom ml-5">And I'm a Full Stack Web Developer</p>
                    <div className="mb-3 mt-5 ml-5">

                        <a href="https://github.com/alyssah1" className="btnicon" title="Github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                        <a href="https://www.linkedin.com/in/alyssa-hollowell-86b240192/" className="btnicon" title="Linkedin"
                            target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href="mailto:alyssa.hollowell2@gmail.com" className="btnicon" title="Email" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope-square"></i></a>
                        <a href={resume} className="btnicon" title="Resume" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-alt"></i></a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;