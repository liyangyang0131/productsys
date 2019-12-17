const mutations = {
    setUserInfo(state,userInfo){
        state.userInfo = userInfo;
        localStorage.userInfo = JSON.stringify(userInfo);
    },
    clear(state){
        state.userInfo = '';
        localStorage.userInfo = '';
    },
    setProductCon(state,el){
        state.productCon = el;
        localStorage.productCon = JSON.stringify(el);
    }
}

export default mutations;