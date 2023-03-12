import React,{useState, useReducer, useEffect, useRef} from 'react'
import { reducerDiv, initalStateDiv } from './reducer/closeDiv'

function Messages() {
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
        <img src='icons/message-icon.png' className='icon-nav'></img>
    </div>
    {state.highlight && <div className='highlight spes-h'>Messenger</div>}
    </div>
    <div style={{display:ishere}} className='Message-menu-Dropdown' ref={dropdown}  >
      <h2 style={{'marginLeft':'20px'}}>Chats</h2>
      <input placeholder='Search Chats' className='search-input-for-create' ></input>
      <h4 style={{'marginLeft':'20px'}}>ERROR 504 </h4>
      <br></br>
      <h5 style={{'marginLeft':'20px'}}>0 Chats are available</h5>
    </div>
</div>
  )
}

export default Messages