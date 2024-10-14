import React from 'react';
import photo from "../../avataaars.svg"

export default function Home() {
  return <>
    <header className='vh-100 d-flex justify-content-center align-items-center text-center'>
      <div>
        <img src={photo} className="w-75" alt="" />
        <h1 className='text-white fw-bolder my-3'>START FRAMEWORK</h1>
        <div className='icon-home'>
          <i className='fa-solid fa-star text-white fa-md'></i>
        </div>
        <p className='text-white mt-3'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </header>
  </>
}
