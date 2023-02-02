import React from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

const About = (props) => {
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
                    <img src={require("./picture1.jpg")} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item my-carousel-item bg-cover">
                    <img src={require("./picture2.jpg")} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item my-carousel-item bg-cover">
                    <img src={require("./picture3.jpg")} className="d-block w-100" alt="..."/>
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
        <div className="container-fluid h-auto text-center text-wrap bg-opacity-75 bg-light bg-gradient">
            <div className="fs-1 fw-bolder row row-cols-1" data-aos="fade-left">
                    <div className="col">
                        成員介紹
                    </div>
            </div>
            <div className="fs-5 row row-cols-1 row-cols-sm-2 row-cols-xl-4" data-aos="fade-left">
                <div className="col pt-5 my-image-block fw-bolder fs-2">
                    <img src={require("./diamond.jpg")} className="d-block w-25 rounded mx-auto shadow-2-strong" alt="..."/>
                    Mr.Chen
                    <p className="pt-1 fw-bolder fs-6">負責: 決定伺服器的主要營運方向，提出更多的想法</p>
                    <p className="pt-1 fw-bolder fs-6">興趣: 看電影</p>
                </div>
                <div className="col pt-5 my-image-block fw-bolder fs-2">
                    <img src={require("./grass.jpg")} className="d-block w-25 rounded mx-auto shadow-2-strong" alt="..."/>
                    Mr.Wang
                    <p className="pt-1 fw-bolder fs-6">負責: 處理玩家插件問題</p>
                    <p className="pt-1 fw-bolder fs-6">興趣: 看電影</p>
                </div>
                <div className="col pt-5 my-image-block fw-bolder fs-2">
                    <img src={require("./green_block.jpg")} className="d-block w-25 rounded mx-auto shadow-2-strong" alt="..."/>
                    Mr.Wu
                    <p className="pt-1 fw-bolder fs-6">負責: 處理Discord</p>
                    <p className="pt-1 fw-bolder fs-6">興趣: 看電影</p>
                </div>
                <div className="col pt-5 my-image-block fw-bolder fs-2">
                    <img src={require("./diamond_block.jpg")} className="d-block w-25 rounded mx-auto shadow-2-strong" alt="..."/>
                    Mr.Lee
                    <p className="pt-1 fw-bolder fs-6">負責: 處理玩家問題，維持伺服器和諧</p>
                    <p className="pt-1 fw-bolder fs-6">興趣: 看電影</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;