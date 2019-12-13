const mutations = {
    setUserInfo(state,userInfo){
        state.userInfo = userInfo;
        localStorage.userInfo = JSON.stringify(userInfo);
    },
    clear(state){
        state.userInfo = '';
        localStorage.userInfo = '';
    }
}

export default mutations;