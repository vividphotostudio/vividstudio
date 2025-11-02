import React, { useEffect } from 'react';

const About = () => {
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
                <img src="/images/goodline/banner-44.jpg" className="s-img-switch" alt="" />
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

        {/* Content */}
        <div className="container">
          <div className="row padding-lg-120t padding-lg-90b padding-md-90t padding-md-65b padding-sm-65t padding-sm-40b padding-xs-35t padding-xs-35b">
            <div className="col-sm-12">
              <div className="wpb_text_column wpb_content_element">
                <div className="wpb_wrapper">
                  <h3><strong>About Goodline Photography<br /></strong></h3>
                  <p>At GOODLINE PHOTOGRAPHY, we believe that every moment tells a story, and we are passionate about capturing those stories through our lens. Whether it's a wedding, corporate event, portrait session, or a special occasion, our team of skilled photographers ensures that your memories are preserved beautifully and timelessly. With a keen eye for detail and a creative approach, we specialize in high-quality photography that brings emotions to life. From candid moments to perfectly framed shots, we strive to deliver exceptional images that you can cherish forever. Let GOODLINE PHOTOGRAPHY turn your moments into masterpieces!</p>
                  <p>With a passion for storytelling and an eye for detail, we bring life to every frame, ensuring each shot reflects emotion and beauty. From professional studio setups to outdoor shoots, we cater to all your photography needs with perfection.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="row d-flex">
            <div className="col-sm-8 no-padd">
              <figure className="margin-l-15 margin-r-15">
                <img width="1700" height="1088" src="/images/goodline/aboutpage-1.jpg" className="vc_single_image-img attachment-full" alt="" />
              </figure>
            </div>
            <div className="col-sm-4 no-padd">
              <div className="img_one">
                <img src="/images/goodline/aboutpage-2.jpg" className="s-img-switch" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="container-full bg-color" style={{margin: '100px 0px'}}>
          <div className="container">
            <div className="row padding-lg-85t padding-lg-120b padding-md-65t padding-md-100b padding-sm-45t padding-sm-80b padding-xs-25t padding-xs-60b">
              <div className="col-sm-12">
                <div className="skill-wrapper linear linear-text padding-lg-35t">
                  <div className="text-wrap">
                    <h3 className="title">Why Choose Goodline Photography ?</h3>
                    <div className="text" style={{marginTop: '15px'}}>
                      Professional Excellence – Our team of skilled photographers delivers high-quality images with attention to detail, Creative & Unique Approach – We bring a fresh perspective to every shoot, ensuring your photos are truly special, Customer-Centric Service – Your satisfaction is our priority, and we tailor our services to meet your vision, Timely Delivery – We ensure quick turnaround times without compromising on quality, Affordable & Transparent Pricing – Get top-quality photography at competitive rates with no hidden costs.
                    </div>
                  </div>
                  <div className="skills-wrap">
                    <div className="wrapper-full">
                      <div className="skills">
                        <div className="skill" data-value="95">
                          <span className="skill-label">Client Satisfaction</span>
                          <div className="skill-value">
                            <span className="counter" data-from="0" data-speed="1000" data-to="99">99</span>%
                          </div>
                          <div className="line">
                            <div className="active-line"></div>
                          </div>
                        </div>
                        <div className="skill" data-value="88">
                          <span className="skill-label">Creative Shots</span>
                          <div className="skill-value">
                            <span className="counter" data-from="0" data-speed="1000" data-to="95">95</span>%
                          </div>
                          <div className="line">
                            <div className="active-line"></div>
                          </div>
                        </div>
                        <div className="skill" data-value="91">
                          <span className="skill-label">Innovation Posing Tips</span>
                          <div className="skill-value">
                            <span className="counter" data-from="0" data-speed="1000" data-to="100">100</span>%
                          </div>
                          <div className="line">
                            <div className="active-line"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second About Section */}
        <section className="about-section-new">
          <div className="container">
            <div className="hero">
              <div className="row padding-lg-50t padding-lg-60b padding-md-30t padding-md-40b padding-xs-10t margin-lg-35b margin-xs-0b">
                <div className="col-sm-6 col-lg-5 col-md-6">
                  <figure className="about-image">
                    <img width="933" height="1400" src="/images/goodline/aboutpage-3.jpg" className="vc_single_image-img attachment-full img_about_one" alt="" style={{borderRadius: '15px'}} />
                  </figure>
                  <figure>
                    <div className="padding-xs-10b">
                      <img width="215" height="300" src="/images/goodline/aboutpage-3.jpg" className="vc_single_image-img attachment-medium img_about_two" alt="" />
                    </div>
                  </figure>
                </div>
                <div className="col-sm-6 col-lg-7 col-md-6">
                  <div className="about-section-simple">
                    <div className="content" style={{paddingLeft: '40px'}}>
                      <div className="subtitle">BEST PHOTOGRAPHY COMPANY</div>
                      <h2 className="title">GOODLINE photography</h2>
                      <div className="description">
                        At GOODLINE PHOTOGRAPHY, we don't just take pictures—we create memories that last a lifetime. Our passion for photography drives us to capture emotions, stories, and the beauty of every moment with creativity and precision. Whether it's a wedding, a corporate event, a family portrait, or a product shoot, we bring a unique perspective and professional expertise to every project.
                        <blockquote>
                          <p>" Experience the art of storytelling through photography with GOODLINE ! "</p>
                        </blockquote>
                        <p>With state-of-the-art equipment and a keen eye for detail, we ensure that every shot is perfect, reflecting the essence of the moment. Our goal is to provide you with timeless images that you can cherish forever.</p>
                      </div>
                      <div className="but-wrap">
                        <a href="/photography" className="a-btn" target="_blank">View Portfolio</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
