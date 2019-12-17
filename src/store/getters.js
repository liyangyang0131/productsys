 const getters = {
    getUserInfo(state){
        if(state.userInfo){
            return state.userInfo;
        }else{
            return JSON.parse(localStorage.userInfo);
        }
    },
     getProductCon(state){
         if(state.productCon && state.productCon['_id']){
             return state.productCon;
         }else{
             return JSON.parse(localStorage.productCon);
         }
     }
}

export default getters