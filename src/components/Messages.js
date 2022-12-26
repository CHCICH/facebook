import React,{useState} from 'react'

function Messages() {
  let [highlight , sethighlight] = useState(false)
  return (
    <div>
    <div className='icon-notification-navbar' onMouseOver={()=> sethighlight(true)} onMouseLeave={()=> sethighlight(false)}>
        <img src='icons/message-icon.png' className='icon-nav'></img>
    </div>
    {highlight && <div className='highlight spes-h'>Messenger</div>}
    
</div>
  )
}

export default Messages