import React from 'react'

export default function Slider() {
  const items = ['assests/slider/slider1.png','assests/slider/slider2.png','assests/slider/slider3.png','assests/slider/slider4.png'
  ,'assests/slider/slider5.png','assests/slider/slider6.png','assests/slider/slider7.png'
    ];
  
  return (
    <div>
      <h3 className='fw-bold text-center'>Trusted by hundreds of progressive brands</h3>
      {
        items.map((item, index) => (
          <div className=' d-inline p-5 m-3'>
            <img src={item} key={index} alt={`slider ${index + 1}`} className="ms-4 my-3" />
          </div>
        ))
      }
    </div>
  )
}
