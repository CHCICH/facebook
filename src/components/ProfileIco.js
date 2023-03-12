import React ,{useState} from 'react'

function ProfileIco() {
  let [highlight , sethighlight] = useState(false)
  return (
    <div onMouseOver={()=> sethighlight(true)} onMouseLeave={()=> sethighlight(false)}>
        <div className='icon-notification-navbar'>
            <img src='icons/profile_icon.png' className='icon-nav'></img>
        </div>
    {highlight && <div className='highlight'>Account</div>}
    

    </div>
  )
}

export default ProfileIco