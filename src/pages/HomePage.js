import React, { Component } from 'react'

export default class HomePage extends Component {
  render() {
    return (
      
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 col-lg-9 col-sm-8 col-12'>
                    <div className='box'>
                        <h1>Your are developer</h1>
                        <p>you have a problem and you can't solve create a new post in our platform and expect the answer.</p>
                    </div>
                </div>
                <div className='col-md-4 col-lg-3 col-sm-4 col-12'>
                    <div className='image'>
                        <img src='assests/pic1.png' className='img-fluid w-100' alt="pic"/>
                    </div>
                </div>
            </div>
            
        </div>
      
    )
  }
}
