import * as Types from '../types';
const initialState = {
  user:{
      token:null,
      refreshToken:null,
      auth:false
  }
}
const reducers =(state=initialState, {payload,type})=>{
   switch(type){
      case Types.LOGIN:
         return {
             ...state,
            user:{
                token:payload.token,
                refreshToken: payload.refreshToken,
                auth:payload.auth
            }
         } 
        default :
         return state;
   }
   
}


export default reducers;