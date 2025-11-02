import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="header_top_bg header_trans-fixed menu_light_text" id="mobile-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <header className="right-menu classic">
                <Link to="/" className="logo" onClick={closeMobileMenu}>
                  <img src="/images/goodline/goodline-logo.png" alt="" />
                </Link>
                <a href="javascript:void(0)" className="mob-nav" onClick={toggleMobileMenu}>
                  <div className="hamburger">
                    <i>Menu</i>
                  </div>
                </a>
                <nav id="topmenu" className="topmenu">
                  <a href="javascript:void(0)" className="mob-nav-close" onClick={closeMobileMenu}>
                    <span>close</span>
                    <div className="hamburger">
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </a>
                  <ul id="menu-menu-1" className="menu">
                    <li className={`menu-item menu-item-has-children mega-menu ${location.pathname === '/' ? 'current-menu-ancestor' : ''}`}>
                      <Link to="/" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className={`menu-item menu-item-has-children mega-menu ${location.pathname === '/about' ? 'current-menu-ancestor' : ''}`}>
                      <Link to="/about" onClick={closeMobileMenu}>About us</Link>
                    </li>
                    <li className={`menu-item menu-item-has-children mega-menu ${location.pathname === '/photography' ? 'current-menu-ancestor' : ''}`}>
                      <Link to="/photography" onClick={closeMobileMenu}>Photography</Link>
                    </li>
                    <li className={`menu-item menu-item-has-children mega-menu ${location.pathname === '/blog' ? 'current-menu-ancestor' : ''}`}>
                      <Link to="/blog" onClick={closeMobileMenu}>Blogs</Link>
                    </li>
                    <li className={`menu-item menu-item-has-children mega-menu ${location.pathname === '/services' ? 'current-menu-ancestor' : ''}`}>
                      <Link to="/services" onClick={closeMobileMenu}>Services</Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                      <Link to="/contact" onClick={closeMobileMenu}>Contact us</Link>
                    </li>
                  </ul>
                </nav>
              </header>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="header_top_bg header_trans-fixed menu_light_text" id="desktop-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <header className="right-menu classic">
                <nav id="topmenu" className="topmenu">
                  <a href="javascript:void(0)" className="mob-nav-close">
                    <span>close</span>
                    <div className="hamburger">
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </a>
                  <ul id="menu-menu-1" className="menu">
                    <li className={`menu-item menu-item-has-children current-menu-ancestor mega-menu ${location.pathname === '/' ? 'current-menu-ancestor' : ''}`}>
                      <Link to="/">Home</Link>
                    </li>
                    <li className={`menu-item menu-item-has-children mega-menu ${location.pathname === '/about' ? 'current-menu-ancestor' : ''}`}>
                      <Link to="/about">About us</Link>
                    </li>
                    <li className={`menu-item menu-item-has-children mega-menu ${location.pathname === '/photography' ? 'current-menu-ancestor' : ''}`}>
                      <Link to="/photography">Photography</Link>
                    </li>
                  </ul>
                </nav>

                <div className="logo">
                  <Link to="/" className="logo">
                    <img src="/images/goodline/goodline-logo.png" alt="" />
                  </Link>
                </div>

                <nav id="topmenu" className="topmenu">
                  <a href="javascript:void(0)" className="mob-nav-close">
                    <span>close</span>
                    <div className="hamburger">
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </a>
                  <ul id="menu-menu-1" className="menu">
                    <li className={`menu-item menu-item-has-children current-menu-ancestor mega-menu ${location.pathname === '/services' ? 'current-menu-ancestor' : ''}`}>
                      <Link to="/services">Services</Link>
                    </li>
                    <li className={`menu-item menu-item-has-children mega-menu ${location.pathname === '/blog' ? 'current-menu-ancestor' : ''}`}>
                      <Link to="/blog">Blogs</Link>
                    </li>
                    <li className={`menu-item menu-item-has-children mega-menu ${location.pathname === '/contact' ? 'current-menu-ancestor' : ''}`}>
                      <Link to="/contact">Book Appointments</Link>
                    </li>
                  </ul>
                </nav>

                <a href="javascript:void(0)" className="mob-nav" onClick={toggleMobileMenu}>
                  <div className="hamburger">
                    <i>Menu</i>
                  </div>
                </a>
              </header>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
