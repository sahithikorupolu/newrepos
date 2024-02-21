import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <>
    <div className='contact'>
      <div className='container'>
        <div className='form'>
          <h2>Contact Us</h2>
          <form method='POST'>
            <div className='box'>
              <div className='lable'>
                <h4>Name</h4>
              </div>
              <div className='input'>
                <input type='text' placeholder='Name' value='' name=''></input>
              </div>
            </div>
            <div className='box'>
              <div className='lable'>
                <h4>Email</h4>
              </div>
              <div className='input'>
                <input type='email' placeholder='Email' value='' name=''></input>
              </div>
            </div>
            <div className='box'>
              <div className='lable'>
                <h4>Subject</h4>
              </div>
              <div className='input'>
                <input type='Subject' placeholder='Subject' value='' name=''></input>
              </div>
            </div>
            <div className='box'>
              <div className='lable'>
                <h4>Message</h4>
              </div>
              <div className='input'>
               <textarea placeholder='Message !' name='' value=''></textarea>
              </div>
              <button type='submit'>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
