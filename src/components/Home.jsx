import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import img from "../assets/img/about.jpg";
import diseaseImg1 from "../assets/img/Disease 1.png";
import diseaseImg2 from "../assets/img/Disease 2.png";
import diseaseImg3 from "../assets/img/Disease 3.png";
import diseaseImg4 from "../assets/img/Disease 4.png";
import diseaseImg5 from "../assets/img/Disease 5.png";
import diseaseImg6 from "../assets/img/Disease 6.png";
import treatmentImg1 from "../assets/img/Treatment 1.jpg";
import treatmentImg2 from "../assets/img/Treatment 2.png";
import treatmentImg3 from "../assets/img/Treatment 3.png";
import treatmentImg4 from "../assets/img/Treatment 4.png";
import treatmentImg5 from "../assets/img/Treatment 5.png";
import treatmentImg6 from "../assets/img/Treatment 6.png";
import imgOverlay from "../assets/img/about.jpg"; // Add this import for the overlapping image
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital, faUserMd, faSyringe, faEyeDropper} from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";


const HomeAndAbout = () => {

  

  const icon1 = <RiMicroscopeLine size={35} className="text-backgroundColor" />;
  const icon2 = <MdHealthAndSafety size={35} className="text-backgroundColor" />;
  const icon3 = <FaHeartbeat size={35} className="text-backgroundColor" />;

  const diseaseData = [
    { img: diseaseImg1, name: "Cataract", description: "Cataracts occur when the eye's natural lens becomes cloudy, causing vision to blur like looking through a foggy or dusty car windshield." },
    { img: diseaseImg2, name: "Glaucoma", description: "Glaucoma is a group of eye conditions that affect the optic nerve after elevated eye pressure which may cause blindness." },
    { img: diseaseImg3, name: "Diabetic Retinopathy", description: "Diabetic Retinopathy happens when high blood sugar levels damage the retinal blood vessels. In the early stages of Diabetic Retinopathy, symptoms may not be noticeable." },
    { img: diseaseImg4, name: "Squint", description: "Squint is a disorder in which the eyes don't look in exactly the same direction at the same time. It is also known as ‘Strabismus’ or ‘Cross eyed’." },
    { img: diseaseImg5, name: "Retinal Detachment", description: "Retinal Detachment occurs when the retina separates from its supporting tissue, leading to severe vision loss and blindness." },
    { img: diseaseImg6, name: "Retinopathy Prematurity", description: "Retinopathy Prematurity (ROP) is an eye condition occurring in premature infants, where abnormal blood vessels grow in the retina, potentially resulting in blindness." },
  ];

  const treatmentData = [
    { img: treatmentImg1, name: "Cataract Surgery", description: "Cataract surgery is a common procedure to remove cloudy lenses in the eye caused by cataracts." },
    { img: treatmentImg2, name: "Refractive Surgery", description: "Refractive surgery is the process of reclaiming your vision and freedom. After careful evaluation, our experts can decrease or completely eliminate your dependency on glasses." },
    { img: treatmentImg3, name: "Retina Services", description: "The retina is the light-sensitive layer of tissue at the back of your eyeball. At Vasan, we employ advanced techniques to diagnose diseases that affect your retina." },
    { img: treatmentImg4, name: "Corneal Services", description: "Various conditions can impact the cornea, potentially causing vision issues. Corneal services is a collective term referring to treatments to fix these issues." },
    { img: treatmentImg5, name: "Anti-VEGF Agents", description: "Anti-VEGF agents are a group of medications which block the activity of VEGF, therefore reducing bleeding and vascular leakage." },
    { img: treatmentImg6, name: "Dry Eye Treatment", description: "Dry eye syndrome happens when there's a change in the quality or amount of the three layers that make up your tear film." },
  ];

  const diseaseSliderRef = useRef(null);
  const treatmentSliderRef = useRef(null);
  const navigate = useNavigate();

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });

  const sliderSettings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1023, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 2 } },
    ],
  };

  return (
    <div>
      {/* Home Section */}
      <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className={`w-full lg:w-4/5 space-y-5 mt-10 transition-all duration-700 ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={ref1}>
          <h1 className=" text-5xl font-bold leading-tight" style={{ color: "#FFFFFF" }}>
            Clear Vision for a Brighter Tomorrow - Your Trusted Eye Care Partner
          </h1>
          <p>
            At Nanjappa Eye Hospital, we are dedicated to providing the highest standard of eye care services to our patients.
            Our mission is to protect and enhance vision through exceptional medical expertise, cutting-edge technology, and compassionate care.
          </p>
        </div>
      </div>

{/* About Section with Orange Background and Overlapping Images */}
<div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5 bg-orange-500 relative overflow-hidden">
  <div className={`w-full lg:w-3/4 space-y-6 relative transition-all duration-700 ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={ref2}>
    {/* Non-clickable Button */}
    <button className="bg-purple-700 text-white py-0 px-6 rounded-full text-lg absolute top-0 left-0 transform -translate-x-1/5 -translate-y-12">
      About Us
    </button>

    <h1 className="text-5xl text-center lg:text-start text-white mt-10 lg:mt-0">Why Choose Us</h1>
    <p className="text-justify lg:text-start font-semibold text-white text-lg hover:text-black transition-colors">
      01. <span className="text-purple-700">Experts</span> <span>ready to treat you</span>
    </p>
    <hr className="border-white my-1" />
    <p className="text-justify lg:text-start font-semibold text-white text-lg hover:text-black transition-colors">
      02. <span className="text-purple-700">Modern Tech & Top-Tier Facilities</span> <span>everywhere</span>
    </p>
    <hr className="border-white my-1" />
    <p className="text-justify lg:text-start font-semibold text-white text-lg hover:text-black transition-colors">
      03. <span className="text-purple-700">Personalized Treatment</span> <span>for everyone</span>
    </p>
    <hr className="border-white my-1 relative flex flex-col lg:flex-row z-10" />
    <a href="/about" className=" relative inline-block mt-6 bg-white text-black py-4 px-6 rounded-full hover:bg-gray-200 transition-color ">
        Know More <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 text-black" />
    </a> 
  </div>
  <div className="w-full lg:w-3/4 relative flex flex-col lg:flex-row">
  {/* Base Image (Second Image) */}
  <img className="absolute top-1/7 left-1/2 transform -translate-x-1/4 -translate-y-1/2 w-full lg:w-4/5 rounded-lg mb-4 lg:mb-0 hidden lg:block" src={imgOverlay} alt="About Us" />

  {/* Overlay Image (First Image) */}
  <img className="relative w-full lg:w-3/5 -translate-x-1/5 -translate-y-1/5 rounded-lg mb-4 lg:mb-0 z-10" src={img} alt="Overlay" />
</div>
</div>


      {/* Animated Numbers Section */}
      <div className={`my-16 transition-all duration-700 ${inView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={ref3}>
        <div className="flex flex-wrap justify-center gap-16">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faHospital} size="5x" className="mr-4 text-blue-500" />
              <div className="text-center">
                <p className="text-lg font-bold mb-1">Centers</p>
                <h3 className="text-4xl font-bold">
                  <CountUp start={0} end={1} duration={5} separator="," />
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faUserMd} size="4x" className="mr-4 text-green-500" />
              <div className="text-center">
                <p className="text-lg font-bold mb-1">Patients Treated</p>
                <h3 className="text-4xl font-bold">
                  <CountUp start={0} end={100000} duration={5} separator="," />+
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faSyringe} size="4x" className="mr-4 text-red-500" />
              <div className="text-center">
                <p className="text-lg font-bold mb-1">Cataract Surgeries</p>
                <h3 className="text-4xl font-bold">
                  <CountUp start={0} end={3000} duration={5} separator="," />+
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faEyeDropper} size="4x" className="mr-4 text-purple-500" />
              <div className="text-center">
                <p className="text-lg font-bold mb-1">LASIKs</p>
                <h3 className="text-4xl font-bold">
                  <CountUp start={0} end={5000} duration={5} separator="," />+
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Carousel for Diseases */}
<div className="my-16">
  <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-between mb-7 lg:mb-0 transition-all duration-700 ${inView4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={ref4} >
    <div className="text-center lg:text-center mb-2 lg:mb-6 ">
      <h1 className="text-4xl font-semibold">
        Know More About Eye Problems
      </h1>
      <p className="mt-2 lg:translate-x-[+130px] mb-0">
        Knowledge is key to healthy eyes! Learn about common eye diseases below to make informed choices.
      </p>
    </div>
    {/* View All Button (Desktop) */}
    <div className="relative">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-start">
        <a href="/diseases" className="hidden lg:inline-flex items-center px-4 py-2 text-lg font-medium text-red-600 bg-white border border-red-600 rounded-full shadow-md hover:bg-red-600 hover:text-white transition-colors duration-300 absolute lg:static lg:left-auto lg:ml-0 lg:transform lg:translate-y-[-10px] lg:translate-x-[-100px] z-50">
          View All ↗
        </a>
      </div>
    </div>
  </div>

  <div className="relative">
    <Slider {...sliderSettings} ref={diseaseSliderRef} className="overflow-hidden">
      {diseaseData.map((disease, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg m-1 overflow-hidden">
          {/* Image covers the entire container */}
          <img src={disease.img} alt={disease.name} className="w-full h-64 object-cover rounded-t-xl" />
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">{disease.name}</h1>
            <p>{disease.description}</p>
          </div>
        </div>
      ))}
    </Slider>
    <button onClick={() => diseaseSliderRef.current.slickPrev()} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-6 rounded-full opacity-80 z-50">
      <FaArrowLeft size={20} />
    </button>
    <button onClick={() => diseaseSliderRef.current.slickNext()} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-6 rounded-full opacity-80 z-50">
      <FaArrowRight size={20} />
    </button>
  </div>

  {/* Mobile View Button */}
  <div className="flex text-center mt-4 lg:hidden">
    <a href="/diseases" className="inline-flex items-center px-4 py-2 text-lg font-medium text-red-600 bg-white border border-red-600 rounded-full shadow-md hover:bg-red-600 hover:text-white transition-colors duration-300 z-50">
      View All ↗
    </a>
  </div>
</div>

{/* Carousel for Treatments */}
<div className="my-16">
  <div className={`flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0 transition-all duration-700 ${inView5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={ref5}>
  <div className="text-center lg:text-center mb-4 lg:mb-0 ">
      <h1 className="text-4xl font-semibold lg:text-start lg:translate-x-[+130px]">
        Expert Solutions For All Eye Problems
      </h1>
      <p className="mt-2 text-center lg:text-start lg:translate-x-[+130px] mb-[-20px]">
        Discover expert solutions for common eye problems and enhance your eye health.
      </p>
    </div>
  </div>
  {/* View All Button (Desktop) */}
  <div className="relative">
    <div className="flex flex-col lg:flex-row justify-center lg:justify-start">
      <a href="/treatments" className="hidden lg:inline-flex items-center px-4 py-2 text-lg font-medium text-red-600 bg-white border border-red-600 rounded-full shadow-md hover:bg-red-600 hover:text-white transition-colors duration-300 absolute lg:static lg:left-auto lg:ml-0 lg:transform lg:translate-y-[-40px] lg:translate-x-[+1130px] z-50 ">
        View All ↗
      </a>
    </div>
  </div>
  <div className="relative">
    <Slider {...sliderSettings} ref={treatmentSliderRef} className="overflow-hidden">
      {treatmentData.map((treatment, index) => (
        <div key={index} className="p-1 flex">
          <div className="bg-white rounded-lg shadow-lg m-1 overflow-hidden">
            <img src={treatment.img} alt={treatment.name} className="w-full h-64 object-cover rounded-t-xl" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{treatment.name}</h3>
              <p>{treatment.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    <button onClick={() => treatmentSliderRef.current.slickPrev()} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-6 rounded-full opacity-80 z-50">
      <FaArrowLeft size={20} />
    </button>
    <button onClick={() => treatmentSliderRef.current.slickNext()} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-6 rounded-full opacity-80 z-50">
      <FaArrowRight size={20} />
    </button>
  </div>

  {/* Mobile View Button */}
  <div className="flex text-center mt-0 lg:hidden">
    <a href="/treatments" className="inline-flex items-center px-4 py-2 text-lg font-medium text-red-600 bg-white border border-red-600 rounded-full shadow-md hover:bg-red-600 hover:text-white transition-colors duration-300 z-50">
      View All ↗
    </a>
     </div>
  </div>
</div>


  );
};

export default HomeAndAbout;