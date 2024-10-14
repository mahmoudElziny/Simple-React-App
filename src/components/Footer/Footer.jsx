import React from 'react'

export default function Footer() {
    return <>
        <footer className='pt-5 text-center'>
            <div className="container pb-5">
                <div className="row py-5">
                    <div className="col-md-4">
                        <div>
                            <h2 className='text-white fw-semibold mb-2 fs-3'>LOCATION</h2>
                            <p className='text-white mb-2' >2215 John Daniel Drive</p>
                            <p className='text-white mb-2'>Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <h2 className='text-white fw-semibold mb-3 fs-3'>AROUND THE WEB</h2>
                            <div className='icon d-flex justify-content-center align-items-center mt-3'>
                                <div className='icon-div d-flex justify-content-center align-items-center me-2'>
                                    <i className='fa-brands fa-facebook text-white fa-md'></i>
                                </div>
                                <div className='icon-div d-flex justify-content-center align-items-center me-2'>
                                    <i class="fa-brands fa-x-twitter text-white fa-md"></i>
                                </div>
                                <div className='icon-div d-flex justify-content-center align-items-center me-2'>
                                    <i class="fa-brands fa-linkedin-in text-white fa-md"></i>
                                </div>
                                <div className='icon-div d-flex justify-content-center align-items-center me-2'>
                                    <i class="fa-solid fa-globe text-white fa-md"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <h2 className='text-white fw-semibold mb-2 fs-3'>ABOUT FREELANCER</h2>
                            <p className='text-white mb-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-feet py-3 text-white'>
                <p>Copyright © Your Website 2021</p>
            </div>
        </footer>
    </>
}

