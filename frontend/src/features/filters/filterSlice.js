export const statusFilters = {
    All: 'All',
    Active:'Active',
    Completed: 'Completed '
}

const initialState = {
    status:statusFilters.All,
    colors: []
}

const filterReducer = (state = initialState, action) => {
    switch(action.type){
        case('filters/statusFilterChanged'):{
            return {
                ...state,
                status:action.payload
            }
        }
        default:
            return state
    }
}

export default filterReducer