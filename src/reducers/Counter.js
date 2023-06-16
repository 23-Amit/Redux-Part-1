const counterReducer = (state = 0, action)=>
{
    console.log(action.type,'from counterReducer')
    switch(action.type)
    {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return  state - 1
        default:
            return state
    }
}
export default counterReducer