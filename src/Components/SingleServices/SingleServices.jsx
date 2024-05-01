import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/arrow.svg'

const SingleServices = ({ services }) => {
      const { _id, title, img, price } = services;
      return (
            <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl h-[210px]" />
                  </figure>
                  <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div className='flex'>
                              <p className='text-[#FF3811]'>Price :${price}</p>
                              <Link to={`/checkout/${_id}`}>
                                    <img src={arrow} className='w-4' alt="" />
                              </Link>

                        </div>
                        
                  </div>
            </div>
      );
};

export default SingleServices;