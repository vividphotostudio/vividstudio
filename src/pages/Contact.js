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
                <img src="/images/goodline/banner-2.jpg" className="s-img-switch" alt="" />
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
                            13, Valar Nagar Main Rd, opposite Elanthaikulam, Valar Nagar, Telecom Nagar, Madurai, Tamil Nadu 625023
                          </div>
                        </div>
                        <div className="content-item">
                          <h5 className="title">Information: </h5>
                          <div className="address">
                            <a href="#">Email ID : goodlinephotography@gmail.com</a>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29443538.9620802!2d61.02101754100091!3d19.731627470788023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5b74101d369%3A0xf25f3c43e26bab71!2sGoodline%20Photography!5e1!3m2!1sen!2sin!4v1740737446652!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Goodline Photography Location"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
