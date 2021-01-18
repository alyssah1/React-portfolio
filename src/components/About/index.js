import React from 'react';
import picture from '../../images/picture.png';
import "../../assets/css/style.css";




function About() {
    return (
        <>
            <div id="aboutme">
                <div className="container">
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col-12">
                            <h2 className="aboutme">About Me</h2>
                        </div>
                    </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center" >

                            <div>
                                <img className="picture" src={picture} alt="Alyssa Hollowell"
                                />
                            </div>
                        </div>
                            <div className="col-md-9 col-sm-12">
                            <p className="aboutme-paragraph">
                            I am a graduate from the University of Houston. I majored in Retailing and Consumer Science and minored in Law, Values, and Policy.
                            I am a current student at Rice University Full Stack Web Development Coding Bootcamp. 
                            I became interested in web development because I am able to show off my creativity and analytical skills. 
                            Some of the languages I am currently learning are HTML, CSS and Javascript.
                            </p>
                            </div>
                        </div>
                </div>
                <br></br>
                <br></br>
            </div>

        </>
    )
}

export default About;