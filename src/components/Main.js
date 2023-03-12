import React, { useEffect, useState } from 'react'
import { Routes,Route , Link , NavLink,BrowserRouter,useParams, Outlet} from 'react-router-dom'
import Home from './Home'
import Marketplace from './Marketplace'
import Friends from './Friends'
import Watch from './Watch'
import Groups from './Groups'
import Error from './Error'
import NavBar from './NavBar'

let User = React.createContext(null)

function Main() {
  const USER_ID = 680392073581073;
  const USER_SECRET ='97bb606b57b28b4a4197dc1a5a3b07dc'
  const API_TOKEN = 'EAAJq0BZCakhEBAFD1x91yZCXlrPhiSHHaITnbZAaSglHZCIUnANU0DjQCZCs0NEvvmrtZCj60fHh4qDZBSjvlbMPX7F6oaWGOXcFF99Xnfu6821VpcO2UO2BEZA9Vdim8w1zQMTXZAVZBSYW6G2i3xC8rK1GzlgUV2GBV42zOQmE1ZBdPLgYIyRsdxXtR2ZAjNSrymjcsQ4scTOLPuUc4GijqIBKpMuv845gqckfi15qMZAQ01XbnFTTbsFZCS'
  const fakeuser = {
    Username:'Charbel Haddad',
    photo:'',
    Notification:12,
  }
  let [myToken , setToken] = useState('')
  useEffect(()=>{
  fetch(`https://graph.facebook.com/v3.0/me/feed?limit=10&fields=id%2Cfull_picture%2Ccreated_time%2Cfrom%7Bid%2Cname%2Cpicture%7D%2Cmessage%2Clink%2Ctype%2Cshares%2Cobject_id%2Cstory&access_token=${API_TOKEN}`)
  .then(response => response.json())
  .then(data => {setToken(data.data)
  console.log(data)
  })
  .catch(e => console.log(e))
},[])
  
  
  

  let [user,setUser] = useState(fakeuser)
  return (
   <User.Provider value={{user, setUser}}>
   <div>
        
        <BrowserRouter>

        <NavBar/>
        <Routes>
            <Route path='/' element={<Outlet/>}>
                <Route path='' element={<Home/>}/>
                <Route path='marketplace' element={<Marketplace/>}/>
                <Route path='friends' element={<Friends/>}/>
                <Route path='watch' element={<Watch/>}/>
                <Route path='groups' element={<Groups/>}/>
                <Route path='*' element={<Error/>}/>

            </Route>
        </Routes>
        </BrowserRouter>
        
      
    </div>
    </User.Provider>
  )
}
export {User}
export default Main