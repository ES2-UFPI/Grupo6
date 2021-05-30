const INITIAL_STATE = [{
    id: '3',
    name: 'bike',
    price: '0',
    photo: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
}]

export default function cartReducer(state = INITIAL_STATE, action){
    if(action.type === 'ADD'){
        localStorage.setItem('cart', JSON.stringify({ ...action.data }))
        return[...state, action.data]
    }
    if(action.type === 'REMOVE'){
        localStorage.setItem('cart', JSON.stringify({ ...state.filter((item) => item.name !== action.data) }))
        return state.filter((item) => item.id !== action.data)
    }
    return state
}

export const addItem = item => {
    return{
        type: 'ADD',
        data: item
    }
}

export const removeItem = itemId => {
    return{
        type: 'REMOVE',
        data: itemId
    }
}