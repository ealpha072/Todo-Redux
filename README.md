# Todo-Redux
A To-Do List web Application created with React and Redux with plain CSS and fontawesome icons

See demo here --> https://mysterious-brushlands-43467.herokuapp.com/

### Dependencies used
#### Frontend:
   * `react-dom` - For react dom navigation
   * `react-redux` - For linking react and redux
   * `redux`- For state management
   * `axios` - For making API calls to backend
 #### Backend:
  * `cors` -  For cross origin requests
  * `express` - server definations
  * `mongoose` - for mongodb connection
  * `nodemon` - for automatic server restart on edit
  * `body-parser` - for json parsing
  * `dotenv` - for heroku deployment
### Sample code ;
```javascript
export const toggleImportance = async (req, res) => {
    const body = req.body
    const newState = {
        title:body.title,
        completed: !body.completed
    }

    try {
        await Todo.findByIdAndUpdate(req.params.id, newState, {new:true})
        res.status(200).json(newState)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

```
