import axios from "axios";

let initialState = {
    headers: []
}
 
 const headersReduser = (state = initialState, action) => {
     switch(action.type) {
        case "SET_HEADERS":{
            return{
                ...state,
                headers: action.payload
            };
        }
        default:
            return state;
     }
 }

export const getHeaders = () => (dispatch) => {
    axios.get(`http://localhost:3008/headers?`).then((req, res) =>{
        dispatch(setHeaders(req.data));
    })
}

export const setHeaders = (headers) => 
    ({type: "SET_HEADERS", payload: headers})
 
export default headersReduser;