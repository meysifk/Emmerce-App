const init_state = {
    username: "",
    fullname: "",
    email: "",
    role: "",
    id: 0,
}

const state = (state = init_state, action) => {
    switch(action.type){
        case "USER_LOGIN":
            return { ...state, ...state.payload}
        default:
            return state;
    }
}

export default state;