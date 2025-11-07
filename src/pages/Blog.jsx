import React, { useEffect } from 'react';

const Blog = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: '"Capturing Timeless Moments: Why Wedding Photography Is More Than Just Pictures"',
      image: '/goodline_apanel/assets/images/movies/gallery/100228721485872.jpg',
      date: '22 Feb, 2025',
      category: 'VIVID PHOTO STUDIO',
      excerpt: 'Weddings are not just ceremonies—they\'re stories of love, tradition, and celebration. As professional wedding photographers, we don\'t just take pictures; we preserve emotions, laughter, happy tears, and unforgettable moments. Every click tells a s'
    },
    {
      id: 2,
      title: 'Celebrating Tamil Traditions: A Glimpse into Traditional South Indian Weddings',
      image: '/goodline_apanel/assets/images/movies/gallery/17355592007183.jpg',
      date: '22 Feb, 2025',
      category: 'VIVID PHOTO STUDIO',
      excerpt: 'Tamil weddings are a beautiful fusion of ancient customs, colorful rituals, and deep-rooted traditions that celebrate the sacred bond of marriage. These ceremonies are not just spiritual unions but also grand family festivals filled with joy, devo'
    }
  ];

  return (
    <>
      {/* Preloader */}
      <div className="preloader-text">
        <div className="text-wrap">
          <img src="/images/goodline/vivid-logo.jpg" alt="" style={{width: '180px'}} />
        </div>
        <span>loading...</span>
      </div>

      <div className="main-wrapper" data-sound="/audio" data-top="992">
        {/* Banner */}
        <div className="container-full">
          <div className="row">
            <div className="col-sm-12">
              <div className="container-fluid top-banner top-banner__scene medium_banner center_content simple s-back-switch" style={{ height: '60vh', minHeight: '400px' }}>
                <img src="/images/goodline/cta-2.jpg" className="s-img-switch" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="overlay"></span>
                <div className="content">
                  <div className="row">
                    <div className="col-xs-12">
                      <h3 className="title">Blog Posts</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div style={{ backgroundColor: '#ffffff', width: '100%', minHeight: '50vh' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 margin-lg-35b">
              <div className="separator vc_sep_width_90">
                <span className="sep_holder sep_holder_l">
                  <span className="sep_line border_color_light_grey"></span>
                </span>
                <span className="sep_holder vc_sep_holder_r">
                  <span className="sep_line border_color_light_grey"></span>
                </span>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="row margin-lg-50t margin-lg-70b margin-xs-50b">
            <div className="col-sm-12">
              <div className="headings-wrap load-fade">
                <div className="container">
                  <div className="row">
                    <div className="headings classic_text">
                      <img src="/images/decor.png" className="icon fade-up transition-0" alt="" />
                      <h3 className="title fade-up transition-1">VIVID PHOTO STUDIO</h3>
                      <h5 className="subtitle fade-up transition-2">Our stories from groom and bride</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="margin-lg-90b margin-md-50b margin-xs-30b blog-new-page">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="row">
                    {blogPosts.map((post) => (
                      <div key={post.id} className="col-lg-6">
                        <article className="tg-item tg-post-3166 tg-iso-post-1 f25" data-row="1" data-col="1" style={{width: '100%'}}>
                          <div className="tg-item-inner">
                            <div className="tg-item-media-holder tg-light">
                              <div className="tg-item-media-inner">
                                <img className="tg-item-image" alt="" src={post.image} />
                              </div>
                              <div className="tg-item-media-content"></div>
                            </div>
                            <div className="tg-item-content-holder tg-dark image-format" data-position="bottom">
                              <span className="tg-item-date tg-element-1">
                                <i>{post.date.split(' ')[0]}</i><br />{post.date.split(' ')[1]} {post.date.split(' ')[2]}
                              </span>
                              <span className="tg-cats-holder tg-element-3">
                                <a className="category" href="#" rel="category" data-term-id="25">
                                  <span className="tg-item-term">{post.category}</span>
                                </a>
                              </span>
                              <h2 className="tg-item-title tg-element-2">
                                <a target="_self" href="#">{post.title}</a>
                              </h2>
                              <br />
                              <div className="tg-item-clear"></div>
                            </div>
                            <p><p>{post.excerpt}</p></p>
                          </div>
                        </article>
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

export default Blog;
