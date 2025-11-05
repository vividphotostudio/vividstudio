import React, { useEffect } from 'react';

const Services = () => {
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
                <img src="/images/goodline/banner-5.jpeg" className="s-img-switch" alt="" />
                <span className="overlay"></span>
                <div className="content">
                  <div className="row">
                    <div className="col-xs-12">
                      <h3 className="title">Our Services</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="container">
          <div className="row padding-lg-120t padding-lg-120b padding-md-90t padding-md-90b padding-sm-65t padding-sm-65b padding-xs-35t padding-xs-35b">
            <div className="col-sm-6 col-md-6">
              <div className="services center">
                <div className="content">
                  <img src="/images/goodline/photographer.png" alt="" style={{width: '100px'}} />
                  <h4 className="title">Traditional & Candid Photography</h4>
                  <div className="text">
                    We capture the essence of every moment with a mix of classic and natural photography styles. Our traditional shots preserve timeless elegance, while candid captures bring out genuine emotions. From rituals to spontaneous smiles, we ensure every detail is beautifully documented. Relive your special moments with stunning visuals that last a lifetime.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="services center">
                <div className="content">
                  <img src="/images/goodline/videography.png" alt="" style={{width: '100px'}} />
                  <h4 className="title">Traditional & Candid Videography</h4>
                  <div className="text">
                    Experience the magic of storytelling through our expert videography services. Traditional videography ensures every key moment is well-documented, while candid shots bring out raw emotions and real expressions. We create cinematic wedding films that let you relive the joy, laughter, and love of your big day. Let your story unfold beautifully on screen.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-sm-6 col-md-6">
              <div className="services center">
                <div className="content">
                  <img src="/images/goodline/outdoor.png" alt="" style={{width: '100px'}} />
                  <h4 className="title">Outdoor Shoots</h4>
                  <div className="text">
                    Celebrate love, life, and special occasions in the beauty of nature or vibrant cityscapes. Our outdoor shoots are designed to create stunning, natural-looking portraits with perfect lighting and scenic backdrops. Whether it's a romantic couple shoot, a pre-wedding session, or a personal portfolio, we make every shot picture-perfect. Turn ordinary locations into extraordinary memories with our creative outdoor photography.
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

export default Services;
