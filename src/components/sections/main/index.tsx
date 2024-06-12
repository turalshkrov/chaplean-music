import { FiDownload } from "react-icons/fi";
import { FaPause, FaSquareCheck } from "react-icons/fa6";
import smeLogo from '../../../assets/sme.svg';
import micproLogo from '../../../assets/micpro.png';
import heroImg from '../../../assets/chaplean-product 1.png';
import './index.scss';

const Main = () => {
  return (
    <div className='main py-3 py-lg-4' id="main">
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 col-lg-9">
            <h1 className='main-title'>
              Melodies for moments, moments for you
            </h1>
            <p className='pr-lg-5'>
              Don't just listen to music, feel it, make it a part of your life.Don't just listen
              to music, feel it, make it a part of your life.Don't just listen to music,
            </p>
            <div className="download mt-2">
              <button className="px-2 px-md-2 py-1 download-btn">
                <FiDownload className="mr-1" />
                Download
              </button>
              <span className="ml-2">
                Coming soon...
              </span>
            </div>
            <div className="collabrations mt-3">
              <p className="font-md">Collaboration Partners</p>
              <div className="d-f mt-2 al">
                <img src={smeLogo} alt="" />
                <img src={micproLogo} alt="" className="ml-2" />
              </div>
            </div>
          </div>
          <div className="d-n d-lg-b col-lg-3">
            <img src={heroImg} alt="" className="w-100" />
          </div>
        </div>
        <div className="row mt-4 mt-lg-3 align-items-center">
          <div className="col-12 col-lg-8">
            <p className="large-text">The first music based social media in the world of music</p>
          </div>
          <div className="col-3 d-n d-lg-b ml-3">
            <button className="p-2 large-btn d-f align-items-center justify-space-between">
              <div className="text-left">
                <p className="fw-bold">Charlie Chapin</p>
                <p className="m-0">Piano</p>
              </div>
              <button className="play-btn">
                <FaPause size={20} />
              </button>
            </button>
          </div>
        </div>
        <div className="mt-2 ml-2">
          <div className="btn-group">
            <button className="active">Personal</button>
            <button>Creator</button>
          </div>
          <ul className="mt-2">
            <li className="d-f align-items-center">
              <FaSquareCheck className="mr-1" color="#1D9BF0" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="d-f align-items-center">
              <FaSquareCheck className="mr-1" color="#1D9BF0" />
              Lorem ipsum dolor sit amet,
            </li>
            <li className="d-f align-items-center">
              <FaSquareCheck className="mr-1" color="#1D9BF0" />
              Lorem ipsum dolor sit amet, consectetur
            </li>
            <li className="d-f align-items-center">
              <FaSquareCheck className="mr-1" color="#1D9BF0" />
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </li>
            <li className="d-f align-items-center">
              <FaSquareCheck className="mr-1" color="#1D9BF0" />
              Lorem ipsum dolor
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Main;