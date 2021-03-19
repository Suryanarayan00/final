import types from "../types";

const initial_state = {
    cartData: [],

}
export default function (state = initial_state, action) {

    switch (action.type) {
        case types.ADD:
            return ({
                ...state,
                cartData: [...todoList, action.payload]
            })

        case types.EDIT: {

            userData[action.payload.id].num = todoList[action.payload.id].num+1;
            console.log(todoList)
            return ({
                ...state,
                cartData
            })
        }

        default: {
            return { ...state }
        }
    }
}