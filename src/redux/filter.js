let initialState = {
    filters: []
}
 
const filterReduser = (state = initialState, action) => {
    switch(action.type) {
    case "ADD_ITEM":{        
        const newState = {...state, filters: [...state.filters, action.payload]};        
        return newState;
    }
    case "ADD_ITEM_TEXT":{    
        const newState = {...state.filters};
        const { name, value } = action.payload.e.target;
        newState[action.payload.index][name] = value;      
        return state;
    }
    case "ADD_ITEM_DELETE_TEXT":{    
        const newState = {...state.filters}; 
        debugger
        newState[action.payload]["text"] = '';
        return state;
    }
    case "ADD_SELECT_ITEM_FILTER":{          
        let newState = {...state.filters}; 
        const { item, name } = action.payload.type;
        newState[action.payload.index][name] = item;
        return state;
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

export const setInputChange = (e, index) => 
    ({type: "ADD_ITEM_TEXT", payload: {e, index}})

export const setItemDeleteText = (index) => 
    ({type: "ADD_ITEM_DELETE_TEXT", payload: index})

export const setSelectItemFilter = (type, index) => 
    ({type: "ADD_SELECT_ITEM_FILTER", payload: {type, index}})

export const setSelectItemRemoveList = (field) => 
    ({type: "REMOVE_ITEM", payload: field})

export default filterReduser;