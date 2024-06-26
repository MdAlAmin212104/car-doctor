import React from 'react';

const BookingRow = ({ booking, handleDelete, handleUpdate }) => {
      const { _id, serviceName, price, date, img, status } = booking;

      


      return (
            <tr>
                  <th>
                        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                  </th>
                  <td>
                        <div className="avatar">
                              <div className="w-32 rounded">
                                    <img src={img} />
                              </div>
                        </div>
                  </td>
                  <td>
                        {serviceName}
                  </td>
                  <td>{date}</td>
                  <td>{price}</td>
                  <th>
                        {status? <p className='btn btn-ghost btn-xs'>Confirm</p>:
                              <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">please confirm</button>
                        }
                  </th>
            </tr>
      );
};

export default BookingRow;