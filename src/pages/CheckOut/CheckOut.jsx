import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const CheckOut = () => {
      const { user } = useContext(AuthContext)
      const service = useLoaderData();
      const { price, _id, title, img } = service;


      const handleSubmit = (e) => {
            e.preventDefault();
            const form = e.target
            const name = form.name.value;
            const email = user?.email || form.email.value;
            const date = form.date.value;
            const booking = {
                  serviceId : _id,
                  CustomerName: name,
                  serviceName : title,
                  email,
                  img,
                  date,
                  price,
            }
            
            fetch('http://localhost:5000/bookings', {
                  method: 'POST',
                  headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                  },
                  body: JSON.stringify(booking),
            })
                  .then(response => response.json())
                  .then(data => {
                        if (data.insertedId) {
                              alert('data stored successfully');
                              form.reset();
                        };
                  })
            
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
                                    <input type="email" name='email' defaultValue= {user?.email} className="input input-bordered" />
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