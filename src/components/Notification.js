import React , {useState,useReducer,useRef,useEffect} from 'react'
import { reducerDiv,initalStateDiv } from './reducer/closeDiv';

function Notification() {
  const Notification = [
    {
      id:0,
      userName:'Joe Bo',
      pfp_pic:'https://scontent.fbey5-2.fna.fbcdn.net/v/t39.30808-1/272337245_495024958654610_8954556787873484852_n.jpg?stp=c0.50.320.320a_dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=c6021c&_nc_ohc=SV-Tc6MFZx4AX9v_gIv&_nc_ht=scontent.fbey5-2.fna&oh=00_AfBv24UNDPxzP-djK7THkQykrIBZXoyXxQiTk0rbwT3i6w&oe=6413CA13',
      desc:'Commented on your photo'
    },{
      id:1,
      userName:'Mary Ma',
      pfp_pic:'https://scontent.fbey5-1.fna.fbcdn.net/v/t39.30808-1/332175575_1067641334196399_8786619466774496275_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=o3uklnavkrcAX9c4rS6&_nc_ht=scontent.fbey5-1.fna&oh=00_AfD2I-YPJfk5bU7Du3fj0chCf_Aw-2F-7kmXKyBro8r3Kg&oe=6412CA48',
      desc:'Liked your new Post '
    },{
      id:2,
      userName:'Joe Bo',
      pfp_pic:'https://scontent.fbey5-2.fna.fbcdn.net/v/t39.30808-1/272337245_495024958654610_8954556787873484852_n.jpg?stp=c0.50.320.320a_dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=c6021c&_nc_ohc=SV-Tc6MFZx4AX9v_gIv&_nc_ht=scontent.fbey5-2.fna&oh=00_AfBv24UNDPxzP-djK7THkQykrIBZXoyXxQiTk0rbwT3i6w&oe=6413CA13',
      desc:'Shared a Link'
    },{
      id:3,
      userName:'Mi sang',
      pfp_pic:'https://scontent.fbey5-2.fna.fbcdn.net/v/t1.6435-1/120049150_199706324847914_8358665896105250817_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=c6021c&_nc_ohc=okGLJ7xhgOcAX8i57h0&_nc_ht=scontent.fbey5-2.fna&oh=00_AfCDqYb9dE2G_yGTD3DX4xV_x-uVvs7wVmca7gd9Ed5_jw&oe=64358B56',
      desc:'Accepted your firend request'
    },{
      id:4,
      userName:'Lo mou',
      pfp_pic:'https://scontent.fbey5-2.fna.fbcdn.net/v/t39.30808-1/301393755_10159698808986335_6774538214968769800_n.jpg?stp=dst-jpg_s320x320&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=iYH6c5lbtMwAX9oWG-v&_nc_ht=scontent.fbey5-2.fna&oh=00_AfC3K6QD5CW2PdoLeAsiOJXj0R8MKoS_2uacYPmn3Mvazg&oe=6414028B',
      desc:'Shared a Link'
    },{
      id:5,
      userName:'Joe Bo',
      pfp_pic:'https://scontent.fbey5-2.fna.fbcdn.net/v/t39.30808-1/272337245_495024958654610_8954556787873484852_n.jpg?stp=c0.50.320.320a_dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=c6021c&_nc_ohc=SV-Tc6MFZx4AX9v_gIv&_nc_ht=scontent.fbey5-2.fna&oh=00_AfBv24UNDPxzP-djK7THkQykrIBZXoyXxQiTk0rbwT3i6w&oe=6413CA13',
      desc:'Wants to play chess with you'
    },{
      id:6,
      userName:'Joe Bo',
      pfp_pic:'https://scontent.fbey5-2.fna.fbcdn.net/v/t39.30808-1/272337245_495024958654610_8954556787873484852_n.jpg?stp=c0.50.320.320a_dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=c6021c&_nc_ohc=SV-Tc6MFZx4AX9v_gIv&_nc_ht=scontent.fbey5-2.fna&oh=00_AfBv24UNDPxzP-djK7THkQykrIBZXoyXxQiTk0rbwT3i6w&oe=6413CA13',
      desc:'Wished you a happy birthday'
    }
  ]
  let [highlight , sethighlight] = useState(false);
  let [ishere, sethere] = useState('none');
  let [state, dispatch] = useReducer(reducerDiv, initalStateDiv);
  let btn = useRef();
  const showOrhideDropDown = ()=>{
    if(state.Dropdown){
      sethere('block')
    }else{
      sethere('none')
    }
  }
  useEffect(()=>{
    let handler = (e)=>{
      //console.log('state :',state.Dropdown, '\n !dropdown.current.contains(e.target) : ',!dropdown.current.contains(e.target) , '\n !btn.current.contains(e.target) : ',!btn.current.contains(e.target) )
      if(!dropdown.current.contains(e.target) && !btn.current.contains(e.target) ){
      dispatch({type:'CLOSE_DROPDOWN'})
      }
    }
    document.addEventListener('mousedown',handler )
    return () =>{
      document.removeEventListener('mousedown' , handler)
    }
    
  });
  useEffect(()=>{
    showOrhideDropDown()
  });
  let dropdown = useRef()
  return (
    <div>
      <div >
    <div className='icon-notification-navbar' ref={btn} onMouseOver={()=> dispatch({type:'HOVER_OVER'})} onMouseLeave={()=> dispatch({type:'HOVER_OUT'})} onClick={()=>dispatch({type:'OPEN_DROPDOWN'})}>
        <img src='icons/notification-icon.png' className='icon-nav'></img>
    </div>
    {state.highlight && <div className='highlight spes-h'>Notification</div>}
    </div>
    <div style={{display:ishere}} className='Message-menu-Dropdown' ref={dropdown}  >
    <h2 style={{'marginLeft':'20px'}}>Notification</h2>
    <p style={{'marginLeft':'20px'}}>New</p>
    <div>
      {Notification.map((item)=>{
        return(<div key={item.id} className='Notification-Section'>
          <img className='icon-navs' src={item.pfp_pic}></img>
          <p><strong>{item.userName}</strong>, {item.desc}</p>
          
          </div>)
      })}
    </div>
    </div>
</div>)
}

export default Notification