export const StatusFilters = {
    All: 'All',
    Active: 'Active',
    Completed: 'Completed'
}

const initialState = {
    status: StatusFilters.All,
    colors: []
}

/* 
{type: 'filters/statusFilterChanged', payload: filterValue}
{type: 'filters/colorFilterChanged', payload: {color, changeType}}
*/

export default function filterReducer(state = initialState, action){
    switch (action.type) {
        case 'filters/statusFilterChanged':{
            return {
                ...state,
                status: action.payload
            }
        }
        case 'filters/colorFilterChanged':{
            let {color, changeType} = action.payload
            const {colors} = state

            switch (changeType) {
                case 'added':{
                    if(colors.includes(color)){
                        return state
                    }
                    return {
                        ...state,
                        colors: state.colors.concat(color)
                    }
                }
                case 'removed':{
                    return {
                        ...state,
                        colors:state.colors.filter(existingColor => existingColor !== color)
                    }
                }
            
                default:
                    return state
            }
        }
        default:
            return state
    }
}