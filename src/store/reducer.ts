const defaultStates = {
    count:0,
};

export default (previousState = defaultStates, action) => {

    if(action.type==="add"){
        let newState = JSON.parse(JSON.stringify(previousState))
        newState.count++
        return newState
    }
    if(action.type==="reduce"){
        let newState = JSON.parse(JSON.stringify(previousState))
        newState.count--
        return newState
    }


    return previousState;
}