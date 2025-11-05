import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { categoriesService, photosService } from '../services/api';

const GalleryDetail = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setLoading(true);
        const [categoryData, photosData] = await Promise.all([
          categoriesService.getById(id),
          photosService.getByCategoryId(id)
        ]);
        setCategory(categoryData);
        setPhotos(photosData);
        setError(null);
      } catch (err) {
        console.error('Error fetching category data:', err);
        setError('Failed to load gallery. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCategoryData();
    }
  }, [id]);

  return (
    <>
      {/* Preloader */}
      <div className="preloader-text">
        <div className="text-wrap">
          <img src="/images/goodline/vivid-logo.jpg" alt="" style={{width: '180px'}} />
        </div>
        <span>loading...</span>
      </div>

      <div className="main-wrapper portfolio-detail-page" data-sound="/audio" data-top="992">
        {/* Banner */}
        <div className="container-full">
          <div className="row">
            <div className="col-sm-12">
              <div className="container-fluid top-banner top-banner__scene medium_banner center_content simple s-back-switch">
                <img src="/images/goodline/banner-11.jpg" className="s-img-switch" alt="" />
                <span className="overlay"></span>
                <div className="content">
                  <div className="row">
                    <div className="col-xs-12">
                      <h3 className="title">
                        {loading ? 'Loading...' : error ? 'Error' : category?.name || 'Gallery'}
                      </h3>
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
                  <h3 className="title">
                    {loading ? 'Loading...' : error ? 'Error Loading Gallery' : `${category?.name} Photography`}
                  </h3>
                  <div className="descr">
                    {loading ? (
                      <p>Loading gallery details...</p>
                    ) : error ? (
                      <p style={{ color: 'red' }}>{error}</p>
                    ) : (
                      <p><a href="https://www.instagram.com/goodlinephotography/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/goodlinephotography/</a></p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Images */}
        <div className="container portfolio-all-images">
          <div className="row">
            {loading ? (
              <div className="col-12 text-center" style={{ padding: '50px' }}>
                <p>Loading photos...</p>
              </div>
            ) : error ? (
              <div className="col-12 text-center" style={{ padding: '50px', color: 'red' }}>
                <p>{error}</p>
              </div>
            ) : photos.length === 0 ? (
              <div className="col-12 text-center" style={{ padding: '50px' }}>
                <p>No photos found in this category.</p>
              </div>
            ) : (
              photos.map((photo, index) => (
                <div key={photo.id || index} className="col-lg-6 portrait-images">
                  <div className="image">
                    <img src={photo.url} alt={photo.title || `${category?.name} ${index + 1}`} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryDetail;
