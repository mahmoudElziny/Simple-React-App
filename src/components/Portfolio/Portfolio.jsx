import React, { useState } from 'react'
import photo1 from "../../images/port1.png";
import photo2 from "../../images/port2.png";
import photo3 from "../../images/port3.png";


export default function Portfolio() {

  const [data, setData] = useState([
    { img: photo1, id: "img1" },
    { img: photo2, id: "img2" },
    { img: photo3, id: "img3" },
    { img: photo1, id: "img4" },
    { img: photo2, id: "img5" },
    { img: photo3, id: "img6" },
  ])

  return (<>
    <section className='portfolio py-5 text-center'>
      <h2 className='fw-bolder mb-3 text-uppercase'>portfolio component</h2>
      <div className='icon-portfolio'>
        <i className='fa-solid fa-star fa-md'></i>
      </div>
      <div className="container mt-4">
        <div className="row g-4">
          {data.map((item) => (
            <>
              <div className='col-md-4'>
                <div className="portfolio-item">
                  <img src={item.img} alt="" className='w-100 rounded-3' />
                  <div className="plus rounded-3" data-bs-toggle="modal" data-bs-target={"#" + item.id}>
                    <i className='fa-solid fa-plus'></i>
                  </div>
                </div>
              </div>
            </>
          ))}

          {data.map((item) => (
            <>
              <div className="modal fade" id={item.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body p-0">
                      <img src={item.img} alt="" className='w-100' />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  </>)
}
