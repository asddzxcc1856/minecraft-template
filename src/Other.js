import React from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Other = (props) => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div id="carouselExampleIndicators" className="container-fluid carousel slide my-carousel bg-light bg-gradient bg-opacity-75" data-bs-ride="carousel" data-aos="fade-right">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item my-carousel-item bg-cover active">
                        <img src={require("./picture1.jpg")} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item my-carousel-item bg-cover">
                        <img src={require("./picture2.jpg")} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item my-carousel-item bg-cover">
                        <img src={require("./picture3.jpg")} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container-fluid h-auto text-center text-wrap bg-opacity-75 bg-light bg-gradient" data-aos="fade-left">
                <div className="fs-1 fw-bolder row row-cols-1">
                    <div className="col">
                        線上小地圖
                    </div>
                </div>
                <div className="fs-5 row row-cols-1">
                    <div className="col pt-5 pb-5">
                        <iframe title="myFrame" src="https://mine.candy.moe/map/#utopia:1:0:-1:4000:0:0:0:0:perspective" height={"600px"} className="w-100 shadow-2-strong" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Other;