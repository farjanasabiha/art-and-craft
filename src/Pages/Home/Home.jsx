import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import ArtCategories from "../../Components/ArtCategories/ArtCategories";
import { useLoaderData } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { Bounce } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
const Home = () => {
  const blogs = useLoaderData();



  return (
    <div>
      {/* Swiper Slider Here */}
      <div>
        <Swiper
          style={{
            "--swiper-navigation-color": "white",
            "--swiper-pagination-color": "#white",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper "
        >
          <div
            slot="container-start"
            className="parallax-bg "
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide
            style={{
              backgroundImage:
                "url(https://i.ibb.co/yN89W8p/Importance-of-Arts-and-Crafts-For-Children-featured-image.jpg)",
              backgroundRepeat: "no-repet",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Bounce>
              <div
                data-aos="fade-right"
                className="container mx-auto text-center"
              >
                <div className="title" data-swiper-parallax="-400">
                  ALL YOU NEED TO CREATE
                </div>
                <div className="subtitle" data-swiper-parallax="-300">
                  <span className="font-black text-white">Art & crafts</span>
                </div>
                <div
                  className="mt-3 text-center mx-auto w-full"
                  data-swiper-parallax="-200"
                >
                  <p className="w-full md:w-1/3 text-center mx-auto ">
                    Art refers to the expression of creative skill and
                    imagination, typically in a visual form such as painting,
                    sculpture, or illustration.
                  </p>
                </div>
                <div className="button" data-swiper-parallax="-100">
                  <div className="mt-10">
                    <a
                      href="/login"
                      className="btn px-10 bg-transparent border-2 hover:bg-transparent text-white font-semibold text-base"
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </Bounce>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage:
                "url(https://i.ibb.co/PWzVSwN/art-423530-1280.jpg)",
              backgroundRepeat: "no-repet",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              data-aos="fade-right"
              className="container mx-auto text-center"
            >
              <div className="title" data-swiper-parallax="-400">
                ALL YOU NEED TO CREATE
              </div>
              <div className="subtitle" data-swiper-parallax="-300">
                <span className="font-black text-white">Art & crafts</span>
              </div>
              <div
                className="mt-3 text-center mx-auto w-full"
                data-swiper-parallax="-200"
              >
                <p className="w-full md:w-1/3 text-center mx-auto ">
                  Art refers to the expression of creative skill and
                  imagination, typically in a visual form such as painting,
                  sculpture, or illustration.
                </p>
              </div>
              <div className="button" data-swiper-parallax="-100">
                <div className="mt-10">
                  <a
                    href="/login"
                    className="btn px-10 bg-transparent border-2 hover:bg-transparent text-white font-semibold text-base"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage:
                "url(https://i.ibb.co/yN89W8p/Importance-of-Arts-and-Crafts-For-Children-featured-image.jpg)",
              backgroundRepeat: "no-repet",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              data-aos="fade-right"
              className="container mx-auto text-center"
            >
              <div className="title" data-swiper-parallax="-400">
                ALL YOU NEED TO CREATE
              </div>
              <div className="subtitle" data-swiper-parallax="-300">
                <span className="font-black text-white">Art & crafts</span>
              </div>
              <div
                className="mt-3 text-center mx-auto w-full"
                data-swiper-parallax="-200"
              >
                <p className="w-full md:w-1/3 text-center mx-auto ">
                  Art refers to the expression of creative skill and
                  imagination, typically in a visual form such as painting,
                  sculpture, or illustration.
                </p>
              </div>
              <div className="button" data-swiper-parallax="-100">
                <div className="mt-10">
                  <a
                    href="/login"
                    className="btn px-10 bg-transparent border-2 hover:bg-transparent text-white font-semibold text-base"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Art and craft Categories */}

      <div>
        <section className="py-6 sm:py-12 bg-white text-white dark:bg-black dark:text-wite">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-4xl font-bold text-black mb-5">
                Lets Book your Property
              </h2>
              <p className="font-serif text-sm text-gray-700">
                Renting a property involves leasing a residential or commercial
                space from a landlord for a specified period.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="grid grid-cols-1 gap-x-14 gap-y-4 md:grid-cols-2 lg:grid-cols-3 "
            >
              {blogs.map((blog, index) => (
                <ArtCategories blog={blog} key={index}></ArtCategories>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Gallery Section */}

      <div className="container mx-auto mb-24">
        <section className="">
          <div className="space-y-2 text-center mb-5">
            <h2 className="text-4xl font-bold text-black mb-4">
              Lets Explore My Art And Crafts
            </h2>
            <p className="font-serif text-sm text-gray-700">
              Renting a property involves leasing a residential or commercial
              space from a landlord for a specified period.
            </p>
          </div>

          <Slide triggerOnce>

            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
              <img
                src="https://i.ibb.co/SySjw2W/istockphoto-1195874341-612x612.jpg"
                alt=""
                className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 dark:bg-gray-500 aspect-square"
              />
              <img
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/Xt3GXyD/360-F-290768326-SN1izi-M2epj-Ej-SGLDu-KHAe7k5-Mb37r-WP.jpg"
              />
              <img
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/Y45jPT4/vibrant-colors-of-jewelry-showcase-cultural-elegance-generated-by-ai-free-photo.jpg"
              />
              <img
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/bdZnjTM/Free-Quilt-Patterns-header-2022-03.jpg"
              />
              <img
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/GPdsRH2/istockphoto-1353972428-612x612.jpg"
              />
            </div>
          </Slide>
        </section>
      </div>
      <div className="container mx-auto mb-24">
        <section className="text-gray-600 body-font">
          <div className="">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                More About Art And Craft
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Art and craft represent a beautiful intersection of creativity,
                and tradition. While art typically focuses on expression,
                emotion,craft emphasizes the skilled creation of functional or
                decorative objects.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-semibold mb-3">
                    Creativity and Expression
                  </h2>
                  <p className="leading-relaxed text-base">
                    Both art and craft allow individuals to express creativity
                    and convey emotions, ideas, and stories through various
                    mediums.
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Skill and Technique:
                  </h2>
                  <p className="leading-relaxed text-base">
                    Craft emphasizes the mastery of techniques and skills, often
                    requiring precision and patience to create functional or
                    decorative objects.
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Tradition and Culture
                  </h2>
                  <p className="leading-relaxed text-base">
                    Many crafts are rooted in cultural traditions, passed down
                    through generations, preserving heritage and history
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div id="clickable">
              <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
            <Tooltip anchorSelect="#clickable" clickable>
              <p>Click me</p>
            </Tooltip>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
