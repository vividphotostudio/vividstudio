import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { categoriesService, photosService } from "../services/api";

const Home = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [sliderPhotos, setSliderPhotos] = useState([]);

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

  useEffect(() => {
    const fetchSliderPhotos = async () => {
      try {
        // First get all categories to find the slider category
        const categories = await categoriesService.getAll();
        const sliderCategory = categories.find(
          (cat) => cat.name.toLowerCase() === "slider"
        );

        if (sliderCategory) {
          const photos = await photosService.getByCategoryId(sliderCategory.id);
          setSliderPhotos(photos);
        }
      } catch (error) {
        console.error("Error fetching slider photos:", error);
        // Fallback to default images if API fails
      }
    };

    fetchSliderPhotos();
  }, []);

  return (
    <>
      {/* Preloader */}
      <div className="preloader-text">
        <div className="text-wrap">
          <img
            src="/images/goodline/vivid-logo.jpg"
            alt=""
            style={{ width: "180px" }}
          />
        </div>
        <span>loading...</span>
      </div>

      <div className="main-wrapper" data-sound="/audio" data-top="992">
        {/* Banner Slider */}
        <div className="container-full">
          <div className="row margin-lg-120b margin-md-80b margin-sm-80b margin-xs-40b">
            <div className="col-sm-12">
              <div className="banner-slider-wrap urban">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  speed={2000}
                  slidesPerView={1}
                  spaceBetween={0}
                  pagination={{
                    type: "fraction",
                    renderFraction: (currentClass, totalClass) => {
                      return `<span class="custom-current ${currentClass}"></span><span class="custom-separator"> / </span><span class="custom-total ${totalClass}"></span>`;
                    },
                  }}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }}
                  className="swiper-container"
                  style={{ height: "100vh" }}
                >
                  {sliderPhotos.map((photo, index) => {
                    const slideContents = [
                      {
                        title: "Capture today, relive it forever.",
                        button1: { text: "Book a Session", link: "/contact" },
                        button2: {
                          text: "Get in Touch",
                          link: "/contact",
                          mobile: true,
                        },
                      },
                      {
                        title: "Every picture tells your story.",
                        button1: { text: "Discover More", link: "/about" },
                      },
                      {
                        title: "Freeze moments that make life beautiful.",
                        button1: { text: "View Gallery", link: "/photography" },
                        button2: {
                          text: "Let’s Connect",
                          link: "/contact",
                          mobile: true,
                        },
                      },
                      {
                        title: "Your memories deserve to be timeless.",
                        button1: { text: "Learn More", link: "/about" },
                      },
                      {
                        title:
                          "Turning fleeting seconds into forever memories.",
                        button1: {
                          text: "Explore Our Work",
                          link: "/photography",
                        },
                        button2: {
                          text: "Say Hello",
                          link: "/contact",
                          mobile: true,
                        },
                      },
                      {
                        title:
                          "Because every smile tells a story worth keeping.",
                        button1: { text: "Book Now", link: "/contact" },
                      },
                    ];

                    const content = slideContents[index] || slideContents[0];

                    return (
                      <SwiperSlide
                        key={photo.id || index}
                        className="full-height-window"
                        style={{ position: "relative" }}
                      >
                        <img
                          src={photo.image_url || photo.url}
                          className="s-img-switch"
                          alt={
                            photo.title || photo.name || `Slide ${index + 1}`
                          }
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            zIndex: 5,
                          }}
                        ></div>
                        <div
                          className="content-wrap"
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            zIndex: 10,
                            color: "white",
                          }}
                        >
                          <div
                            className="subtitle"
                            style={{
                              fontSize: "12px",
                              fontWeight: "600",
                              letterSpacing: "2px",
                              textTransform: "uppercase",
                              marginBottom: "20px",
                              color: "white",
                            }}
                          >
                            VIVID PHOTO STUDIO
                          </div>
                          <div
                            className="title"
                            style={{
                              fontSize:
                                window.innerWidth > 768 ? "60px" : "32px",
                              fontFamily: '"Playfair Display", serif',
                              marginBottom: "30px",
                              lineHeight: "1.2",
                              color: "white",
                              maxWidth: "800px",
                            }}
                          >
                            {content.title}
                          </div>
                          <a
                            href={content.button1.link}
                            className="a-btn-2"
                            style={{
                              display: "inline-block",
                              padding: "15px 30px",
                              backgroundColor: "transparent",
                              border: "2px solid white",
                              color: "white",
                              textDecoration: "none",
                              textTransform: "uppercase",
                              fontSize: "12px",
                              fontWeight: "600",
                              letterSpacing: "2px",
                              marginRight: "10px",
                              transition: "all 0.3s ease",
                            }}
                          >
                            {content.button1.text}
                          </a>
                          {content.button2 && (
                            <a
                              href={content.button2.link}
                              className={`a-btn-2 ${
                                content.button2.mobile ? "mobile-btn" : ""
                              }`}
                              style={{
                                display: "inline-block",
                                padding: "15px 30px",
                                backgroundColor: "white",
                                border: "2px solid white",
                                color: "black",
                                textDecoration: "none",
                                textTransform: "uppercase",
                                fontSize: "12px",
                                fontWeight: "600",
                                letterSpacing: "2px",
                                marginLeft: "10px",
                                transition: "all 0.3s ease",
                              }}
                            >
                              {content.button2.text}
                            </a>
                          )}
                        </div>
                      </SwiperSlide>
                    );
                  })}
                  <div className="pag-wrapper">
                    <div ref={prevRef} className="swiper-button-prev">
                      Prev
                    </div>
                    <div className="swiper-pagination swiper-pagination-fraction"></div>
                    <div ref={nextRef} className="swiper-button-next">
                      Next
                    </div>
                  </div>
                </Swiper>
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
                    <img
                      width="933"
                      height="1400"
                      src="/images/second.jpeg"
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
                        src="/images/second.jpeg"
                        className="vc_single_image-img attachment-medium img_about_two"
                        alt=""
                      />
                    </div>
                  </figure>
                </div>
                <div className="col-sm-6 col-lg-7 col-md-6">
                  <div className="about-section-simple">
                    <div className="content" style={{ paddingLeft: "40px" }}>
                      <div className="subtitle">Welcome to</div>
                      <h2 className="title">VIVID PHOTO STUDIO</h2>
                      <div className="description">
                        At VIVID PHOTO STUDIO, we believe every snapshot holds a
                        story worth telling. Our passion lies in capturing those
                        stories with artistry and precision. Whether it's a
                        wedding, corporate event, portrait session, or any
                        special celebration, our talented photographers are
                        dedicated to turning fleeting moments into lasting
                        memories.
                        <blockquote>
                          <p>
                            "Treasure every moment today — it becomes the memory
                            you'll hold dear tomorrow."
                          </p>
                        </blockquote>
                        <p>
                          With a blend of creativity, expertise, and attention
                          to detail, we craft photographs that speak to the
                          heart. From spontaneous smiles to picture-perfect
                          compositions, our goal is to deliver stunning visuals
                          that reflect the emotion and beauty of your story.
                        </p>
                        <p>
                          Let VIVID PHOTO STUDIO transform your moments into
                          timeless works of art.
                        </p>
                      </div>
                      <div className="but-wrap">
                        <a href="/about" className="a-btn" target="_blank">
                          Read More
                        </a>
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
          <div
            className="row pos_rel margin-lg-95b margin-md-55b margin-sm-50b margin-xs-20b"
            style={{ padding: "50px 0px" }}
          >
            <span className="enable_overlay"></span>
            <div className="col-sm-12 z_index margin-lg-90t margin-lg-90b margin-sm-70t margin-sm-70b">
              <div className="headings-wrap load-fade">
                <div className="container">
                  <div className="row">
                    <div className="headings text_left">
                      <h3 className="title" style={{ lineHeight: "50px" }}>
                        Capture Your Moments with <br />
                        VIVID PHOTO STUDIO!
                      </h3>
                      <p
                        style={{
                          color: "#fff",
                          maxWidth: "60%",
                          textAlign: "left",
                          marginTop: "20px",
                        }}
                      >
                        Let us turn your special moments into timeless memories.
                        Whether it's a wedding, event, portrait, or commercial
                        shoot, we're here to deliver stunning visuals that tell
                        your story.
                      </p>
                      <div className="link-wrap">
                        <a href="/contact" className="a-btn-2">
                          Book Now
                        </a>
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
                    <div className="content" style={{ paddingLeft: "40px" }}>
                      <div className="subtitle">
                        A premium wedding photography company
                      </div>
                      <div className="description">
                        <blockquote>
                          <h1 style={{ color: "#000", fontWeight: "600" }}>
                            Best Photography Studio <br />
                          </h1>
                        </blockquote>
                        <p>
                          Looking for the best photography studio in Chennai? At
                          VIVID PHOTO STUDIO, we specialize in capturing
                          stunning visuals that turn moments into timeless
                          memories. Whether it's weddings, portraits, events, or
                          commercial shoots, our expert photographers use
                          creativity, precision, and the latest technology to
                          deliver high-quality images.
                          <br />
                          <br />
                          With a passion for storytelling and an eye for detail,
                          we bring life to every frame, ensuring each shot
                          reflects emotion and beauty. From professional studio
                          setups to outdoor shoots, we cater to all your
                          photography needs with perfection.
                        </p>
                      </div>
                      <div className="but-wrap">
                        <a href="/contact" className="a-btn" target="_blank">
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-5 col-md-6">
                  <figure className="about-image">
                    <img
                      width="933"
                      height="1400"
                      src="/images/goodline/about.jpeg"
                      className="vc_single_image-img attachment-full img_about_one"
                      alt=""
                      style={{ borderRadius: "15px" }}
                    />
                  </figure>
                  <figure>
                    <div className="padding-xs-10b">
                      <img
                        width="215"
                        height="350"
                        src="/images/goodline/about.jpeg"
                        className="vc_single_image-img attachment-medium img_about_two"
                        alt=""
                      />
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <div className="container-full pad-l-15">
          <div
            className="bg-color row margin-md-65b margin-sm-45t margin-sm-50b margin-xs-30t margin-xs-15b"
            style={{ padding: "50px 0px" }}
          >
            <div className="row margin-xs-30b">
              <div className="col-sm-12">
                <div className="headings-wrap load-fade">
                  <div className="container padding-lg-35t">
                    <div className="row">
                      <div
                        className="headings text_center"
                        style={{ maxWidth: "900px" }}
                      >
                        <h5 className="subtitle fade-up transition-0">
                          TESTIMONIALS
                        </h5>
                        <h3 className="title fade-up transition-1">
                          Love Notes from People I've Photographed
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="main-header-testimonial classic modern">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{
                    delay: 5000,
                  }}
                  loop={true}
                  speed={1500}
                  spaceBetween={0}
                  direction="vertical"
                  pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                      return `<span class="${className} custom-bullet">${
                        index + 1
                      }</span>`;
                    },
                  }}
                  className="swiper-container"
                  style={{ height: "400px" }}
                >
                  <SwiperSlide>
                    <div className="content-slide">
                      <div className="logo-customer s-back-switch">
                        <img
                          src="/images/goodline/testi1.jpg"
                          alt=""
                          className="s-img-switch"
                        />
                      </div>
                      <div className="description clearfix">
                        <p>
                          "VIVID PHOTO STUDIO did an amazing job capturing our
                          special day! They were professional, kind, and made us
                          feel so comfortable in front of the camera. The photos
                          are stunning and we couldn't be happier with how they
                          turned out. We highly recommend VIVID PHOTO STUDIO to
                          anyone looking for a talented and reliable wedding
                          photographer. I would like to Thank each and everyone
                          in the crew for your passion and professional love..
                          Surely you will reach better heights.."
                        </p>
                      </div>
                      <div className="user">
                        <div className="user-info">
                          <div className="name">Ashwin Manoharan</div>
                          <div className="position">VIVID PHOTO STUDIO</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="content-slide">
                      <div className="logo-customer s-back-switch">
                        <img
                          src="/images/goodline/banner-3.jpg"
                          alt=""
                          className="s-img-switch"
                        />
                      </div>
                      <div className="description clearfix">
                        <p>
                          "We were thoroughly impressed with the photography
                          services provided for our housewarming ceremony. The
                          team's professionalism, attention to detail, and
                          exceptional photography skills made the experience
                          truly memorable. We highly recommend their services."
                        </p>
                      </div>
                      <div className="user">
                        <div className="user-info">
                          <div className="name">Er.Ruthra Prasath M S</div>
                          <div className="position">VIVID PHOTO STUDIO</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="content-slide">
                      <div className="logo-customer s-back-switch">
                        <img
                          src="/images/goodline/testi3.jpg"
                          alt=""
                          className="s-img-switch"
                        />
                      </div>
                      <div className="description clearfix">
                        <p>
                          "We selected GOODLINE Photography for our big day. The
                          service provided was really awesome. Had a good team
                          to coordinate with us. Thanks for all the services
                          provided the quality of the album is really good.
                          👍👌"
                        </p>
                      </div>
                      <div className="user">
                        <div className="user-info">
                          <div className="name">Suganthi Alagendran</div>
                          <div className="position">VIVID PHOTO STUDIO</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        {/* Second CTA */}
        <div className="container-full bg_img_new">
          <div className="row pos_rel" style={{ padding: "50px 0px" }}>
            <span className="enable_overlay"></span>
            <div className="col-sm-12 z_index margin-lg-90t margin-lg-90b margin-sm-70t margin-sm-70b">
              <div className="headings-wrap load-fade">
                <div className="container">
                  <div className="row">
                    <div className="headings text_left">
                      <h3 className="title" style={{ lineHeight: "50px" }}>
                        Happiness is found in the little things <br />
                        we never forget
                      </h3>
                      <p
                        style={{
                          color: "#fff",
                          maxWidth: "60%",
                          textAlign: "left",
                          marginTop: "20px",
                        }}
                      >
                        At VIVID PHOTO STUDIO, we believe that true happiness
                        lies in the smallest, most heartfelt moments— a genuine
                        smile, a shared laugh, a warm embrace. These little
                        moments create the most beautiful memories, and we are
                        here to capture them for you.
                      </p>
                      <div className="link-wrap">
                        <a href="/contact" className="a-btn-2">
                          Book Appointment
                        </a>
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
