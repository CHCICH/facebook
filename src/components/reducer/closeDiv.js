
export const reducerDiv = (state , action)=>{
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
export  let initalStateDiv= {
    highlight:false,
    Dropdown:false
  }