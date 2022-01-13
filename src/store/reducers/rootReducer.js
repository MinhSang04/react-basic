const initState = {
    users: [
        { id: 1, name: 'Minh' },
        { id: 2, name: 'Sang' }
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(users => users.id !== action.payload.id);
            return {
                ...state, users //Ghi đè lại thằng users trong initState bằng thằng users mới lọc
            };
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 1001);
            let user = { id: id, name: `random - ${id}` };
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }
}

export default rootReducer;