import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../components/ProgressIndicator.css";
import "../components/ClientSection.css";
import { categoriesService, photosService } from "../services/api";

const reviews = [
  {
    name: "Initha Gnanaraj",
    review: "Photos clarity and background is very excellent"
  },
  {
    name: "Ramesh Dhandapani",
    review: "Good"
  },
  {
    name: "Kaavi Kaavi",
    review: ""
  },
  {
    name: "Dinesh Kumar",
    review: "Quality of photo is awesome. Studio setup is very nice and big."
  },
  {
    name: "paulraj g.l.",
    review: ""
  },
  {
    name: "chitra muthu",
    review: ""
  },
  {
    name: "Stan lee",
    review: "Excellent place for our photo needs.. Timely and patient service.. Keep rocking.."
  },
  {
    name: "Suvetha Vikram",
    review: "Superab photography, lovely stills and excellent work. Thank you so much everyone at home was very happy"
  },
  {
    name: "S S",
    review: ""
  },
  {
    name: "SANGEETHA R",
    review: ""
  },
  {
    name: "Asha Mary",
    review: "Excellent"
  },
  {
    name: "Sheeba Varghese",
    review: ""
  },
  {
    name: "gd78 Daniel",
    review: "This studio makes memories adorable with amazing moments and clarity pixels. Blend of nature and classic touch coupled with high tech lens is the highlight of this studio."
  },
  {
    name: "Y. Muthulakshmi",
    review: ""
  },
  {
    name: "Jaba Ananth",
    review: "Very excellent photo works"
  },
  {
    name: "vinod ezhilarasan",
    review: "EXCELLENT AND VERY PROFESSIONAL , REALLY GREATFUL TO YOU FOR EXCELLENT OUTPUT OF MY WEDDING SHOOT. THANK YOU"
  },
  {
    name: "Amirdhagadesan Rajasekar",
    review: "This shop was recently moved to this new location, previously it was located in madambakam. Recently I visited the shop for passport size photos and family photos and i had a really good experience.\n\n1. The shop owner was polite and very responsive.\n2. Made delivery on committed date\n3. The quality of the photos are really very good and I'm very happy with the purchase\n4. The price is also very reasonable.\n\nI think, as it recently moved, so yet to do the final setup of the studio. I saw the tables are not arranged properly and the photo display is not arranged very nicely.\n\nBut I'm not concerned about the arrangements as the quality of the photos are good."
  }
];

const Home = () => {
  const [sliderPhotos, setSliderPhotos] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isProgressActive, setIsProgressActive] = useState(true);

  useEffect(() => {
    // Load external scripts
    const scripts = [
      "/js/jquery-3.3.1.min.js",
      "/js/swiper.min.js",
      "/js/tg_global.js",
      "/js/foxlazy.min.js",
      "/js/isotope.pkgd.min.js",
      "/js/lib/equalHeightsPlugin.js",
      "/js/lightgallery.min.js",
      "/js/instagram.js",
      "/js/script.js",
      "/js/scripts.js",
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

  // Reset progress bar animation when slide changes
  useEffect(() => {
    setIsProgressActive(false);
    const timer = setTimeout(() => {
      setIsProgressActive(true);
    }, 50); // Small delay to ensure animation resets

    return () => clearTimeout(timer);
  }, [currentSlide]);

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
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  speed={2000}
                  slidesPerView={1}
                  spaceBetween={0}
                  onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                  className="swiper-container"
                  style={{ height: "100vh", position: "relative" }}
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
                  {/* Animated Progress Indicators */}
                  <div
                    className="progress-indicators"
                    style={{
                      position: "absolute",
                      bottom: "30px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      gap: "15px",
                      zIndex: 20
                    }}
                  >
                    {sliderPhotos.map((_, index) => (
                      <div
                        key={index}
                        className="progress-bar-container"
                        style={{
                          width: "60px",
                          height: "3px",
                          backgroundColor: "rgba(255, 255, 255, 0.3)",
                          borderRadius: "9999px",
                          overflow: "hidden",
                          position: "relative"
                        }}
                      >
                        <div
                          className={`progress-bar-fill ${
                            index === currentSlide && isProgressActive ? 'active' :
                            index < currentSlide ? 'completed' : ''
                          }`}
                          key={`${index}-${currentSlide}-${isProgressActive}`}
                          style={{
                            position: "absolute",
                            left: "0",
                            top: "0",
                            height: "100%",
                            backgroundColor: "white",
                            borderRadius: "9999px",
                          }}
                        ></div>
                      </div>
                    ))}
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
        <section className="" id="client">
          <h2 className="section__header">~ TESTIMONIALS ~</h2>
          <div className="swiper-container">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={1000}
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={{
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
              }}
              className="swiper"
            >
            {reviews
              .filter(review => review.review.trim() !== "")
              .map((review, index) => {
                const colors = [
                  { bg: "#FF6B6B", text: "#fff" },
                  { bg: "#4ECDC4", text: "#fff" },
                  { bg: "#45B7D1", text: "#fff" },
                  { bg: "#96CEB4", text: "#fff" },
                  { bg: "#FECA57", text: "#fff" },
                  { bg: "#FF9FF3", text: "#fff" },
                  { bg: "#54A0FF", text: "#fff" },
                  { bg: "#5F27CD", text: "#fff" }
                ];
                const colorIndex = index % colors.length;
                const color = colors[colorIndex];

                return (
                  <SwiperSlide key={index}>
                    <div className="">
                      <div style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: color.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: color.text,
                        margin: "0 auto 20px"
                      }}>
                        {review.name.charAt(0).toUpperCase()}
                      </div>
                      <p>
                        {review.review}
                      </p>
                      <div className="star-rating">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill="#ffd700"
                            color="#ffd700"
                            style={{ marginRight: "2px" }}
                          />
                        ))}
                      </div>
                      <h4>{review.name}</h4>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {/* Custom Navigation buttons with Lucide icons */}
            <div
              className="custom-swiper-button-prev"
              style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "white";
                e.target.style.transform = "translateY(-50%) scale(1.1)";
                e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.9)";
                e.target.style.transform = "translateY(-50%) scale(1)";
                e.target.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
              }}
            >
              <ChevronLeft size={24} color="#333" />
            </div>
            <div
              className="custom-swiper-button-next"
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "white";
                e.target.style.transform = "translateY(-50%) scale(1.1)";
                e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.9)";
                e.target.style.transform = "translateY(-50%) scale(1)";
                e.target.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
              }}
            >
              <ChevronRight size={24} color="#333" />
            </div>
          </div>
        </section>

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
