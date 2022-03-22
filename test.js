const StatusFilters = {
    All: 'All',
    Active: 'Active',
    Completed: 'Completed'
}

const filters = Object.keys(StatusFilters).map(keys => console.log(keys))
console.log(filters)