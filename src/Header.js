import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-wrap fs-3 position-sticky w-100 my-header bg-opacity-100 bg-gradient">
      <div className='container-fluid'>
        <Link className='navbar-brand text-dark text-decoration-none fs-3' to='/'><img src={require("./minecraft.jpg")} className="my-icon" alt="..." /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item p-3">
              <Link className='text-white text-decoration-none' to='/'>伺服器特色</Link>
            </li>
            <li className="nav-item p-3">
              <Link className='text-white text-decoration-none' to='/About'>成員介紹</Link>
            </li>
            <li className="nav-item p-3">
              <Link className='text-white text-decoration-none' to='/Play'>贊助方法</Link>
            </li>
            <li className="nav-item p-3">
              <Link className='text-white text-decoration-none' to='/Other'>線上地圖</Link>
            </li>
            <li className="nav-item p-3">
              <a className="text-white text-decoration-none" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fs-3 bi bi-facebook"></i></a>
            </li>
            <li className="nav-item p-3">
              <button type="button" className="btn p-0 m-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="text-white bi bi-line fs-3"></i>
              </button>
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">LINE 群組 QR-Code</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <img src={require("./line.jpg")} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item p-3">
              <button type="button" className="btn p-0 m-0" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <i className="text-white fs-3 bi bi-instagram"></i>
              </button>
              <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">IG 群組 QR-Code</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <img src={require("./instagram.jpg")} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item p-3">
              <a className="text-white text-decoration-none" href="https://discord.gg/umcDScGPFJ" target="_blank" rel="noreferrer"><i className="fs-3 bi bi-discord"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;