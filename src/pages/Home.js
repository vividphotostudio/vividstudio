import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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

    // Initialize Swiper when scripts are loaded
    const initSwiper = () => {
      if (window.Swiper) {
        // Banner slider
        new window.Swiper('.swiper-container', {
          mousewheel: false,
          autoplay: {
            delay: 5000,
          },
          loop: true,
          speed: 1500,
          centeredSlides: true,
          spaceBetween: 0,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });

        // Testimonials slider
        new window.Swiper('.main-header-testimonial', {
          mousewheel: false,
          autoplay: {
            delay: 5000,
          },
          loop: true,
          speed: 1500,
          spaceBetween: 0,
          direction: 'vertical',
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      }
    };

    // Wait for scripts to load
    setTimeout(initSwiper, 1000);

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
        {/* Banner Slider */}
        <div className="container-full">
          <div className="row margin-lg-120b margin-md-80b margin-sm-80b margin-xs-40b">
            <div className="col-sm-12">
              <div className="banner-slider-wrap urban">
                <div className="swiper-container" data-mouse="0" data-autoplay="5000" data-loop="1" data-speed="1500" data-center="1" data-space="0" data-pagination-type="fraction" data-mode="horizontal">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide full-height-window">
                      <img src="/images/goodline/banner-11.jpg" className="s-img-switch" alt="" />
                      <div className="content-wrap">
                        <div className="subtitle">GOODLINE PHOTOGRAPHY</div>
                        <div className="title">Little moments make the <br />biggest memories.</div>
                        <Link to="/contact" className="a-btn-2">Book Appointment</Link>
                        <Link to="/contact" className="a-btn-2 mobile-btn">contact us</Link>
                      </div>
                    </div>
                    <div className="swiper-slide full-height-window">
                      <img src="/images/goodline/banner-44.jpg" className="s-img-switch" alt="" />
                      <div className="content-wrap">
                        <div className="subtitle">GOODLINE PHOTOGRAPHY</div>
                        <div className="title">Life is a collection of <br />beautiful moments.</div>
                        <Link to="/about" className="a-btn-2">Read more</Link>
                      </div>
                    </div>
                    <div className="swiper-slide full-height-window">
                      <img src="/images/goodline/banner-3.jpg" className="s-img-switch" alt="" />
                      <div className="content-wrap">
                        <div className="subtitle">GOODLINE PHOTOGRAPHY</div>
                        <div className="title">Memories are the timeless <br />treasures of the heart</div>
                        <Link to="/photography" className="a-btn-2">Our Clicks</Link>
                        <Link to="/contact" className="a-btn-2 mobile-btn">contact us</Link>
                      </div>
                    </div>
                    <div className="swiper-slide full-height-window">
                      <img src="/images/goodline/banner-5.jpg" className="s-img-switch" alt="" />
                      <div className="content-wrap">
                        <div className="subtitle">GOODLINE PHOTOGRAPHY</div>
                        <div className="title">Life is a collection of <br />beautiful moments.</div>
                        <Link to="/about" className="a-btn-2">Read more</Link>
                      </div>
                    </div>
                  </div>
                  <div className="pag-wrapper">
                    <div className="swiper-button-prev swiper-button-prev-swiper-unique-id-0">Prev</div>
                    <div className="swiper-pagination swiper-pagination-swiper-unique-id-0 swiper-pagination-fraction">
                      <span className="swiper-pagination-current">02</span> / <span className="swiper-pagination-total">03</span>
                    </div>
                    <div className="swiper-button-next swiper-button-next-swiper-unique-id-0">Next</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="about-section-new">
          <div className="container">
            <div className="hero">
              <div className="row padding-lg-50t padding-lg-60b padding-md-30t padding-md-40b padding-xs-10t margin-lg-35b margin-xs-0b">
                <div className="col-sm-6 col-lg-5 col-md-6">
                  <figure className="about-image">
                    <img width="933" height="1400" src="/images/goodline/about.jpg" className="vc_single_image-img attachment-full img_about_one" alt="" style={{borderRadius: '15px'}} />
                  </figure>
                  <figure>
                    <div className="padding-xs-10b">
                      <img width="215" height="300" src="/images/goodline/about.jpg" className="vc_single_image-img attachment-medium img_about_two" alt="" />
                    </div>
                  </figure>
                </div>
                <div className="col-sm-6 col-lg-7 col-md-6">
                  <div className="about-section-simple">
                    <div className="content" style={{paddingLeft: '40px'}}>
                      <div className="subtitle">Welcome to</div>
                      <h2 className="title">GOODLINE photography</h2>
                      <div className="description">
                        At GOODLINE PHOTOGRAPHY, we believe that every moment tells a story, and we are passionate about capturing those stories through our lens. Whether it's a wedding, corporate event, portrait session, or a special occasion, our team of skilled photographers ensures that your memories are preserved beautifully and timelessly.
                        <blockquote>
                          <p>" Cherish today's moments, for they are tomorrow's memories "</p>
                        </blockquote>
                        <p>With a keen eye for detail and a creative approach, we specialize in high-quality photography that brings emotions to life. From candid moments to perfectly framed shots, we strive to deliver exceptional images that you can cherish forever. Let GOODLINE PHOTOGRAPHY turn your moments into masterpieces!</p>
                      </div>
                      <div className="but-wrap">
                        <Link to="/about" className="a-btn" target="_blank">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="container-full bg_img home-cta">
          <div className="row pos_rel margin-lg-95b margin-md-55b margin-sm-50b margin-xs-20b" style={{padding: '50px 0px'}}>
            <span className="enable_overlay"></span>
            <div className="col-sm-12 z_index margin-lg-90t margin-lg-90b margin-sm-70t margin-sm-70b">
              <div className="headings-wrap load-fade">
                <div className="container">
                  <div className="row">
                    <div className="headings text_left">
                      <h3 className="title" style={{lineHeight: '50px'}}>Capture Your Moments with <br />GOODLINE PHOTOGRAPHY!</h3>
                      <p style={{color: '#fff', maxWidth: '60%', textAlign: 'left', marginTop: '20px'}}>
                        Let us turn your special moments into timeless memories. Whether it's a wedding, event, portrait, or commercial shoot, we're here to deliver stunning visuals that tell your story.
                      </p>
                      <div className="link-wrap">
                        <Link to="/contact" className="a-btn-2">Book Now</Link>
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
                <div className="col-sm-6 col-lg-7 col-md-6">
                  <div className="about-section-simple">
                    <div className="content" style={{paddingLeft: '40px'}}>
                      <div className="subtitle">A premium wedding photography company</div>
                      <div className="description">
                        <blockquote>
                          <h1 style={{color: '#000', fontWeight: '600'}}>Best Photography Studio <br />in Madurai</h1>
                        </blockquote>
                        <p>Looking for the best photography studio in Madurai? At GOODLINE PHOTOGRAPHY, we specialize in capturing stunning visuals that turn moments into timeless memories. Whether it's weddings, portraits, events, or commercial shoots, our expert photographers use creativity, precision, and the latest technology to deliver high-quality images.<br /><br />
                        With a passion for storytelling and an eye for detail, we bring life to every frame, ensuring each shot reflects emotion and beauty. From professional studio setups to outdoor shoots, we cater to all your photography needs with perfection.</p>
                      </div>
                      <div className="but-wrap">
                        <Link to="/contact" className="a-btn" target="_blank">Book Appointment</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-5 col-md-6">
                  <figure className="about-image">
                    <img width="933" height="1400" src="/images/goodline/about-2.jpg" className="vc_single_image-img attachment-full img_about_one" alt="" style={{borderRadius: '15px'}} />
                  </figure>
                  <figure>
                    <div className="padding-xs-10b">
                      <img width="215" height="350" src="/images/goodline/about-2.jpg" className="vc_single_image-img attachment-medium img_about_two" alt="" />
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <div className="container-full pad-l-15">
          <div className="bg-color row margin-md-65b margin-sm-45t margin-sm-50b margin-xs-30t margin-xs-15b" style={{padding: '50px 0px'}}>
            <div className="row margin-xs-30b">
              <div className="col-sm-12">
                <div className="headings-wrap load-fade">
                  <div className="container padding-lg-35t">
                    <div className="row">
                      <div className="headings text_center" style={{maxWidth: '900px'}}>
                        <h5 className="subtitle fade-up transition-0">TESTIMONIALS</h5>
                        <h3 className="title fade-up transition-1">Love Notes from People I've Photographed</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="main-header-testimonial classic modern">
                <div className="swiper-container" data-mouse="0" data-autoplay="5000" data-loop="1" data-speed="1500" data-space="0" data-mode="vertical" data-pagination-type="bullets">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="content-slide">
                        <div className="logo-customer s-back-switch">
                          <img src="/images/goodline/testi1.jpg" alt="" className="s-img-switch" />
                        </div>
                        <div className="description clearfix">
                          <p>"Goodline Photography did an amazing job capturing our special day! They were professional, kind, and made us feel so comfortable in front of the camera. The photos are stunning and we couldn't be happier with how they turned out. We highly recommend Goodline Photography to anyone looking for a talented and reliable wedding photographer. I would like to Thank each and everyone in the crew for your passion and professional love.. Surely you will reach better heights.."</p>
                        </div>
                        <div className="user">
                          <div className="user-info">
                            <div className="name">Ashwin Manoharan</div>
                            <div className="position">GOODLINE PHOTOGRAPHY</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="content-slide">
                        <div className="logo-customer s-back-switch">
                          <img src="/images/goodline/banner-3.jpg" alt="" className="s-img-switch" />
                        </div>
                        <div className="description clearfix">
                          <p>"We were thoroughly impressed with the photography services provided for our housewarming ceremony. The team's professionalism, attention to detail, and exceptional photography skills made the experience truly memorable. We highly recommend their services."</p>
                        </div>
                        <div className="user">
                          <div className="user-info">
                            <div className="name">Er.Ruthra Prasath M S</div>
                            <div className="position">GOODLINE PHOTOGRAPHY</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="content-slide">
                        <div className="logo-customer s-back-switch">
                          <img src="/images/goodline/testi3.jpg" alt="" className="s-img-switch" />
                        </div>
                        <div className="description clearfix">
                          <p>"We selected GOODLINE Photography for our big day. The service provided was really awesome. Had a good team to coordinate with us. Thanks for all the services provided the quality of the album is really good. 👍👌"</p>
                        </div>
                        <div className="user">
                          <div className="user-info">
                            <div className="name">Suganthi Alagendran</div>
                            <div className="position">GOODLINE PHOTOGRAPHY</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-swiper-unique-id-1 swiper-pagination-clickable swiper-pagination-bullets">
                  <span className="swiper-pagination-bullet"></span>
                  <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                  <span className="swiper-pagination-bullet"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second CTA */}
        <div className="container-full bg_img_new">
          <div className="row pos_rel" style={{padding: '50px 0px'}}>
            <span className="enable_overlay"></span>
            <div className="col-sm-12 z_index margin-lg-90t margin-lg-90b margin-sm-70t margin-sm-70b">
              <div className="headings-wrap load-fade">
                <div className="container">
                  <div className="row">
                    <div className="headings text_left">
                      <h3 className="title" style={{lineHeight: '50px'}}>
                        Happiness is found in the little things <br />we never forget
                      </h3>
                      <p style={{color: '#fff', maxWidth: '60%', textAlign: 'left', marginTop: '20px'}}>
                        At GOODLINE PHOTOGRAPHY, we believe that true happiness lies in the smallest, most heartfelt moments— a genuine smile, a shared laugh, a warm embrace. These little moments create the most beautiful memories, and we are here to capture them for you.
                      </p>
                      <div className="link-wrap">
                        <Link to="/contact" className="a-btn-2">Book Appointment</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
