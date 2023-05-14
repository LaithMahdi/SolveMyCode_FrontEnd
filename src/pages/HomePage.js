import React, { Component } from 'react'
import '../style/homePage.css';
import { Link } from 'react-router-dom';
import HeaderContent from '../components/HeaderContent';
import Silder from '../components/Silder';
export default class HomePage extends Component {
  render() {
    return (
        <div className=''>
            <div className='row d-flex justify-content-center align-items-center' id='header'>
                <div className='col-md-8 col-lg-8 col-sm-8 col-12'>
                    <div className='box ms-5'>
                        <h1 className='fw-bolder'>Your are developer</h1>
                        <p>We're a problem-solving website with a team of experts who offer solutions for a variety of issues. Submit your problem and receive quick and confidential support. We value your privacy and are committed to providing you with the highest level of care. Let us help you overcome your challenges today.</p>
                        <div>
                            <Link className='btn btn-dark me-2'>Ask question</Link>
                            <Link className='btn btn-outline-dark'>Contact</Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-lg-4 col-sm-4 col-12'>
                    <div className='image'>
                        <img src='assests/bg_1.png' className='pic img-fluid' alt="pic"/>
                    </div>
                </div>
            </div>
        <HeaderContent />
        <Silder/>
        </div>
      
    )
  }
}
