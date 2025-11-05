import React, { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                <a href="/" className="logo" onClick={closeMobileMenu}>
                  <img src="/images/goodline/vivid-logo.jpg" alt="" />
                </a>
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
                    <li className="menu-item menu-item-has-children mega-menu">
                      <a href="/" onClick={closeMobileMenu}>Home</a>
                    </li>
                    <li className="menu-item menu-item-has-children mega-menu">
                      <a href="/about" onClick={closeMobileMenu}>About us</a>
                    </li>
                    <li className="menu-item menu-item-has-children mega-menu">
                      <a href="/photography" onClick={closeMobileMenu}>Photography</a>
                    </li>
                    <li className="menu-item menu-item-has-children mega-menu">
                      <a href="/services" onClick={closeMobileMenu}>Services</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                      <a href="/contact" onClick={closeMobileMenu}>Contact us</a>
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
                    <li className="menu-item menu-item-has-children current-menu-ancestor mega-menu">
                      <a href="/">Home</a>
                    </li>
                    <li className="menu-item menu-item-has-children mega-menu">
                      <a href="/about">About us</a>
                    </li>
                    <li className="menu-item menu-item-has-children mega-menu">
                      <a href="/photography">Photography</a>
                    </li>
                  </ul>
                </nav>

                <div className="logo">
                  <a href="/" className="logo">
                    <img src="/images/goodline/vivid-logo.jpg" alt="" />
                  </a>
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
                    <li className="menu-item menu-item-has-children current-menu-ancestor mega-menu">
                      <a href="/services">Services</a>
                    </li>
                    <li className="menu-item menu-item-has-children mega-menu">
                      <a href="/contact">Book Appointments</a>
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
