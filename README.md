# Todo-Redux
A To-Do List web Application created with React and Redux with plain CSS and fontawesome icons

### To-Do Actions and Payloads
    * {type: 'todos/todoAdded', payload: todoText}
    * {type: 'todos/todoToggled', payload: todoId}
    * {type: 'todos/colorSelected, payload: {todoId, color}}
    * {type: 'todos/todoDeleted', payload: todoId}
    * {type: 'todos/allCompleted'}
    * {type: 'todos/completedCleared'}
    * {type: 'filters/statusFilterChanged', payload: filterValue}
    * {type: 'filters/colorFilterChanged', payload: {color, changeType}}