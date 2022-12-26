import React , {useState} from 'react'

function Notification() {
  let [highlight , sethighlight] = useState(false)
  return (
    <div onMouseOver={()=> sethighlight(true)} onMouseLeave={()=> sethighlight(false)}>
        <div className='icon-notification-navbar'>
            <img src='icons/notification-icon.png' className='icon-nav'></img>
        </div>
        {highlight && <div className='highlight'>Notifications</div>}

    </div>
  )
}

export default Notification