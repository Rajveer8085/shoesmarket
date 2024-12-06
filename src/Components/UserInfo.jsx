import React from 'react'
import userprofile from "../assets/imgs/60111.jpg"

const UserInfo = ({Emailname}) => {
  return (
    <div className='userInfo'>
        <div className="user">
            <div className="info_sec">
            <img src={userprofile} alt="Image  Not Found" className='img-fluid' />
                <h4 className='my-3'>user101</h4>
            </div>
              <h4 className='opacity-75'>User Information</h4>
            <div className='info'>
              <h5>name : user01</h5>
              <h5>email : {Emailname}</h5>
              <h5>Password : *********</h5>
            </div>
            <a href="">
            <button className='rounded my-4'>logout </button>
            </a>
        </div>
    </div>
  )
}

export default UserInfo