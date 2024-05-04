import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BookingRow from '../../Components/BookingRow/BookingRow';
import Swal from 'sweetalert2';

const BookingList = () => {
      const { user } = useContext(AuthContext)
      const [booking, setBooking] = useState([])
      
      const url = `http://localhost:5000/bookings?email=${user?.email}`;

      useEffect(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                  setBooking(data);
            })
      }, [user])


      const handleDelete = id => {
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                  if (result.isConfirmed) {
                        fetch(`http://localhost:5000/bookings/${id}`, {
                              method: 'DELETE',
                        })
                              .then(res => res.json())
                              .then(data => {
                                    if (data.deletedCount > 0) {
                                         Swal.fire({
                                                title: "Deleted!",
                                                text: "Your file has been deleted.",
                                                icon: "success"
                                         });
                                          const remaining = booking.filter(booking => booking._id !== id);
                                          setBooking(remaining);
                                    }
                              })
                  }
            });
      }



      const handleUpdate = id => {
            Swal.fire({
                  title: "Are you sure?",
                  text: "You Update this is file!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, update it!"
            }).then((result) => {
                  if (result.isConfirmed) {
                        fetch(`http://localhost:5000/bookings/update/${id}`, {
                              method: 'PATCH',
                              headers: {
                                    'content-type': 'application/json',

                              },
                              body: JSON.stringify({status : 'confirm'}),
                        })
                              .then(res => res.json())
                              .then(data => {
                                    if (data.modifiedCount > 0) {
                                         Swal.fire({
                                                title: "Update!",
                                                text: "Your file has been Update.",
                                                icon: "success"
                                         });
                                          const remaining = booking.filter(booking => booking._id !== id);
                                          const update = booking.find(booking => booking._id === id);
                                          update.status = 'confirm';
                                          const newBooking = [update, ...remaining];
                                          setBooking(newBooking);
                                    }
                              })
                  }
            });
      }

      return (
            <div>
                  <h2 className='text-4xl text-center font-bold'>Your bookingList {booking.length}</h2>
                  <div className="overflow-x-auto">
                        <table className="table ">
                        {/* head */}
                        <thead className='bg-slate-300 pb-4'>
                              <tr>
                              <th>
                              </th>
                              <th>Photo</th>
                              <th>Service Name</th>
                              <th>Service Date</th>
                              <th>Service price</th>
                              <th>Status</th>
                              </tr>
                        </thead>
                        <tbody>
                              {
                                          booking.map(booking => <BookingRow
                                                key={booking._id}
                                                booking={booking}
                                                handleDelete={handleDelete}
                                                handleUpdate = {handleUpdate}
                                          />)              
                              }
                              
                        </tbody>
                        
                        </table>
                  </div>
            </div>
      );
};

export default BookingList;