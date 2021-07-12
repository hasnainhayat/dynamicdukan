import React from 'react'

import {useSelector,connect} from 'react-redux';
import {useState,useEffect} from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import './Cart.css'
import {
    adjustQty,
    removeFromCart,
  } from "../../../redux/shopping/soppingActions";
import { NavLink } from 'react-router-dom';
function Cart({adjustQty, removeFromCart} ) {

    const cartItems=useSelector((state)=>state.shop.cart);
    const [cartTotal, setCartTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
  
    useEffect(() => {
      let items = 0;
      let price = 0;
  
      cartItems.forEach((item) => {
        items += item.qty;
        price += item.totalPrice;
      });
  
      setTotalItems(items);
      setCartTotal(price);
    }, [cartItems, cartTotal, totalItems, setCartTotal, setTotalItems]);
  
    
    
   
    return (
        <div className="cartMain">
        
        <section className="main-cart-section ">
                <h1>shopping Cart</h1>
                <p className="total-items">you have <span className="total-items-count">{totalItems}</span> items in shopping cart</p>
                {cartItems.length>0?
                    <div className="cart-items">

                    <div className="cart-items-container">
                        <Scrollbars >

                            {
                                cartItems.map((cartItem) => {
                                    return( <> <div className="items-info">

                <div className="product-img">
                    <img src={cartItem.image} alt="iamge" />
                </div>

                <div className="title">
                    <h2>{cartItem.title}</h2>
                    
                </div>

                <div className="add-minus-quantity">
                    <i className="fas fa-minus minus" onClick={
                        ()=>{
                            if(cartItem.qty===1){
                            removeFromCart(cartItem.id);
                            }
                            adjustQty(cartItem.id,-1);
                            
                        }
                    }></i>
                    <input type="text" placeholder="2" value={cartItem.qty}/>
                    <i className="fas fa-plus add" onClick={
                        ()=>{
                            adjustQty(cartItem.id,+1);
                            
                        }
                    }></i>
                </div>

                <div className="price">
                    <h3>{cartItem.totalPrice }</h3>
                </div>

                <div className="remove-item">
                 <i className="fas fa-trash-alt remove" onClick={()=>{
                     removeFromCart(cartItem.id);
                 }}></i>
                </div>

         </div>
         <hr />

                               </> )          
          })
                            }
                           

                        </Scrollbars>
                    </div>
                </div>
            :""}

                <div className="card-total">
                    <h3>Cart Total : <span>{cartTotal}</span></h3>
                    {cartItems.length>0?<NavLink to="/dynamicdukan/trackorder" className="place-order-btn">Place Order</NavLink>:""}
                </div>
        </section>
  
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
     adjustQty: (id, value) => dispatch(adjustQty(id, value)),
      removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
  };


 export default connect(null, mapDispatchToProps) (Cart);
