import React, { useEffect, useRef, useState } from "react"; 
import { Link } from "react-router-dom"; 
import cataractsImage from "../assets/img/Disease 1.png";
import glaucomaImage from "../assets/img/Disease 2.png";
import macularDegenerationImage from "../assets/img/Disease 3.png";
import diabeticRetinopathyImage from "../assets/img/Disease 4.png";
import dryEyeImage from "../assets/img/Disease 5.png";
import amblyopiaImage from "../assets/img/Disease 6.png";
import conjunctivitisImage from "../assets/img/Disease 7.png";
import keratoconusImage from "../assets/img/Disease 8.png";
import uveitisImage from "../assets/img/Disease 9.png";
import retinalDetachmentImage from "../assets/img/Disease 10.png";
import retinitisPigmentosaImage from "../assets/img/Disease 11.png"; 
import floatersImage from "../assets/img/Disease 12.png"; 
import blepharitisImage from "../assets/img/Disease 13.jpg"; 
import { FaArrowRight } from 'react-icons/fa'; 

const EyeDiseases = () => {
  const diseases = [
    { id: 1, title: "Cataract", description: "Cataracts occur when the eye's natural lens becomes cloudy, causing vision to blur like looking through a foggy or dusty car windshield.", image: cataractsImage, link: "/cataracts" },
    { id: 2, title: "Glaucoma", description: "Glaucoma is a group of eye conditions that affect the optic nerve after elevated eye pressure which may cause blindness.", image: glaucomaImage, link: "/glaucoma" },
    { id: 3, title: "Diabetic Retinopathy", description: "Diabetic Retinopathy happens when high blood sugar levels damage the retinal blood vessels.", image: macularDegenerationImage, link: "/diabetic-retinopathy" },
    { id: 4, title: "Squint", description: "Squint is a disorder in which the eyes don't look in exactly the same direction at the same time.", image: diabeticRetinopathyImage, link: "/squint" },
    { id: 5, title: "Retinal Detachment", description: "Retinal Detachment occurs when the retina separates from its supporting tissue, leading to severe vision loss and blindness.", image: dryEyeImage, link: "/retinal-detachment" },
    { id: 6, title: "Retinopathy Prematurity", description: "Retinopathy Prematurity (ROP) is an eye condition occurring in premature infants, where abnormal blood vessels grow in the retina, potentially resulting in blindness.", image: amblyopiaImage, link: "/retinopathy-prematurity" },
    { id: 7, title: "Macular Hole", description: "The macula is the centre of your retina, the thin layer at the back of your eye. A macular hole is when a circular opening forms in this macula.", image: conjunctivitisImage, link: "/macular-hole" },
    { id: 8, title: "Traumatic Cataract", description: "Traumatic Cataract is the clouding of the lens due to eye trauma, either blunt or penetrative.", image: keratoconusImage, link: "/traumatic-cataract" },
    { id: 9, title: "Posterior Subcapsular Cataract", description: "Posterior Subcapsular is a type of cataract that begins as a small spot near the back of the lens.", image: uveitisImage, link: "/posterior-subcapsular-cataract" },
    { id: 10, title: "Congenital Glaucoma", description: "Congenital Glaucoma is a rare genetic eye condition that affects children at birth.", image: retinalDetachmentImage, link: "/congenital-glaucoma" },
    { id: 11, title: "Rosette Cataract", description: "Rosette Cataract is a form of traumatic cataract caused by blunt force trauma or eye injury.", image: retinitisPigmentosaImage, link: "/rosette-cataract" },
    { id: 12, title: "Uveitis", description: "Uveitis refers to eye inflammation that affects the middle layer of tissue in the eye wall.", image: floatersImage, link: "/uveitis" },
    { id: 13, title: "Orbital Trauma", description: "Ocular or orbital injuries might cause pain around the eye, bruising, swelling, bleeding from cuts, facial numbness, and vision changes.", image: blepharitisImage, link: "/orbital-trauma" },
  ];

  const [visible, setVisible] = useState(Array(diseases.length + 1).fill(false)); // One extra for the header section
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setVisible(prevVisible => {
            const newVisible = [...prevVisible];
            newVisible[index] = true;
            return newVisible;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [diseases.length]);

  return (
    <div className="flex flex-col justify-center pt-20 pb-10">
      {/* Breadcrumb Navigation */}
      <div className="bg-blue-100 max-w-full rounded-b-3xl px-5 shadow-xl">
        <div className="mb-4 text-gray-500 mt-4">
          <p className="text-base">
            <a href="/" className="hover:underline text-gray-700">Home</a> &gt;&gt; <span className="text-gray-700 hover:underline">Diseases</span>
          </p>
        </div>

        {/* Header Section */}
        <div 
          ref={el => sectionRefs.current[0] = el} 
          data-index={0} 
          className={`text-left pb-6 transition-opacity duration-500 ${visible[0] ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl font-semibold text-blue-800 mb-4">Know More About Eye Diseases</h1>
          <p className="text-lg text-gray-600">
            When it comes to your eye diseases, knowledge is key for healthy eyes! Learn about common eye diseases mentioned below to make informed choices.
          </p>
        </div>
      </div>

      {/* Disease Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-5 overflow-x-auto">
        {diseases.map((disease, index) => (
          <div 
            key={disease.id} 
            ref={el => sectionRefs.current[index + 1] = el} // Start from index + 1 for diseases
            data-index={index + 1} 
            className={`relative group transition-opacity duration-500 ${visible[index + 1] ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* Serial Number Circle */}
            <div className="absolute translate-x-[-1px] translate-y-[10px] w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold text-lg shadow-md z-20">
              {disease.id}
            </div>
 
            {/* Serial Number Circle */}
            <div className="absolute translate-x-[-10px] translate-y-[-10px] w-16 h-20 rounded-full bg-white flex items-center justify-center text-white font-bold text-lg z-10">
            </div>

            <div className="overflow-hidden h-60 w-full rounded-3xl bg-gray-200 transform transition-all duration-500 group-hover:rounded-full cursor-default">
              <img
                src={disease.image}
                alt={disease.title}
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Header and Description */}
            <div className="mt-4 text-left">
              <h2 className="text-xl font-semibold text-blue-800 mb-3">{disease.title}</h2>
              <p className="text-gray-600">{disease.description}</p>

              {/* Know More Button */}
              <Link to={disease.link}>
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

export default EyeDiseases;
