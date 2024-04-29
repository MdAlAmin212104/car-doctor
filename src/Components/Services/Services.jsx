import React, { useEffect, useState } from 'react';
import SingleServices from '../SingleServices/SingleServices';

const Services = () => {
      const [services, setServices] = useState([])
      useEffect(() => {
            fetch('/services.json')
                  .then(res => res.json())
                  .then(data => {
                        setServices(data)
                  })
      })
      return (
            <div>
                  <div className='text-center w-1/2 mx-auto space-y-7'>
                        <h1 className='text-2xl text-[#FF3811] font-bold'>services</h1>
                        <h2 className="text-5xl font-bold">Our Service Area</h2>
                        <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                  </div>

                  <div className='grid lg:grid-cols-3 gap-4'>
                        {
                              services.map(services => <SingleServices key={services._id} services={ services } />)
                        }
                  </div>
            </div>
      );
};

export default Services;