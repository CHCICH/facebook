import React, { useContext, useEffect ,useState,useReducer,useRef} from 'react'
import {NavLink, Link } from 'react-router-dom';
import MainMenu from './MainMenu';
import Messages from './Messages';
import ProfileIco from './ProfileIco';
import Notification from './Notification';
import {User} from './Main'

function getWindowSize() {
  const {innerWidth} = window;
  return innerWidth;
}
function NavBar() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());

    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  let {user,setUser} = useContext(User)
  let initalStateHover = {0:false,1:false,2:false,3:false,4:false}
  let sideBar =[{path:'',
  img:'Home.png',id:0,
  name:'Home',
},{ 
path:'/friends',
  img:'Friends.png',id:1,
  name:'Friends',

},{
  path:'/watch',
    img:'Watch.png',id:2,
    name:'Watch',

  },{
    path:'/marketplace',
      img:'MarketPlace.png',id:3,
      name:'Marketplace',


    },{
      path:'/groups',
        img:'Groups.png',id:4
        ,name:'Groups',
  

      }];
  const reducerHover =(state, action)=>{
    if(action.type =="SHOW_MODAL"){
      let index = action.payload;
      return {...state,[index]:true}
    }else if(action.type == 'HIDE_MODAL'){
      let index = action.payload;
      return {...state,[index]:false}
    }
  }
  const [state, dispatch] = useReducer(reducerHover, initalStateHover)
  const [dropper_animation, setdropper_animation] = useState({i1: 0,i2:0,i3:0,i4:100})
  const [path_change, setPath_change] = useState('/')
  return (
    <div className='NavBar'>
        <div className='search-box'>
        <img type='search' src='Facebook-logo.png' className='Logo-icon'></img>
        <div className='search-bar'>
        <form>
        <div className="form-group has-search">
    <span className="fa fa-search form-control-feedback little-searchicon little-search-icon"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" className="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xlup9mm x1kky2od"><g fillRule="evenodd" transform="translate(-448 -544)"><g fillRule="nonzero"><path d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path><path d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z" transform="translate(448 544)"></path><path d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z" transform="translate(448 544)"></path><path d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z" transform="translate(448 544)"></path></g></g></svg></span>
    <input type="text" className="form-control Search-bar width-bar" placeholder="Search Facebook"></input>
  </div>  
</form>
        </div>
  
        </div>
       { (windowSize>900)?
        <div className='Links-div-main'>
          {
            sideBar.map((item)=>{
              return(
                <NavLink key={item.id} style={({ isActive }) => ({ 
                  borderBottom: isActive ? '#1877f2 solid 5px' : 'white' })} onMouseOver={()=>{
                    dispatch({type:'SHOW_MODAL',payload:item.id})
                  }} onMouseLeave={()=>dispatch({type:'HIDE_MODAL' ,payload:item.id})} to={item.path} className='Main-Link'><img src={item.img} key={item.id} className='little-icon'/>{ state[item.id] && <span className='highlight'>{item.name}</span>}</NavLink>
              )
            })
          }
                             
        </div> : <div>
          <Link to={path_change}>
            <div onClick={()=>{
              if(dropper_animation.i1 == 0){
              setdropper_animation({i1:45,i2:30,i3:-45,i4:0});
              
              setPath_change('/')
              }else{
              setdropper_animation({i1:0,i2:0,i3:0,i4:100});
              
              setPath_change('/disboard')
              }
            }}>
            <div className='slider-1' style={{"transform":`rotate(${dropper_animation.i1}deg) translate(${dropper_animation.i2}%) `}}></div>
            <div className='slider-1'style={{"opacity":`${dropper_animation.i4}%`}}></div>
            <div className='slider-1'style={{"transform":`rotate(${dropper_animation.i3}deg) translate(${dropper_animation.i2}%) `}}></div>
            </div>
          </Link>
          </div>}
       { (windowSize>900)? <div className='icons-buttons-box'>
            <MainMenu/>
            <Messages/>
            <Notification/>
            <ProfileIco/>
            
        </div>:<div></div>}
    </div>
  )
}

export default NavBar
