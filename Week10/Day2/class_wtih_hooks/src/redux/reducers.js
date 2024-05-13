import { TAKEINPUT } from "./actions";

const initialState = {
    text:`I'm not stupid`
}

export const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case TAKEINPUT:
            
            return {...state, text:action.payload}
            
    
        default:
            return state
    }
}