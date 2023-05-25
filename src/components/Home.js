import React,{useReducer} from 'react'

function Home() {

  const itemsInTheMenu = [{
    name : 'Events',
    url:'https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png',
    id:0
  },{
    name : 'Find Friends',
    url:'https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png',
    id:1
  },{
    name : 'Groups',
    url:'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png',
    id:2
  },{
    name : 'News Feed',
    url:'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/DOal__ng_AH.png',
    id:3
  },{
    name : 'Favourites',
    url:'https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Zy9sJGThmCS.png',
    id:4
  },{
    name : 'Most recent',
    url:'https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png',
    id:5
  },{
    name : 'Pages',
    url:'https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png',
    id:6
  }]
  const Post = [
    {
      id:'0',
      publisher:{
        name:'Google',
        icon:'https://blog.hubspot.com/hubfs/image8-2.jpg',
      },
      image:'google-employe-image.png',
      Post_desc:'Welcome to CHICH project one of the best devs',
      likes:190,
      comments:129,
      shares:90,
      liked:false
    },
    {
      id:1,
      publisher:{
        name:'Amazon',
        icon:'',
      },
      image:'',
      Post_desc:'A creative developer born in 2006',
      likes:120,
      comments:129,
      shares:90,
      liked:false
    }, {
      id:2,
      publisher:{
        name:'Meta',
        icon:'',
      },
      image:'',
      Post_desc:'Fun fact this project was made when he was 15 years old ',
      likes:123,
      comments:129,
      shares:90,
      liked:false
    }, {
      id:3,
      publisher:{
        name:'Microsoft ',
        icon:82,
      },
      image:'',
      Post_desc:'Have fun with this website :)',
      likes:81,
      comments:129,
      shares:90,
      liked:false
    }
  ]
  const reducer = (state, action)=>{
    if(action.type == 'ADD_LIKE'){
      if(action.payload[1]== false){
      let index = action.payload;
      //console.log(index)
      let newState = [];
      //console.log(Post.length)
      for(let i= 0 ; i<Post.length;i++){
        console.log(index[0])
        if(i == index[0]){
          let modifableState = state[i];
          modifableState.liked = true;
          modifableState.likes = modifableState.likes + 0.5
          newState.push(modifableState)
          console.log(modifableState)
        }else{
          newState.push(state[i])
        }
      }
      return(newState)
    }else{
      let index = action.payload;
      //console.log(index)
      let newState = [];
      //console.log(Post.length)
      for(let i= 0 ; i<Post.length;i++){
        console.log(index[0])
        if(i == index[0]){
          let modifableState = state[i];
          modifableState.liked = false;
          modifableState.likes = modifableState.likes - 0.5
          newState.push(modifableState)
          console.log(modifableState)
        }else{
          newState.push(state[i])
        }
      }
      return(newState)
    }
    }
  }
  const [post, dispatch] = useReducer(reducer,Post);
  return (
    <div className='Main-Home-Body'>
      <div className='side-bar-menu-home'>
        <div>
          {
            itemsInTheMenu.map((item)=>{
              return(<div key={item.id} className='side-bar-holder-menu'>
                <img src={item.url} className='side-bar-icon-menu'></img>
                <h3>{item.name}</h3>
              </div>)
            })
          }
        </div>
      </div>
      <div>1</div>
      <div className='main-page-menu-home'>
        <div>
          {post.map((item)=>{
            return(<div className='Post' key={item.id}>
              <div className='head-of-post'>
                <div><div style={{'display':'flex',"justifyContent":'space-between','width':'120px'}}> <img className='post-icon' src={item.publisher.icon}></img>
                <h5>{item.publisher.name}</h5></div>
                <p>{item.Post_desc}</p>
                </div>
               
                <div className='options-post'><h3>...</h3></div>  
              </div>
             
              <img className='post-img' src={item.image}></img>
              <div className='bottom-post'>
                <div style={{'display':'flex',"justifyContent":"space-between",'borderBottom':'solid 1px rgb(173, 173, 173)'}}>
                <div className='likes_count'><img style={{'width':'20px','height':'20px','transform':'translateY(90%)'}} src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"></img><p>{item.likes}</p></div>
                <div style={{'transform':'translateY(30%)'}}>{item.comments} comments      {item.shares} shares </div></div>
                <div><div className='like_button' onClick={()=>dispatch({type:'ADD_LIKE', payload:[item.id,item.liked]})}>click</div></div>
              </div>
            </div>)
          })}
        </div>
      </div>
      <div className='contact-side-bar-menu-home'>
        3
      </div>
    </div>
  )
}

export default Home