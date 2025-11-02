import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GalleryDetail = () => {
  const { id } = useParams();

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

  // Mock data for different portfolio items
  const portfolioData = {
    4: {
      title: 'Wedding Moments',
      bannerImage: '/images/goodline/banner-11.jpg',
      eventType: 'Wedding Event',
      description: 'https://www.instagram.com/goodlinephotography/',
      images: [
        '/goodline_apanel/assets/images/products/17355594440641.jpg',
        '/goodline_apanel/assets/images/products/16334204390982.jpg',
        '/goodline_apanel/assets/images/products/15187621717556.jpg',
        '/goodline_apanel/assets/images/products/20755584780942.jpg',
        '/goodline_apanel/assets/images/products/1963993847001.jpg',
        '/goodline_apanel/assets/images/products/1478872375500.jpg',
        '/goodline_apanel/assets/images/products/1032683442892.jpg',
        '/goodline_apanel/assets/images/products/11396554752783.jpg',
        '/goodline_apanel/assets/images/products/12178994041549.jpg',
        '/goodline_apanel/assets/images/products/128001364474658.jpg',
        '/goodline_apanel/assets/images/products/143674533909859.jpg'
      ]
    },
    5: {
      title: 'Rajaganapathy & Roshini',
      bannerImage: '/images/goodline/banner-11.jpg',
      eventType: 'Wedding Event',
      description: 'https://www.instagram.com/goodlinephotography/',
      images: [
        '/goodline_apanel/assets/images/products/17355594440641.jpg',
        '/goodline_apanel/assets/images/products/16334204390982.jpg',
        '/goodline_apanel/assets/images/products/15187621717556.jpg',
        '/goodline_apanel/assets/images/products/20755584780942.jpg',
        '/goodline_apanel/assets/images/products/1963993847001.jpg',
        '/goodline_apanel/assets/images/products/1478872375500.jpg',
        '/goodline_apanel/assets/images/products/1032683442892.jpg',
        '/goodline_apanel/assets/images/products/11396554752783.jpg',
        '/goodline_apanel/assets/images/products/12178994041549.jpg',
        '/goodline_apanel/assets/images/products/128001364474658.jpg',
        '/goodline_apanel/assets/images/products/143674533909859.jpg'
      ]
    },
    6: {
      title: 'Ashwin & shalini',
      bannerImage: '/images/goodline/banner-11.jpg',
      eventType: 'Wedding Event',
      description: 'https://www.instagram.com/goodlinephotography/',
      images: [
        '/goodline_apanel/assets/images/products/17355594440641.jpg',
        '/goodline_apanel/assets/images/products/16334204390982.jpg',
        '/goodline_apanel/assets/images/products/15187621717556.jpg',
        '/goodline_apanel/assets/images/products/20755584780942.jpg',
        '/goodline_apanel/assets/images/products/1963993847001.jpg',
        '/goodline_apanel/assets/images/products/1478872375500.jpg',
        '/goodline_apanel/assets/images/products/1032683442892.jpg',
        '/goodline_apanel/assets/images/products/11396554752783.jpg',
        '/goodline_apanel/assets/images/products/12178994041549.jpg',
        '/goodline_apanel/assets/images/products/128001364474658.jpg',
        '/goodline_apanel/assets/images/products/143674533909859.jpg'
      ]
    },
    7: {
      title: 'Model Photography',
      bannerImage: '/images/goodline/banner-11.jpg',
      eventType: 'Model Shoot',
      description: 'https://www.instagram.com/goodlinephotography/',
      images: [
        '/goodline_apanel/assets/images/products/17355594440641.jpg',
        '/goodline_apanel/assets/images/products/16334204390982.jpg',
        '/goodline_apanel/assets/images/products/15187621717556.jpg',
        '/goodline_apanel/assets/images/products/20755584780942.jpg',
        '/goodline_apanel/assets/images/products/1963993847001.jpg',
        '/goodline_apanel/assets/images/products/1478872375500.jpg',
        '/goodline_apanel/assets/images/products/1032683442892.jpg',
        '/goodline_apanel/assets/images/products/11396554752783.jpg',
        '/goodline_apanel/assets/images/products/12178994041549.jpg',
        '/goodline_apanel/assets/images/products/128001364474658.jpg',
        '/goodline_apanel/assets/images/products/143674533909859.jpg'
      ]
    }
  };

  const currentPortfolio = portfolioData[id] || portfolioData[5]; // Default to first item if not found

  return (
    <>
      {/* Preloader */}
      <div className="preloader-text">
        <div className="text-wrap">
          <img src="/images/goodline/goodline-logo.png" alt="" style={{width: '180px'}} />
        </div>
        <span>loading...</span>
      </div>

      <div className="main-wrapper portfolio-detail-page" data-sound="/audio" data-top="992">
        {/* Banner */}
        <div className="container-full">
          <div className="row">
            <div className="col-sm-12">
              <div className="container-fluid top-banner top-banner__scene medium_banner center_content simple s-back-switch">
                <img src={currentPortfolio.bannerImage} className="s-img-switch" alt="" />
                <span className="overlay"></span>
                <div className="content">
                  <div className="row">
                    <div className="col-xs-12">
                      <h3 className="title">{currentPortfolio.title}</h3>
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
                  <h3 className="title">{currentPortfolio.eventType}</h3>
                  <div className="descr">
                    <p><a href={currentPortfolio.description} target="_blank" rel="noopener noreferrer">{currentPortfolio.description}</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Images */}
        <div className="container portfolio-all-images">
          <div className="row">
            {currentPortfolio.images.map((image, index) => (
              <div key={index} className="col-lg-6 portrait-images">
                <div className="image">
                  <img src={image} alt={`${currentPortfolio.title} ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryDetail;
