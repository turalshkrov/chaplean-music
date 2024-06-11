import headerLogo from '../../assets/header-logo.png';
import { RiMenu5Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import './index.scss';

const sections = [
  { label: 'What is Chaplean', href: '#whatischaplean' },
  { label: 'Our Difference', href: '#ourdifference' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Sign', href: '#sign' },
]

const Navbar = () => {
  const [ showMenu, setShowMenu ] = useState(false);
  return (
    <header className="p-1 p-lg-2">
      <div className="container p-r">
        <div className="d-f justify-space-between align-items-center">
          <div className="header-logo">
            <img src={headerLogo} alt=""/>
          </div>
          <nav className={showMenu ? 'd-b' : 'd-n d-lg-b'}>
            <ul className='d-f nav-menu-list'>
              {
                sections.map(section => {
                  return(
                    <li className='my-1 mt-lg-0' key={section.label}>
                      <a href={section.href} className='mr-lg-2'>{section.label}</a>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
          <div className="menu-icon d-lg-n" onClick={() => setShowMenu(!showMenu)}>
            { showMenu ? <RiCloseLine color="#1D9BF0" size={28}/> : <RiMenu5Line color="#1D9BF0" size={28}/> }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;