import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Load external scripts
    const scripts = [
      '/js/jquery-3.3.1.min.js',
      '/js/foxlazy.min.js',
      '/js/isotope.pkgd.min.js',
      '/js/lib/equalHeightsPlugin.js',
      '/js/lightgallery.min.js',
      '/js/instagram.js',
      '/js/script.js',
      '/js/scripts.js',
      '/js/swiper.min.js',
      '/js/tg_global.js',
      '/js/the-grid.min.js',
      '/js/imagesloaded.min.js',
      '/js/team.js',
      '/js/jquery.fitvids.min.js',
      '/js/countTo.js',
      '/js/skills.js'
    ];

    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });

    return () => {
      // Cleanup scripts on unmount
      scripts.forEach(src => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      <div className="preloader-text">
        <div className="text-wrap">
          <img src="/images/goodline/goodline-logo.png" alt="" style={{width: '180px'}} />
        </div>
        <span>loading...</span>
      </div>

      <div className="main-wrapper" data-sound="/audio" data-top="992">
        {/* Banner */}
        <div className="container-full">
          <div className="row">
            <div className="col-sm-12">
              <div className="container-fluid top-banner top-banner__scene medium_banner center_content simple s-back-switch">
                <img src="/images/goodline/banner-2.jpeg" className="s-img-switch" alt="" />
                <span className="overlay"></span>
                <div className="content">
                  <div className="row">
                    <div className="col-xs-12">
                      <h3 className="title">Book Appointment</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="container" style={{padding: '100px 0px 0px 0px'}}>
          <div className="row margin-lg-110b margin-sm-60b margin-xs-40b">
            <div className="col-sm-12">
              <div className="contacts-info-wrap info_with_form over">
                <div className="container no-padd">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="content-wrap">
                        <div className="content-item">
                          <h5 className="title">Address: </h5>
                          <div className="address">
                            Anjaneyar Kovil St, Sabapathy Nagar, Noothencheri, Vengavasal, Chennai, Tamil Nadu 600126
                          </div>
                        </div>
                        <div className="content-item">
                          <h5 className="title">Information: </h5>
                          <div className="address">
                            <a href="#">Email ID : vividphotostudio@gmail.com</a>
                            <a href="tel:+919150056656">Call : +91 91500 56656 / +91 86751 54555</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-8">
                      <div className="form btn-style-1 padding-xs-25b">
                        <div role="form" className="wpcf7" id="wpcf7-f3290-p3444-o1" lang="en" dir="ltr">
                          <div className="screen-reader-response"></div>
                          <form className="wpcf7-form" noValidate="novalidate">
                            <p>
                              <span className="wpcf7-form-control-wrap name">
                                <input type="text" name="name" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your name" />
                              </span>
                              <span className="wpcf7-form-control-wrap email">
                                <input type="email" name="email" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Your e-mail" />
                              </span>
                              <br />
                              <span className="wpcf7-form-control-wrap textarea">
                                <textarea name="textarea" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your message"></textarea>
                              </span>
                              <br />
                              <input type="submit" value="Send" className="wpcf7-form-control wpcf7-submit" />
                            </p>
                            <div className="wpcf7-response-output wpcf7-display-none"></div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="container-full">
          <div className="row margin-lg-120b margin-sm-80b margin-xs-60b">
            <div className="mapContainer">
              <iframe
                title="Vivid Photo Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3461667847243!2d80.1586203!3d12.9006067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fdbb3fda901%3A0x39016fd9d58142b4!2sVivid%20photo%20studio!5e0!3m2!1sen!2sin!4v1736956789123!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{border: 0, width: '100%', height: '450px'}}
                allowFullScreen=""
              ></iframe>
              <button className="directionButton">
                Get Direction
                <img src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_82_1895)'%3e%3cpath%20d='M5.33348%2011.9997L0.666809%2014.6663V3.99967L5.33348%201.33301M5.33348%2011.9997L10.6668%2014.6663M5.33348%2011.9997V1.33301M10.6668%2014.6663L15.3335%2011.9997V1.33301L10.6668%203.99967M10.6668%2014.6663V3.99967M10.6668%203.99967L5.33348%201.33301'%20stroke='%23195AFF'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_82_1895'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
