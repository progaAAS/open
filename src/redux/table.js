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
    debugger
    let newStr;
    if(query){
        const str = []
        const fieldData = query.find(item => item.field === "data");
        const fieldNoData = query.filter(item => item.field != "data");
        if(fieldData){                 
            if(fieldData.item.one){
                const strTwoData = fieldData.field + fieldData.item.one + "=" + fieldData.text.textDateOne + "&" + fieldData.field + fieldData.item.two + "=" + fieldData.text.textDateTwo
                str.push(strTwoData);
            }else{
                const strOneData = fieldData.field + fieldData.item + "=" + fieldData.text;
                str.push(strOneData);
            }
        }
        if(fieldNoData){
            for(let i = 0; i < fieldNoData.length; i++){                            
                const str1 = fieldNoData[i]?.field + (fieldNoData[i]?.item ? fieldNoData[i]?.item : '') + "=" + fieldNoData[i]?.text;
                str.push(str1);   
            }
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