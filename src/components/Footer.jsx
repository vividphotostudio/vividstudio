import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="modern">
        <div className="container" style={{ width: "1400px" }}>
          <div className="widg clearfix">
            <div
              id="wiso_copyright_widget-2"
              className="sidebar-item col-xs-12 col-sm-6 col-md-4 CopyrightWidget"
            >
              <div className="item-wrap">
                <div className="wiso-widget-copyright">
                  <div className="img-wrap">
                    <img
                      src="/images/goodline/vivid-logo.jpg"
                      alt=""
                      style={{ filter: "brightness(0.4)" }}
                    />
                  </div>
                  <div className="socials">
                    <a
                      href="https://www.facebook.com/vividphotostudio/"
                      className="fa fa-facebook"
                    ></a>
                    <a
                      href="https://in.pinterest.com/vividphotostudio/_created/"
                      className="fa fa-pinterest"
                    ></a>
                    <a
                      href="https://www.instagram.com/vividphotostudio/"
                      className="fa fa-instagram"
                    ></a>
                    <a
                      href="https://www.youtube.com/@VividPhotoStudio"
                      className="fa fa-youtube"
                    ></a>
                    <a
                      href="https://www.linkedin.com/company/vivid-photo-studio/"
                      className="fa fa-linkedin"
                    ></a>
                  </div>
                  <div className="copy_content text">
                    © Vivid Photo Studio 2025. All Right Reserved. Designed by{" "}
                    <a href="https://techparkinfosolutions.com/">
                      Tech Park Info Solutions
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="text-3"
              className="sidebar-item col-xs-12 col-sm-6 col-md-4 widget_text"
            >
              <div className="item-wrap">
                <h5>Information</h5>
                <div className="textwidget">
                  <p>
                    <b>Address :</b> 13, Valar Nagar Main Rd, opposite
                    Elanthaikulam, Valar Nagar, Telecom Nagar, Chennai, Tamil
                    Nadu 625023
                  </p>
                  <p>
                    <b>Email ID :</b>{" "}
                    <a href="mailto:vividphotostudio@gmail.com">
                      vividphotostudio@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:919150056656">
                      <b>Call :</b> +91 91500 56656 / +91 86751 54555{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              id="wiso_subscribe_widget-2"
              className="sidebar-item col-xs-12 col-sm-6 col-md-4 SubscribeWidget"
            >
              <div className="item-wrap">
                <div className="wiso-widget-subscribe">
                  <h3 className="wiso-widget-subscribe">Subscribe</h3>
                  <div
                    role="form"
                    className="wpcf7"
                    id="wpcf7-f3211-o1"
                    lang="en"
                    dir="ltr"
                  >
                    <div className="screen-reader-response"></div>
                    <form className="wpcf7-form" noValidate="novalidate">
                      <p>
                        <span className="wpcf7-form-control-wrap email">
                          <input
                            type="email"
                            name="email"
                            value=""
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Enter your-email"
                          />
                        </span>
                      </p>
                      <div className="wpcf7-response-output wpcf7-display-none"></div>
                    </form>
                  </div>
                  <h3 className="wiso-widget-descr">No spam, we promise</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <a
        href="https://api.whatsapp.com/send?phone=9150056656&text="
        className="float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </>
  );
};

export default Footer;
