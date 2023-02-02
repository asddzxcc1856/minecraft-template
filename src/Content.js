import React from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
const Content = (props) => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div id="carouselExampleIndicators" className="w-100 container-fluid carousel slide my-carousel bg-light bg-gradient bg-opacity-75" data-bs-ride="carousel" data-aos="fade-right">
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
            <div className="container-fluid h-auto text-center text-wrap bg-opacity-75 bg-light bg-gradient">
                <div className="fs-1 fw-bolder row row-cols-1">
                    <div className="col" data-aos="fade-left">
                        玩法介紹
                    </div>
                </div>
                <div className="fs-5 row row-cols-1 row-cols-sm-2 row-cols-xl-4">
                    <div className="col pt-5 my-image-block fw-bolder fs-2" data-aos="fade-left">
                        <img src={require("./diamond.jpg")} className="d-block w-25 rounded mx-auto shadow-2-strong" alt="..." />
                        穩定的伺服器
                        <p className="pt-1 my-image-block fw-bolder fs-5">高速的多核心CPU</p>
                    </div>
                    <div className="col pt-5 my-image-block fw-bolder fs-2" data-aos="fade-left">
                        <img src={require("./grass.jpg")} className="d-block w-25 rounded mx-auto shadow-2-strong" alt="..." />
                        長期舉辦活動
                        <p className="pt-1 my-image-block fw-bolder fs-5">蒐集活動、小遊戲競賽</p>
                    </div>
                    <div className="col pt-5 my-image-block fw-bolder fs-2" data-aos="fade-left">
                        <img src={require("./green_block.jpg")} className="d-block w-25 rounded mx-auto shadow-2-strong" alt="..." />
                        各式趣味生存
                        <p className="pt-1 my-image-block fw-bolder fs-5">抽獎機、更多附魔</p>
                    </div>
                    <div className="col pt-5 my-image-block fw-bolder fs-2" data-aos="fade-left">
                        <img src={require("./diamond_block.jpg")} className="d-block w-25 rounded mx-auto shadow-2-strong" alt="..." />
                        經典原味重現
                        <p className="pt-1 my-image-block fw-bolder fs-5">保有1.19的原味生存</p>
                    </div>
                </div>
                <div className="fs-1 fw-bolder row row-cols-1" data-aos="fade-right">
                    <div className="col">
                        遊戲照片
                    </div>
                </div>
                <div className="fs-5 row row-cols-1 row-cols-sm-2 row-cols-xl-4">
                    <div className="d-inline-block col pt-5 my-image-block" data-aos="fade-right">
                        <img src={require("./picture4.jpg")} className="d-block w-100 rounded mx-auto shadow-2-strong img-fluid" alt="..." />
                    </div>
                    <div className="d-inline-block col pt-5 my-image-block" data-aos="fade-right">
                        <img src={require("./picture5.jpg")} className="d-block w-100 rounded mx-auto shadow-2-strong img-fluid" alt="..." />
                    </div>
                    <div className="d-inline-block col pt-5 my-image-block" data-aos="fade-right">
                        <img src={require("./picture6.jpg")} className="d-block w-100 rounded mx-auto shadow-2-strong img-fluid" alt="..." />
                    </div>
                    <div className="d-inline-block col pt-5 my-image-block" data-aos="fade-right">
                        <img src={require("./picture7.jpg")} className="d-block w-100 rounded mx-auto shadow-2-strong img-fluid" alt="..." />
                    </div>
                </div>
                <div className="fs-1 fw-bolder row row-cols-1" data-aos="fade-left">
                    <div className="col">
                        連線資訊
                    </div>
                </div>
                <div className="row fs-5 d-inline-flex flex-row justify-content-center">
                    <div className="col text-start" data-aos="fade-left">
                        <p><i className="bi bi-chevron-right"></i>伺服器IP minecraft.ddns.net</p>
                        <p><i className="bi bi-chevron-right"></i>Java版 Port 25565</p>
                        <p><i className="bi bi-chevron-right"></i>基岩版 Port 19132</p>
                        <p><i className="bi bi-chevron-right"></i>最多人數 500人</p>
                        <p><i className="bi bi-chevron-right"></i>遊戲版本 1.19.3</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;