import React from 'react'

export default function About() {
  return <>
    <section className='about vh-100 text-center d-flex justify-content-center align-items-center'>
      <div>
        <h2 className='text-white fw-bolder my-3'>ABOUT COMPONENT</h2>
        <div className='icon-about'>
          <i className='fa-solid fa-star text-white fa-md'></i>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-5">
              <p className='text-white mt-2 text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-5">
              <p className='text-white mt-2 text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
