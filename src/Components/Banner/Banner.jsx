import React from 'react';
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'

const Banner = () => {
      return (
            <div className="carousel w-full h-[600px] rounded-xl">
                  <div id="slide1" className="carousel-item relative w-full ">
                        <img src={img1} className="w-full" />
                        <div className="absolute flex items-center h-full left-0 top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                              <div className='lg:pl-24 pl-4 space-y-7'>
                                    <h2 className='lg:lg:text-6xl text-2xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                                    <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                                    <div className='space-x-4 font-semibold text-white'>
                                          <button className="btn bg-[#FF3811] text-white">Discover More</button>
                                          <button className="btn btn-outline text-white">Latest Project</button>
                                    </div>
                              </div>
                        </div>
                        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide6" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❮</a> 
                              <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                        </div>
                  </div> 
                  <div id="slide2" className="carousel-item relative w-full">
                        <img src={img2} className="w-full" />
                        <div className="absolute flex items-center h-full left-0 top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                              <div className='lg:pl-24 pl-4 space-y-7'>
                                    <h2 className='lg:text-6xl text-2xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                                    <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                                    <div className='space-x-4 font-semibold text-white'>
                                          <button className="btn bg-[#FF3811] text-white">Discover More</button>
                                          <button className="btn btn-outline text-white">Latest Project</button>
                                    </div>
                              </div>
                        </div>
                        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❮</a> 
                              <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                        </div>
                  </div> 
                  <div id="slide3" className="carousel-item relative w-full">
                        <img src={img3} className="w-full" />
                        <div className="absolute flex items-center h-full left-0 top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                              <div className='lg:pl-24 pl-4 space-y-7'>
                                    <h2 className='lg:text-6xl text-2xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                                    <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                                    <div className='space-x-4 font-semibold text-white'>
                                          <button className="btn bg-[#FF3811] text-white">Discover More</button>
                                          <button className="btn btn-outline text-white">Latest Project</button>
                                    </div>
                              </div>
                        </div>
                        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❮</a> 
                              <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                        </div>
                  </div> 
                  <div id="slide4" className="carousel-item relative w-full">
                        <img src={img4} className="w-full" />
                        <div className="absolute flex items-center h-full left-0 top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                              <div className='lg:pl-24 pl-4 space-y-7'>
                                    <h2 className='lg:text-6xl text-2xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                                    <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                                    <div className='space-x-4 font-semibold text-white'>
                                          <button className="btn bg-[#FF3811] text-white">Discover More</button>
                                          <button className="btn btn-outline text-white">Latest Project</button>
                                    </div>
                              </div>
                        </div>
                        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❮</a> 
                              <a href="#slide5" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                        </div>
                  </div>
                  <div id="slide5" className="carousel-item relative w-full">
                        <img src={img5} className="w-full" />
                        <div className="absolute flex items-center h-full left-0 top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                              <div className='lg:pl-24 pl-4 space-y-7'>
                                    <h2 className='lg:text-6xl text-2xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                                    <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                                    <div className='space-x-4 font-semibold text-white'>
                                          <button className="btn bg-[#FF3811] text-white">Discover More</button>
                                          <button className="btn btn-outline text-white">Latest Project</button>
                                    </div>
                              </div>
                        </div>
                        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❮</a> 
                              <a href="#slide6" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                        </div>
                  </div>
                  <div id="slide6" className="carousel-item relative w-full">
                        <img src={img6} className="w-full" />
                        <div className="absolute flex items-center h-full left-0 top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                              <div className='lg:pl-24 pl-4 space-y-7'>
                                    <h2 className='lg:text-6xl text-2xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                                    <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                                    <div className='space-x-4 font-semibold text-white'>
                                          <button className="btn bg-[#FF3811] text-white">Discover More</button>
                                          <button className="btn btn-outline text-white">Latest Project</button>
                                    </div>
                              </div>
                        </div>
                        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide5" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❮</a> 
                              <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;