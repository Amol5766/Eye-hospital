import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faCalendarCheck, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import diseaseImg1 from '../assets/img/Disease 1.png';
import dr from "../assets/img/DR.N.jpg";
import mission from "../assets/img/mission.jpeg";
import vision from "../assets/img/vision.jpeg";
import values from "../assets/img/values.jpeg";
import ModelWrapper from '../components/Model/Model';


const AboutUs = () => {

  
  // State for handling tab selection for dynamic content
  const [activeTab, setActiveTab] = useState("mission");

     // Function to handle tab clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Dynamic content based on selected tab
  const getDynamicContent = () => {
    if (activeTab === "mission") {
      return {
        title: "Our Mission",
        description: "Our mission is to provide the best healthcare possible and make medical care accessible to all.",
        imageUrl: mission
      };
    } else if (activeTab === "vision") {
      return {
        title: "Our Vision",
        description: "Our vision is to create a healthier future by pioneering medical advancements and compassionate care.",
        imageUrl: vision
      };
    } else if (activeTab === "values") {
      return {
        title: "Our Values",
        description: "We value integrity, compassion, and excellence in everything we do, ensuring the best for our patients.",
        imageUrl: values
      };
    }
  };

  // Get the current dynamic content
  const dynamicContent = getDynamicContent();

  return (
    <div className="p-4">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="flex space-x-2 text-gray-600 mt-20">
          <li>
            <Link to="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <span className="text-gray-400"> &gt;&gt; </span>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">About Us</Link>
          </li>
        </ol>
      </nav>

      <div className="w-full h-96 px-0 mt-2 mb-0 rounded-full">
  <ModelWrapper />
</div>

      {/* Title */}
      <h1 className="mt-4 text-4xl font-semibold text-blue-800 mb-4">Know More About Us</h1>


      {/* Cards Section Wrapper */}
      <div className="mt-8 bg-blue-100 p-5 rounded-lg w-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Our Doctor */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex flex-col mb-4">
              <FontAwesomeIcon icon={faUserMd} className="h-8 w-8 text-blue-600 left mb-2" />
              <div className="relative w-full">
                <hr className="border-t-2 border-blue-600 mb-2 transition-all duration-300 transform hover:scale-x-105" />
                <span className="absolute -top-1.5 right-0 w-3 h-3 bg-blue-600 rounded-full transition-transform duration-300 transform hover:scale-150"></span>
              </div>
              <h2 className="text-xl font-semibold mt-2">Our Doctor</h2>
            </div>
            <p className="flex-grow text-gray-600">
              Meet our experienced doctor dedicated to providing quality care.
            </p>
            <Link to="" className="mt-4 inline-flex items-center justify-center px-1 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
              Learn More <HiArrowRight className="ml-2" />
            </Link>
          </div>

          {/* Card 2: Appointment */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex flex-col mb-4">
              <FontAwesomeIcon icon={faCalendarCheck} className="h-8 w-8 text-blue-600 left mb-2" />
              <div className="relative w-full">
                <hr className="border-t-2 border-blue-600 mb-2 transition-all duration-300 transform hover:scale-x-105" />
                <span className="absolute -top-1.5 right-0 w-3 h-3 bg-blue-600 rounded-full transition-transform duration-300 transform hover:scale-150"></span>
              </div>
              <h2 className="text-xl font-semibold mt-2">Appointment</h2>
            </div>
            <p className="flex-grow text-gray-600">
              Schedule an appointment with our doctor at your convenience.
            </p>
            <Link to="/contact" className="mt-4 inline-flex items-center justify-center px-1 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
              Book Now <HiArrowRight className="ml-2" />
            </Link>
          </div>

          {/* Card 3: Our Location */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex flex-col mb-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="h-8 w-8 text-blue-600 left mb-2" />
              <div className="relative w-full">
                <hr className="border-t-2 border-blue-600 mb-2 transition-all duration-300 transform hover:scale-x-105" />
                <span className="absolute -top-1.5 right-0 w-3 h-3 bg-blue-600 rounded-full transition-transform duration-300 transform hover:scale-150"></span>
              </div>
              <h2 className="text-xl font-semibold mt-2">Our Location</h2>
            </div>
            <p className="flex-grow text-gray-600">
              Find out where we are located and how to reach us.
            </p>
            <Link to="/contact" className="mt-4 inline-flex items-center justify-center px-0 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
              Get Directions <HiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
     

      {/* Image Container */}
      <div className="mt-8 w-auto h-36"> {/* Set a fixed height (e.g., h-32 for 8rem) */}
        <img src={diseaseImg1} alt="About Us" className="w-full h-full rounded-lg object-cover" /> {/* Use object-cover */}
      </div>


      {/* About Us Button */}
      <div className="mt-6 flex justify-left">
        <p className="inline-flex text-xs items-center justify-center px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          About Us
        </p>
      </div>

      {/* Our Belief Section */}
      <div className="mt-6 text-left ">
        <h2 className="text-3xl font-light text-gray-800 mb-9 ">Our Belief</h2>
        <p className="mt-4 text-gray-600 mb-4 font-medium">
          At our clinic, we believe in providing personalized care to each of our patients. Your health and well-being are our top priorities, and we strive to create a welcoming and comfortable environment.
        </p>
        <p className="mt-2 text-gray-600 mb-4 font-medium">
          We are committed to using the latest technology and medical practices to ensure you receive the best treatment possible. Our team of professionals is dedicated to continuous learning and improvement.
        </p>
        <p className="mt-2 text-gray-600 mb-4 font-medium">
          Together, we can achieve a healthier future for you and your loved ones. Thank you for trusting us with your care.
        </p>
      </div>

{/* Chairman Speaks Section */}
<div className="mt-8 bg-blue-100 w-full p-5 rounded-lg flex flex-col items-center"> {/* Full-width blue background with center alignment */}
  
  {/* Image Container */}
  <div className="relative w-80 h-96 rounded-xl border-4 border-[#FFD700] overflow-hidden shadow-lg"> {/* Added shadow for depth */}
    <img 
      src={dr} 
      alt="Chairman" 
      className="w-full h-full object-fill transition-transform duration-300 transform hover:scale-105" // Smooth scaling effect on hover
    /> 
  </div>

    

      {/* Chairman Speaks Button */}
      <div className="mt-6 flex justify-left">
        <p className="inline-flex text-xs items-center justify-center px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          About Us
        </p>
      </div>

      {/* Chairman Message Section */}
      <div className="mt-6 text-left">
        <h2 className="text-3xl font-light text-gray-800 mb-9 text-center">Head Doctor Speaks</h2>
        <p className="mt-4 text-gray-600 mb-4 font-medium">
          As the Head Doctor of this esteemed Hospital, I take immense pride in the work our team does every day. We are more than just healthcare providers; we are compassionate caretakers.
        </p>
        <p className="mt-2 text-gray-600 mb-4 font-medium">
          Our goal is to create an environment where every patient feels heard and cared for, with their needs at the forefront of all we do. We continuously push boundaries to offer the most advanced treatments.
        </p>
        <p className="mt-2 text-gray-600 mb-4 font-medium">
          I want to personally thank each patient for trusting us with their health. We will continue to work tirelessly to earn and maintain your trust.
        </p>
      </div>        
    </div>




          {/* Dynamic Section with Tabs */}
<div className="mt-8 bg-orange-400 w-full p-5 rounded-lg shadow-lg">  {/* Added shadow for depth */}
  
  <div className="mt-6 flex justify-center"> {/* Centering the header */}
    <p className="inline-flex text-xs items-center justify-center px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
      Nanjappa Eye Hospital
    </p>
  </div>

  <div className="mt-6 text-center"> {/* Centered heading */}
    <h2 className="text-3xl font-medium text-white mb-6">Unveiling Our Vision, Mission, and Values</h2>
  </div>

  <div className="mt-8"> {/* Increased spacing above tabs */}
    {/* Tab buttons */}
    <div className="flex space-x-4 justify-center mb-4">
      {["mission", "vision", "values"].map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${activeTab === tab ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-blue-50"}`}
          onClick={() => handleTabClick(tab)}
        >
          {`Our ${tab.charAt(0).toUpperCase() + tab.slice(1)}`} {/* Capitalizing first letter */}
        </button>
      ))}
    </div>

    {/* Dynamic Card Section */}
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
      {/* Dynamic Image */}
      <div className="md:w-1/3 w-full mb-6 md:mb-0">
        <img src={dynamicContent.imageUrl} alt={dynamicContent.title} className="rounded-lg w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105" /> {/* Added hover scaling */}
      </div>

      {/* Dynamic Content */}
      <div className="md:w-2/3 w-full md:pl-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{dynamicContent.title}</h3>
        <p className="text-gray-600 text-lg">{dynamicContent.description}</p>
      </div>
    </div>
  </div>
</div>
</div>

  );
};

export default AboutUs;
