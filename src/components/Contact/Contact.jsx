import React from 'react'

export default function Contact() {
  return <>
    <section className='contact py-5 text-center'>
      <h2 className='fw-bolder text-uppercase mb-3'>conatct section</h2>
      <div className='icon-conatct mb-5'>
        <i className='fa-solid fa-star fa-md'></i>
      </div>

      <div className="w-50 m-auto text-start ">
          <form action="">
            <input type="text" placeholder='User Name' className='w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5'/>
            <input type="number" placeholder='User Age' className='w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5'/>
            <input type="email" placeholder='User Email' className='w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5'/>
            <input type="password" placeholder='User Password' className='w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5'/>

            <button className='btn send'>Send Message</button>
          </form>
      </div>
    </section>
  </>
}
