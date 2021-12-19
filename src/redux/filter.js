let initialState = {
    filters: []
}
 
const filterReduser = (state = initialState, action) => {
    switch(action.type) {
    case "ADD_ITEM":{     
        return {...state, filters: [...state.filters, action.payload]};
    }
    case "ADD_INFO_FORM":{         
        const { name, value } = action.payload.e;     
        return {...state, filters: state.filters.map((filter, i) => i === action.payload.index ? {...filter, [name]: value} : filter)}
    }
    case "ADD_ITEM_DELETE_TEXT":{
        return {...state, filters: state.filters.map((filter, i) => i === action.payload ? {...filter, text: ''} : filter)}
    }
    case "REMOVE_ITEM":{
        return {...state, filters: state.filters.filter(item => item.field !== action.payload)};
    }
    default:
        return state;
    }
}

export const setAddList = (field) => 
    ({type: "ADD_ITEM", payload: field})

export const setInfoForm = (e, index) => 
    ({type: "ADD_INFO_FORM", payload: {e, index}})

export const setItemDeleteText = (index) => 
    ({type: "ADD_ITEM_DELETE_TEXT", payload: index})

export const setSelectItemRemoveList = (field) => 
    ({type: "REMOVE_ITEM", payload: field})

export default filterReduser;
