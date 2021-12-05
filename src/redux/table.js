import axios from "axios";

let initialState = {
    items: []
}
 
 const tableReduser = (state = initialState, action) => {
     switch(action.type) {
        case "SET_TABLE":{
            return{
                ...state,
                items: action.payload
            };
        }
        default:
            return state;
     }
 }

export const getTable = (query) => (dispatch) => {
        let newStr;
        if(query){
            const str = []
            for(let i = 0; i < query.length; i++){                            
                const str1 = query[i]?.field + query[i]?.item + "=" + query[i]?.text;
                str.push(str1);   
            }
            newStr = str.join('&');        
            debugger
        }
    axios.get(`http://localhost:3008/table?${newStr ? newStr : null}`).then((req, res) =>{
            dispatch(setTable(req.data));
    })
}

export const setTable = (items) => 
    ({type: "SET_TABLE", payload: items})
 
export default tableReduser;