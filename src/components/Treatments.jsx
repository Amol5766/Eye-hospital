import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import cataractsImage from "../assets/img/Treatment 1.jpg"; // Replace with actual images
import glaucomaImage from "../assets/img/Treatment 2.png";
import macularDegenerationImage from "../assets/img/Treatment 3.png";
import diabeticRetinopathyImage from "../assets/img/Treatment 4.png";
import dryEyeImage from "../assets/img/Treatment 5.png";
import amblyopiaImage from "../assets/img/Treatment 6.png";
import conjunctivitisImage from "../assets/img/Treatment 7.png";
import keratoconusImage from "../assets/img/Treatment 8.png";
import uveitisImage from "../assets/img/Treatment 9.png";
import retinalDetachmentImage from "../assets/img/Treatment 10.png";
import retinitisPigmentosaImage from "../assets/img/Treatment 11.png";         
import floatersImage from "../assets/img/Treatment 12.png"; // Add correct import path
import blepharitisImage from "../assets/img/Treatment 13.png"; // Add correct import path
import Customisedlasik from "../assets/img/Treatment 14.png";
import { FaArrowRight } from 'react-icons/fa'; // Import the animated arrow icon

const Treatments = () => {
  const treatments = [
    { id: 1, title: "Cataract Surgery", description: "Cataract surgery is a common procedure to remove cloudy lenses in the eye caused by cataracts.", image: cataractsImage, link: "" },
    { id: 2, title: "Refractive Surgery", description: "Refractive surgery is the process of reclaiming your vision and freedom. After careful evaluation, our experts can decrease or completely eliminate your dependency on glasses.", image: glaucomaImage, link: "" },
    { id: 3, title: "Retina Services", description: "The retina is the light-sensitive layer of tissue at the back of your eyeball. At Vasan, we employ advanced techniques to diagnose diseases that affect your retina.", image: macularDegenerationImage, link: "" },
    { id: 4, title: "Corneal Services", description: "Various conditions can impact the cornea, potentially causing vision issues. Corneal services is a collective term referring to treatments to fix these issues.", image: diabeticRetinopathyImage, link: "" },
    { id: 5, title: "Anti-VEGF Agents", description: "Anti-VEGF agents are a group of medications which block the activity of VEGF, therefore reducing bleeding and vascular leakage.", image: dryEyeImage, link: "" },
    { id: 6, title: "Dry Eye Treatment", description: "Dry eye syndrome happens when there's a change in the quality or amount of the three layers that make up your tear film.", image: amblyopiaImage, link: "" },
    { id: 7, title: "Vitrectomy", description: "Vitrectomy is an advanced surgery done by our specialists to remove the gel-like substance called ‘vitreous humour’ from inside your eye. This helps them get better access to your retina.", image: conjunctivitisImage, link: "" },
    { id: 8, title: "Contoura Vision", description: "Contoura Vision is a groundbreaking laser vision correction procedure that enables you to correct your vision for a lifetime.", image: keratoconusImage, link: "" },
    { id: 9, title: "ICL", description: "EVO ICL, or Implantable Collamer Lens, is a refractive procedure that corrects myopia (near-sightedness).", image: uveitisImage, link: "" },
    { id: 10, title: "PRK", description: "Photorefractive keratectomy (PRK) is a refractive laser surgery that reshapes the cornea in your eyes to correct myopia and hyperopia.", image: retinalDetachmentImage, link: "" },
    { id: 11, title: "Epi-LASIK", description: "Epi-LASIK is a modern refractive treatment option to enable clear vision without glasses or contact lenses.", image: retinitisPigmentosaImage, link: "" },
    { id: 12, title: "Epi-Contoura", description: "The newest advancement in laser vision correction for eliminating the need for glasses is Epi-Contoura Streamlight.", image: floatersImage, link: "" },
    { id: 13, title: "Retinal Laser Photocoagulation", description: "Retinal laser photocoagulation is a treatment we use at Vasan to address several retina-related issues such as diabetic retinopathy, retinal vein occlusion, and others.", image: blepharitisImage, link: "" },
    { id: 14, title: "Customised LASIK", description: "Customised LASIK is an advanced procedure that helps you see perfectly without glasses or contact lenses.", image: Customisedlasik, link: "" },
  ];

  const [headerVisible, setHeaderVisible] = useState(false);
  const [visible, setVisible] = useState(Array(treatments.length).fill(false));
  const headerRef = useRef(null);
  const treatmentRefs = useRef([]);

  useEffect(() => {
    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          headerObserver.unobserve(entry.target);
        }
      });
    });

    if (headerRef.current) headerObserver.observe(headerRef.current);

    const treatmentObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute("data-index");
          setVisible((prev) => {
            const newVisible = [...prev];
            newVisible[index] = true;
            return newVisible;
          });
          treatmentObserver.unobserve(entry.target);
        }
      });
    });

    treatmentRefs.current.forEach((ref) => {
      if (ref) treatmentObserver.observe(ref);
    });

    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
      treatmentRefs.current.forEach((ref) => {
        if (ref) treatmentObserver.unobserve(ref);
      });
    };
  }, [headerRef, treatmentRefs]);

  return (
    <div className="flex flex-col justify-center pt-20 pb-10">
      {/* Breadcrumb Navigation */}
      <div className="bg-blue-100 w-full rounded-b-3xl px-5 justify-left shadow-xl">
        <div className="mb-4 text-gray-500 mt-4">
          <p className="text-base">
            <a href="/" className="hover:underline text-gray-700">Home</a> &gt;&gt; <span className="text-gray-700 hover:underline">Treatments</span>
          </p>
        </div>

        {/* Header Section */}
        <div 
          className={`text-left pb-6 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}  opacity transition-transform duration-700 ease-in-out`} 
          ref={headerRef}
        >
          <h1 className="text-4xl font-semibold text-blue-800 mb-4">
            Expert Solutions For All Eye Problems
          </h1>
          <p className="text-lg text-gray-600">
            We're here to ensure your eyes get the care they deserve. Reach out to us today for personalized advice or to book your appointment—your clear vision is our top priority!
          </p>
        </div>
      </div>

      {/* Treatments Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-5">
        {treatments.map((treatment, index) => (
          <div 
            key={treatment.id} 
            className={`relative group transition-transform transform ${visible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} duration-700 ease-in-out`} 
            ref={el => treatmentRefs.current[index] = el}
            data-index={index}
          >
            {/* Serial Number Circle */}
            <div className="absolute translate-x-[-1px] translate-y-[10px] w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold text-lg shadow-md z-20">
              {treatment.id}
            </div>

            {/* Serial Number Circle */}
            <div className="absolute translate-x-[-10px] translate-y-[-10px] w-16 h-20 rounded-full bg-white flex items-center justify-center text-white font-bold text-lg z-10">
            </div>

            {/* Image container with animated border-radius */}
            <div className="overflow-hidden h-60 w-full rounded-3xl bg-gray-200 transform transition-all duration-500 group-hover:rounded-full cursor-default">
              <img
                src={treatment.image}
                alt={treatment.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Header and Description */}
            <div className="mt-4 text-left">
              <h2 className="text-xl font-semibold text-blue-800 mb-3">{treatment.title}</h2>
              <p className="text-gray-600">{treatment.description}</p>
              {/* Know More Button */}
              <Link to={treatment.link}>
                <button className="mt-8 flex items-center justify-center bg-orange-400 text-white font-medium rounded-3xl py-3 px-4 transition duration-300 hover:bg-orange-500 opacity-90">
                  Know More <FaArrowRight className="ml-2 animate-ping" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
