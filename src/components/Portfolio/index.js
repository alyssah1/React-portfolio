import React from "react";
import "../../assets/css/style.css";
import weather from "../../images/weather.png";
import budget from "../../images/budget.png";
import employeedirectory from "../../images/employeedirectory.png";
import employeesummary from "../../images/employeesummary.png";
import project1page from "../../images/project1page.png";
import recipe from "../../images/recipe1.png";


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
                                <h5 className="card-title" style={{textAlign: "center"}}>Weather App</h5>
                                <img className="img-link" src={weather} alt="Code Quiz" />
                                <a href="https://github.com/alyssah1/Weather-app" rel="noopener noreferrer" target="_blank" style={{padding: "30px"}} className="card-link">Github Repo</a>
                                <a href="https://alyssah1.github.io/Weather-app/" rel="noopener noreferrer" target="_blank" className="card-link">Visit Link</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "20rem"}}>
                            <div className="card-body">
                                <h5 className="card-title" style={{textAlign: "center"}}>Budget Tracker</h5>
                                <img className="img-link" src={budget} alt="Budget Tracker" />
                                <a href="https://github.com/alyssah1/Budget-tracker" rel="noopener noreferrer" target="_blank" style={{padding: "30px"}} className="card-link">Github Repo</a>
                                <a href="https://radiant-gorge-18763.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="card-link">Visit Link</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "20rem"}}>
                            <div className="card-body">
                                <h5 className="card-title" style={{textAlign: "center"}}>Employee Directory</h5>
                                <img className="img-link" src={employeedirectory} alt="Employee Directory" />
                                <a href="https://github.com/alyssah1/Employee-directory" rel="noopener noreferrer" target="_blank" style={{padding: "30px"}} className="card-link">Github Repo</a>
                                <a href="https://alyssah1.github.io/Employee-directory/" rel="noopener noreferrer" target="_blank" className="card-link">Visit Link</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "20rem"}}>
                            <div className="card-body">
                                <h5 className="card-title" style={{textAlign: "center"}}>Employee Summary</h5>
                                <img className="img-link" src={employeesummary} alt="Employee Summary" />
                                <a href="https://github.com/alyssah1/Employee-summary" rel="noopener noreferrer" target="_blank" style={{padding: "30px"}} className="card-link">Github Repo</a>
                                <a href="https://alyssah1.github.io/Employee-summary/" rel="noopener noreferrer" target="_blank" className="card-link">Visit Link</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "20rem"}}>
                            <div className="card-body">
                                <h5 className="card-title" style={{textAlign: "center"}}>Dictionary</h5>
                                <img className="img-link" src={project1page} alt="Dictionary" />
                                <a href="https://github.com/alyssah1/Dictionary/tree/main" rel="noopener noreferrer" target="_blank" style={{padding: "30px"}} className="card-link">Github Repo</a>
                                <a href="https://immense-hollows-39774.herokuapp.com/login" rel="noopener noreferrer" target="_blank" className="card-link">Visit Link</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "20rem"}}>
                            <div className="card-body">
                                <h5 className="card-title" style={{textAlign: "center"}}>Recipe App</h5>
                                <img className="img-link" src={recipe} alt="Recipe App" />
                                <a href="https://github.com/alyssah1/Recipe-app" rel="noopener noreferrer" target="_blank" style={{padding: "30px"}} className="card-link">Github Repo</a>
                                <a href="https://alyssah1.github.io/Recipe-app/" rel="noopener noreferrer" target="_blank" className="card-link">Visit Link</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Portfolio;