import React from 'react'
import reacticons from '../../icons';
import useFunction from '../customs hooks/useFunction';
import { useSelector } from 'react-redux';
import { Popconfirm } from 'antd';
import Freeshoping from './Freeshoping'; // free shoping component
import Pricedetailes from './Pricedetailes';
export default function Cart1(pro) {
 const [addItems, removeItems,cartdata,removeentireItem]=useFunction();
 const individualitemscount= useSelector((state) => state.cartslice.itemslist );
 //confirm funvtions

const confirm = (id) => {
  removeentireItem(id)
};
    return(
        <React.Fragment>
 
        <h2>Cart</h2>
        <div className='col-7 w-75'>

        {
          pro.item.map((e,index)=>{
           const {productname,quantity,price,productimg,id} = e;
        
            return(
          <div className='cartitem' key={index}>
          <img src={productimg} />
          <h5>{productname} Per-500 Grams</h5>
          <p>₹{price}</p>
          <button style={{ width: '100px' }} onClick={() => {removeItems((id))}}>-</button><span>{quantity}</span>
          <button style={{ width: '100px' }} onClick={() => {addItems(([id,productname,price,productimg])) }}>+</button>
          <p>Total Price:<b>₹{price*quantity}</b></p>
    <Popconfirm
    title="Delete the Item"
    description="Are you sure to delete this Item?"
    onConfirm={()=>{confirm(id)}}
   style={{width:'100px'}}
    okText="Yes"
    cancelText="No"
    placement="leftBottom">
    <reacticons.delete style={{height:'30px',width:'40px',position:'absolute',right:'37%',marginTop:'30px',cursor:'pointer' }} />
     </Popconfirm> 
          </div>
            )
          })
        }

        </div>
        <div className='col-5 position-fixed fixed-right' style={{marginRight:'10px'}}>
        <Pricedetailes totalitemscost={cartdata.totalprice}  delivarycharge={cartdata.deliverycharge}/>
        </div>
     <Freeshoping/>
        </React.Fragment>
      )
}
