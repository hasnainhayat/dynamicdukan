import products from '../../logic/products';

const initialState={
    products,
    cart:[],
}
const shoppingReducer=(state=initialState,action)=>{
 
switch(action.type){
    case "addToCart":

      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      console.log(state.cart);
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1,totalPrice:item.price+item.totalPrice}
                : item
            )
          : [...state.cart, { ...item, qty: 1 ,totalPrice:item.price}],
          
        
      };
          //Remove from Cart
          case "removeFromCart":
            return {
              ...state,
              cart: state.cart.filter((product) => product.id !== action.payload.id),
            };
          case "adjustQty":
            return {
              ...state,
              cart: state.cart.map((product) =>
                product.id === action.payload.id
                  ? { ...product, qty: +action.payload.qty + product.qty,totalPrice:+product.price*(action.payload.qty + product.qty)}
                  : product
                  
              ),
              
            };
    default:
        return state;
}
}
export default shoppingReducer;