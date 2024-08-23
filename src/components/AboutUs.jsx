import React from "react";
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faUserMd, faSyringe, faEyeDropper } from '@fortawesome/free-solid-svg-icons';
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      {/* Blog Section */}
      <div className="my-8">
        <div className="flex flex-col items-center lg:flex-row justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-center lg:text-start">
              Latest Posts
            </h1>
            <p className="mt-2 text-center lg:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, quidem.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-8">
          <BlogCard img={img1} headlines="Unraveling the Mysteries of Sleep" />
          <BlogCard img={img2} headlines="The Heart-Healthy Diet" />
          <BlogCard img={img3} headlines="Understanding Pediatric Vaccinations" />
          <BlogCard img={img4} headlines="Navigating Mental Health" />
          <BlogCard img={img5} headlines="The Importance of Regular Exercise" />
          <BlogCard img={img6} headlines="Skin Health 101" />
        </div>
      </div>

      {/* Animated Numbers Section */}
      <div className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Achievements</h2>
        <div className="flex flex-wrap justify-center gap-16">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faHospital} size="4x" className="mr-4 text-blue-500" />
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
                  <CountUp start={0} end={2000} duration={5} separator="," />+
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
