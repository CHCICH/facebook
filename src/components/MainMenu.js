import React, {useEffect, useReducer, useRef, useState} from 'react'

function MainMenu() {
 
  let [ishere, sethere] = useState('none')
  let initalState = {
    highlight:false,
    Dropdown:false
  }
  
  const reducer = (state , action)=>{
    if(action.type =='HOVER_OVER'){
      return {
        ...state,
        highlight:true
      }
    }else if(action.type =='HOVER_OUT'){
      return{
        ...state,
        highlight:false
      }
    }else if(action.type == 'OPEN_DROPDOWN'){
      return {
        ...state,
        Dropdown:!state.Dropdown
      }
    }else if(action.type == 'CLOSE_DROPDOWN'){
      return{
        ...state,
        Dropdown:false
      }
    }else{
      return state
    }

  }
  let [state , dispatch] = useReducer(reducer, initalState)
  let dropdown = useRef()
  let btn = useRef()
  const showOrhideDropDown = ()=>{
    if(state.Dropdown){
      sethere('block')
    }else{
      sethere('none')
    }
  }
  useEffect(()=>{
    let handler = (e)=>{
      console.log('state :',state.Dropdown, '\n !dropdown.current.contains(e.target) : ',!dropdown.current.contains(e.target) , '\n !btn.current.contains(e.target) : ',!btn.current.contains(e.target) )
      if(!dropdown.current.contains(e.target) && !btn.current.contains(e.target) ){
      dispatch({type:'CLOSE_DROPDOWN'})
      }
    }
    document.addEventListener('mousedown',handler )
    return () =>{
      document.removeEventListener('mousedown' , handler)
    }
    
  })
  useEffect(()=>{
    showOrhideDropDown()
  })
  
 
  return (
    <div className='Main-menu' >
        <div ref={btn} onClick={()=>dispatch({type:'OPEN_DROPDOWN'})} className='icon-notification-navbar' onMouseOver={()=> dispatch({type:'HOVER_OVER'})} onMouseLeave={()=> dispatch({type:'HOVER_OUT'})}>
            <img src='icons/menu-icon.png' className='icon-nav'></img>
        </div>
        {state.highlight && <div className='highlight spes-h'>Menu</div>}
        <div style={{display:ishere}} className='Main-menu-Dropdown' ref={dropdown}  >
          <h2 className='Menu-title'>Menu</h2>
          <div style={{height:"100%", overflowY:'scroll'}}><div className='Search-for-activities-div'>
            <form>
              <input placeholder='Search menu' className='search-input-for-create'></input>
            </form>
             </div>
          
          </div>
          <div className='create-Main-menu-section'> 
          <h3 style={{marginLeft:'15px'}}>Create</h3>
          <div className='inside-div-create-main-menu-container'>
            
            <div className='highilited-create-idea'><img src='icons/create-icon.png' className='highilited-create-idea-icon'></img> <h4 >Post</h4></div>
            <div className='highilited-create-idea'><img src='icons/story-icon.png' className='highilited-create-idea-icon'></img>  <h4 >Story</h4></div>
            <div className='highilited-create-idea'> <img src='icons/Room-icon.png' className='highilited-create-idea-icon'></img> <h4 >Room</h4></div>
            <hr></hr>
            <div className='highilited-create-idea'> <img src='icons/Page-icon.png' className='highilited-create-idea-icon'></img> <h4 >Page</h4></div>
            <div className='highilited-create-idea'> <img src='icons/Ad-icon.png' className='highilited-create-idea-icon'></img> <h4 >Ad</h4></div>
            <div className='highilited-create-idea'> <img src='icons/Groups-icon.png' className='highilited-create-idea-icon'></img> <h4 >Group</h4></div>
            <div className='highilited-create-idea'><img src='icons/Event-icon.png' className='highilited-create-idea-icon'></img>  <h4 >Event</h4></div>
            <div className='highilited-create-idea'> <img src='icons/MarketListing-icon.png' className='highilited-create-idea-icon'></img> <h4 >Marketplace Listing</h4></div>


          </div>
          </div>
    </div>
    </div>
  )
}

export default MainMenu