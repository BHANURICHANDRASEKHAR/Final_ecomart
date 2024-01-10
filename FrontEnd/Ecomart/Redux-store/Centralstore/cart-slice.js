import { createSlice } from "@reduxjs/toolkit";
const cartslice=createSlice({
    name:'cart',
    initialState:{
        itemslist:[],
        totalquntity:0,
        totalprice:0,
        deliverycharge:60
    }
    ,
    reducers:{
        removecart(state,action)
        {
            const newItem=action.payload;
           
            const match=state.itemslist.find((items)=>items.id==newItem.id)
           if(match.quantity===1)
           {
             state.itemslist=state.itemslist.filter((items)=>items.id!==newItem.id)
           
           }
           else{
            match.quantity--
           match.totalprice-=newItem.price;
           }
           state.totalquntity-=1,
           state.totalprice-=match.price
        },
        addtocart(state,action)
        {
            const a=action.payload[0];
            console.log('cart data',a)
            const match=state.itemslist.find((items)=>items.id===a.id)
            if(match)
            {
                match.quantity+=1
                match.totalprice+=a.price
            }
            else{
                state.itemslist.push({
                    productname:a.productname,
                    price:a.price,
                    id:a.id,
                    quantity:a.count,
                    totalprice:a.price,
                    productimg:a.productimg
                })
            }
            state.totalquntity+=1;
            state.totalprice+=a.price
           
        },
        deleteentireitem(state,action)
        {
            const id=action.payload;
            const match=state.itemslist.find((items)=>items.id==id)
            if(match)
            {
                state.totalquntity-=match.quantity;
                state.totalprice-=match.quantity*match.price
                state.itemslist=state.itemslist.filter((items)=>items.id!==id)
            }
        },
       setdelivary(state,action)
       {
        console.log('hello')
      state.deliverycharge-=60;
       }
    }
})
export const cartActions=cartslice.actions;
export default cartslice;