export const initialState = [
// {
//     item: 'Make Bed',
//     id: 3892987589,
//     completed: false
// },
// {
//     item: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
// },
// {
//     item: 'Bake Cookies',
//     id: 1528817084358,
//     completed: false
// }
]

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [ ...state,  action.payload ]
        case "TOGGLE":
            return state.map(task => {
                if (task.id === action.payload.id) {
                    console.log("Task: ", task)
                    return { ...task, completed: !task.completed }
                }else {
                    return task;
                }
            })
        case "CLEAR":
            return state.filter(task => task.completed === false)
        

        default:
            return state;
    }

};