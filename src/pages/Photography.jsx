import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Photography = () => {
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

  const portfolioItems = [
    {
      id: 7,
      title: 'Model Photography',
      image: '/goodline_apanel/assets/images/movies/gallery/21980921640468.jpg',
      link: '/photography-detail/7'
    },
    {
      id: 6,
      title: 'Ashwin & shalini',
      image: '/goodline_apanel/assets/images/movies/gallery/15940054288022.jpg',
      link: '/photography-detail/6'
    },
    {
      id: 5,
      title: 'Rajaganapathy & Roshini',
      image: '/goodline_apanel/assets/images/movies/gallery/20755583772155.jpg',
      link: '/photography-detail/5'
    },
    {
      id: 4,
      title: 'Wedding Moments',
      image: '/goodline_apanel/assets/images/movies/gallery/1495086236438.jpg',
      link: '/photography-detail/4'
    }
  ];

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
                <img src="/images/goodline/banner-6.jpg" className="s-img-switch" alt="" />
                <span className="overlay"></span>
                <div className="content">
                  <div className="row">
                    <div className="col-xs-12">
                      <h3 className="title">Explore My Portfolio</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container archive-client">
          <div className="row">
            <div className="col-xs-12">
              <div className="user-info-wrap">
                <div className="client-content">
                  <h3 className="title">Goodline Photography</h3>
                  <div className="descr">
                    Welcome to our portfolio, where every frame tells a story! At GOODLINE PHOTOGRAPHY, we specialize in capturing the essence of every moment with creativity and precision. From breathtaking wedding photography and lively event coverage to stunning portraits and commercial shoots, our work reflects passion, artistry, and attention to detail.
                    <br /><br />
                    Explore our collection and witness how we turn ordinary moments into extraordinary memories. Whether it's emotions, celebrations, or professional brand storytelling, our portfolio showcases the best of what we do.
                    <br /><br />
                    📸 Let our work speak for itself—experience the magic of GOODLINE PHOTOGRAPHY!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="portfolio-wrapper clearfix">
            <div className="portfolio no-padd col-3 simple clearfix" data-space="10">
              <div className="wpb_column vc_column_container vc_col-sm-12 margin-lg-80b margin-xs-20b">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="row">
                      {portfolioItems.map((item) => (
                        <div key={item.id} className="col-lg-6 col-md-6 col-sm-12" style={{marginBottom: '20px'}}>
                          <div className="item block_item_0">
                            <Link to={item.link} className="item-link gridrotate-alb hover3" target="_self">
                              <div className="item-img">
                                <div className="images-one s-back-switch">
                                  <img src={item.image} alt={item.title} className="s-img-switch" />
                                </div>
                              </div>
                              <div className="item-overlay">
                                <h5 className="portfolio-title">
                                  {item.title}
                                  <br />
                                  <button>View Pictures</button>
                                </h5>
                              </div>
                            </Link>
                          </div>
                        </div>
                      ))}
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

export default Photography;
