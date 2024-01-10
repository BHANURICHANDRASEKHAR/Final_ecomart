import { configureStore } from "@reduxjs/toolkit";
import userslice,{AuthActions} from "./reduers";
import cartslice,{cartActions} from "./cart-slice";
import notificationSlice from "./notificationslice";
import useraddressslice from "./useraddressslice";
import userdetaileslice from "./accountslice";
const   store=configureStore({
    reducer:{
        userslice:userslice.reducer ,
        cartslice:cartslice.reducer,
        useraddressslice:useraddressslice.reducer,
        userdetaileslice:userdetaileslice.reducer
        },
})
export default store;