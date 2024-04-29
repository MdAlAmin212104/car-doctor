import React from 'react';
import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';


const About = () => {
      return (
            <div className="hero my-8 rounded-2xl">
                  <div className="hero-content items-start flex-col lg:flex-row">
                        <div className='lg:w-1/2 relative'>
                              <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                              <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-[10px] border-white" />
                        </div>
                        <div className='lg:w-1/2'>
                              <h1 className="text-xl font-semibold text-[#FF3811]">About Us</h1>
                              <h1 className="text-5xl font-bold pt-4">We are qualified <br /> & of experience <br /> in this field</h1>
                              <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                              <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                              <button className="btn bg-[#FF3811] text-white">Get More Info</button>
                        </div>
                  </div>
            </div>
      );
};

export default About;