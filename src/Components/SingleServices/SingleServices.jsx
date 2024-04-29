import React from 'react';
import arrow from '../../assets/icons/arrow.svg'

const SingleServices = ({ services }) => {
      const { title, img, price } = services;
      return (
            <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl h-[210px]" />
                  </figure>
                  <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div className='flex'>
                              <p className='text-[#FF3811]'>Price :${price}</p>
                              <img src={arrow} className='w-4' alt="" />

                        </div>
                        
                  </div>
            </div>
      );
};

export default SingleServices;