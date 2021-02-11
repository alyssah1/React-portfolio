import React from "react";
import "../../assets/css/style.css";
import weather from "../../images/weather.png";
import budget from "../../images/budget.png";
import employeedirectory from "../../images/employeedirectory.png";
import employeesummary from "../../images/employeesummary.png";
import project1page from "../../images/project1page.png";
import readme from "../../images/readme.png";


function Portfolio() {
    return (
        <>
            <div className="container">
                <section className="portfolio-section">
                    <h1 id="portfolio">Portfolio</h1>
                    <hr className="line"></hr>
                    <div className="row">
                        <div className="card" style={{width: "20rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Weather App</h5>
                                <img className="img-link" src={weather} alt="Code Quiz" />
                                <a href="https://github.com/alyssah1/Weather-app" rel="noreferrer" target="_blank" className="card-link">Github Repo</a>
                                <a href="https://alyssah1.github.io/Weather-app/" rel="noreferrer" target="_blank" className="card-link">Visit Link</a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <a href="https://radiant-gorge-18763.herokuapp.com">
                                <img className="img-link" src={budget} alt="Budget tracker" />
                        Budget Tracker
                    </a>
                        </div>
                        <div className="col-md-3">
                            <a href="https://alyssah1.github.io/Employee-directory/">
                                <img className="img-link" src={employeedirectory} alt="Employee directory" />
                        Employee Directory
                    </a>
                        </div>
                        <div className="col-md-3">
                            <a href="https://github.com/alyssah1/Employee-summary">
                                <img className="img-link" src={employeesummary} alt="Employee summary" />
                        Employee Summary
                    </a>
                        </div>
                        <div className="col-md-3">
                            <a href="https://immense-hollows-39774.herokuapp.com/login">
                                <img className="img-link" src={project1page} alt="Project 2" />
                        Project 2
                    </a>
                        </div>
                        <div className="col-md-3">
                            <a href="https://github.com/alyssah1/README-generator">
                                <img className="img-link" src={readme} alt="Readme generator" />
                        Readme Generator
                    </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Portfolio;