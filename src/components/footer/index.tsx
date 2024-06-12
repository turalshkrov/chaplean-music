import logo from '../../assets/header-logo.png';
import { FiDownload } from "react-icons/fi";
import { GrFormNextLink } from "react-icons/gr";
import './index.scss';

const Footer = () => {
  return (
    <div className='footer pb-2 pt-3'>
      <div className="container">
        <div className="row justify-space-between">
          <div className="col-12 col-lg-6">
            <img src={logo} alt="" className='mb-2' />
            <ul className='footer-ul'>
              <li className='mt-1'>What is Chaplean</li>
              <li className='mt-1'>Our difference</li>
              <li className='mt-1'>Pricing</li>
              <li className='mt-1'>Contact us</li>
            </ul>
          </div>
          <div className="col-12 col-lg-4 mt-3 mt-lg-0">
            <div className="d-f align-items-center">
              <button className="footer-btn mr-2 d-f align-items-center">
                <FiDownload className='mr-1' />
                Download
              </button>
              Coming soon
            </div>
            <div className="d-f mt-2 align-items-center">
              <button className="footer-btn mr-2 d-f align-items-center">
                <GrFormNextLink className='mr-1' />
                Subscribe
              </button>
              To stay updated
            </div>
          </div>
          <div className="col-12 text-center mt-2">
            <p className='font-sm'>Privacy & Policy - Cookies</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer