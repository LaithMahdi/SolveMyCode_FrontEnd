import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterCop() {
  return (
    <div className='mt-5' id='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 col-lg-3 col-sm-6 col-12'>
                    <div className='box'>
                        <h3 className='fw-bold text-uppercase'>SolveMyCode</h3>
                        <h6>About Us</h6>
                        <p className='text-muted my-2' style={{textAlign:"justify"}}>is a platform for problem-solving that enables developers to post their issues and receive feedback from other developers who have encountered the same issues</p>
                    </div>
                </div>


                <div className='col-md-4 col-lg-3 col-sm-6 col-12'>
                    <div className='box'>
                        <h5 className='fw-bold mb-4'>Important Link</h5>
                        <ul className='mt-2'>
                            <li><Link to="/" className='text-decoration-none text-dark'>Home</Link></li>
                            <li><Link to="/" className='text-decoration-none text-dark'>About US</Link></li>
                            <li><Link to="/" className='text-decoration-none text-dark'>FAQS</Link></li>
                            <li><Link to="/" className='text-decoration-none text-dark'>Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='col-md-4 col-lg-3 col-sm-6 col-12'>
                    <div className='box'>
                    <h5 className='fw-bold mb-4'>Social Link</h5>
                        <ul className='mt-2'>
                            <li><Link to="/" className='text-decoration-none text-dark'>Facebook</Link></li>
                            <li><Link to="/" className='text-decoration-none text-dark'>Linkedin</Link></li>
                            <li><Link to="/" className='text-decoration-none text-dark'>Twitter</Link></li>
                            <li><Link to="/" className='text-decoration-none text-dark'>Instagram</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='col-md-4 col-lg-3 col-sm-6 col-12'>
                    <div className='box'>
                    <h5 className='fw-bold mb-4'>Contact Info</h5>
                        <ul className='mt-2'>
                            <li><Link to="/" className='text-decoration-none text-dark'>
                            <i classname="fa-solid fa-envelope pe-2"></i>
                                Mahdilaith380@gmail.com</Link></li>
                            <li><Link to="/" className='text-decoration-none text-dark'>
                            <i className="fa-solid fa-phone pe-2"></i>
                                +216 98 765 432</Link></li>
                            <li><Link to="/" className='text-decoration-none text-dark'>
                            <i classname="fa-solid fa-location-dot pe-2"></i>
                                Korba , Nabeul, Tunisie</Link></li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
