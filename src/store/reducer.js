const defaultState = {
    num: 10
}


// eslint-disable-next-line
export default (state = defaultState, action)=>{
    let deepCloneState = JSON.parse(JSON.stringify(state))


    switch(action.type) {
        case "addNum": 
        deepCloneState.num += action.value
        break;

        default: 
        break;
    }

    return deepCloneState 
}