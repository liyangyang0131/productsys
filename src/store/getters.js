 const getters = {
    getUserInfo(state){
        if(state.userInfo){
            return state.userInfo;
        }else{
            return JSON.parse(localStorage.userInfo);
        }
    }
}

export default getters