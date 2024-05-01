import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
      const service = useLoaderData();
      const { price } = service;
      //console.log(service);


      const handleSubmit = (e) => {
            e.preventDefault();
            const form = e.target
            const name = form.name.value;
            const email = form.email.value;
            const date = form.date.value;
            console.log(name, email, date);
            console.log("object");
      }




      return (
            <div>
                  <h2>this is CheckOut page</h2> {service.title}
                  
                  <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name='date' className="input input-bordered" required />
                                    
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" defaultValue={'$'+price} className="input input-bordered" required />
                                    
                              </div>
                        </div>
                        <div className="form-control mt-6">
                              <input className='btn btn-primary' type="submit" value="Book Now" />
                        </div>
                  </form>
            </div>
      );
};

export default CheckOut;