export const allowedFilters = {
    All: 'All',
    Active:'Active',
    Completed: 'Completed '
}

const initialState = {
    status:allowedFilters.All
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