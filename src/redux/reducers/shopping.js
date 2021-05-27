import imagePath from "../../constants/imagePath";
import types from "../types";


const initial_state = {
    cartData: [{
        id: 1,
        image1: imagePath.shirt1,
        name: 'Arrow',
        type: 'shirt',
        discountPrice: 100,
        originalPrice: '$̶2̶0̶0̶',
        offPrice: '50% off'
    }],

}
export default function (state = initial_state, action) {

    let { cartData } = state
    switch (action.type) {
        case types.ADD:
            {
                action.payload.num = 1;
                return ({
                    ...state,
                    cartData: [...cartData, action.payload]
                })
            }
        case types.EDIT: {

            cartData[action.payload.id].num = cartData[action.payload.id].num + 1;
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