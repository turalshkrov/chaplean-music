/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaLocationDot, FaInstagram, FaFacebookF, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { FormEvent, useState } from "react";
import './index.scss';

const contactInfos = [
  { icon: <IoMdMail className="mr-1"/>, info: 'info@chaplean.net' },
  { icon: <FaPhone className="mr-1"/>, info: '+99499 123 45 67' },
  { icon: <FaLocationDot className="mr-1"/>, info: 'Baku, Azerbaijan' },
];

const socials = [
  <FaInstagram size={20}/>, <FaFacebookF size={20}/>, <FaTiktok size={20}/>, <FaXTwitter size={20}/>
];

const Contact = () => {
  const [ messageForm, setMessageForm ] = useState({
    name: 'Your Name',
    email: 'Your Email',
    message: 'Your Message',
  });

  const handleChange = (e: any) => {
    setMessageForm(state => ({ ...state, [e.target?.name] : e.target.value }));
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(messageForm);
  }
  return (
    <div className='contact pb-5' id='contact'>
      <div className="container">
        <div className="row justify-center contact-row">
          <div className="col-12 col-md-8 col-lg-6 px-2 d-f info-div">
            <button className="contact-btn">
              Contact Us
            </button>
            <ul className="mt-4">
              {
                contactInfos.map(item => {
                  return(
                    <li className="d-f align-items-center contact-info-item my-2" key={item.info}>
                      {item.icon}
                      {item.info}
                    </li>
                  )
                })
              }
            </ul>
            <ul className="socials d-f mt-4">
              {
                socials.map(icon => {
                  return (
                    <li key={icon.key} className="mr-2 social-icon">{icon}</li>
                  )
                })
              }
            </ul>
          </div>
          <div className="col-12 col-md-8 col-lg-6 p-2 align-items-strech">
            <div className="send-message-card w-100 p-3">
              <div className="card-title">
                <p>I’m interested in...</p>
                <form className="message-form d-f" onSubmit={handleSubmit}>
                  <input type="text" onChange={handleChange} name="name" value={messageForm.name} className="my-2"/>
                  <input type="text" onChange={handleChange} name="email" value={messageForm.email} className="my-2"/>
                  <input type="text" onChange={handleChange} name="message" value={messageForm.message} className="my-2"/>
                  <button className="send-message-btn mt-2">
                    <IoIosSend className="mr-1"/>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;