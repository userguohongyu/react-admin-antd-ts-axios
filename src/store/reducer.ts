const defaultStates = {
    count:0,
    inputValue: '写入任务',
    list: [
        '睁眼起床',
        '下床刷牙',
        '穿衣出门',
    ],
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