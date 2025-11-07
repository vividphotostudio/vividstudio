import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Load external scripts
    const scripts = [
      "/js/jquery-3.3.1.min.js",
      "/js/foxlazy.min.js",
      "/js/isotope.pkgd.min.js",
      "/js/lib/equalHeightsPlugin.js",
      "/js/lightgallery.min.js",
      "/js/instagram.js",
      "/js/script.js",
      "/js/scripts.js",
      "/js/swiper.min.js",
      "/js/tg_global.js",
      "/js/the-grid.min.js",
      "/js/imagesloaded.min.js",
      "/js/team.js",
      "/js/jquery.fitvids.min.js",
      "/js/countTo.js",
      "/js/skills.js",
    ];

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });

    return () => {
      // Cleanup scripts on unmount
      scripts.forEach((src) => {
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
      {/* <div className="preloader-text">
        <div className="text-wrap">
          <img
            src="/images/goodline/vivid-logo.jpg"
            alt=""
            style={{ width: "180px" }}
          />
        </div>
        <span>loading...</span>
      </div> */}

      <div className="main-wrapper" data-sound="/audio" data-top="992">
        {/* Banner */}
        <div className="container-full">
          <div className="row">
            <div className="col-sm-12">
              <div className="container-fluid top-banner top-banner__scene medium_banner center_content simple s-back-switch" style={{ height: '60vh', minHeight: '400px' }}>
                <img
                  src="/images/goodline/banner-44.jpg"
                  className="s-img-switch"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className="overlay"></span>
                <div className="content">
                  <div className="row">
                    <div className="col-xs-12">
                      <h3 className="title">About us</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second About Section */}
        <div style={{ backgroundColor: '#ffffff', width: '100%', minHeight: '50vh' }}>
        <section className="about-section-new">
          <div className="container">
            <div className="hero">
              <div className="row padding-lg-50t padding-lg-60b padding-md-30t padding-md-40b padding-xs-10t margin-lg-35b margin-xs-0b">
                <div className="col-sm-6 col-lg-5 col-md-6">
                  <figure className="about-image">
                    <img
                      width="933"
                      height="1400"
                      src="/images/goodline/aboutpage-3.jpeg"
                      className="vc_single_image-img attachment-full img_about_one"
                      alt=""
                      style={{ borderRadius: "15px" }}
                    />
                  </figure>
                  <figure>
                    <div className="padding-xs-10b">
                      <img
                        width="215"
                        height="300"
                        src="/images/goodline/aboutpage-3.jpeg"
                        className="vc_single_image-img attachment-medium img_about_two"
                        alt=""
                      />
                    </div>
                  </figure>
                </div>
                <div className="col-sm-6 col-lg-7 col-md-6">
                  <div className="about-section-simple">
                    <div className="content" style={{ paddingLeft: "40px" }}>
                      <div className="subtitle">BEST PHOTOGRAPHY COMPANY</div>
                      <h2 className="title">VIVID PHOTO STUDIO</h2>
                      <div className="description">
                        At VIVID PHOTO STUDIO, we don't just take pictures—we
                        create memories that last a lifetime. Our passion for
                        photography drives us to capture emotions, stories, and
                        the beauty of every moment with creativity and
                        precision. Whether it's a wedding, a corporate event, a
                        family portrait, or a product shoot, we bring a unique
                        perspective and professional expertise to every project.
                        <blockquote>
                          <p>
                            " Experience the art of storytelling through
                            photography with VIVID PHOTO STUDIO ! "
                          </p>
                        </blockquote>
                        <p>
                          With state-of-the-art equipment and a keen eye for
                          detail, we ensure that every shot is perfect,
                          reflecting the essence of the moment. Our goal is to
                          provide you with timeless images that you can cherish
                          forever.
                        </p>
                      </div>
                      <div className="but-wrap">
                        <a
                          href="/photography"
                          className="a-btn"
                          target="_blank"
                        >
                          View Portfolio
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    </>
  );
};

export default About;
